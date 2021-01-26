// CPPhBoxOfSeeingPID


function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}

function setup(){
    createCanvas(900, 500);
    noLoop();
}

function draw() {
    background(CWHITE);

    stroke(CIDEAGREY);
    rect(90, 120, 666, 323);
    strokeWeight(4);
    line(220, 470, 320, 470);
    line(50, 360, 50, 260);
    fill(CIDEAGREY);
    noStroke();
    quad(320, 470, 310, 460, 350, 470, 310, 480);
    quad(50, 260, 40, 270, 50, 230, 60, 270);


	placeWords("quite dim",110,105);
	placeWords("very bright",680,105);
	placeWords("very red",770,411);
	placeWords("very blue",770,140);
	placeWords("brightness\nincreasing",128,464);
	placeWords("colour\nchanging",10,388);

	placeTitleBold("The box of seeing");
}





