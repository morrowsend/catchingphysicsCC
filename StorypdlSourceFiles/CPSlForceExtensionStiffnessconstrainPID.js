// {CPSlForceExtensionStiffnessconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    extensionSet=new IanSlider(40,300,100,15,0,[0.7],false);
    stiffnessSet=new IanSlider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);

    extensionSet.draw();
    stiffnessSet.draw();


    var variedextension = (extensionSet.getValue(0));
    var variedstiffness = 0.1+(0.9*stiffnessSet.getValue(0));

    var theforce=variedextension*variedstiffness;

    push();
    translate(350, 250);
    pspace2D(150, 200,  " force","extension", variedextension*80, 60*theforce);
    pop();


	words("vary\nextension",70,310);
    words("set\nstiffness",70,110);
	titleBold("Possibilities limited: Set stiffness, vary extension, see the force");
}

function mousePressed(){
        extensionSet.mousePressed();
        stiffnessSet.mousePressed();
	}

function mouseReleased(){
        extensionSet.mouseReleased();
        stiffnessSet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
