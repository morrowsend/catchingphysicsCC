// {CPStNewton2VaryForceconstrainPID}{800}{600}


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 600);
    forceSet=new createSliderDivider(40,300,100,15,0,[0.7],false);
    massSet=new createSliderDivider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);

    forceSet.draw();
    massSet.draw();


    var variedForce = (forceSet.getValue(0)-0.5);
    var variedMass = 0.2+massSet.getValue(0);

    var accelerationnow=variedForce/variedMass;

    push();
    translate(350, 250);
    createPossSpace2D(150, 200,  "acceleration","force", variedForce*70, 50*accelerationnow);
    pop();

    push();
		translate(700, 250);
		showMass(variedMass*3, CIDEAGREY);
		showForce(variedForce*35, 0, CFORCEBLUE);
		translate(20+variedMass*30, 0);
		showAcceleration(accelerationnow*6, 0, CACCELERATION);
	pop();



	placeWords("vary\nforce",70,310);
    placeWords("set\nmass",70,110);
	placeTitleBold("Explore possibilities: Set mass, vary force, see the acceleration");
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
