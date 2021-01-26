// {CPCgFourViewsCircuitsLoopsPID}{860}{520}

var lastposition=runtime=0;
const ropespeed=4;
const displayspeed=ropespeed/4;


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	drawncircuit = loadImage("../__PDLgraphics/CgDrawnPhysicalCircuitTop.svg");
}

function setup(){
    createCanvas(860, 520);
}

function draw() {
    background(CWHITE);

    placePhysicalPane(420,150, 200, 140);
    placeConceptualPane(420,372, 246, 244);
    placeConceptualPane(144,372, 246, 244);
    placeConceptualPane(706,372, 266, 244);
	placeTransitionRedescribe(420, 235, 0);
	placeTransitionRedescribe(282, 372, 0);
	placeTransitionRedescribe(558, 372, 0);

// pane01
    image(drawncircuit, 340, 90);
// 	pane02
	push();
		translate(312,372);
		drawLoopOne();
	pop();
// 	pane03
	push();
		drawRopeLoop(35,476,216,214,CIDEABLUE,runtime*displayspeed);
	pop();
// 	pane04
	push();
		translate(600, 371);
		drawCircuitSimple("bulb");
	pop();

	placeTitleBold('Four views of circuits and loops');
	runtime++;
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
