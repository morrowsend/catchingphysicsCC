// PhVaryBetweenSourceDetectorPID

const absorberQuality=[["poor",0.95],["good",0.85],["better",0.65]];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800,520);

    activitySet=new createSliderDivider(40,400,100,15,0,[0.7],false);
    
    numberSet=new createSliderDivider(200,400,100,15,6,[0.14],false);
    
    qualitySet=new createSliderDivider(500,400,100,15,1,[0.5],false);

}

function draw() {
    background(CWHITE);
    
    numberSet.draw();
    placeWords("set number of\nabsorbers in beam", 230, 410);
    activitySet.draw();
    placeWords("set number of\nphotons emitted\nevery second", 70, 410);
    qualitySet.draw();
    placeWords("change absorber\nmaterial", 530, 410);
    
    var numberofabsorbers = (numberSet.getValue()*7).toFixed(0);
    var activity = (activitySet.getValue())*12;
    var quality = absorberQuality[(qualitySet.getValue())*2][0];
    var fracabs = absorberQuality[(qualitySet.getValue())*2][1];
    console.log(fracabs);
    
    push();
		translate(80, 200);
		drawTransducer(CLIGHT, 0);
		translate(600,0);
		drawTransducer(CBLACK, 180);
	pop();
	
	push()
	translate(180, 200);
	for (i = 1; i <= numberofabsorbers; i++) {
		drawAbsorber(quality, 30, 80);
		translate(60,0)
				}
			translate(0,-80);	
	for (i = 0; i < 7-numberofabsorbers; i++) {
				drawAbsorber(quality, 30, 80);
		translate(60,0)
				}
	pop();
	

    push();
		translate(80, 370);
		showQuantity(activity, CACTIVITY, "");
		translate(600, 0);
		showQuantity((activity*pow(fracabs,numberofabsorbers)), CACTIVITY,"");
	pop();
    
	
   
   


  placeTitleBold("Varying what is in the space affects the number of photons at the detector");  
}

function mousePressed(){
        numberSet.mousePressed();
        activitySet.mousePressed();
        qualitySet.mousePressed();

	}
function mouseReleased(){
        numberSet.mouseReleased();
        activitySet.mouseReleased();
        qualitySet.mouseReleased();

    }


function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}




