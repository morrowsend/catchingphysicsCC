// {CPSgLakeReflectionPID}{840}{520}
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	lake = loadImage("../__PDLgraphics/SgSmoothLakeReflection.svg");
}

function setup(){
    createCanvas(840, 520);
    drawpeak = new CreateCheckButton(680, 88,"rays from peak",true);
    drawfoot = new CreateCheckButton(680, 240,"rays from foot",true);
    drawdirect = new CreateCheckButton(680, 298,"direct rays",true);
    drawreflected = new CreateCheckButton(680, 450,"reflected rays",true);
}

function draw() {
    background(CWHITE);
    placeConceptualPane(344, 180, 650, 180);
    placeConceptualPane(344, 390, 650, 180);
    placeTransitionRedescribe(344, 285, 90);
	image(lake, 20, 100);
	image(lake, 20, 310);
    drawpeak.drawButton();
    drawfoot.drawButton();
    drawdirect.drawButton();
    drawreflected.drawButton();

// 	image(foot, 20, 100);

if (drawpeak.buttonisChecked){
	//peak
	showRayC(59,106, 351, 227);
	showRayC(351, 227,564,172);
	showRayC(59,106,564,172);
	}
if (drawfoot.buttonisChecked){
	//foot
	showRayC(110,194, 192,226);
	showRayC(192,226,564,172);
	showRayC(110,194,564,172);
	}
if (drawdirect.buttonisChecked){
	//peak
	showRayC(59,316,564,382);
	showRayC(110,404,564,382);
	}
if (drawreflected.buttonisChecked){
	//foot
	showRayC(59,316, 351, 437);
	showRayC(351, 437,564,382);
	showRayC(110,404, 192,436);
	showRayC(192,436,564,382);
	}
	push();
		translate(564,172);
		 drawEye(0);
		translate(0, 210);
		 drawEye(0);
	pop();

// 	placeWords(" from the peak and foot of a mountain", 28, 100);

	placeTitleBold("Drawing rays reflecting off a smooth lake");
}

function mouseReleased(){
	drawpeak.changeState();
	drawfoot.changeState();
	drawdirect.changeState();
	drawreflected.changeState();
}
