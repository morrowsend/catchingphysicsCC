// {CPCgCircuitAlwaysLoopsPID}{380}{520}


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	drawncircuit = loadImage("../__PDLgraphics/CgDrawnPhysicalCircuitTop.svg");

}

function setup(){
    createCanvas(380, 520);
	noLoop();
}

function draw() {
    background(CWHITE);

    placePhysicalPane(190,150, 200, 140);
    placeConceptualPane(190,372, 246, 244);
	placeTransitionRedescribe(190, 235, 0);

// pane01
    image(drawncircuit, 100, 90);

// 	pane02
	push();
		translate(82,372);
		drawLoopOne();
	pop();

	placeTitleBold('An electric circuit is always a loop');
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

