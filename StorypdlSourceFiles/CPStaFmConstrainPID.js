// {StaFmConstrainPID}{800}{740}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup(){
	createCanvas(800,740);
	exploreaF= new CreateExploreRelationshipGraph;;
	exploreaF.create(60,340,200,4,"acceleration / JustUnit{m s -2}","force / N");
	exploreaF.setLabels();
    setmass=new createSliderDivider(19,460,80,15,0,[0.3],false);

}
function draw() {
	background(CWHITE);
	exploreaF.draw();
// 	var R = .4;
	var m = (setmass.getValue()+1)*8;
	var a = -exploreaF.getValues().xSet*2;
	var F = a*m*.058;
	exploreaF.plotValues(a,F);
    setmass.draw();

	push();
		translate(162,180);
		showMass(m/1.4, CIDEAGREY);
		showForce(F*15, 90, CFORCEBLUE);
		translate(0,-m/2*PIXELSCALING-8);
		showAcceleration(a*12, 90, CACCELERATION);
	pop();

	placeWords("set the\nmass",49,470);
	placeFractionCBAWrite("acceleration", "force", "mass", 407, 180);



	placeTitleBold("acceleration, force and mass are constrained");
}

function mousePressed(){
        setmass.mousePressed();
	}
function mouseReleased(){
        setmass.mouseReleased();
        }
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
