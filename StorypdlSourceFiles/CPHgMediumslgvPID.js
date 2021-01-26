// {CPHgMediumslgvPID}{500}{210}

var mediumdata=["gas","liguid","solid","vacuum",];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	gas = loadImage("../__PDLgraphics/HgSMDgasPDL.svg");
	liquid = loadImage("../__PDLgraphics/HgSMDliquidPDL.svg");
	solid = loadImage("../__PDLgraphics/HgSMDsolidPDL.svg");
	vacuum = loadImage("../__PDLgraphics/HgSMDvacuumPDL.svg");
}

function setup(){
    createCanvas(500, 210);
	mediumstuff=new CreateRadioButtons(20, 80,["gas","liguid","solid","vacuum"]);

}

function draw() {
    background(CWHITE);
    var thechoice=mediumstuff.makeChoice();

	switch(thechoice){
        case "gas":
			image(gas, 130, 100);
			placeWordsFrame("you can hear sound if the medium is a gas", 370-4, 100,118,200);
            break;
        case "liguid":
            image(liquid, 130, 100);
			placeWordsFrame("you can hear sound if the medium is a liquid", 370-4, 100,118,200);
            break;
        case "solid":
            image(solid, 130, 100);
            placeWordsFrame("you can hear sound if the medium is a solid", 370-4, 100,118,200);
            break;
        case "vacuum":
            image(vacuum, 130, 100);
            placeWordsFrame("you cannot hear sound if the medium is a vacuum", 370-4, 100,118,200);
            break;
         }

	placeSubHead("source",128,80);
	placeSubHead("detector",308,80);
	placeSubHead("medium",200,80);

	placeWords("loud\nspeaker",128,189);
	placeWords(thechoice,200,189);
	placeWords("ear",308,189);

	placeTitleBold("particles link source and detector");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}




