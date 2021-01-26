// CPTrALiceSeesBobNowsExtendedPathsPID

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
	worldlineBobButton = new CreateCheckButton(360, 562,"see Bob's worldline",false);
	worldlineAliceButton = new CreateCheckButton(20, 562,"see Alice's worldline",false);
	sametimeButton = new CreateCheckButton(20, 600,"The line of Bob's 'now', seen by Alice         ",false);
	earliertimeButton = new CreateCheckButton(318, 600,"an earlier 'now'",false);
	latertimeButton = new CreateCheckButton(468, 600,"later 'nows'",false);

	setLHmirror = new CreateControlStripHorizontalPositive();
	setLHmirror.create(470,478);
	setRHmirror = new CreateControlStripHorizontalPositive();
	setRHmirror.create(257,478);
	
	
	setspeed = new CreateControlStripHorizontal();
	setspeed.create(400,528);

	setmorenows = new CreateControlStripHorizontalPositive();
	setmorenows.create(610,614);
	
	
}

function draw(){
  background(CWHITE);
  worldlineBobButton.drawButton();
  worldlineAliceButton.drawButton();
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
	let lineextension = -themorenows.x*300;
   
  push();
		translate(400, 470)
		ellipse(0, 0, 10, 10);
		showPath(0, 0, toLHmirrorpath, 45,CIDEAGREEN);
		if (toLHmirrorpath>0){
			showPath((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE,65,-45,CIDEAGREEN);
			push();
				translate((toLHmirrorpath/sqrt(2))*PXSCALE,-((toLHmirrorpath/sqrt(2)))*PXSCALE);
				drawWaypoint(CIDEAGREEN);
			pop();
				}
		showPath(0, 0, toRHmirrorpath, -45,CIDEARED);
		if (toRHmirrorpath>0){
			showPath((-toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE,65,45,CIDEARED);
			push();
				translate(-(toRHmirrorpath/sqrt(2))*PXSCALE,-((toRHmirrorpath/sqrt(2)))*PXSCALE);
				drawWaypoint(CIDEARED);
// 				drawReflector("good", 180, 20);
			pop();
		}
		
	var deltay = toLHmirrorpath/sqrt(2)-toRHmirrorpath/sqrt(2);
	var deltax = toLHmirrorpath/sqrt(2)+toRHmirrorpath/sqrt(2);
	var hyp = sqrt((sq(deltay)+sq(deltax)));
	
	if(worldlineBobButton.buttonisChecked){
		stroke(CPOVBOB);
		strokeWeight(2);
		line(0, 0, relspeed, -500);
		}
		
	if(worldlineAliceButton.buttonisChecked){
		stroke(CPOVALICE);
		strokeWeight(2);
		line(-352, 0, -352, -500);
		push();
		translate(-352, 15);
		rotate(-PI/2)
		drawPoVEye('AliceRight');
		pop();
		}
		
		push();
			rotate((-atan2(500,relspeed)));
			translate(-15, 0);
			drawPoVEye("BobRight");
		pop();
		
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
		rotate((atan2(deltay, -deltax)+PI/2));
		translate(-50, 0);
		rotate(-(atan2(deltay, -deltax)+PI/2));
		line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE);
		line(-(toRHmirrorpath/sqrt(2))*PXSCALE,-(toRHmirrorpath/sqrt(2))*PXSCALE, -(toRHmirrorpath/sqrt(2))*PXSCALE-lineextension*deltax/hyp, -(toRHmirrorpath/sqrt(2)*PXSCALE)+lineextension*deltay/hyp);
			line((toLHmirrorpath/sqrt(2))*PXSCALE,-(toLHmirrorpath/sqrt(2))*PXSCALE, (toLHmirrorpath/sqrt(2))*PXSCALE+lineextension*deltax/hyp, -(toLHmirrorpath/sqrt(2)*PXSCALE)-lineextension*deltay/hyp);
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
	
	placeWordsFrame("trip time to waypoint", 259, 492, 100, 70);
	placeWordsFrame("trip time to waypoint", 472, 492, 100, 70);
	placeWordsFrame("Bob's velocity", 360, 542, 180, 30);
	placeWordsFrame("extend line of nows", 610, 630, 120, 70);
	
  placeTitleBold("How Alice sees Bob's 'nows'")
}


function mouseReleased(){
	worldlineBobButton.changeState();
	worldlineAliceButton.changeState();
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
