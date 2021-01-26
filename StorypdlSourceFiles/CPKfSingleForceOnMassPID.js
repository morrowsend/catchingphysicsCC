// CPKfSingleForceOnMassPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
      createCanvas( 400, 300);
    noLoop();
}

function draw() {
    background(CWHITE);

    push();
    translate(60,200);
    showMass(4,CDEVICEGREY);
    translate(0,-20);
   showForce(8,0,CTENSION);
    pop();

    placeAdviceDroid(330, 60, "The force is shown by a coloured arrow, always touching the thing.\nThe thing is just a rectangle or circle: keep it simple!\n\nThe force is exerted by the environment, so you don't nnned to show any of the surroundings.", 280, 160);

  placeTitleBold("drawing a force exerted on something");
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
