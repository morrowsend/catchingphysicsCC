// CPTrALiceSettingtimePID

const pathscaling = 35;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont = loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
  createCanvas(800, 280);
 
  setLHmirror = new CreateControlStripHorizontalPositive();
  setLHmirror.create(470, 478-290);
  setRHmirror = new CreateControlStripHorizontalPositive();
  setRHmirror.create(257, 478-290);

}

function draw() {
  background(CWHITE);


  let theLHmirror = createVector(
    setLHmirror.getValues().xSet,
    setLHmirror.getValues().ySet
  );
  let toLHmirrorpath = -theLHmirror.x * pathscaling;
  let theRHmirror = createVector(
    setRHmirror.getValues().xSet,
    setRHmirror.getValues().ySet
  );
  let toRHmirrorpath = -theRHmirror.x * pathscaling;

 
push();
	translate(400, 120);
  showPath(0, 0, toLHmirrorpath, 90, CIDEAGREEN);
  showPath(0, -3, toLHmirrorpath, 90, CIDEAGREEN);
  if (toLHmirrorpath>0) {
    push();
    translate(toLHmirrorpath*PXSCALE/2,0);
    showDurationPoV(toLHmirrorpath, 40, CPOVALICE);
    translate(toLHmirrorpath*PXSCALE/2,0);
    drawWaypoint(CIDEAGREEN);
    pop();
  }
  
  showPath(0, 0, toRHmirrorpath, 270, CIDEARED);
  showPath(0, -4, toRHmirrorpath, 270, CIDEARED);
  if (toRHmirrorpath>0) {
    push();
    translate(-toRHmirrorpath*PXSCALE/2,0);
    showDurationPoV(toRHmirrorpath, 40, CPOVALICE);
    translate(-toRHmirrorpath*PXSCALE/2,0);
    drawWaypoint(CIDEARED);
    pop();
  }
  
  drawPoVObject("Alice");
  

  pop();
 

  placeWordsFrame("trip time to  and from waypoint", 259, 492-290, 100, 70);
  placeWordsFrame("trip time to and from waypoint", 472, 492-290, 100, 70);

  placeTitleBold("Alice checking for the same time");
}

function mouseReleased() {
  worldlineAliceButton.changeState();
  sametimeButton.changeState();
  latertimeButton.changeState();
  multipletimesButton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
