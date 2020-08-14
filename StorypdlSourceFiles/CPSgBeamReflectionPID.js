// SgBeamReflectionPID
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
		beamC(0,0,200,200,clight);
		translate(200, 200);
		beamC(0,0,200,-200,clight);
		reflector("good", 90, 100);
		translate(190, -210);
		eye(135-180);
// 		transducer(cBlack, 135);
	pop();
	
	advicedroid(320+210, 60+105+40, "You can see the beam if you put your eye in the right place.\nBut how can you predict where the right place is?", 200, 90);

	titleBold("A beam of light reflects from a mirror into an eye");
}
