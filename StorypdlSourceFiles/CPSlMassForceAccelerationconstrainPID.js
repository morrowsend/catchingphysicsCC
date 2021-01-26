// {CPSlMassForceAccelerationconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    forceSet=new createSliderDivider(40,100,100,15,0,[0.7],false);
    massSet=new createSliderDivider(40,300,100,15,0,[0.7],false);
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
		createPossSpace2D(150, 200, "mass", "acceleration", variedMass*45, 30*accelerationnow);
    pop();


	placeWords("set\nforce",70,110);
    placeWords("vary\nmass",70,310);
	placeTitleBold("Possibilities limited: Set force, vary mass, see the acceleration");
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
