// filename: SgLakeReflectionPID
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
lake = loadImage("../__PDLgraphics/SgSmoothLakeReflection.svg");

}
function setup(){
    createCanvas(840, 520);
    drawpeak = new checkButton(680, 88,"rays from peak",true);
    drawfoot = new checkButton(680, 240,"rays from foot",true);
    drawdirect = new checkButton(680, 298,"direct rays",true);
    drawreflected = new checkButton(680, 450,"reflected rays",true);
}

function draw() {
    background(cWhite);
    conceptualPane(344, 180, 650, 180);
    conceptualPane(344, 390, 650, 180);
    transitionRedescribe(344, 285, 90);
	image(lake, 20, 100);
	image(lake, 20, 310);
    drawpeak.drawButton();
    drawfoot.drawButton();
    drawdirect.drawButton();
    drawreflected.drawButton();
    
// 	image(foot, 20, 100);

if (drawpeak.buttonisChecked){
	//peak
	rayC(59,106, 351, 227);
	rayC(351, 227,564,172);
	rayC(59,106,564,172);
	}
if (drawfoot.buttonisChecked){
	//foot
	rayC(110,194, 192,226);
	rayC(192,226,564,172);
	rayC(110,194,564,172);
	}
if (drawdirect.buttonisChecked){
	//peak
	rayC(59,316,564,382);
	rayC(110,404,564,382);
	}
if (drawreflected.buttonisChecked){
	//foot
	rayC(59,316, 351, 437);
	rayC(351, 437,564,382);
	rayC(110,404, 192,436);
	rayC(192,436,564,382);
	}
	push();
		translate(564,172);
		eye(0);
		translate(0, 210);
		eye(0);
	pop();
	
// 	words(" from the peak and foot of a mountain", 28, 100);

	titleBold("Drawing rays reflecting off a smooth lake");
}

function mouseReleased(){
	drawpeak.changeState();
	drawfoot.changeState();
	drawdirect.changeState();
	drawreflected.changeState();
}
