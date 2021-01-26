// {CPSpSMDPowerPhotonCountPID}{900}{450}

var powershow;
var countshow;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");


}

function setup(){
  createCanvas(900, 450);
  powershow= new CreateCheckButton(710,251,"power in beam",true);
  countshow= new CreateCheckButton(710,370,"photon count",true);
}

function draw(){
 background(CWHITE);

 powershow.drawButton();
 countshow.drawButton();

 push();
		translate(130, 120);
		showBeamC(0,0, 480, 0, CLIGHT);
		drawTransducer(CLIGHT, 0);
		translate(480, 0);
		drawTransducer(CBLACK, 180);
		translate(-170-108, 0);
		drawAbsorber("good", 60, 80);
	pop();

 if (countshow.buttonisChecked){
   push();
	translate(140, 400);
	showQuantity(6, CACTIVITY,"");
	placeWords("many photons\neach second", 20, -20);
	translate(425, 0);
	showQuantity(2, CACTIVITY,"");
	placeWords("few photons\neach second", 20, -20);
  pop();
 }

  if (powershow.buttonisChecked){
	  push();
			translate(161, 280);
			showPower(6);
			translate(151, 0);
			showPower(6);
			translate(109, 0);
			showPower(2);
			translate(165, 0);
			showPower(2);
		pop();
}

placeTitleBold("Brightness of beam set by number of photons")

}


function keyTyped() {
  if (key == 's') {
	saveCanvas('aSnapshot', 'png');
  }
	return false;
  }

function mouseReleased(){
	powershow.changeState();
	countshow.changeState();
}

