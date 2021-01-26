// CPSnTradeOffForceDistancePID

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
	
	sliderLifts=new createSliderDivider(20,80,60,15,1,[0.5],false);
	boxesbutton = new CreateCheckButton(474, 340,"trade-off",false);

}


function draw() {
	background(CWHITE);
	boxesbutton.drawButton();
	sliderLifts.draw();
    
    var liftdifficulty = int(sliderLifts.getValue()*2);
    console.log(liftdifficulty);
	placeWords("set quantities", locpucks[0]-40,locpucks[1]-45);

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);
    
	placeWords("distance", locpucks[0],locpucks[1]+61);
	placeWords("force", locpucks[0]+50, locpucks[1]-28);
// console.log(values[0].y);
	push();
		translate(100, 373);
		showDisplacement(values[0].x/8, 0, CIDEAGREEN);
		translate(40, -values[0].x/8*PXSCALE);
		showForce(values[0].y/8, 0, CIDEABLUE);
// 			drawHydraulicSystem((values[0].y/30)+.3,(values[0].x*4));
	pop();
	
	push();
		translate(220,373);
		showEnergy(11*((values[0].y/80)*(values[0].x/80)));
		stroke(CDEVICEGREY);
			for (i = 0; i < 11; i++) {
					line(25, -i*20, 45, -i*20)
				}
				placeLeadLineShort("to get lift done", 55, -40-liftdifficulty*60)
	pop();
        
	if (boxesbutton.buttonisChecked){
	drawTradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,CCONLIGHTGREEN,CCONPINK);
	}
	placeWordsFrame("set what's needed to get the job done (how much lifting)", 45, 70, 80, 100);
 placeTitleBold("Trade-offs in lifting: between force and distance");
}

function mousePressed(){
        sliderLifts.mousePressed();
	}
function mouseReleased(){
        sliderLifts.mouseReleased();
		boxesbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
