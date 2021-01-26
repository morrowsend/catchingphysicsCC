// {CPSgPinholeCameraPID}{650}{280}
const hh=50; //half camera height

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(650, 280);
    candleposition = new CreateControlStripHorizontal();
	candleposition.create(170,100);
    candleheight = new CreateControlStripVerticalPositive();
	candleheight.create(40,180);
	cameralength = new CreateControlStripHorizontal();
	cameralength.create(440,100);
	drawrays = new CreateCheckButton(517, 240,"draw rays",false);
}

function draw() {
    background(CWHITE);
    drawrays.drawButton();

	var thepos=createVector(candleposition.getValues().xSet,candleposition.getValues().ySet);
	var cp=180+thepos.x*140; // from candle to pinhole
	var thechange=createVector(candleheight.getValues().xSet,candleheight.getValues().ySet);
	var cu=cd=30+thechange.y*10; // half height of candle
//
    var movewall=createVector(cameralength.getValues().xSet,cameralength.getValues().ySet);
    var sp=90-movewall.x*80; //from pinhole to screen

    var su = cu*(sp/cp);
    var sd = cd*(sp/cp);
	push();
		translate(350, 180);
		// the camera
		strokeWeight(1);
		stroke(CDEVICEGREY);
		line(0, 2, 0, hh);
		line(0, -2, 0, -hh);
		line(0, hh, sp, hh);
		line(0, -hh, sp, -hh);
		line(sp, hh, sp, -hh	);
		// candle
		strokeWeight(9);
		strokeCap(SQUARE)
		stroke(CLIGHT);
		fill(CLIGHT);
		ellipseMode(CENTER);
		ellipse(-cp,-cu-4,4,7);
		stroke(CIDEARED);
		line(-cp, -cu, -cp, cd);

		if (drawrays.buttonisChecked){
			// 	the rays
			showRayC(-cp, -cu, sp,sd );
			showRayC(-cp, cd, sp, -su);
			// image
			stroke(CLIGHT);
			fill(CLIGHT);
			ellipseMode(CENTER);
			ellipse(sp,sd+4,4*sp/cp,7*sp/cp);
			stroke(CIDEARED);
			strokeWeight(9*sp/cp);
			line(sp, -su, sp, sd);
		}
	pop();

	placeTitleBold("Drawing rays to predict what's seen on the back of a pinhole camera");
}

function mouseReleased(){
	drawrays.changeState();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
