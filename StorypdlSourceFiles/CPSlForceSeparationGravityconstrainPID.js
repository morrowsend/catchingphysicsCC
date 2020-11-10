// {CPSlForceSeparationGravityconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    separationSet=new IanSlider(40,300,100,15,0,[0.7],false);
    gravitySet=new IanSlider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);

    separationSet.draw();
    gravitySet.draw();


    var variedseparation = 0.2+(separationSet.getValue(0));
    var variedgravity = 0.1+(0.9*gravitySet.getValue(0));

    var theforce=variedgravity/(variedseparation*variedseparation);

    push();
    translate(350, 250);
    pspace2D(150, 200,  " force","distance", variedseparation*80, 3*theforce);
    pop();


	words("vary\ndistance\nfrom\nplanet",65,310);
    words("set\ngravitational\npull of\nplanet",65,110);
	titleBold("Possibilities limited: Set gravity, vary separation, see the force");
}

function mousePressed(){
        separationSet.mousePressed();
        gravitySet.mousePressed();
	}

function mouseReleased(){
        separationSet.mouseReleased();
        gravitySet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
