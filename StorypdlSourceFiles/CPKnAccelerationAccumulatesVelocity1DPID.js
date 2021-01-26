// KnAccelerationAccumulatesVelocity1DPID

var stateof=0;
var runtime=0;
var velocityNow=0;
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
    
    velocitySet=new createSliderDivider(40,220,100,15,0,[0.7],false);
    accelerationSet=new createSliderDivider(200,220,100,15,0,[0.7],false);

}

function draw() {
    background(CWHITE);
    
    accelerationSet.draw();
    controlbutton.drawButton();
    
    var initialVelocity = (velocitySet.getValue()-0.5)*PXSCALE;
    var accelerationAccumlates = (accelerationSet.getValue(0)-0.5)*2;
    
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
            velocitySet.draw();
            placeWords("set\ninitial\nvelocity",70,230);
            velocityNow=initialVelocity;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            runtime++;
            velocityNow+=accelerationAccumlates*.05;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            break;
                      }
    
    
    push();
        translate(300,120);
        drawPoVObject("Alice");
        push();
            translate((-velocityNow*50),32);
            showVelocity(velocityNow*PXSCALE,90,CCONCYAN);
        pop();
        push();
            translate((-accelerationAccumlates*50),-32);
            showAcceleration(accelerationAccumlates*PXSCALE,90,CACCELERATION);
        pop();
    pop();
    
    push();
    translate(40,120);
    drawPoV("CharlieRight");
    pop();
    
        


    placeWords("set\nacceleration",230,230);
  placeTitleBold("set acceleration and watch velocity accumulate");  
}

function mousePressed(){
        velocitySet.mousePressed();
        accelerationSet.mousePressed();

	}
function mouseReleased(){
        velocitySet.mouseReleased();
        accelerationSet.mouseReleased();
        controlbutton.checkPressed();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
