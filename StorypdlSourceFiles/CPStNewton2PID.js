// {CpStNewton2PID}{440}{440}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
	createCanvas(440, 440);
	forceSet=new createSliderDivider(20,80,100,15,0,[0.7],false);
    massSet=new createSliderDivider(20,190,100,15,0,[0.4],false);
}
function draw() {
	background(CWHITE);

	forceSet.draw();
    massSet.draw();

    placeAdviceDroid(370, 80, "Acceleration, force and mass are constrained. You cannot have any old values; there is a relationship that fixes the values you are allowed to have.\nThis is a great empirical discovery.", 180, 150);


	var variedForce = (forceSet.getValue(0)-0.5);
	var variedMass = 0.2+massSet.getValue(0);
	var accelerationnow=variedForce/variedMass;


	push();
		translate(150, 250);
		showMass(variedMass*3, CIDEAGREY);
		showForce(variedForce*35, 0, CFORCEBLUE);
		translate(20+variedMass*30, 0);
		showAcceleration(accelerationnow*6, 0, CACCELERATION);
	pop();



	placeWords("vary\nforce",40,90);
    placeWords("vary\nmass",40,200);
	placeTitleBold("An introduction to exploring a relationship");
}

function mousePressed(){
        forceSet.mousePressed();
        massSet.mousePressed();
	}

function mouseReleased(){
        forceSet.mouseReleased();
        massSet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
