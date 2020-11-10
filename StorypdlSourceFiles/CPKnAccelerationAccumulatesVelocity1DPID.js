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
    
    controlbutton=new controlButton(20,350,60,30);
    
    velocitySet=new IanSlider(40,220,100,15,0,[0.7],false);
    accelerationSet=new IanSlider(200,220,100,15,0,[0.7],false);

}

function draw() {
    background(cWhite);
    
    accelerationSet.draw();
    controlbutton.drawButton();
    
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
            velocitySet.draw();
            words("set\ninitial\nvelocity",70,230);
            velocityNow=initialVelocity;
            break;
        case 1:
//            running
            words("pause",28,height-32);
            runtime++;
            velocityNow+=accelerationAccumlates*.05;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            break;
                      }
    
    
    push();
        translate(300,120);
        PoVObject("Alice");
        push();
            translate((-velocityNow*50),32);
            velocity(velocityNow*pxscale,90,cconcyan);
        pop();
        push();
            translate((-accelerationAccumlates*50),-32);
            acceleration(accelerationAccumlates*pxscale,90,cacceleration);
        pop();
    pop();
    
    push();
    translate(40,120);
    PoV("CharlieRight");
    pop();
    
        


    words("set\nacceleration",230,230);
  titleBold("set acceleration and watch velocity accumulate");  
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
