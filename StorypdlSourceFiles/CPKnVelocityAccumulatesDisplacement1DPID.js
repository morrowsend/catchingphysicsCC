// KnVelocityAccumulatesDisplacement1DPID


var stateof=0;
var runtime=0;
var objectLocation=0;
var controlbutton;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 400);
    controlbutton=new CreateControlButton(20,350,60,30);
    displacmentSet=new createSliderDivider(40,220,100,15,0,[0.7],false);
    velocitySet=new createSliderDivider(200,220,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);
    
    velocitySet.draw();
    controlbutton.drawButton();
    var initialdisplacement = (displacmentSet.getValue()-0.5)*200;
    var velocityAccumlates = (velocitySet.getValue(0)-0.5)*2;
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
            displacmentSet.draw();
            placeWords("set\ninitial\ndisplacement",70,230);
            objectLocation=initialdisplacement;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            runtime++;
            objectLocation+=velocityAccumlates*5;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            break;
                      }
    
    push();
    translate(300,170);
    showDisplacement(objectLocation/10,90,CPOVCHARLIE);
    pop();
    push();
    translate(300+objectLocation,120);
    drawPoVObject("Alice");
    translate((-velocityAccumlates*50),32);
    showVelocity(velocityAccumlates*PXSCALE,90,CPOVCHARLIE);
    pop();
    
    push();
    translate(40,120);
    drawPoV("CharlieRight");
    pop();
        


    placeWords("set\nvelocity",230,230);
  placeTitleBold("set velocity and watch displacement accumulate");  
}

function mousePressed(){
	displacmentSet.mousePressed();
	velocitySet.mousePressed();
	}
function mouseReleased(){
	displacmentSet.mouseReleased();
	velocitySet.mouseReleased();
	controlbutton.checkPressed();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

