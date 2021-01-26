// CPSnTradeOffsHydraulics

const magnitudes=[];
let values = [];
const scaleFactor=200;
const locpucks =[514,137];
const tradeOffOffset = 180;


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(640,400);
    
    magnitudes[0]= new CreateControlPuckPositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);
    
    boxesbutton = new CreateCheckButton(474, 340,"trade-off",false);
}


function draw() {
	background(CWHITE);
	placeWords("set quantities", locpucks[0]-40,locpucks[1]-45);
	boxesbutton.drawButton();

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);
    
	placeWords("distance", locpucks[0],locpucks[1]+61);
	placeWords("force", locpucks[0]+50, locpucks[1]-28);
console.log(values[0].y);
	push();
		translate(100, 300);
		drawHydraulicSystem((values[0].y/30)+.3,(values[0].x*4));
	pop();
	
	push();
		translate(391,301);
		showEnergy(((values[0].y/10)+.3*(values[0].x*2))/4);
	pop();
        
	if (boxesbutton.buttonisChecked){
	drawTradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,CCONLIGHTGREEN,CCONPINK);
	}
 placeTitleBold("Trade-offs for a hydraulic system");
}

function mouseReleased(){
		boxesbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
