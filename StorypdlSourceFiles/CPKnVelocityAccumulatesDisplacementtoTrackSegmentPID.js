// KnVelocityAccumulatesDisplacementtoTrackSegmentPID

const fluxions=[];
const fluents=[];
const pqfluxions=[];
const pqfluents=[];

const numberoffluxions =4;
const fluentscaling = 3;
const fluxionscaling = 5;

const ylocfluxion =98;
const ylocfluentIntial = 182;
const xlocfluentIntial = 100;
const gridHeight=500;

const xstepdisplay=150;
const ylocfluxionrep = 250;
const ylocfluentrep = 380;
const xlocfluent1=100;
const xlocfluxion1=xlocfluent1+xstepdisplay/2;

// FOR BOTTOM DISPLAY
const displacements=[];
var lastDisplacement;
var thisTrackstep;
var angleforStep;
var mouseDisplacement;
const scalefactor=30;


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	thedisplaced = loadImage("../__PDLgraphics/KazBike/KazAveTop06.svg");
}

function setup(){
    createCanvas(900, 1000);
    for (let i = 0; i<numberoffluxions; i++){
		fluxions[i]= new CreateControlPuck();
		let xloc = xlocfluxion1+xstepdisplay*i;
		fluxions[i].create(xloc,ylocfluxion);
    }
    
    
    fluents[0]= new CreateControlPuck();
    fluents[0].create(xlocfluentIntial,ylocfluentIntial);
    

    
    displacementsbutton = new CreateCheckButton(20,542,"displacements",false);
    
    segmentsbutton = new CreateCheckButton(177,542,"track segments",false);
    
    lastDisplacement=createVector(0,0);
	mouseDisplacement=createVector(0,0);
	thisTrackstep=createVector(0,0);
}

function draw() {
    background(CWHITE);
    
    placeConceptualPane(width/2, 283, width-40, 450);
    
    placeConceptualPane(width/2, 738, width-40, 400);
    
    placeTransitionRedescribe(width/2, 523, 0);
    
    displacementsbutton.drawButton();
	segmentsbutton.drawButton();
    
    
    for (let i = 0; i<fluxions.length; i++){
		pqfluxions[i]=createVector(fluxions[i].getValues().xSet,fluxions[i].getValues().ySet,).mult(fluxionscaling);
    }
    
    pqfluents[0]=createVector(fluents[0].getValues().xSet,fluents[0].getValues().ySet,).mult(fluentscaling);
    displacements[0]=createVector(pqfluents[0].x,pqfluents[0].y).mult(scalefactor);

	for (let i = 1; i<fluxions.length+1; i++){
		pqfluents[i]=createVector(30,30);
    }
    
    
//     eye-guiding grid
    stroke(CIDEAGREY);
    strokeWeight(0.5);
    push();
		translate(xlocfluent1,0);
		for (let i = 1; i<fluxions.length+2; i++){
			line(0, 80, 0, ylocfluentrep);
			translate(xstepdisplay, 0);
		}
    pop();
//     labels for grid
    push();
		translate(xlocfluent1,0);
		for (let i = 1; i<fluxions.length+2; i++){
			placeWords("t="+i,-11,75);
			translate(xstepdisplay, 0);
		}
    pop();

   
	
// 	accumulate

	for (let i = 0; i<fluxions.length; i++){
		pqfluents[i+1].set(pqfluents[i]);
		pqfluents[i+1].add(pqfluxions[i]);
		displacements[i+1]=createVector(pqfluents[i+1].x,pqfluents[i+1].y).mult(scalefactor);
    }


	push();
		translate(xlocfluxion1, ylocfluxionrep);
		for (let i = 0; i<pqfluxions.length; i++){
			showVelocity(pqfluxions[i].mag(), degrees(-pqfluxions[i].heading()+PI/2), CIDEABLUE);
			translate(xstepdisplay, 0);
				}
    pop();
    
    push();
		translate(xlocfluent1, ylocfluentrep);
		for (let i = 0; i<pqfluents.length; i++){
				showDisplacement(pqfluents[i].mag(), degrees(-pqfluents[i].heading()+PI/2), CIDEAGREEN);
			translate(xstepdisplay, 0);
			}
    pop();
    
    
		
	push();
		translate(width/2, 738);
	// 	ellipse(0,0,5,5); origin marker
		fill(CIDEABLUE);
		noStroke();
		for (let i = 0; i<fluxions.length+1; i++){
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
			showDisplacement(displacements[i].mag()*0.1, degrees(-displacements[i].heading()+PI/2), CIDEAGREEN); //draws displacements
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
	

	
	placeWords("set\ninitial\ndisplacement", 750, 172);
	placeWords("set\nthe velocities\nfor each interval", 750, 78);

	placeWords("displacement\nat\nthis\ntime", 750, ylocfluentrep);
	placeWords("velocity\nduring\nthis\ninterval", 750, ylocfluxionrep);
	
    placeTitleBold("Velocity accumulates displacement, interval by interval");
}

function mouseReleased(){
	displacementsbutton.changeState();
	segmentsbutton.changeState();
	}


function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }

