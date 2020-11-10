// CPKfASimplerBoatPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(400, 250);
    transitionProgress=new IanSlider(20,100,80,15,0,[0],false);
}

function draw() {
    background(cWhite);
    noStroke();
	fill(200,transitionProgress.getValue()*255);
	rect(100,120,140,40);
	strokeWeight(3);
	stroke(160,transitionProgress.getValue()*255);
	line(100, 160, 240, 160);
	line(100, 160, 100, 120);
	line(240, 160, 240, 120);

	stroke(240,(1-transitionProgress.getValue())*255);
	fill(125,(1-transitionProgress.getValue())*255);
	ellipseMode(CENTER);
	arc(175, 120, 180, 80, 0, PI, CHORD);

	transitionProgress.draw();
	words("simpler", 40, 110);
	
	advicedroid(330, 80, "a box is simpler to think with.", 80, 70);

	titleBold("re-imagining a boat");
}

function mousePressed(){
        transitionProgress.mousePressed();
	}

function mouseReleased(){
        transitionProgress.mouseReleased();
    }

function translateObject(startcoordinate,finishcoordinate){
return locationnow = startcoordinate + (finishcoordinate-startcoordinate)*transitionProgress.getValue()
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
