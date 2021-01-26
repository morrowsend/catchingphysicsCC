// {CPSpSMDPathwayDevicePowerPID}{900}{450}

var powershow;
var deviceshow;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
  createCanvas(900, 450); 
  powershow= new CreateCheckButton(710,351,"power in beam",true);
  deviceshow= new CreateCheckButton(710,211,"devices and pathways",true);
}

function draw(){
 background(CWHITE);
 
 powershow.drawButton();
 deviceshow.drawButton();
 
 push();
		translate(130, 120);
		showBeamC(0,0, 480, 0, CLIGHT);
		drawTransducer(CLIGHT, 0);
		translate(480, 0);
		drawTransducer(CBLACK, 180);
		translate(-170-108, 0);
		drawAbsorber("good", 60, 80);
	pop();
	
 if (deviceshow.buttonisChecked){  
   push();
			translate(102,250);
			drawDevice("one");
			push();
				translate(-83,-50);
				drawPowerPathway("electrical");
			pop();
			push();
				translate(28,15);
				drawPowerPathway("radiation");
			pop();
  pop();
  
  push();
			translate(363,250);
			drawDevice("two");
			push();
				translate(-83,-50);
				drawPowerPathway("radiation");
			pop();
			push();
				translate(28,-10);
				drawPowerPathway("radiation");
			pop();
			push();
				translate(28,15);
				drawPowerPathway("particles");
			pop();
	pop();
  
  push();
			translate(638,250);
			drawDevice("one");
			push();
				translate(-83,-50);
				drawPowerPathway("radiation");
			pop();
			push();
				translate(28,15);
				drawPowerPathway("particles");
			pop();
  pop();
 } 
  
  if (powershow.buttonisChecked){
	  push();
			translate(161, 380);
			showPower(6);
			translate(151, 0);
			showPower(6);
			translate(109, 0);
			showPower(4);
			translate(165, 0);
			showPower(4);
		pop();
}
   
placeTitleBold("transmission, absorption, power")

}


function keyTyped() {
  if (key == 's') {
	saveCanvas('aSnapshot', 'png');
  }
	return false;
  }
  
function mouseReleased(){
	powershow.changeState();
	deviceshow.changeState();
}
  
