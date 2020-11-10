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
    background(cWhite);

    push();
    translate(60,200);
    mass(4,cdeviceGrey);
    translate(0,-20);
   force(8,0,ctension);
    pop();

    advicedroid(330, 60, "The force is shown by a coloured arrow, always touching the thing.\nThe thing is just a rectangle or circle: keep it simple!\n\nThe force is exerted by the environment, so you don't nnned to show any of the surroundings.", 280, 160);

  titleBold("drawing a force exerted on something");
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
