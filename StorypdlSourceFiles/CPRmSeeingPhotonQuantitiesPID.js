//   {CPRmSeeingPhotonQuantitiesPID}{850}{535}

var timeoclock=0;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(850, 535);
}

function draw() {
    background(CWHITE);

    stroke(CIDEAGREY);
    strokeWeight(1);
    rect(90, 120, 566, 323);



	placeWords("quite dim",110,105);
	placeWords("very bright",580,105);
	placeWords("very red",670,411);
	placeWords("very blue",670,140);
	placeWords("brightness increasing",300,105);
	placeWords("colour\nchanging",670,280);

	push();
		translate(110, 500);
		showQuantity(1,CACTIVITY,"");
		placeWords("few photons\nevery second", 20, 0);
	pop();

	push();
		translate(636, 500);
		showQuantity(5,CACTIVITY,"");
		placeWords("many photons\nevery second", 20, 0);
	pop();

	push();
		translate(770, 411);
		showPhasorArrow(4, .1, timeoclock, CCONGRAY);

	pop();

	push();
		translate(770, 140);
		showPhasorArrow(4, .2, timeoclock, CCONGRAY);
	pop();

	placeTitleBold("Seeing, described with photons");

	timeoclock++;

}
