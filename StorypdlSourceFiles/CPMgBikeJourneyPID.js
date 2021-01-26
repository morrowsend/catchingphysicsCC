// CPMgBikeJourneyPID

const motionlocations=[
[-196,-151,"first turn"],
[-343,-203,"second turn"],
[-87,-128,"third turn"],
[-224,200,"fourth turn"],
[-303,172,"arrived"]
];

// can be <=+-300

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
	thedisplaced = loadImage("../__PDLgraphics/KazBike/KazSlowTop02.svg");
	thebackground = loadImage("../__PDLgraphics/bikemap.png");
}
function setup(){
	createCanvas(900, 600);    
    displacementsbutton = new CreateCheckButton(254,550,"show progress from the start   ",false);
    segmentsbutton = new CreateCheckButton(20,550,"show the leg of the journey   ",false);
    backgroundbutton = new CreateCheckButton(511+234,550,"show map",false);   
    setStep=new createSliderDivider(745,102,400,15,(motionlocations.length-1),[0],false)
	
	lastDisplacement=createVector(0,0);
	thisTrackstep=createVector(0,0);

	for (let i = 0; i<motionlocations.length; i++){
		displacements[i]=createVector(motionlocations[i][0],motionlocations[i][1]);
    }
}

function draw() {
	background(CWHITE);
	if (backgroundbutton.buttonisChecked){
	imageMode(CENTER);
	image(thebackground,width/2-100, height/2);
	}
	
	displacementsbutton.drawButton();
	segmentsbutton.drawButton();
	backgroundbutton.drawButton();
	
	setStep.draw();
	
	push();
		translate(width/2, height/2);
	// 	ellipse(0,0,5,5); origin marker
		fill(CIDEABLUE);
		for (let i = 0; i<motionlocations.length*setStep.getValue(); i++){
			if (i!=0){
				lastDisplacement.set(displacements[i-1].x,-displacements[i-1].y);
				thisTrackstep.set(displacements[i].x,-displacements[i].y);
				thisTrackstep.sub(lastDisplacement).mult(-1);
				angleforStep=thisTrackstep.heading()-PI/2;
			} else{
				angleforStep = -displacements[i].heading()+PI/2;
				thisTrackstep.set(displacements[i].x,-displacements[i].y);
				lastDisplacement.set(0,0);
			}
			if (segmentsbutton.buttonisChecked){
				showTrackSegment(lastDisplacement.x, lastDisplacement.y, displacements[i].x,-displacements[i].y); //draws the trackSegments showing track
			}
			if (displacementsbutton.buttonisChecked){
			showDisplacement(displacements[i].mag()*0.1, degrees(-displacements[i].heading()+PI/2), CPOVALICE); //draws displacements
			}
// 			ellipse(displacements[i].x,-displacements[i].y,8,8);// draws marker
			push();
			translate(displacements[i].x,-displacements[i].y);
			rotate(angleforStep-PI/2);
			scale(0.5);
			imageMode(CENTER);
			image(thedisplaced,0,0);
			pop();
			}
	pop();
	
placeWords("at home",765, 502);
	for (i = 0; i < motionlocations.length; i++) {
placeWords(motionlocations[i][2], 765, 422-78*i);
				}

	

	placeTitleBold("A journey by bike");
}


function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


function mousePressed(){
    setStep.mousePressed();
  }

function mouseReleased(){
    setStep.mouseReleased();
    displacementsbutton.changeState();
	segmentsbutton.changeState();
	backgroundbutton.changeState();
    }
