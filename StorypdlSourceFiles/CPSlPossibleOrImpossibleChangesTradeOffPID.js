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
	energyafter=new IanSlider(40,280,100,15,0,[0.3],false);
	morebutton = new checkButton(374,80,"tell me more",false);

	magnitudes[0]= new controlPuckpositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);

    boxesbutton = new checkButton(534, 380,"trade-off",false);
}

function draw() {
    background(cWhite);

    conceptualPane(280, 150, 150, 150);
    conceptualPane(280, 330, 150, 150);

    words("set quantities", locpucks[0]-40,locpucks[1]-45);
	boxesbutton.drawButton();

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	words("distance", locpucks[0],locpucks[1]+61);
	words("force", locpucks[0]+50, locpucks[1]-28);

    push();
		translate(70, 140);
		paneBadgeSnapshot();
		words("snapshot before", 0, 80);
		translate(0, 180);
		paneBadgeSnapshot();
		words("snapshot after", 0, 80);
	pop();

    morebutton.drawButton();
    energyafter.draw();
	var shiftedenergybefore = ((values[0].y/10)+.3*(values[0].x*2))/6;
	var shiftedenergyafter = energyafter.getValue()*pixelscaling;

    if(shiftedenergybefore>=shiftedenergyafter){
		transitionIntervene(280, 150+75+15, 90)
    }

    push();
		translate(280, 200);
		energy(shiftedenergybefore);
		translate(0, 180);
		energy(shiftedenergyafter);
	pop();


	if (boxesbutton.buttonisChecked){
	tradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,cconlightgreen,cconpink);
	}
	if(morebutton.buttonisChecked){
advicedroid(450, 120, "Imagine a change.\n\nWhatever you do, if the energy to be shifted from stores is less than the energy to be shifted to stores, that change will be imposible ", 120, 280-66);
		}


	words("energy shifted\nfrom stores", 70, 110);
	words("energy shifted\nto stores", 70, 290);

 titleBold("deciding if a change is possible or impossible, with trade-offs");
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
