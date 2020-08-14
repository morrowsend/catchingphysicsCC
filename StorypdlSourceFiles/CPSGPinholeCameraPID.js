// SGPinholeCameraPID
const hh=50; //half camera height
    
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(650, 280);
    candleposition = new controlStripHorizontal();
	candleposition.create(170,100);    
    candleheight = new controlStripVerticalPositive();
	candleheight.create(40,180);    
	cameralength = new controlStripHorizontal();
	cameralength.create(440,100);
	drawrays = new checkButton(517, 240,"draw rays",false);
}

function draw() {
    background(cWhite);
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
		stroke(cdeviceGrey);
		line(0, 2, 0, hh);
		line(0, -2, 0, -hh);
		line(0, hh, sp, hh);
		line(0, -hh, sp, -hh);
		line(sp, hh, sp, -hh	);
		// candle
		strokeWeight(9);
		strokeCap(SQUARE)
		stroke(clight);
		fill(clight);
		ellipseMode(CENTER);
		ellipse(-cp,-cu-4,4,7);
		stroke(cideaRed);
		line(-cp, -cu, -cp, cd);
				
		if (drawrays.buttonisChecked){
			// 	the rays
			rayC(-cp, -cu, sp,sd );
			rayC(-cp, cd, sp, -su);
			// image
			stroke(clight);
			fill(clight);
			ellipseMode(CENTER);
			ellipse(sp,sd+4,4*sp/cp,7*sp/cp);
			stroke(cideaRed);
			strokeWeight(9*sp/cp);
			line(sp, -su, sp, sd);
		}
	pop();

	titleBold("Drawing rays to predict what's seen on the back of a pinhole camera");
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
