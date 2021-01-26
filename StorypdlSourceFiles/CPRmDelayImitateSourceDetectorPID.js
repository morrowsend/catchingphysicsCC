// {CPRmDelayImitateSourceDetectorPID}{800}{400}

var stateof=0;
var runtime=0;
const maxDelay=30;
const mimicoffset=400;
const maxamplitude=9;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 400);
    controlbutton=new CreateControlButton(20,350,60,30);

    amplitudeSet=new CreateControlStripVerticalPositive();
    frequencySet=new CreateControlStripVerticalPositive();
    delaysetter=new CreateControlStripHorizontalPositive();

    amplitudeSet.create(20,170);
    frequencySet.create(20,280);
    delaysetter.create(363,310);
}

function draw() {
    background(CWHITE);


    var theamplitude = amplitudeSet.getValues().ySet*maxamplitude;
    var thefrequency = frequencySet.getValues().ySet*.1;
    controlbutton.drawButton();
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }
    var thedelay = -delaysetter.getValues().xSet*maxDelay;


    placeWords("set source\nfrequency",40,268);
	placeWords("set source\namplitude",40,158);
	placeWords("set delay",443,315);
	placeWords("delay\nbefore\nimitation",285,340);

    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
            push();
				translate(180,200);
				drawTransducer(CLIGHT, 0);
					showDisplacement(theamplitude, 0, CIDEABLUE);
				translate(120, 110);
				showDuration(thedelay, maxDelay);
				translate(-120, -110);
			translate(mimicoffset,0);
			drawTransducer(CBLACK, 180);
			pop();

            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            runtime++;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            break;
                      }




    if (runtime!=0){
		push();
			translate(180,200);
			drawTransducer(CLIGHT, 0);
			showDisplacement(theamplitude*sin(thefrequency*runtime),0, CIDEABLUE);
			translate(120, 110);
			showDuration(thedelay, maxDelay);

			translate(-120, -110);
			translate(mimicoffset,0);
			drawTransducer(CBLACK, 180);
			showDisplacement(theamplitude*sin(thefrequency*(runtime-thedelay)), 0, CIDEAGREEN);
		pop();
    }
  placeTitleBold("Detector mimics source after a delay");
}


function mouseReleased(){
	controlbutton.checkPressed();
}


function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

