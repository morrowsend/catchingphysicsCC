// WvMimicrySineUpDownPID 620 400

var stateof=0;
var runtime=0;
const maxDelay=30;
const mimicoffset=200;
const maxamplitude=10;
var noclick=true;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
    romanFont= loadFont("../__support/Jost-300-Light.ttf");
    italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
    titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}

function setup(){
    createCanvas(620, 400);
    
    controlbutton=new CreateControlButton(20,350,60,30);
    mimicbutton = new CreateCheckButton(130,350,"show mimic",false);

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
    
    var thedelay = -delaysetter.getValues().xSet*maxDelay;
     mimicbutton.drawButton();
    controlbutton.drawButton();
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    placeWords("set source\nfrequency",40,268);    
	placeWords("set source\namplitude",40,158);
	placeWords("set delay",263,335);
    
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
            push();
				translate(130,200);
					showDisplacement(theamplitude, 0, CIDEABLUE);
				translate(20, 130);
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
			showDisplacement(theamplitude*sin(thefrequency*runtime),0, CIDEABLUE);
			translate(20, 130);
			showDuration(thedelay, maxDelay);
			
			translate(-20, -130);
			if (mimicbutton.buttonisChecked){
					translate(mimicoffset,0);
					showDisplacement(theamplitude*sin(thefrequency*(runtime-thedelay)), 0, CIDEAGREEN);
			}
		pop();
    }
    
   if (noclick==true){
		placeAdviceDroid(540, 240, "No vibrating without amplitude and frequency.\nSet both using the sliders, then go.", 150, 100);
	}
	
  placeTitleBold("A mimic for up-and-down motions: imitate the source after a delay");  
}

function mouseReleased(){
	controlbutton.checkPressed();
	mimicbutton.changeState();
	noclick=false;
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
