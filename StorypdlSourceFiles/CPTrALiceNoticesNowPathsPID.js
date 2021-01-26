// CPTrALiceNoticesNowPathsPID

const pathscaling = 50;

function preload() {
  chatterFont = loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont = loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont = loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
  createCanvas(800, 700);
  worldlineAliceButton = new CreateCheckButton(
    20,
    502,
    "see Alice's worldline",
    false
  );
  sametimeButton = new CreateCheckButton(
    564,
    502,
    'line showing "now" for Alice   ',
    false
  );
  latertimeButton = new CreateCheckButton(564, 540, "a later 'now'", false);
  multipletimesButton = new CreateCheckButton(564, 580, "multiple 'now's'", false);

  setLHmirror = new CreateControlStripHorizontalPositive();
  setLHmirror.create(470, 478);
  setRHmirror = new CreateControlStripHorizontalPositive();
  setRHmirror.create(257, 478);

  setmorenows = new CreateControlStripHorizontalPositive();
  setmorenows.create(564, 630);
}

function draw() {
  background(CWHITE);
  worldlineAliceButton.drawButton();
  sametimeButton.drawButton();
  latertimeButton.drawButton();
  multipletimesButton.drawButton();

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

  let themorenows = createVector(
    setmorenows.getValues().xSet,
    setmorenows.getValues().ySet
  );
  let lineextension = -themorenows.x * 300;

  if (multipletimesButton.buttonisChecked) {
	 //
  }
  if (worldlineAliceButton.buttonisChecked) {
	  stroke(CPOVALICE);
	  strokeWeight(2);
	  line(400, 0, 400, height);
	}
push();
if (latertimeButton.buttonisChecked) {
	translate(400, 410);
}else {
	translate(400,470);
}
  showPath(0, 0, toLHmirrorpath, 45, CIDEAGREEN);
  if (toLHmirrorpath > 0) {
    showPath(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE,
      65,
      -45,
      CIDEAGREEN
    );
    push();
    translate(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE
    );
    drawWaypoint(CIDEAGREEN);
    pop();
  }
  showPath(0, 0, toRHmirrorpath, -45, CIDEARED);
  if (toRHmirrorpath > 0) {
    showPath(
      (-toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      65,
      45,
      CIDEARED
    );
    push();
    translate(
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE
    );
    drawWaypoint(CIDEARED);
    pop();
  }

  var deltay = toLHmirrorpath / sqrt(2) - toRHmirrorpath / sqrt(2);
  var deltax = toLHmirrorpath / sqrt(2) + toRHmirrorpath / sqrt(2);
  var hyp = sqrt(sq(deltay) + sq(deltax));

  push();
  translate(0, 15);
  rotate(-PI / 2);
  drawPoVEye("AliceRight");
  pop();

  if (sametimeButton.buttonisChecked) {
    stroke(CPOVALICE);
    strokeWeight(4);
    line(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE
    );
    line(
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE - (lineextension * deltax) / hyp,
      -((toRHmirrorpath / sqrt(2)) * PXSCALE) + (lineextension * deltay) / hyp
    );
    line(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE,
      (toLHmirrorpath / sqrt(2)) * PXSCALE + (lineextension * deltax) / hyp,
      -((toLHmirrorpath / sqrt(2)) * PXSCALE) - (lineextension * deltay) / hyp
    );
  }

  if (multipletimesButton.buttonisChecked) {
    stroke(CPOVALICE);
    strokeWeight(3);
    push();
	for (i = 0; i < 2; i++) {
	    rotate((atan2(deltay, -deltax)+PI/2));
		   translate(-50, 0);
		   rotate(-(atan2(deltay, -deltax)+PI/2));
    line(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE
    );
    line(
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE,
      -(toRHmirrorpath / sqrt(2)) * PXSCALE - (lineextension * deltax) / hyp,
      -((toRHmirrorpath / sqrt(2)) * PXSCALE) + (lineextension * deltay) / hyp
    );
    line(
      (toLHmirrorpath / sqrt(2)) * PXSCALE,
      -(toLHmirrorpath / sqrt(2)) * PXSCALE,
      (toLHmirrorpath / sqrt(2)) * PXSCALE + (lineextension * deltax) / hyp,
      -((toLHmirrorpath / sqrt(2)) * PXSCALE) - (lineextension * deltay) / hyp
    );
	}
	pop()
	push();
	for (i = 0; i < 4; i++) {
		rotate((atan2(deltay, -deltax)+PI/2));
		   translate(50, 0);
		   rotate(-(atan2(deltay, -deltax)+PI/2));
	line(
	  (toLHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toLHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toRHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toRHmirrorpath / sqrt(2)) * PXSCALE
	);
	line(
	  -(toRHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toRHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toRHmirrorpath / sqrt(2)) * PXSCALE - (lineextension * deltax) / hyp,
	  -((toRHmirrorpath / sqrt(2)) * PXSCALE) + (lineextension * deltay) / hyp
	);
	line(
	  (toLHmirrorpath / sqrt(2)) * PXSCALE,
	  -(toLHmirrorpath / sqrt(2)) * PXSCALE,
	  (toLHmirrorpath / sqrt(2)) * PXSCALE + (lineextension * deltax) / hyp,
	  -((toLHmirrorpath / sqrt(2)) * PXSCALE) - (lineextension * deltay) / hyp
	);
	}
    pop();
  }
pop();
 

  placeWordsFrame("trip time to waypoint", 259, 492, 100, 70);
  placeWordsFrame("trip time to waypoint", 472, 492, 100, 70);
  placeWordsFrame("extend line of nows", 566, 645, 120, 70);

  placeTitleBold("What Alice's notices as now");
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
