// PhFourArowPathWayContributionpointPID

const numberWaypoints =4; // can usefully be 2-4, without screen getting too congested
 var timeoclock=0;

const sourceinitialLoc = [70,250];
const detectorinitialLoc = [650,320];

const SDcontrollers=[];
const WPcontrollers=[];
const scaleFactorWPExplore=500;
const scaleFactorSDExplore=300;
const triptimes=[];
const waypointlocations=[];
const waypointoffsets=[];
const waypointlocationsadjusted=[];
const sourcetowaypoints=[];
const waypointstodetector=[];

var sourcelocation="";
var sourcelocationadjusted="";
var detectorlocation="";
var detectorlocationadjusted="";

const maxtime=1000;
const yloc =500;
const contribcolours=[CCONGREEN,CCONPINK,CCONORANGE,CCONLIGHTGREEN,CCONGRAY,CCONPURPLE,CCONCYAN];
const sfTriptimes = 40;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(800, 650);
 
 SDcontrollers[0]= new CreateControlPuck();
 SDcontrollers[0].create(sourceinitialLoc[0],yloc);
 SDcontrollers[1]= new CreateControlPuck();
 SDcontrollers[1].create(detectorinitialLoc[0],yloc);
 
sourcelocation=createVector(sourceinitialLoc[0],sourceinitialLoc[1]);
detectorlocation=createVector(detectorinitialLoc[0],detectorinitialLoc[1]);
sourcelocationadjusted=createVector(sourceinitialLoc[0],sourceinitialLoc[1]);
detectorlocationadjusted=createVector(detectorinitialLoc[0],detectorinitialLoc[1]);


 for (let i = 0; i<numberWaypoints; i++){
	WPcontrollers[i]= new CreateControlPuck();
	const WPinitialLocx = 200+i*110;
	const WPinitialLocy = 300;
	WPcontrollers[i].create(WPinitialLocx,yloc);
	waypointlocations[i]=createVector(WPinitialLocx,WPinitialLocy);
	waypointlocationsadjusted[i]=createVector(WPinitialLocx,WPinitialLocy);
	waypointoffsets[i]=createVector(0,0);
	sourcetowaypoints[i]=createVector(0,0);
	waypointstodetector[i]=createVector(0,0);
	}
	
   }

function draw() {

	background(CWHITE);


	var sourceangle=0;
	var detectorangle=0;

	var sourceOffset=createVector(SDcontrollers[0].getValues().xSet,-SDcontrollers[0].getValues().ySet).mult(scaleFactorSDExplore);
	var detectorOffset=createVector(SDcontrollers[1].getValues().xSet,-SDcontrollers[1].getValues().ySet).mult(scaleFactorSDExplore);

	sourcelocation.set(sourceOffset).add(sourcelocationadjusted);
	detectorlocation.set(detectorOffset).add(detectorlocationadjusted);

	for (let i = 0; i<numberWaypoints; i++){
		waypointoffsets[i]=createVector(WPcontrollers[i].getValues().xSet,-WPcontrollers[i].getValues().ySet).mult(scaleFactorWPExplore);
		waypointlocations[i].set(waypointoffsets[i].add(waypointlocationsadjusted[i]));

		push();
		translate(waypointlocations[i].x, waypointlocations[i].y);
		drawWaypoint(contribcolours[i]);
		pop();

		showPathC(sourcelocation.x, sourcelocation.y, waypointlocations[i].x, waypointlocations[i].y, contribcolours[i]);
		showPathC(detectorlocation.x, detectorlocation.y, waypointlocations[i].x, waypointlocations[i].y, contribcolours[i]);

		waypointstodetector[i].set(detectorlocation).sub(waypointlocations[i]);
		sourcetowaypoints[i].set(sourcelocation).sub(waypointlocations[i]);
		triptimes[i]=(sourcetowaypoints[i].mag()+waypointstodetector[i].mag());
		push();
			translate(200+i*110, 620);
			showDurationPoV(triptimes[i],maxtime,contribcolours[i]);
		pop();
		sourcetowaypoints[i].mult(-1);
		sourceangle+=sourcetowaypoints[i].heading();
		sourceangle=sourceangle/numberWaypoints;
		detectorangle+=waypointstodetector[i].heading();
		detectorangle=detectorangle/numberWaypoints;
			}
		push();
			translate(sourcelocation.x, sourcelocation.y);
			showPhasorArrow(4, .08,timeoclock,CDEVICEGREY);
			push();
				rotate(PI);
				drawTransducer(CLIGHT, degrees(sourceangle-PI));
				translate(abs(10*sin(degrees(sourceangle-PI))),0);
			pop();
		pop();

		push();
			translate(detectorlocation.x, detectorlocation.y);
			drawTransducer(CIDEAGREY, degrees(detectorangle-PI));
		pop();



		placeWords('source\nlocation', sourceinitialLoc[0]-38, yloc+60);
		placeWords('detector\nlocation', detectorinitialLoc[0]-38, yloc+60);
		placeWords('green\nwaypoint', 160, yloc+60);
		placeWords('pink\nwaypoint', 160+110, yloc+60);
		placeWords('orange\nwaypoint', 160+2*110, yloc+60);
		placeWords('lime\nwaypoint', 160+3*110, yloc+60);

	
push();
		translate(detectorlocation.x, detectorlocation.y);
		showPhasorMultiple(4, .08, [[timeoclock-triptimes[0],contribcolours[0]],[timeoclock-triptimes[1],contribcolours[1]],[timeoclock-triptimes[2],contribcolours[2]],[timeoclock-triptimes[3],contribcolours[3]]]);
	pop();

timeoclock++;

placeTitleBold("Four paths, defined by four waypoints, and four contributions");

}




function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
