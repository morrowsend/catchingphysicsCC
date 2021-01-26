// {CPStMassMotionMomentumPID}{600}{320}

const scaleFactorVelocity =12;
const scaleFactorMass =6;
const scaleFactorMomentum =26;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(600,320);
	velocitysetter= new CreateControlPuck();
	velocitysetter.create(60,130);

	masssetter=new CreateControlStripHorizontalPositive();
	masssetter.create(20,250);
}

function draw() {
	background(CWHITE);
	var thevelocity = createVector(velocitysetter.getValues().xSet,-velocitysetter.getValues().ySet).mult(scaleFactorVelocity);
	var themass=createVector(-masssetter.getValues().xSet,masssetter.getValues().ySet);
	var themometum=createVector(velocitysetter.getValues().xSet,-velocitysetter.getValues().ySet).mult(scaleFactorMomentum*themass.x);

	placeWords("set values...", 20,85);
	placeWords("mass", 110,255);
	placeWords("velocity", 110, 102);

	push();
		translate(240,130);
		push();
		rotate(thevelocity.heading());
		showVelocity(thevelocity.mag(),90,CPOVALICE);
		pop();
		translate(0,120);
		showMass(themass.x*scaleFactorMass, 90, CIDEAGREY);
		translate(180,-70);
		push();
		rotate(themometum.heading());
		showMomentum(themometum.mag(),90,CPOVALICE);
		pop();
	pop();


   placeTitleBold("Set mass and velocity to set momentum");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}

