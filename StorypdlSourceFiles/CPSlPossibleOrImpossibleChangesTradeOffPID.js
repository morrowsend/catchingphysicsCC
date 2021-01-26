// {CPSlPossibleOrImpossibleChangesTradeOffPID}{720}{440}

const magnitudes=[];
let values = [];
const scaleFactor=200;
const locpucks =[574,161];
const tradeOffOffset = 180;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
	createCanvas(720,440);
	energyafter=new createSliderDivider(40,280,100,15,0,[0.3],false);
	morebutton = new CreateCheckButton(374,80,"tell me more",false);

	magnitudes[0]= new CreateControlPuckPositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);

    boxesbutton = new CreateCheckButton(534, 380,"trade-off",false);
}

function draw() {
    background(CWHITE);

    placeConceptualPane(280, 150, 150, 150);
    placeConceptualPane(280, 330, 150, 150);

    placeWords("set quantities", locpucks[0]-40,locpucks[1]-45);
	boxesbutton.drawButton();

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	placeWords("distance", locpucks[0],locpucks[1]+61);
	placeWords("force", locpucks[0]+50, locpucks[1]-28);

    push();
		translate(70, 140);
		placePaneBadgeSnapshot();
		placeWords("snapshot before", 0, 80);
		translate(0, 180);
		placePaneBadgeSnapshot();
		placeWords("snapshot after", 0, 80);
	pop();

    morebutton.drawButton();
    energyafter.draw();
	var shiftedenergybefore = ((values[0].y/10)+.3*(values[0].x*2))/6;
	var shiftedenergyafter = energyafter.getValue()*PIXELSCALING;

    if(shiftedenergybefore>=shiftedenergyafter){
		placeTransitionIntervene(280, 150+75+15, 90)
    }

    push();
		translate(280, 200);
		showEnergy(shiftedenergybefore);
		translate(0, 180);
		showEnergy(shiftedenergyafter);
	pop();


	if (boxesbutton.buttonisChecked){
	drawTradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,CCONLIGHTGREEN,CCONPINK);
	}
	if(morebutton.buttonisChecked){
placeAdviceDroid(450, 120, "Imagine a change.\n\nWhatever you do, if the energy to be shifted from stores is less than the energy to be shifted to stores, that change will be imposible ", 120, 280-66);
		}


	placeWords("energy shifted\nfrom stores", 70, 110);
	placeWords("energy shifted\nto stores", 70, 290);

 placeTitleBold("deciding if a change is possible or impossible, with trade-offs");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}

function mousePressed(){
        energyafter.mousePressed();

	}
function mouseReleased(){
        energyafter.mouseReleased();
		boxesbutton.changeState();
		morebutton.changeState();
        }
