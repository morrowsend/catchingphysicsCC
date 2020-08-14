// HgMediumslgvPID

var mediumdata=["gas","liguid","solid","vacuum",];

function preload() {
   chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	gas = loadImage("../__PDLgraphics/HgSMDgasPDL.svg");
	liquid = loadImage("../__PDLgraphics/HgSMDliquidPDL.svg");
	solid = loadImage("../__PDLgraphics/HgSMDsolidPDL.svg");
	vacuum = loadImage("../__PDLgraphics/HgSMDvacuumPDL.svg");

}
function setup(){
    createCanvas(500, 210);
	mediumChoice=new IanSlider(20,85,115-28,15,2,[0.0],false);

}

function draw() {
    background(cWhite);
    mediumChoice.draw();
	var thechoice = int((mediumChoice.getValue()+0.1)*3);
	for (i = 0; i < mediumdata.length; i++) {
		words(mediumdata[i], 44, 206-28-i*28);
				}
				
	switch(thechoice){
        case 0:
			image(gas, 130, 100);
			wordsframe("you can hear sound if the medium is a gas", 370, 100,118,200);
            break;
        case 1:
            image(liquid, 130, 100);
			wordsframe("you can hear sound if the medium is a liquid", 370, 100,118,200);
            break;
        case 2:
            image(solid, 130, 100);
            wordsframe("you can hear sound if the medium is a solid", 370, 100,118,200);
            break;
        case 3:
            image(vacuum, 130, 100);
            wordsframe("you cannot hear sound if the medium is a vacuum", 370, 100,118,200);
            break;
         }
		
	subHead("source",120,80);
	subHead("detector",310,80);
	subHead("medium",208,80);

	words("loudspeaker",94,189);
	words(mediumdata[thechoice],208,189);
	words("ear",310,189);

	titleBold("particles link source and detector");  
}


function mousePressed(){
        mediumChoice.mousePressed();
	}
function mouseReleased(){
        mediumChoice.mouseReleased();
    }




