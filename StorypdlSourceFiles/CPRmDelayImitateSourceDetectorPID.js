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
    controlbutton=new controlButton(20,350,60,30);

    amplitudeSet=new controlStripVerticalPositive();
    frequencySet=new controlStripVerticalPositive();
    delaysetter=new controlStripHorizontalPositive();

    amplitudeSet.create(20,170);
    frequencySet.create(20,280);
    delaysetter.create(363,310);
}

function draw() {
    background(cWhite);


    var theamplitude = amplitudeSet.getValues().ySet*maxamplitude;
    var thefrequency = frequencySet.getValues().ySet*.1;
    controlbutton.drawButton();
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }
    var thedelay = -delaysetter.getValues().xSet*maxDelay;


    words("set source\nfrequency",40,268);
	words("set source\namplitude",40,158);
	words("set delay",443,315);
	words("delay\nbefore\nimitation",285,340);

    switch(stateof){
        case 0:
//            ready to go
            words("go",28,height-32);
			runtime=0;
            push();
				translate(180,200);
				transducer(clight, 0);
					displacement(theamplitude, 0, cideaBlue);
				translate(120, 110);
				duration(thedelay, maxDelay);
				translate(-120, -110);
			translate(mimicoffset,0);
			transducer(cBlack, 180);
			pop();

            break;
        case 1:
//            running
            words("pause",28,height-32);
            runtime++;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            break;
                      }




    if (runtime!=0){
		push();
			translate(180,200);
			transducer(clight, 0);
			displacement(theamplitude*sin(thefrequency*runtime),0, cideaBlue);
			translate(120, 110);
			duration(thedelay, maxDelay);

			translate(-120, -110);
			translate(mimicoffset,0);
			transducer(cBlack, 180);
			displacement(theamplitude*sin(thefrequency*(runtime-thedelay)), 0, cideaGreen);
		pop();
    }
  titleBold("Detector mimics source after a delay");
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

