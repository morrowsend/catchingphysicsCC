// {StCircularMotionPID}{800}{600}

var stateof=0;
var runtime=0;
const scaleFactorSpeed =4;
const scaleFactorRadius =20;
const scaleFactorForce =15;
const rotationFudge =0.05;


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    ranaStopped=loadImage("../__PDLgraphics/ranawalk/ranaCurledTop.svg");
}

function setup(){
    createCanvas(800, 600);
    controlbutton=new CreateControlButton(20,550,60,30);

    controllerradius = new CreateControlStripVerticalPositive();
    controllerradius.create(60,128);

    controllerspeed = new CreateControlStripVerticalPositive();
    controllerspeed.create(60,210);

}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    imageMode(CENTER);
var theradius =  createVector(controllerradius.getValues().xSet,controllerradius.getValues().ySet).mult(scaleFactorRadius);

var thespeed =  createVector(controllerspeed.getValues().xSet,controllerspeed.getValues().ySet).mult(scaleFactorSpeed);

if (controlbutton.buttonwasPressed){
  stateof++;
  stateof=stateof%3;
  controlbutton.buttonwasPressed=false;
}

var forcemagnitude = thespeed.magSq()/theradius.mag();


    switch(stateof){
        case 0:
//            ready to go
            runtime=0;
            placeWords("go",28,height-32);
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
			runtime++;

            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 180);
            break;
                      }
  if (theradius.mag()!=0 && thespeed.mag()){
    push();
		translate(width/2,height/2);
		rotate(runtime*rotationFudge);
		showDisplacement(theradius.mag(),0,CPOVALICE);
		translate(0,-theradius.mag()*PIXELSCALING);
		image(ranaStopped,0,0);
		showForce(forcemagnitude*scaleFactorForce, 180, CFORCEBLUE);
		translate((-thespeed.mag()*PXSCALE*PXSCALE/2),-32);
		showVelocity(thespeed.mag()*PXSCALE,90,CPOVALICE);
    pop();
}

	placeWords("set\nradius",82,80);
	placeWords("set\nspeed",82,162);
	placeTitleBold("Orbiting");
}

function mouseReleased(){
  controlbutton.checkPressed();
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
}

