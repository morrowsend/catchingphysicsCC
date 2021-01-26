// WvMultiMimicryDelayTriangleUpAndDownPID


var stateof=0;
var runtime=0;
const maxDelay=10;
// const numbermimics = 20;
const mimicoffset=40;
const maxamplitude=22;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(950, 400);
//     createCanvas(displayWidth, 400);
    
    controlbutton=new CreateControlButton(20,350,60,30);
    mimicbutton = new CreateCheckButton(130,350,"show mimics",false);
    amplitudeSet=new CreateControlStripVerticalPositive();
    frequencySet=new CreateControlStripVerticalPositive();
    delaysetter=new CreateControlStripHorizontalPositive();
    
    amplitudeSet.create(20,170);
    frequencySet.create(20,280);
    delaysetter.create(183,330);

}

function draw() {
    background(CWHITE);
    
    
    var theamplitude = amplitudeSet.getValues().ySet*maxamplitude;
    var thefrequency = frequencySet.getValues().ySet*.1;
    mimicbutton.drawButton();
    controlbutton.drawButton();
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }

    var thedelay = -delaysetter.getValues().xSet*maxDelay;
    
    const numbermimics = floor((displayWidth-130)/mimicoffset);
    
    placeWords("set source\nfrequency",40,268);    
	placeWords("set source\namplitude",40,158);
	placeWords("set delay in imitating the neighbour on the left, and therefore imitating the source",263,335);
    
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
            push();
				translate(130,200);
					showDisplacement((theamplitude/PI),0, CIDEABLUE);
				translate(mimicoffset/2, 130);
				showDuration(thedelay, maxDelay);
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
			translate(130,200);
			showDisplacement((theamplitude/PI)*asin(sin(PI*thefrequency*runtime)),0, CIDEABLUE);
			translate(mimicoffset/2, 130);
			showDuration(thedelay, maxDelay);
			translate(-mimicoffset/2, -130);
			if (mimicbutton.buttonisChecked){
				for (i = 1; i < numbermimics; i++) {
					translate(mimicoffset,0);
					showDisplacement((theamplitude/PI)*asin(sin(PI*thefrequency*(runtime-i*thedelay))), 0, CIDEAGREEN);
				}
			}
		pop();
    }
    
   
  placeTitleBold("Several mimics of up-and-down motions: imitate the source after a distance-dependent delay");  
}

function mouseReleased(){
	controlbutton.checkPressed();
	mimicbutton.changeState();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
