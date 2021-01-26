// CPMgSlowDownForceSidePID


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    KazSlow=loadImage("../__PDLgraphics/KazBike/KazSlowSide03.svg");
	KazFast=loadImage("../__PDLgraphics/KazBike/KazWhixxSide03.svg");
	
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
    image(KazFast,120,180);
	push();
		translate(85,100);
		showVelocity(7, 90, CPOVALICE);
	pop();
	push();
		translate(120,170);
		showForce(-5, 90, CDRAG);
	pop();
    
    image(KazSlow,350,180);
	push();
		translate(335,100);
		showVelocity(3, 90, CPOVALICE);
	pop();
	push();
		translate(350,170);
		showForce(-5, 90, CDRAG);
	pop();
 
	placeTitleBold("Force changes motion: slowing down");  
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

