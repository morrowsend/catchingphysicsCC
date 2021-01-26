// StaFmuncoinstrainedPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
	createCanvas(800,720);
	exploreaF= new CreateExploreUnconstrainedGraph;
	exploreaF.create(60,300,200,4,"acceleration / JustUnit{m s -2}","force / N");
	exploreaF.setLabels();
	setmass=new createSliderDivider(19,460-110,80,15,0,[0.3],false);
}
function draw() {
	background(CWHITE);
	exploreaF.draw();
	setmass.draw();
	var F = exploreaF.getValues().ySet*2;
	var a = -exploreaF.getValues().xSet*2;
	var m = (setmass.getValue()+1)*8;
	exploreaF.plotValues(a*.9,F*.9);

	push();
		translate(162,180);
		showMass(m/1.4, CIDEAGREY);
		showForce(F*15, 90, CFORCEBLUE);
		translate(0,-m/2*PIXELSCALING-8);
		showAcceleration(a*12, 90, CACCELERATION);
	pop();
	
	placeWords("set\nmass\nforce\nacceleration",49,470-110);

	placeTitleBold("acceleration, force and mass not constrained – anything goes");
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
