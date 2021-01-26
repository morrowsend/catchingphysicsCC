// PhCurlUpLineUpTripletInterferencePID

const sourceLocX = 150;
const sourceLocY =280;
const detectorLocX = 560;
const detectorLocY = 280;
const waypointoffset = 30;
const waypointLocTX = 320;
const waypointLocTY = 200;
const waypointLocBX = 320;
const waypointLocBY = 360;
const controllers=[];
const scaleFactorSurfaceExplore=500;
const scaleFactorSourceDetector=400;
const maxtime=1000;
contribcolours=[CCONGREEN,CCONPINK,CCONORANGE,CCONLIGHTGREEN,CCONCYAN,CCONPURPLE,CCONGRAY];



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(800, 600);
 const yloc =550;
 controllers[0]= new CreateControlPuck();
 controllers[0].create(sourceLocX,yloc);
 controllers[1]= new CreateControlStripVertical();
 controllers[1].create(60,waypointLocTY);
 controllers[3]= new CreateControlStripVertical();
 controllers[3].create(60,waypointLocBY);
 controllers[2]= new CreateControlPuck();
 controllers[2].create(detectorLocX,yloc);
 
slitsbutton = new CreateCheckButton(668, 60,"draw slits",false);

 
}

function draw() {

background(CWHITE);
	slitsbutton.drawButton();

if (slitsbutton.buttonisChecked){
		push();
			translate(320, 280);
			stroke(CBLACK);
			strokeWeight(8);
			strokeCap(SQUARE);
			line(0, -220, 0, -120);
			line(0, 220, 0, 120);
			line(0, -40, 0, 40);
		pop();
		}
		
var sourcetodectector = createVector(0,0); // not needed when there are waypoints
var sourcetowaypointT = createVector(0,0);
var sourcetowaypointTL = createVector(0,0);
var sourcetowaypointTR = createVector(0,0);
var waypointtodetectorT= createVector(0,0);
var waypointtodetectorTL = createVector(0,0);
var waypointtodetectorTR = createVector(0,0);
var sourcetowaypointB = createVector(0,0);
var sourcetowaypointBL = createVector(0,0);
var sourcetowaypointBR = createVector(0,0);
var waypointtodetectorB= createVector(0,0);
var waypointtodetectorBL = createVector(0,0);
var waypointtodetectorBR = createVector(0,0);

var sourceOffset=createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorSourceDetector);
var waypointTOffset=createVector(-controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorSurfaceExplore);
var waypointBOffset=createVector(-controllers[3].getValues().xSet,-controllers[3].getValues().ySet).mult(scaleFactorSurfaceExplore);
var dectectorOffset=createVector(controllers[2].getValues().xSet,-controllers[2].getValues().ySet).mult(scaleFactorSourceDetector);

var sourcelocation = createVector(sourceLocX,sourceLocY);
var detectorlocation = createVector(detectorLocX,detectorLocY);
var waypointlocationT = createVector(waypointLocTX,waypointLocTY);
var waypointlocationTL = createVector(waypointLocTX,waypointLocTY-waypointoffset);
var waypointlocationTR = createVector(waypointLocTX,waypointLocTY+waypointoffset);
var waypointlocationB = createVector(waypointLocBX,waypointLocBY);
var waypointlocationBL = createVector(waypointLocBX,waypointLocBY-waypointoffset);
var waypointlocationBR = createVector(waypointLocBX,waypointLocBY+waypointoffset);

sourcelocation.add(sourceOffset);
waypointlocationT.add(waypointTOffset);
waypointlocationTL.add(waypointTOffset);
waypointlocationTR.add(waypointTOffset);
waypointlocationB.add(waypointBOffset);
waypointlocationBL.add(waypointBOffset);
waypointlocationBR.add(waypointBOffset);
detectorlocation.add(dectectorOffset);

sourcetodectector.set(detectorlocation);// not needed when there are waypoints
sourcetodectector.sub(sourcelocation);// not needed when there are waypoints

sourcetowaypointT.set(waypointlocationT);
sourcetowaypointT.sub(sourcelocation);
sourcetowaypointTL.set(waypointlocationTL);
sourcetowaypointTL.sub(sourcelocation);
sourcetowaypointTR.set(waypointlocationTR);
sourcetowaypointTR.sub(sourcelocation);

waypointtodetectorT.set(detectorlocation);
waypointtodetectorT.sub(waypointlocationT);
waypointtodetectorTL.set(detectorlocation);
waypointtodetectorTL.sub(waypointlocationT);
waypointtodetectorTR.set(detectorlocation);
waypointtodetectorTR.sub(waypointlocationT);

sourcetowaypointB.set(waypointlocationB);
sourcetowaypointB.sub(sourcelocation);
sourcetowaypointBL.set(waypointlocationBL);
sourcetowaypointBL.sub(sourcelocation);
sourcetowaypointBR.set(waypointlocationBR);
sourcetowaypointBR.sub(sourcelocation);

waypointtodetectorB.set(detectorlocation);
waypointtodetectorB.sub(waypointlocationB);
waypointtodetectorBL.set(detectorlocation);
waypointtodetectorBL.sub(waypointlocationB);
waypointtodetectorBR.set(detectorlocation);
waypointtodetectorBR.sub(waypointlocationB);

push();
	translate(sourcelocation.x, sourcelocation.y);
	drawTransducer(CLIGHT, degrees((sourcetowaypointT.heading()+sourcetowaypointB.heading())/2));
pop();

push();
	translate(detectorlocation.x, detectorlocation.y);
	drawTransducer(CBLACK, (degrees((waypointtodetectorT.heading()+waypointtodetectorB.heading()/2))-180));
pop();

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationTL.x, waypointlocationTL.y, contribcolours[0]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationTL.x, waypointlocationTL.y, contribcolours[0]);

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationT.x, waypointlocationT.y, contribcolours[1]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationT.x, waypointlocationT.y, contribcolours[1]);

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationTR.x, waypointlocationTR.y, contribcolours[2]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationTR.x, waypointlocationTR.y, contribcolours[2]);

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationBL.x, waypointlocationBL.y, contribcolours[3]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationBL.x, waypointlocationBL.y, contribcolours[3]);

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationB.x, waypointlocationB.y, contribcolours[4]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationB.x, waypointlocationB.y, contribcolours[4]);

showPathC(sourcelocation.x, sourcelocation.y, waypointlocationBR.x, waypointlocationBR.y, contribcolours[5]);
showPathC(detectorlocation.x, detectorlocation.y, waypointlocationBR.x, waypointlocationBR.y, contribcolours[5]);

var triptimeT = sourcetowaypointT.mag()+waypointtodetectorT.mag();
var triptimeTL = sourcetowaypointTL.mag()+waypointtodetectorTR.mag();
var triptimeTR = sourcetowaypointTL.mag()+waypointtodetectorTR.mag();
var triptimeB = sourcetowaypointB.mag()+waypointtodetectorB.mag();
var triptimeBL = sourcetowaypointBL.mag()+waypointtodetectorBR.mag();
var triptimeBR = sourcetowaypointBL.mag()+waypointtodetectorBR.mag();

// the waypoints

push();
	translate(waypointlocationT.x, waypointlocationT.y);
	drawWaypoint(contribcolours[1]);
pop();

push();
	translate(waypointlocationTL.x, waypointlocationTL.y);
	drawWaypoint(contribcolours[0]);
pop();

push();
	translate(waypointlocationTR.x, waypointlocationTR.y);
	drawWaypoint(contribcolours[2]);
pop();
push();
	translate(waypointlocationB.x, waypointlocationB.y);
	drawWaypoint(contribcolours[4]);
pop();

push();
	translate(waypointlocationBL.x, waypointlocationBL.y);
	drawWaypoint(contribcolours[3]);
pop();

push();
	translate(waypointlocationBR.x, waypointlocationBR.y);
	drawWaypoint(contribcolours[5]);
pop();

// the indicator bars
// push();
// 	translate(20, waypointLocTY+40);
// 	strokeWeight(8);
// 	strokeCap(SQUARE);
// 	stroke(CCONCYAN);
// 	line(4, 0, 4, -(triptimeT-400));
// 	translate(-8, 0);
// 	stroke(CCONORANGE);
// 	line(4, 0, 4, -(triptimeTL-400));
// 	translate(16, 0);
// 	stroke(CCONPINK);
// 	line(4, 0, 4, -(triptimeTR-400));
// pop();

// the phasors
push();
		translate(detectorlocation.x+80, detectorlocation.y);
		showPhasorMultipleBrightness(3, .04, [[triptimeTL, contribcolours[0]],[triptimeT, contribcolours[1]],[triptimeTR, contribcolours[2]],[triptimeBL, contribcolours[3]],[triptimeB, contribcolours[4]],[triptimeBR, contribcolours[5]]]);
	pop();
	
	


placeTitleBold("Exploring a pair of triplets for interference");

}

function mouseReleased(){
	slitsbutton.changeState();
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


