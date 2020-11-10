// CPSnPossibleOrImpossibleChangesPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
	createCanvas(520,440);
	energybefore=new IanSlider(40,100,100,15,0,[0.6],false);
	energyafter=new IanSlider(40,280,100,15,0,[0.3],false);
	morebutton = new checkButton(374,80,"tell me more",false);
}

function draw() {
    background(cWhite);
    
    conceptualPane(280, 150, 150, 150);
    conceptualPane(280, 330, 150, 150);
    
    push();
		translate(70, 140);
		paneBadgeSnapshot();
		words("snapshot before", 0, 80);
		translate(0, 180);
		paneBadgeSnapshot();
		words("snapshot after", 0, 80);
	pop();

    morebutton.drawButton();
	energybefore.draw();
    energyafter.draw();
	var shiftedenergybefore = energybefore.getValue()*pixelscaling;
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
	
	if(morebutton.buttonisChecked){
advicedroid(450, 120, "Imagine a change.\n\nWhatever you do, if the energy to be shifted from stores is less than the energy to be shifted to stores, that change will be imposible ", 120, 280-66);
		}
    
	
	words("energy shifted\nfrom stores", 70, 110);
	words("energy shifted\nto stores", 70, 290);

 titleBold("deciding if a change is possible or impossible");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}

function mousePressed(){
        energybefore.mousePressed();
        energyafter.mousePressed();

	}
function mouseReleased(){
        energybefore.mouseReleased();
        energyafter.mouseReleased();
		morebutton.changeState();
        }
