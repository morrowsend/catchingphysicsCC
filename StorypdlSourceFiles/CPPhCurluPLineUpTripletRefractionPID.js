// PhCurluPLineUpTripletRefractionPID

const waypointLocX = 320;
const waypointLocY = 300;
const sourceLocX = 150;
const sourceLocY =waypointLocY-150;
const detectorLocX = 560;
const detectorLocY = waypointLocY+100;
const waypointoffset = 40;


const controllers=[];
const scaleFactorSurfaceExplore=300;
const scaleFactorSourceDetector=100;
const maxtime=1200;

const refractiveIndex = 1.8;



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(800, 600);
 const yloc =550;
 controllers[0]= new controlPuck();
 controllers[0].create(sourceLocX,yloc);
 controllers[1]= new controlStripHorizontal();
 controllers[1].create(waypointLocX,yloc);
 controllers[2]= new controlPuck();
 controllers[2].create(detectorLocX,yloc);
 
}

function draw() {

background(cWhite);
noStroke();
fill(cdeviceLightGrey);
rect(20, waypointLocY, 700, 200)

var sourcetowaypoint = createVector(0,0);
var waypointtodetector = createVector(0,0);
var sourcetowaypointL = createVector(0,0);
var sourcetowaypointR = createVector(0,0);
var waypointtodetector = createVector(0,0);
var waypointtodetectorL = createVector(0,0);
var waypointtodetectorR = createVector(0,0);



var sourceOffset=createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorSourceDetector);
var waypointOffset=createVector(-controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorSurfaceExplore);
var dectectorOffset=createVector(controllers[2].getValues().xSet,-controllers[2].getValues().ySet).mult(scaleFactorSourceDetector);

var sourcelocation = createVector(sourceLocX,sourceLocY);
var detectorlocation = createVector(detectorLocX,detectorLocY);
var waypointlocation = createVector(waypointLocX,waypointLocY);
var waypointlocationL = createVector(waypointLocX-waypointoffset,waypointLocY);
var waypointlocationR = createVector(waypointLocX+waypointoffset,waypointLocY);


sourcelocation.add(sourceOffset);
waypointlocation.add(waypointOffset);
waypointlocationL.add(waypointOffset);
waypointlocationR.add(waypointOffset);
detectorlocation.add(dectectorOffset);

sourcetowaypoint.set(waypointlocation);
sourcetowaypoint.sub(sourcelocation);
sourcetowaypointL.set(waypointlocationL);
sourcetowaypointL.sub(sourcelocation);
sourcetowaypointR.set(waypointlocationR);
sourcetowaypointR.sub(sourcelocation);

waypointtodetector.set(detectorlocation);
waypointtodetector.sub(waypointlocation);
waypointtodetectorL.set(detectorlocation);
waypointtodetectorL.sub(waypointlocationL);
waypointtodetectorR.set(detectorlocation);
waypointtodetectorR.sub(waypointlocationR);


push();
	translate(sourcelocation.x, sourcelocation.y);
	transducer(clight, degrees(sourcetowaypoint.heading()));
pop();

push();
	translate(detectorlocation.x, detectorlocation.y);
	transducer(cBlack, (degrees(waypointtodetector.heading())-180));
pop();


pathC(sourcelocation.x, sourcelocation.y, waypointlocation.x, waypointlocation.y, cconcyan);
pathC(detectorlocation.x, detectorlocation.y, waypointlocation.x, waypointlocation.y, cconcyan);
pathC(sourcelocation.x, sourcelocation.y, waypointlocationL.x, waypointlocationL.y, cconorange);
pathC(detectorlocation.x, detectorlocation.y, waypointlocationR.x, waypointlocationR.y, cconpink);
pathC(sourcelocation.x, sourcelocation.y, waypointlocationR.x, waypointlocationR.y, cconorange);
pathC(detectorlocation.x, detectorlocation.y, waypointlocationL.x, waypointlocationL.y, cconpink);

var triptime = sourcetowaypoint.mag()+waypointtodetector.mag()*refractiveIndex;
var triptimeL = sourcetowaypointL.mag()+waypointtodetectorR.mag()*refractiveIndex;
var triptimeR = sourcetowaypointL.mag()+waypointtodetectorR.mag()*refractiveIndex;

// the waypoints
push();
	translate(waypointlocation.x, waypointlocation.y);
	waypoint(cconcyan);
	push();
		translate(0, 40);
		durationpov(triptime,maxtime,cconcyan);		
	pop();
pop();

push();
	translate(waypointlocationL.x, waypointlocationL.y);
	waypoint(cconorange);
	push();
		translate(0, 40);
		durationpov(triptimeL,maxtime,cconorange);		
	pop();
pop();

push();
	translate(waypointlocationR.x, waypointlocationR.y);
	waypoint(cconpink);
	push();
		translate(0, 40);
		durationpov(triptimeR,maxtime,cconpink);		
	pop();
pop();

// the phasors
push();
		translate(detectorlocation.x+80, detectorlocation.y);
		phasormultiplebrightness(4, .12, [[triptimeL, cconorange],[triptime, cconcyan],[triptimeR, cconpink]]);
pop();


titleBold("Exploring triplets of paths for refraction");

}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


