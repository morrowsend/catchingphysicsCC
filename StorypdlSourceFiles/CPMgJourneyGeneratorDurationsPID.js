// {CPMgJourneyGeneratorDurationsPID}{640}{380}

const numberVectors =6;
const controllers=[];
const durations=[];
var cumulativeduration=0;
const maxjourneylength=60;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	thedisplaced = loadImage("../__PDLgraphics/KazBike/KazAveTop06.svg");
}
function setup(){
	createCanvas(640, 330);

    const yloc =240;
    for (let i = 0; i<numberVectors; i++){
		controllers[i]= new CreateControlStripVerticalPositive();
		let xloc = 130+90*i;
		controllers[i].create(xloc,yloc);
    }

}

function draw() {
	background(CWHITE);
	image(thedisplaced,17,60);

	for (let i = 0; i<controllers.length; i++){
		durations[i]=controllers[i].getValues().ySet*10;
    }

	push();
		translate(40, 280);
placeWords("this leg", -0, -130);
placeWords("all legs", -0, 0);
			for (let i = 0; i<controllers.length; i++){
			translate(90, 0);
			cumulativeduration=0;
			for (let j=0;j<i;j++){
				cumulativeduration+=durations[j];
			}
			push();
				translate(0,-130);
				journeyclock(0,durations[i],maxjourneylength);
			pop();
			if (i!=0){
				journeyclock(cumulativeduration,durations[i],maxjourneylength);
			}else{
				journeyclock(0,durations[i],maxjourneylength);
			}
	}
	pop();
	placeTitleBold("Journey generator: drag the strips to set durations each leg");
}

function journeyclock(starttime,howlong,maxjourneylength){
	var durationsize = 40;
	var angleone = (starttime/maxjourneylength) * 2*PI;
	var angletwo = ((starttime+howlong)/maxjourneylength) * 2*PI;
	noStroke();
	fill(CIDEABLUE);
	ellipse(0,0,durationsize,durationsize);
	if (howlong!=0){
	fill(CDURATIONCLOCKYELLOW);
arc(0,0,durationsize,durationsize,-HALF_PI+angleone, -HALF_PI+angletwo);
}
   }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
