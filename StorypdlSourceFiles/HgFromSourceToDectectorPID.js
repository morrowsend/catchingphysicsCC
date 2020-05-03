// FileName: HgFromSourceToDectectorPID
function preload() {
   chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf"); 
}
function setup(){
    createCanvas(670, 340);
    noLoop();
}

function draw() {
    background(cWhite);
	conceptualPane(170, 200, 300, 230);
	conceptualPane(500, 200, 300, 230);
	push();
		translate(90, 200);
		transducer(csound, 0);
		beamC(0, 0, 180, 0, csound);
	pop();
	transitionEvolve(335, 200, 0);
	push();
		translate(580, 200);
		transducer(cBlack, 180);
		beamC(-180, 0, 0, 0, csound);
	pop();

	words("a source radiating vibrations",40,115);
	words("a detector absorbing vibrations",370,115);

  titleBold("From source – a delay – to detector");  
}







