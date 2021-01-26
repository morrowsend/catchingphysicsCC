// CPKfUniversalGravitationGravityForceVectorsPID

const controllers=[];
const offsets=[];
const origins=[];
const locations=[];
const scaleFactor=380;
const numberVectors =2;

function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 800);
    controllers[0]= new CreateControlPuck();
    controllers[1]= new CreateControlPuck();
	controllers[0].create(60,200);
	controllers[1].create(740,600);
}
    

function draw() {
    background(CWHITE);
    origins[0]=createVector(200,200);
    origins[1]=createVector(600,600);
        
    for (let i = 0; i<controllers.length; i++){
		offsets[i]=createVector(controllers[i].getValues().xSet,-controllers[i].getValues().ySet,).mult(scaleFactor);
		origins[i].add(offsets[i]);
    }
	locations[0]=createVector(origins[0].x,origins[0].y);
	locations[1]=createVector(origins[1].x,origins[1].y);
    locations[0].sub(locations[1]);
    var inverseSquare = pow(locations[0].mag(),-2);
	var theForce=60000*inverseSquare;
    
    push();
		translate(origins[0].x,origins[0].y);
		fill(CIDEABLUE);
		ellipseMode(CENTER)
		ellipse(0,0,20,20);
		showForce(theForce*PXSCALE*2, degrees(locations[0].heading()-PI/2), CFORCERED);
	pop();
	
	push();
		translate(origins[1].x,origins[1].y);
		fill(CIDEARED);
		ellipseMode(CENTER)
		ellipse(0,0,20,20);
		showForce(-theForce*PXSCALE*2, degrees(locations[0].heading()-PI/2), CFORCEBLUE);
	pop();
	
	placeWords('set the\nlocations\nby dragging\nthe pucks', 20, 80);

    placeTitleBold("Varying gravitational force by changing separation");
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
