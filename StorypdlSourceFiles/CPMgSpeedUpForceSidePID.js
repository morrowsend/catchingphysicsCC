// MgSpeedUopForceSidePID


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
    background(cWhite);
    conceptualPane(120, 170, 200, 180);
    conceptualPane(350, 170, 200, 180);
    transitionEvolve(235, 170, 0);
    
    imageMode(CENTER);
    image(KazSlow,120,180);
	push();
		translate(100,100);
		velocity(4, 90, cpovAlice);
	pop();
	push();
		translate(120,170);
		force(5, 90, cgrip);
	pop();
    
    image(KazFast,350,180);
	push();
		translate(305,100);
		velocity(9, 90, cpovAlice);
	pop();
	push();
		translate(350,170);
		force(5, 90, cgrip);
	pop();
 
	titleBold("Force changes motion: speeding up");  
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

