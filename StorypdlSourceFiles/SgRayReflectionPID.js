// filename: SgRayReflectionPID
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
    createCanvas(600, 380);
    noLoop();
}

function draw() {
    background(cWhite);
        
	push();
		translate(100, 120);
		transducer(clight, 45);
		rayC(0,0,200,200);

		translate(200, 200);
		reflector("good", 90, 100);
		rayC(0,0,200,-200);

		translate(200, -200);
		transducer(cBlack, 135);
	pop();
	
	advicedroid(320+210, 60+105+40, "The angle the ray hits the mirror at sets the angle the ray leaves the mirror at. The rule for drawing is that the two angles are the same.", 200, 90);

	titleBold("Reflection from a mirror with a ray – a drawn model");
}
