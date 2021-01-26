// {CPRmVaryMediumSMDPowerPID}{760}{550}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(760, 550);
    inputtoDivvy=new createSliderDivider(20,360,100,15,0,[0.7],false);
    threeWayDivvy=new createSliderDivider(450-140,360,150,15,0,[0.2,0.6],false);
}

function draw() {
    background(CWHITE);
    inputtoDivvy.draw();
    placeWords("set\nemitted power", 50, 370);
    threeWayDivvy.draw();
    placeWords("vary\nthe medium", 480-140, 370);

    push();
		translate(110, 100);
		showBeamC(0,0, 538, 0, CLIGHT);
		drawTransducer(CLIGHT, 0);
		translate(538, 0);
		drawTransducer(CBLACK, 180);
		translate(-230-108, 0);
		drawAbsorber("good", 60, 60);
	pop();

    var topslice = 1-max(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));
    var midslice = max(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1))-min(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));;
    var bottomslice = min(threeWayDivvy.getValue(0),threeWayDivvy.getValue(1));
     quantitativedivvy("emitted","detected","absorbed","reflected",160,340,topslice,midslice,bottomslice);

    placeTitleBold("Change what's between source and detector to change the apparent brightness");
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
    var PXSCALE=20;
    push();
	translate(xloc,yloc);
    if(inputtoDivvy.getValue()!=0){
		showPower(inputtoDivvy.getValue()*PXSCALE);
		placeWords(inputPower,-100,-inputtoDivvy.getValue()*PXSCALE*5-20);
    }
			translate(280+164,0);
			if(bottomslice!=0 && inputtoDivvy.getValue()!=0){
				showPower(inputtoDivvy.getValue()*PXSCALE*bottomslice);
				placeWords(ouputPower1,40, -bottomslice*PXSCALE*inputtoDivvy.getValue()*5);
			}
			translate(0,-bottomslice*inputtoDivvy.getValue()*PXSCALE*10);
			translate(-100-164,0);
			if(midslice!=0 && inputtoDivvy.getValue()!=0){
				showPower(inputtoDivvy.getValue()*PXSCALE*midslice);
				placeWords(ouputPower2,40, -midslice*PXSCALE*inputtoDivvy.getValue()*5);
			}
			translate(0,-midslice*inputtoDivvy.getValue()*PXSCALE*10);
			if(topslice!=0 && inputtoDivvy.getValue()!=0){
				showPower(inputtoDivvy.getValue()*PXSCALE*topslice);
				placeWords(ouputPower3,40, -topslice*PXSCALE*inputtoDivvy.getValue()*5);
			}
    pop();
}
