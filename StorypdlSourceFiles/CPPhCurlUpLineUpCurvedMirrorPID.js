// PhCurlUpLineUpCurvedMirrorPID

const numberWaypoints =7;
const verticalspacingWaypoints =80;
const sourceLocX = 80;
const diagramcentreLocY =360;
const detectorLocX = 400;
const waypointLocX = 600;
const controllers=[];
const waypointlocations=[];
var waypointlocationsstet=[];
var waypointlocationsadjusted=[];
var waypointoffsets=[];
const sourcetowaypoints=[];
const waypointstodetector=[];
var triptimes=[];
const sourcelocations=[];
var detectorlocation="";
const scaleFactorMirror=150;
const maxtime=1000;
const contribcolours=[ccongreen,cconpink,cconorange,cconlightgreen,ccongray,cconpurple,cconcyan];
var contribdata=[];


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(800, 700);
 for (let i = 0; i<numberWaypoints; i++){
		controllers[i]= new controlStripHorizontal();
		let yloc = diagramcentreLocY-3*verticalspacingWaypoints+i*verticalspacingWaypoints; //3 above, 3 below, one on centre line
		controllers[i].create(waypointLocX+138,yloc);
		waypointlocations[i]=createVector(waypointLocX,yloc);
		waypointlocationsadjusted[i]=createVector(waypointLocX,yloc);
		waypointlocationsstet[i]=createVector(waypointLocX,yloc);
		sourcelocations[i]=createVector(sourceLocX,yloc);
		sourcetowaypoints[i]=createVector(0,0);
		waypointstodetector[i]=createVector(0,0);
    }
    
 detectorlocation=createVector(detectorLocX,diagramcentreLocY);
}

function draw() {

background(cWhite);

for (let i = 0; i<numberWaypoints; i++){
	waypointoffsets[i]=createVector(-controllers[i].getValues().xSet,-controllers[i].getValues().ySet).mult(scaleFactorMirror);
	waypointlocations[i].set(waypointoffsets[i].add(waypointlocationsadjusted[i]));
	waypointlocationsstet[i].set(waypointlocations[i]);
	push();
	translate(waypointlocations[i].x, waypointlocations[i].y);
	waypoint(contribcolours[i]);
	pop();
	pathC(sourcelocations[i].x, sourcelocations[i].y, waypointlocations[i].x, waypointlocations[i].y, contribcolours[i]);
	pathC(detectorlocation.x, detectorlocation.y, waypointlocations[i].x, waypointlocations[i].y, contribcolours[i]);
	if (i!=6){
	stroke(cBlack);
	line(waypointlocationsstet[i].x, waypointlocationsstet[i].y, waypointlocationsstet[i+1].x, waypointlocationsstet[i+1].y);
	}
	waypointstodetector[i].set(detectorlocation).sub(waypointlocations[i]);
	sourcetowaypoints[i].set(waypointlocations[i].sub(sourcelocations[i]));
	triptimes[i]=sourcetowaypoints[i].mag()+waypointstodetector[i].mag();
// durations
	push();
		translate(sourcelocations[i].x-20, sourcelocations[i].y);
		durationpov(triptimes[i],maxtime,contribcolours[i]);
		stroke(contribcolours[i]);
		strokeWeight(4);
		strokeCap(SQUARE);
		line(-20-abs(i-3)*4, 0,-20-abs(i-3)*4, -(triptimes[i]-triptimes[3])); // compare to centre one
	pop();
	contribdata[i] =[triptimes[i],contribcolours[i]]
}

push();
	translate(detectorLocX-70, diagramcentreLocY);
	phasormultiple(4, .04, contribdata);
pop();



push();
	translate(detectorlocation.x, detectorlocation.y);
	transducer(cBlack, 0);
pop();



titleBold("Photon engineering a focusing mirror using trip times for paths");

}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


