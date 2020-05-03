// FileName: HgSourcesDetectorsPID

var sourcedata=["guitar","car engine","scratching fingernail","frying bacon","saxophone reed"]

function preload() {
   chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	guitar = loadImage("../__PDLgraphics/HgSourcesDetectorsGuitarPDL.svg");
	carengine = loadImage("../__PDLgraphics/HgSourcesDetectorsMotorPDL.svg");
	fingernail = loadImage("../__PDLgraphics/HgSourcesDetectorsFingernailPDL.svg");
	frybacon = loadImage("../__PDLgraphics/HgSourcesDetectorsFryingBaconPDL.svg");
	saxophone = loadImage("../__PDLgraphics/HgSourcesSaxophonePDL.svg");

}
function setup(){
    createCanvas(500, 250);
	sourceChoice=new IanSlider(20,85,115,15,3,[0.0],false);

}

function draw() {
    background(cWhite);
    sourceChoice.draw();
	var thechoice = int((sourceChoice.getValue()+0.1)*4);
	for (i = 0; i < sourcedata.length; i++) {
		words(sourcedata[i], 44, 206-i*28);
				}
				
	switch(thechoice){
        case 0:
			image(guitar, 200, 100);
            break;
        case 1:
            image(carengine, 200, 100);
        
            break;
        case 2:
            image(fingernail, 200, 100);
            
            break;
        case 3:
            image(frybacon, 200, 100);
            break;
        case 4:
            image(saxophone, 200, 100);
            break;
         }
		
	subHead("source",200,80);
	subHead("detector",380,80);
	subHead("to",360-30,80);

	words(sourcedata[thechoice],200,220);
	words("ear",380,220);

	titleBold("hearing: from a source to the detector");  
}


function mousePressed(){
        sourceChoice.mousePressed();
	}
function mouseReleased(){
        sourceChoice.mouseReleased();
    }




