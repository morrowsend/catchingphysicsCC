// FileName: HgBoxOfHearingPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf"); 
}
function setup(){
    createCanvas(580, 440);
    noLoop();
}

function draw() {
    background(cWhite);
	fill(cdeviceLightGrey);
    noStroke();
    rect(95,80+24,350,260)

	words("quite quiet",93,95);
	words("very noisy",377,95);
	words("a low rumble",454,365);
	words("a high squeak",454,117);
	words("loudness\nincreasing",95,390);
	words("pitch\nincreasing",20,294);

  titleBold("The box of hearing");  
}







