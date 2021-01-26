// {CPStParabolicMotionPID}{800}{600}

var stateof=0;
var runtime=0;
const scaleFactorSpeed =4;
const scaleFactorHeight =-450;
const scaleFactorForce =9;
const timeFudge =0.05;


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

    controllerheight = new CreateControlStripVerticalPositive();
    controllerheight.create(30,128);
    controllerspeed = new CreateControlStripVerticalPositive();
    controllerspeed.create(30,210);
    controllergravity = new CreateControlStripVerticalPositive();
    controllergravity.create(30,292);
}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    imageMode(CENTER);
var theheight =  createVector(controllerheight.getValues().xSet,controllerheight.getValues().ySet).mult(scaleFactorHeight);

var thespeed =  createVector(controllerspeed.getValues().xSet,controllerspeed.getValues().ySet).mult(scaleFactorSpeed);

var thegravity =  createVector(controllergravity.getValues().xSet,controllergravity.getValues().ySet).mult(scaleFactorForce);

if (controlbutton.buttonwasPressed){
  stateof++;
  stateof=stateof%3;
  controlbutton.buttonwasPressed=false;
}

var forcemagnitude = thegravity.mag();


    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			placeWords("set\nheight",52,80);
			placeWords("set\nspeed",52,162);
			placeWords("set\ngravity",52,162+82);
            runtime=0;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 58, 90, 250);
			runtime++;

            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 58, 90, 250);
            break;
                      }

    push();
		translate(150,552);
		translate(thespeed.mag()*runtime, -theheight.mag()+0.002*forcemagnitude*runtime*runtime)
		image(ranaStopped,0,0);
		showForce(forcemagnitude, 180, CGRAVITY);
		translate(-thespeed.mag()/2*PIXELSCALING, -32);
		showVelocity(thespeed.mag(), 90, CPOVBOB);
    pop();

	placeTitleBold("Thrown falling");
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

