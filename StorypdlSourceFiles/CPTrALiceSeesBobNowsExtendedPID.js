// CPTrALiceSeesBobNowsExtendedPID

const pathscaling =50;
const speedscaling =400;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(800, 680);
	worldlineButton = new CreateCheckButton(400-40, 600-38,"see Bob's worldline",false);
	sametimeButton = new CreateCheckButton(20, 600,"The line of Bob's 'now', seen by Alice         ",false);
	earliertimeButton = new CreateCheckButton(320, 600,"Earlier 'nows'",false);
	latertimeButton = new CreateCheckButton(520, 600,"Later 'nows'",false);

	setLHmirror = new CreateControlStripHorizontalPositive();
	setLHmirror.create(708,80+448-50);
	setRHmirror = new CreateControlStripHorizontalPositive();
	setRHmirror.create(28,80+448-50);
	
	
	setspeed = new CreateControlStripHorizontal();
	setspeed.create(380+20,80+448);

	setmorenows = new CreateControlStripHorizontalPositive();
	setmorenows.create(28,80+448+100+21);
	
	
}

function draw(){
  background(CWHITE);
  worldlineButton.drawButton();
  sametimeButton.drawButton();
  latertimeButton.drawButton();
  earliertimeButton.drawButton();
  
	let theLHmirror=createVector(setLHmirror.getValues().xSet,setLHmirror.getValues().ySet);
	let toLHmirrorpath = -theLHmirror.x*pathscaling;
	let theRHmirror=createVector(setRHmirror.getValues().xSet,setRHmirror.getValues().ySet);
	let toRHmirrorpath = -theRHmirror.x*pathscaling;

	let thespeed=createVector(setspeed.getValues().xSet,setspeed.getValues().ySet);
	let relspeed = -thespeed.x*speedscaling;
	
	let themorenows=createVector(setmorenows.getValues().xSet,setmorenows.getValues().ySet);
	let lineextension = -themorenows.x*200;
   
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
		
	var deltay = toLHmirrorpath/sqrt(2)-toRHmirrorpath/sqrt(2);
	var deltax = toLHmirrorpath/sqrt(2)+toRHmirrorpath/sqrt(2);
	var hyp = sqrt((sq(deltay)+sq(deltax)));
	
	if(worldlineButton.buttonisChecked){
		stroke(CPOVBOB);
		strokeWeight(2);
		line(0, 0, relspeed, -500)
		}
		
	if(sametimeButton.buttonisChecked){
	stroke(CPOVBOB);
	strokeWeight(4);
	line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE);
		line(-(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE-lineextension*deltax/hyp, -(toRHmirrorpath/sqrt(2)*PXSCALE)+lineextension*deltay/hyp);
			line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, (toLHmirrorpath/sqrt(2))*PXSCALE+lineextension*deltax/hyp, -(toLHmirrorpath/sqrt(2)*PXSCALE)-lineextension*deltay/hyp);
			}
	
	if (earliertimeButton.buttonisChecked && sametimeButton.buttonisChecked){
		stroke(CPOVBOB);
		strokeWeight(3);
		push();
for (i = 0; i < 3; i++) {
		rotate((atan2(deltay, -deltax)+PI/2));
		translate(-50, 0);
		rotate(-(atan2(deltay, -deltax)+PI/2));
		line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE);
		line(-(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE-lineextension*deltax/hyp, -(toRHmirrorpath/sqrt(2)*PXSCALE)+lineextension*deltay/hyp);
			line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, (toLHmirrorpath/sqrt(2))*PXSCALE+lineextension*deltax/hyp, -(toLHmirrorpath/sqrt(2)*PXSCALE)-lineextension*deltay/hyp);
			}
		pop();	
	}
	
	if (latertimeButton.buttonisChecked && sametimeButton.buttonisChecked){
		stroke(CPOVBOB);
		strokeWeight(3);
		push();
	for (i = 0; i < 4; i++) {
 		rotate((atan2(deltay, -deltax)+PI/2));
 		translate(50, 0);
 		rotate(-(atan2(deltay, -deltax)+PI/2));
		line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE);
		line(-(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE-lineextension*deltax/hyp, -(toRHmirrorpath/sqrt(2)*PXSCALE)+lineextension*deltay/hyp);
		line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, (toLHmirrorpath/sqrt(2))*PXSCALE+lineextension*deltax/hyp, -(toLHmirrorpath/sqrt(2)*PXSCALE)-lineextension*deltay/hyp);
			}
	}
		pop();	
	
	pop();
	
	push();
		translate(40, 200);
		drawPoV("AliceRight");
	pop();
	
	placeWordsFrame("Set trip time to left hand mirror", 20, 94+448-50, 100, 70);
	placeWordsFrame("Set trip time to right hand mirror", 700, 94+448-50, 100, 70);
	placeWordsFrame("Set Bob's velocity", 372-32+20, 94+448, 180, 30);
	placeWordsFrame("extend line of nows", 372-32-236, 94+448+100-4, 160, 30);
	

	
  placeTitleBold("How Alice sees Bob's 'nows'")
}


function mouseReleased(){
	worldlineButton.changeState();
	sametimeButton.changeState();
	latertimeButton.changeState();
	earliertimeButton.changeState();
	}
	
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
