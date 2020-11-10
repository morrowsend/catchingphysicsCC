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
  powershow= new checkButton(710,351,"power in beam",true);
  deviceshow= new checkButton(710,211,"devices and pathways",true);
}

function draw(){
 background(cWhite);
 
 powershow.drawButton();
 deviceshow.drawButton();
 
 push();
		translate(130, 120);
		beamC(0,0, 480, 0, clight);
		transducer(clight, 0);
		translate(480, 0);
		transducer(cBlack, 180);
		translate(-170-108, 0);
		absorber("good", 60, 80);
	pop();
	
 if (deviceshow.buttonisChecked){  
   push();
			translate(102,250);
			device("one");
			push();
				translate(-83,-50);
				powerPathway("electrical");
			pop();
			push();
				translate(28,15);
				powerPathway("radiation");
			pop();
  pop();
  
  push();
			translate(363,250);
			device("two");
			push();
				translate(-83,-50);
				powerPathway("radiation");
			pop();
			push();
				translate(28,-10);
				powerPathway("radiation");
			pop();
			push();
				translate(28,15);
				powerPathway("particles");
			pop();
	pop();
  
  push();
			translate(638,250);
			device("one");
			push();
				translate(-83,-50);
				powerPathway("radiation");
			pop();
			push();
				translate(28,15);
				powerPathway("particles");
			pop();
  pop();
 } 
  
  if (powershow.buttonisChecked){
	  push();
			translate(161, 380);
			power(6);
			translate(151, 0);
			power(6);
			translate(109, 0);
			power(4);
			translate(165, 0);
			power(4);
		pop();
}
   
titleBold("transmission, absorption, power")

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
  
