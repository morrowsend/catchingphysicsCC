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

    activitySet=new createSliderDivider(40,500,100,15,0,[0.7],false);
    numberSet=new createSliderDivider(200,500,100,15,4,[0.2],false);
    qualitySet=new createSliderDivider(350,500,100,15,1,[0.5],false);
	powerbeambutton = new CreateCheckButton(477,60, "power in beam",false);
	powerabsorberbutton = new CreateCheckButton(629,60, "power dissipated",false);

}

function draw() {
    background(CWHITE);
	powerbeambutton.drawButton();
	powerabsorberbutton.drawButton();

    numberSet.draw();
    placeWords("set number\nof absorbers\nin beam", 230, 510);
    activitySet.draw();
    placeWords("set activity", 70, 510);
    qualitySet.draw();
    placeWords("good absorber", 530-150, 510);
    placeWords("poor absorber", 530-150, 605);

    var numberofabsorbers = (numberSet.getValue()*5).toFixed(0);
    var activity = (activitySet.getValue())*12;
    var quality = absorberQuality[(qualitySet.getValue())*2][0];
    var fracabs = absorberQuality[(qualitySet.getValue())*2][1];
    console.log(fracabs);

    push();
		translate(80, 200);
		drawTransducer(CLIGHT, 0);
	pop();

	push()
	translate(150, 200);
	for (i = 1; i <= numberofabsorbers; i++) {
		drawAbsorber(quality, 60, 80);
		translate(120,0)
		push();
		translate(-30, 180);
		if(powerbeambutton.buttonisChecked){
			showPower((activity*pow(fracabs,i)));
		}
		push();
			translate(0, 100);
			showQuantity(activity*pow(fracabs,i)*.8, CACTIVITY,"");
		pop();

		var dissipatedpower = (activity*pow(fracabs,i-1)-activity*pow(fracabs,i));
		var nowpower =activity*pow(fracabs,i);
		translate(-60, -activity*pow(fracabs,i)*PXSCALE);
		if(powerabsorberbutton.buttonisChecked){
			showPower(dissipatedpower);
		}
	pop();
				}
			translate(0,-60);
	for (i = 0; i < 5-numberofabsorbers; i++) {
				drawAbsorber(quality, 60, 80);
		translate(120,0)
		push();
		translate(-30, 240);
		if(powerbeambutton.buttonisChecked){
			showPower(nowpower);
		}
		push();
			translate(0, 100);
			showQuantity(nowpower*.8, CACTIVITY,"");
		pop();
	pop();
				}
	pop();

	if (numberofabsorbers==0){
	push();
	translate(120, 380);
	for (i = 0; i < 5; i++) {
	translate(120, 0)
		showPower(activity);
		push();
		translate(0, 100);
		showQuantity(activity*.8, CACTIVITY,"");
		pop();
				}
				pop();
	}



	push();
		translate(122, 380);
		showPower(activity);
		translate(0, 100);
		showQuantity(activity*.8, CACTIVITY,"");
	pop();

  placeTitleBold("Adding absorbers: fractional decay");
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





