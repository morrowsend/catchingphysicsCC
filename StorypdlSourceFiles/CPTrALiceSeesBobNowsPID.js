// filename: CPTrALiceSeesBobNowsPID

const pathscaling =60;
const speedscaling =400;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(800, 640);
	worldlineButton = new CreateCheckButton(100, 600,"see Bob's worldline",false);
	sametimeButton = new CreateCheckButton(300, 600,"The line of Bob's 'nows', seen by Alice         ",false);

	setLHmirror = new CreateControlStripHorizontalPositive();
	setLHmirror.create(708,80+448);
	setRHmirror = new CreateControlStripHorizontalPositive();
	setRHmirror.create(28,80+448);
	
	setspeed = new CreateControlStripHorizontal();
	setspeed.create(380,80+448);

}

function draw(){
  background(CWHITE);
  worldlineButton.drawButton();
  sametimeButton.drawButton();
  
	let theLHmirror=createVector(setLHmirror.getValues().xSet,setLHmirror.getValues().ySet);
	let toLHmirrorpath = -theLHmirror.x*pathscaling;
	let theRHmirror=createVector(setRHmirror.getValues().xSet,setRHmirror.getValues().ySet);
	let toRHmirrorpath = -theRHmirror.x*pathscaling;

	let thespeed=createVector(setspeed.getValues().xSet,setspeed.getValues().ySet);
	let relspeed = -thespeed.x*speedscaling;
   
  push();
		translate(400, 500)
		ellipse(0, 0, 10, 10);
		showRay(0, 0, toLHmirrorpath, 45);
		if (toLHmirrorpath>0){
			showRay((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE,65,-45);
			push();
		translate((toLHmirrorpath/sqrt(2))*PXSCALE,-((toLHmirrorpath/sqrt(2)))*PXSCALE);
		drawReflector("good", 0, 20);
	pop();
				}
		showRay(0, 0, toRHmirrorpath, -45);
		if (toRHmirrorpath>0){
			showRay((-toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE,65,45);
			push();
		translate(-(toRHmirrorpath/sqrt(2))*PXSCALE,-((toRHmirrorpath/sqrt(2)))*PXSCALE);
		drawReflector("good", 180, 20);
	pop();
		}
	if(worldlineButton.buttonisChecked){
	stroke(CPOVBOB);
	strokeWeight(2);
 line(0, 0, relspeed, -500)
		}
		
	if(sametimeButton.buttonisChecked){
	stroke(CPOVBOB);
	strokeWeight(4);
line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE);
		}
	pop();
	
	push();
		translate(40, 200);
		drawPoV("AliceRight");
	pop();
	
	placeWordsFrame("Set trip time to left hand mirror", 20, 94+448, 100, 70);
	placeWordsFrame("Set trip time to right hand mirror", 700, 94+448, 100, 70);
	placeWordsFrame("Set Bob's velocity", 372-32, 94+448, 100, 70);
	
  placeTitleBold("How Alice sees Bob's 'nows'")
}

function mouseReleased(){
	worldlineButton.changeState();
	sametimeButton.changeState();
	}
	
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
