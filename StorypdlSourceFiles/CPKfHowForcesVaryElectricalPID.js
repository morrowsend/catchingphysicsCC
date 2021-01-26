// CPKfHowForcesVaryElectricalPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    chargeSet=new createSliderDivider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"separation / m","electrical / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

    chargeSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = chargeSet.getValue()/45;
    var theSeparation = -exploreThisGraph.getValues().xSet*1.7;
	theSeparation=constrain(theSeparation,0.2,0.9);
    var theForce = k/(theSeparation*theSeparation*theSeparation);
    exploreThisGraph.plotValues(theSeparation,theForce);

    
    push();
		translate(35, 450);
		showMass(3, CIDEAGREY);
		showForce(theForce*PXSCALE, 90, CMAGNETIC);
    pop();
    
    
    placeWords('set charge\nnearby', 50, 280);

  placeTitleBold("Affecting the electric force: set how much charge is nearby, vary separation");
}

function mousePressed(){
    chargeSet.mousePressed();
    
	}
function mouseReleased(){
    chargeSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
