// KnAccelerationAccumulatesVelocityAccumulatesDisplacement1DPID


var stateof=0;
var runtime=0;
var velocityNow=0;
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
    
    controlbutton=new controlButton(20,350,60,30);
    
    displacmentSet=new IanSlider(40,220,100,15,0,[0.7],false);
    velocitySet=new IanSlider(200,220,100,15,0,[0.7],false);
    accelerationSet=new IanSlider(360,220,100,15,0,[0.7],false);

}

function draw() {
    background(cWhite);
    
    accelerationSet.draw();
    controlbutton.drawButton();
    var initialdisplacement = (displacmentSet.getValue()-0.5)*200;
    var initialVelocity = (velocitySet.getValue()-0.5)*pxscale;
    var accelerationAccumlates = (accelerationSet.getValue(0)-0.5)*2;
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
            words("go",28,height-32);
			runtime=0;
            displacmentSet.draw();
            words("set\ninitial\ndisplacement",70,230);
            velocitySet.draw();
            words("set\ninitial\nvelocity",230,230);
            velocityNow=initialVelocity;
            objectLocation=initialdisplacement;
            break;
        case 1:
//            running
            words("pause",28,height-32);
            runtime++;
            velocityNow+=accelerationAccumlates*.05;
            objectLocation+=velocityNow*5;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            break;
                      }
    
    
    push();
        translate(300+objectLocation,120);
        PoVObject("Bob");
        push();
            translate((-velocityNow*50),32);
            velocity(velocityNow*pxscale,90,cpovAlice);
        pop();
        push();
            translate((-accelerationAccumlates*50),-32);
            acceleration(accelerationAccumlates*pxscale,90,cacceleration);
        pop();
    pop();
    
    push();
    translate(300,170);
    displacement(objectLocation/10,90,cpovAlice);
    pop();
    
    push();
    translate(40,120);
    PoV("AliceRight");
    pop();
        


    words("set\nacceleration",390,230);
  titleBold("set acceleration and velocity, watch the accumulations");  
}

function mousePressed(){
	displacmentSet.mousePressed();
	velocitySet.mousePressed();
	accelerationSet.mousePressed();

	}
function mouseReleased(){
	displacmentSet.mouseReleased();
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

