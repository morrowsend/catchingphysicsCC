// KnMotionDiagramGeneratorPucksPID


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
	valuesbutton = new CreateCheckButton(100,750,"values",false);
    displacementsbutton = new CreateCheckButton(213,750,"displacements",false);
    segmentsbutton = new CreateCheckButton(370,750,"track segments",false);
    
    const xloc =width-50;
    for (let i = 0; i<numberVectors; i++){
		controllers[i]= new CreateControlPuck();
		let yloc = 141+90*i;
		controllers[i].create(xloc,yloc);
    }
	
	lastDisplacement=createVector(0,0);
	mouseDisplacement=createVector(0,0);
	thisTrackstep=createVector(0,0);
	}

function draw() {
	background(CWHITE);
	placeConceptualPane(width/2, height/2, 600, 600);
	
	for (let i = 0; i<controllers.length; i++){
		displacements[i]=createVector(controllers[i].getValues().xSet,controllers[i].getValues().ySet,).mult(scaleFactor);
    }
	
	displacementsbutton.drawButton();
	segmentsbutton.drawButton();
	valuesbutton.drawButton();
	
	if(valuesbutton.buttonisChecked){
		if (-300<mouseX-width/2 && mouseX-width/2<300 && mouseY-width/2<300 && -300<mouseY-width/2){
		mouseDisplacement.set(mouseX-width/2,-mouseY+width/2);
			placeMeterInteger(mouseDisplacement.mag(), "", 20, 730);
			placeMeterInteger(degrees(mouseDisplacement.heading()), "", 20, 765);
			push();
				translate(width/2, height/2);
				showDisplacement(mouseDisplacement.mag()*.1, -degrees(mouseDisplacement.heading()-PI/2), CIDEAGREEN);
			pop();
		}
		placeWords("an image appears every 60 seconds; one unit on the screen represents 1 metre", 100, 740);
	}
		
	push();
		translate(width/2, height/2);
	// 	ellipse(0,0,5,5); origin marker
		fill(CIDEABLUE);
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
				showTrackSegment(lastDisplacement.x, lastDisplacement.y, displacements[i].x,-displacements[i].y); //draws the trackSegments showing track
			}
			if (displacementsbutton.buttonisChecked){
			showDisplacement(displacements[i].mag()*0.1, degrees(-displacements[i].heading()+PI/2), CPOVALICE); //draws displacements
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
	

	placeTitleBold("A motion diagram");
}

function mouseReleased(){
	displacementsbutton.changeState();
	segmentsbutton.changeState();
	valuesbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
