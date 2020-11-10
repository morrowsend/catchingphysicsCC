// PhTripTimesRefractionPID

const waypointLocX = 320;
const waypointLocY = 300;
const sourceLocX = 150;
const sourceLocY =waypointLocY-150;
const detectorLocX = 560;
const detectorLocY = waypointLocY+100;

const controllers=[];
const scaleFactorSurfaceExplore=500;
const scaleFactorSourceDetector=180;
const maxtime=1000;

const refractiveIndex = 1.5;



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


var sourceOffset=createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorSourceDetector);
var waypointOffset=createVector(-controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorSurfaceExplore);
var dectectorOffset=createVector(controllers[2].getValues().xSet,-controllers[2].getValues().ySet).mult(scaleFactorSourceDetector);

var sourcelocation = createVector(sourceLocX,sourceLocY);
var detectorlocation = createVector(detectorLocX,detectorLocY);
var waypointlocation = createVector(waypointLocX,waypointLocY);

sourcelocation.add(sourceOffset);
waypointlocation.add(waypointOffset);

detectorlocation.add(dectectorOffset);

sourcetowaypoint.set(waypointlocation);
sourcetowaypoint.sub(sourcelocation);

waypointtodetector.set(detectorlocation);
waypointtodetector.sub(waypointlocation);


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

var triptime = sourcetowaypoint.mag()+waypointtodetector.mag()*refractiveIndex;

// the waypoints
push();
	translate(waypointlocation.x, waypointlocation.y);
	waypoint(cconcyan);
	push();
		translate(0, 40);
		durationpov(triptime,maxtime,cconcyan);		
	pop();
pop();



// the indicator bar
push();
	translate(756, waypointLocY+40);
	strokeWeight(8);
	strokeCap(SQUARE);
	stroke(cconcyan);
	line(4, 0, 4, -(triptime-200)*.3);
pop();

title("Exploring trip times in refraction");

}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


