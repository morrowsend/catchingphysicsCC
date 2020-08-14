//FileName: SgVaryMediumPID
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(760, 530);
    inputtoDivvy=new IanSlider(20,360,100,15,0,[0.7],false);
    threeWayDivvy=new IanSlider(450-140,360,150,15,0,[0.2,0.6],false);
}

function draw() {
    background(cWhite);
    inputtoDivvy.draw();
    words("set\nhow bight\nthe source is", 50, 370);
    threeWayDivvy.draw();
    words("vary the\nmedium\nchanging\nwhat's in the way", 480-140, 370);
    
    push();
		translate(110, 100);
		beamC(0,0, 538, 0, clight);
		transducer(clight, 0);
		translate(538, 0);
		transducer(cBlack, 180);
		translate(-230-108, 0);
		absorber("good", 60, 60);
	pop();

    var topslice = 1-max(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));
    var midslice = max(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1))-min(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));;
    var bottomslice = min(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));
     quantitativedivvy("brightness\nof the\nsource","brightness the\neye sees","how much\nis absorbed","how much\nis scattered",160,340,topslice,midslice,bottomslice);

    titleBold("Changing what's in the way changes the brightness you see");
}

function mousePressed(){
        threeWayDivvy.mousePressed();
        inputtoDivvy.mousePressed();
	}
function mouseReleased(){
        threeWayDivvy.mouseReleased();
        inputtoDivvy.mouseReleased();
    }



function quantitativedivvy(inputPower,ouputPower1,ouputPower2,ouputPower3,xloc,yloc,topslice,midslice,bottomslice){
    var pxscale=20;
    push();
	translate(xloc,yloc);
    if(inputtoDivvy.getValue()!=0){
		power(inputtoDivvy.getValue()*pxscale);
		words(inputPower,-110,-inputtoDivvy.getValue()*pxscale*5-20);
    }
			translate(280+164,0);
			if(bottomslice!=0 && inputtoDivvy.getValue()!=0){
				power(inputtoDivvy.getValue()*pxscale*bottomslice);
				words(ouputPower1,40, -bottomslice*pxscale*inputtoDivvy.getValue()*5);
			}
			translate(0,-bottomslice*inputtoDivvy.getValue()*pxscale*10);
			translate(-100-164,0);
			if(midslice!=0 && inputtoDivvy.getValue()!=0){
				power(inputtoDivvy.getValue()*pxscale*midslice);
				words(ouputPower2,40, -midslice*pxscale*inputtoDivvy.getValue()*5);
			}
			translate(0,-midslice*inputtoDivvy.getValue()*pxscale*10);
			if(topslice!=0 && inputtoDivvy.getValue()!=0){
				power(inputtoDivvy.getValue()*pxscale*topslice);
				words(ouputPower3,40, -topslice*pxscale*inputtoDivvy.getValue()*5);
			}
    pop();
}
