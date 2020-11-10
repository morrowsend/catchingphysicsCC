// {CPRmFractionalDecayStepsPID}{710}{490}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(710,490);

    activitySet=new IanSlider(40,500-130,100,15,0,[0.7],false);
    numberSet=new IanSlider(200,500-130,100,15,8,[0.1],false);
    decaySet=new IanSlider(500-150,500-130,100,15,0,[0.1],false);
}

function draw() {
    background(cWhite);

    numberSet.draw();
    words("set intervals", 230, 510-130);
    activitySet.draw();
    words("set activity", 70, 510-130);
    decaySet.draw();
    words("high decay rate", 530-150, 510-130);
    words("low decay rate", 530-150, 605-130);

    var numberofintervals = (numberSet.getValue()*10).toFixed(0);
    var activity = (activitySet.getValue())*20;
    var fracabs = (1-decaySet.getValue());

	push()
		translate(0, 280);
		for (i = 0; i <= numberofintervals; i++) {
			translate(60,0)
			quantity(activity*pow(fracabs,i), cactivity,"");
			stroke(cdeviceGrey);
			strokeWeight(0.5);
			line(0,35,0,45);
			if (i != numberofintervals){
				push();
				translate(30,40);
				duration(20, 30);
				pop();
			}
		}
	pop();

  titleBold("Adding intervals: fractional decay");
}

function mousePressed(){
        numberSet.mousePressed();
        activitySet.mousePressed();
        decaySet.mousePressed();
	}
function mouseReleased(){
        numberSet.mouseReleased();
        activitySet.mouseReleased();
        decaySet.mouseReleased();
    }

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}





