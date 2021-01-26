// CPMgSpeedUpForceSidePID


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    KazSlow=loadImage("../__PDLgraphics/KazBike/KazSlowSide02.svg");
	KazFast=loadImage("../__PDLgraphics/KazBike/KazWhixxSide02.svg");

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
    image(KazSlow,120,180);
	push();
		translate(100,100);
		showVelocity(4, 90, CPOVALICE);
	pop();
	push();
		translate(120,170);
		showForce(5, 90, CGRIP);
	pop();

    image(KazFast,350,180);
	push();
		translate(305,100);
		showVelocity(9, 90, CPOVALICE);
	pop();
	push();
		translate(350,170);
		showForce(5, 90, CGRIP);
	pop();

	placeTitleBold("Force changes motion: speeding up");
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
}

