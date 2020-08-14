// FourViewsCircuitsLoopsPID

var lastposition=runtime=0;
const ropespeed=4;
const displayspeed=ropespeed/4;


function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	drawncircuit = loadImage("../__PDLgraphics/CgDrawnPhysicalCircuitTop.svg");

}

function setup(){
    createCanvas(860	, 520); 
}

function draw() {
    background(cWhite);
    
    physicalPane(420,150, 200, 140);
    conceptualPane(420,372, 246, 244);
    conceptualPane(144,372, 246, 244);
    conceptualPane(706,372, 266, 244);
	transitionRedescribe(420, 235, 0);
	transitionRedescribe(282, 372, 0);
	transitionRedescribe(558, 372, 0);

// pane01
    image(drawncircuit, 340, 90);
// 	pane02
	push();
		translate(312,372);
		loopOne();
	pop();
// 	pane03
	push();
		ropeloop(35,476,216,214,cideaBlue,runtime*displayspeed);
	pop();
// 	pane04
	push();
		translate(600, 371);
		circuitSimple("bulb");
	pop();

	titleBold('Four views of circuits and loops');
	runtime++;
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
