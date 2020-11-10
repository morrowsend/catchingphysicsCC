// {CPRmFractionalAbsorbtionSlicesStepsPID}{800}{620}

const absorberQuality=[["poor",0.95],["good",0.85],["better",0.65]];




function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800,620);

    activitySet=new IanSlider(40,500,100,15,0,[0.7],false);
    numberSet=new IanSlider(200,500,100,15,4,[0.2],false);
    qualitySet=new IanSlider(350,500,100,15,1,[0.5],false);
	powerbeambutton = new checkButton(477,60, "power in beam",false);
	powerabsorberbutton = new checkButton(629,60, "power dissipated",false);

}

function draw() {
    background(cWhite);
	powerbeambutton.drawButton();
	powerabsorberbutton.drawButton();

    numberSet.draw();
    words("set number\nof absorbers\nin beam", 230, 510);
    activitySet.draw();
    words("set activity", 70, 510);
    qualitySet.draw();
    words("good absorber", 530-150, 510);
    words("poor absorber", 530-150, 605);

    var numberofabsorbers = (numberSet.getValue()*5).toFixed(0);
    var activity = (activitySet.getValue())*12;
    var quality = absorberQuality[(qualitySet.getValue())*2][0];
    var fracabs = absorberQuality[(qualitySet.getValue())*2][1];
    console.log(fracabs);

    push();
		translate(80, 200);
		transducer(clight, 0);
	pop();

	push()
	translate(150, 200);
	for (i = 1; i <= numberofabsorbers; i++) {
		absorber(quality, 60, 80);
		translate(120,0)
		push();
		translate(-30, 180);
		if(powerbeambutton.buttonisChecked){
			power((activity*pow(fracabs,i)));
		}
		push();
			translate(0, 100);
			quantity(activity*pow(fracabs,i)*.8, cactivity,"");
		pop();

		var dissipatedpower = (activity*pow(fracabs,i-1)-activity*pow(fracabs,i));
		var nowpower =activity*pow(fracabs,i);
		translate(-60, -activity*pow(fracabs,i)*pxscale);
		if(powerabsorberbutton.buttonisChecked){
			power(dissipatedpower);
		}
	pop();
				}
			translate(0,-60);
	for (i = 0; i < 5-numberofabsorbers; i++) {
				absorber(quality, 60, 80);
		translate(120,0)
		push();
		translate(-30, 240);
		if(powerbeambutton.buttonisChecked){
			power(nowpower);
		}
		push();
			translate(0, 100);
			quantity(nowpower*.8, cactivity,"");
		pop();
	pop();
				}
	pop();

	if (numberofabsorbers==0){
	push();
	translate(120, 380);
	for (i = 0; i < 5; i++) {
	translate(120, 0)
		power(activity);
		push();
		translate(0, 100);
		quantity(activity*.8, cactivity,"");
		pop();
				}
				pop();
	}



	push();
		translate(122, 380);
		power(activity);
		translate(0, 100);
		quantity(activity*.8, cactivity,"");
	pop();

  titleBold("Adding absorbers: fractional decay");
}

function mousePressed(){
        numberSet.mousePressed();
        activitySet.mousePressed();
        qualitySet.mousePressed();
	}
function mouseReleased(){
        numberSet.mouseReleased();
        activitySet.mouseReleased();
        qualitySet.mouseReleased();
		powerbeambutton.changeState();
		powerabsorberbutton.changeState();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}





