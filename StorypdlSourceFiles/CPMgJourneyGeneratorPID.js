// MgJourneyGeneratorPID

const numberVectors =6;
const scaleFactor=500;
const controllers=[];
const displacements=[];
var lastDisplacement;
var thisTrackstep;
var angleforStep;
var mouseDisplacement;




function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	thedisplaced = loadImage("../__PDLgraphics/KazBike/KazAveTop06.svg");
}
function setup(){
	createCanvas(800, 800);
		
	displacementsbutton = new checkButton(254,750,"show progress from the start   ",false);
    segmentsbutton = new checkButton(20,750,"show the leg of the journey   ",false);
  
    const xloc =width-50;
    for (let i = 0; i<numberVectors; i++){
		controllers[i]= new controlPuck();
		let yloc = 141+90*i;
		controllers[i].create(xloc,yloc);
    }
	
	lastDisplacement=createVector(0,0);
	mouseDisplacement=createVector(0,0);
	thisTrackstep=createVector(0,0);
	
}

function draw() {
	background(cWhite);
	conceptualPane(width/2, height/2, 600, 600);
	
	for (let i = 0; i<controllers.length; i++){
		displacements[i]=createVector(controllers[i].getValues().xSet,controllers[i].getValues().ySet,).mult(scaleFactor);
    }
	
	displacementsbutton.drawButton();
	segmentsbutton.drawButton();	
	
	push();
		translate(width/2, height/2);
	// 	ellipse(0,0,5,5); origin marker
		fill(cideaBlue);
		noStroke();
		for (let i = 0; i<controllers.length; i++){
			if (i!=0){
				lastDisplacement.set(displacements[i-1].x,-displacements[i-1].y);
				thisTrackstep.set(displacements[i].x,-displacements[i].y);
				thisTrackstep.sub(lastDisplacement).mult(-1);
				angleforStep=thisTrackstep.heading()+PI;
			} else{
				angleforStep = -displacements[i].heading();
				thisTrackstep.set(displacements[i].x,-displacements[i].y);
				lastDisplacement.set(0,0);
			}
			if (segmentsbutton.buttonisChecked){
				trackSegment(lastDisplacement.x, lastDisplacement.y, displacements[i].x,-displacements[i].y); //draws the trackSegments showing track
			}
			if (displacementsbutton.buttonisChecked){
			displacement(displacements[i].mag()*0.1, degrees(-displacements[i].heading()+PI/2), cpovAlice); //draws displacements
			}
			ellipse(displacements[i].x,-displacements[i].y,8,8);// draws marker
			push();
			translate(displacements[i].x,-displacements[i].y);
			rotate(angleforStep);
			scale(0.5);
			imageMode(CENTER);
			image(thedisplaced,0,0);
			pop();
			}
	pop();
	

	titleBold("Journey generator: drag the pucks to set each leg");
}

function mouseReleased(){
	displacementsbutton.changeState();
	segmentsbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
