// KnMotionDiagramRanaPathPucksPID


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
	thedisplaced = loadImage("../__PDLgraphics/ranawalk/ranaCurledTop.svg");
}
function setup(){
	createCanvas(800, 800);
		
	valuesbutton = new checkButton(100,750,"values",false);
    
    displacementsbutton = new checkButton(203,750,"displacements",false);
    
    segmentsbutton = new checkButton(350,750,"track segments",false);
    
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
	valuesbutton.drawButton();
	
	if(valuesbutton.buttonisChecked){
		if (-300<mouseX-width/2 && mouseX-width/2<300 && mouseY-width/2<300 && -300<mouseY-width/2){
		mouseDisplacement.set(mouseX-width/2,-mouseY+width/2);
			meterinteger(mouseDisplacement.mag(), "", 20, 730);
			meterinteger(degrees(mouseDisplacement.heading()), "", 20, 765);
			push();
				translate(width/2, height/2);
				displacement(mouseDisplacement.mag()*.1, -degrees(mouseDisplacement.heading()-PI/2), cideaGreen);
			pop();
		}
		words("an image appears every 300 seconds; one unit on the screen represents 1 metre", 100, 740);
	}
		
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
// 			ellipse(displacements[i].x,-displacements[i].y,8,8);// draws marker
			push();
			translate(displacements[i].x,-displacements[i].y);
			if (i==controllers.length-1){ // only show final sleeping position
			rotate(angleforStep);
			scale(0.5);
			imageMode(CENTER);
			image(thedisplaced,0,0);
			}
			pop();
			}
	pop();
	

	titleBold("Set the six displacements that make up Rana's path: see where she ends up sleeping.");
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
