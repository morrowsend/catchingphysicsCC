// {CPCgAlternatinCurrentPID}{600}{600}
let runtime = 0;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont = loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
  createCanvas(600, 600);
  advicebutton = new CreateCheckButton(453, 65, "tell me more", false);
  loopbutton = new CreateCheckButton(460, 284, "show loops", false);
}

function draw() {
  background(CWHITE);
  advicebutton.drawButton();
  loopbutton.drawButton();

  var ropespeed = -120 * cos(runtime / 100);
  var magnitudetheCurrent = 8 * sin(runtime / 100);

  push();
  translate(100, 200);
  if (loopbutton.buttonisChecked) {
    drawLoopOne();
    push();
    translate(0, 252);
    drawLoopOne();
    pop();
  }
  circuitAC("bulb");

  push();
  translate(30, 0);
  showCurrentArrow(magnitudetheCurrent, 0);
  translate(156, 0);
  showCurrentArrow(magnitudetheCurrent, 180);
  translate(-80, 0);
  showCurrentArrow(magnitudetheCurrent, 90);
  showCurrentArrow(magnitudetheCurrent, 270);
  pop();
  if (advicebutton.buttonisChecked) {
    placeAdviceDroid(
      430,
      -100,
      "The current alternates.A to-and-fro motion.",
      140,
      80
    );
    placeAdviceDroid(
      430,
      152,
      "The rope flows first one way and then the other. A to-and-fro motion.",
      140,
      80
    );
  }

  pop();

  push();
  translate(-85 + 184, 260 + 300);
  if (ropespeed >= 0) {
    drawRopeLoop(0, 0, 216, 214, CIDEABLUE, ropespeed);
  } else {
    scale(-1, 1);
    ropespeed = -ropespeed;
    drawRopeLoop(-216, 0, 216, 214, CIDEABLUE, ropespeed);
  }
  pop();

  placeTitleBold("Alternating electrical loops and rope loops");
  runtime++;
}

function circuitAC(kind) {
  push();
  noFill();
  drawACsource(0, 0, SERIESOFFSET - 4, SERIESOFFSET - 4);
  strokeWeight(1);
  stroke(CCIRCUITRED);
  line(0, -SERIESOFFSET, LOOPOFFSET, -SERIESOFFSET);
  line(0, SERIESOFFSET, LOOPOFFSET, SERIESOFFSET);
  if (kind == "bulb") {
    drawPositionedBulb(LOOPOFFSET, 0, SERIESOFFSET - 21, SERIESOFFSET - 21);
  } else if (kind == "resistor") {
    drawPositionedResistor(LOOPOFFSET, 0, SERIESOFFSET - 21, SERIESOFFSET - 21);
  }
  pop();
}

function drawACsource(xpos, ypos, upperline, lowerline) {
  // used to create circuits, not called directly
  push();
  strokeWeight(1);
  stroke(CCIRCUITRED);
  line(xpos, ypos - 25, 0, ypos - (upperline + 5));
  strokeWeight(2);
  stroke(CCIRCUITBLACK);
  ellipse(0, 0, 50);
  beginShape();
  vertex(-13.5, 0.5);
  bezierVertex(-13.5, 0.5, -10.55, -11.5, -7, -11.5);
  bezierVertex(-3.45, -11.5, -0.5, 0.5, -0.5, 0.5);
  vertex(-0.5, 0.5);
  bezierVertex(-0.5, 0.5, 2.45, 12.5, 6, 12.5);
  bezierVertex(9.55, 12.5, 12.5, 0.5, 12.5, 0.5);
  vertex(12.5, 0.5);
  endShape();
  strokeWeight(1);
  stroke(CCIRCUITRED);
  line(xpos, ypos + 25, xpos, ypos + lowerline + 5);
  pop();
}

function mouseReleased() {
  advicebutton.changeState();
  loopbutton.changeState();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("aSnapshot", "png");
  }
  return false;
}
