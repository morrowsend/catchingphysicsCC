// {CPKfForcesShoppingBagModelPID}
var mentonrep = new Scribble();
var bagseq = [];

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont = loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

  bagseq.push(loadImage("../__PDLgraphics/Kf02BagSequence01.png"));
  bagseq.push(loadImage("../__PDLgraphics/Kf02BagSequence02.png"));
  bagseq.push(loadImage("../__PDLgraphics/Kf02BagSequence03.png"));
}
function setup() {
  createCanvas(800, 600);
  bagone = new CreateMentonModelling(
    CBOD1,
    16,
    700,
    500,
    bagseq,
    320,
    240,
    "L",
    90
  );
}

function draw() {
  background(CWHITE);
  randomSeed(99);
  bagone.drawMenton();
  placeTitleBold("Mental models of a supported bag");
}

function mouseReleased() {
  bagone.stepNumber = 0;
  bagone.changeState();
}
