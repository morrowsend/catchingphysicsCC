// {CPRmSineToAndFroPID}{950}{400}



var stateof=0;
var runtime=0;
const maxDelay=10;
const numbermimics = 20;
const mimicoffset=40;
const maxamplitude=3;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(950, 400);

    controlbutton=new CreateControlButton(20,350,60,30);
    mimicbutton = new CreateCheckButton(130,350,"show mimic",false);
    barsbutton = new CreateCheckButton(263,350,"bars only",false);
    amplitudeSet=new CreateControlStripVerticalPositive();
    frequencySet=new CreateControlStripVerticalPositive();
    delaysetter=new CreateControlStripHorizontalPositive();

    amplitudeSet.create(20,170);
    frequencySet.create(20,280);
    delaysetter.create(183,330);

}

function draw() {
    background(CWHITE);
    mimicbutton.drawButton();
    barsbutton.drawButton();
    controlbutton.drawButton();

    var theamplitude = amplitudeSet.getValues().ySet*maxamplitude;
    var thefrequency = frequencySet.getValues().ySet*.1;

    var thedelay = -delaysetter.getValues().xSet*maxDelay;


    placeWords("set source\nfrequency",40,268);
	placeWords("set source\namplitude",40,158);
	placeWords("set delay in imitating the neighbour on the left, and therefore imitating the source",263,335);

	if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }

    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
            push();
				translate(130,200);
				if (barsbutton.buttonisChecked){
					showLongitudinalWavedDsplacement(theamplitude,CIDEABLUE);
				} else{
					showDisplacement(theamplitude, 90, CIDEABLUE);
				}
				translate(mimicoffset/2, 130);
				showDuration(thedelay, maxDelay);
			pop();
            resetVariables();

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
			translate(130,200);
			if (barsbutton.buttonisChecked){
				showLongitudinalWavedDsplacement(theamplitude*sin(thefrequency*runtime), CIDEABLUE);
			}else{
				showDisplacement(theamplitude*sin(thefrequency*runtime),90, CIDEABLUE);
			}
			translate(mimicoffset/2, 130);
			showDuration(thedelay, maxDelay);
			translate(-mimicoffset/2, -130);
			if (mimicbutton.buttonisChecked){
				for (i = 1; i < numbermimics; i++) {
					translate(mimicoffset,0);
					if (barsbutton.buttonisChecked){
						showLongitudinalWavedDsplacement(theamplitude*sin(thefrequency*(runtime-i*thedelay)), CIDEAGREEN);
					}else{
						showDisplacement(theamplitude*sin(thefrequency*(runtime-i*thedelay)), 90, CIDEAGREEN);
					}
				}
			}
		pop();
    }


  placeTitleBold("Longitudinal waves: to-and-fro mimics");
}


function whatshappening(){
    stateof++;
    stateof=stateof%3;
}

function resetVariables(){
    runtime=0;
}

function mouseReleased(){
	controlbutton.checkPressed();
	barsbutton.changeState();
	mimicbutton.changeState();
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

