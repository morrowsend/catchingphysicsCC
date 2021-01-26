// {CpHgBoxOfHearingPID}{580}{440}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(580, 440);
    noLoop();
}

function draw() {
    background(CWHITE);
	fill(CDEVICELIGHTGREY);
    noStroke();
    rect(95,80+24,350,260)

	placeWords("quite quiet",93,95);
	placeWords("very noisy",377,95);
	placeWords("a low rumble",454,365);
	placeWords("a high squeak",454,117);
	placeWords("loudness\nincreasing",95,390);
	placeWords("pitch\nincreasing",20,294);

  placeTitleBold("The box of hearing");
}







