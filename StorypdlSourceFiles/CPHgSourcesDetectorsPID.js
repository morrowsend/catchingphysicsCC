// {CPHgSourcesDetectorsPID}{500}{250}


function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
   romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
   italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
   titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	guitar = loadImage("../__PDLgraphics/HgSourcesDetectorsGuitarPDL.svg");
	carengine = loadImage("../__PDLgraphics/HgSourcesDetectorsMotorPDL.svg");
	fingernail = loadImage("../__PDLgraphics/HgSourcesDetectorsFingernailPDL.svg");
	frybacon = loadImage("../__PDLgraphics/HgSourcesDetectorsFryingBaconPDL.svg");
	saxophone = loadImage("../__PDLgraphics/HgSourcesSaxophonePDL.svg");


}
function setup(){
    createCanvas(500, 250);
	sourcechoice=new CreateRadioButtons(20, 80,["guitar","car engine","scratching fingernail","frying bacon","saxophone reed"]);


}

function draw() {
    background(CWHITE);
	var thechoice=sourcechoice.makeChoice();

	switch(thechoice){
        case "guitar":
			image(guitar, 200, 100);
            break;
        case "car engine":
            image(carengine, 200, 100);
            break;
        case "scratching fingernail":
            image(fingernail, 200, 100);
            break;
        case "frying bacon":
            image(frybacon, 200, 100);
            break;
        case "saxophone reed":
            image(saxophone, 200, 100);
            break;
         }

	placeSubHead("source",200,80);
	placeSubHead("detector",380,80);
	placeSubHead("to",360-30,80);

	placeWords(thechoice,200,220);
	placeWords("ear",380,220);

	placeTitleBold("hearing: from a source to the detector");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}




