// PhBoxOfHearingPID



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
    background(cWhite);
    
    stroke(cideaGrey);
    rect(90, 120, 666, 323);
    strokeWeight(4);
    line(220, 470, 320, 470);
    line(50, 360, 50, 260);
    fill(cideaGrey);
    noStroke();
    quad(320, 470, 310, 460, 350, 470, 310, 480);
    quad(50, 260, 40, 270, 50, 230, 60, 270);
    
    
	words("quite quiet",110,105);
	words("very noisy",680,105);
	words("a low rumble",770,411);
	words("a high squeak",770,140);
	words("loudness\nincreasing",128,464);
	words("pitch\nincreasing",10,388);

	titleBold("The box of hearing");  
}





