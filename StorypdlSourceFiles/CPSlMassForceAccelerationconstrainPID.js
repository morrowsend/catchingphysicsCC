// {CPSlMassForceAccelerationconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    forceSet=new IanSlider(40,100,100,15,0,[0.7],false);
    massSet=new IanSlider(40,300,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);

    forceSet.draw();
    massSet.draw();

    var variedForce = (forceSet.getValue(0)-0.5);
    var variedMass = 0.2+massSet.getValue(0);

    var accelerationnow=variedForce/variedMass;

    push();
		translate(350, 250);
		pspace2D(150, 200, "mass", "acceleration", variedMass*45, 30*accelerationnow);
    pop();


	words("set\nforce",70,110);
    words("vary\nmass",70,310);
	titleBold("Possibilities limited: Set force, vary mass, see the acceleration");
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
