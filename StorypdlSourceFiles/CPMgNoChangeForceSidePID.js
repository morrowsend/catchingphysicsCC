// CPMgNoChangeForceSidePID


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    KazOne=loadImage("../__PDLgraphics/KazBike/KazAveSide04.svg");
	KazTwo=loadImage("../__PDLgraphics/KazBike/KazAveSide05.svg");
	
}

function setup(){
    createCanvas(494, 300);
	noLoop();
}

function draw() {
    background(CWHITE);
    placeConceptualPane(120, 170, 200, 180);
    placeConceptualPane(350, 170, 200, 180);
    placeTransitionEvolve(235, 170, 0);
    
    imageMode(CENTER);
    image(KazOne,120,180);
	push();
		translate(100,100);
		showVelocity(4, 90, CPOVALICE);
	pop();
	push();
		translate(120,170);
		showForce(-3, 90, CDRAG);
		showForce(3, 90, CGRIP);
	pop();
    
    image(KazTwo,350,180);
	push();
		translate(340,100);
		showVelocity(4, 90, CPOVALICE);
	pop();
	push();
		translate(350,170);
		showForce(-3, 90, CDRAG);
		showForce(3, 90, CGRIP);
	pop();
 
	placeTitleBold("No change in motion");  
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

