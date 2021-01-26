// CPKfHowForcesVaryBuoyancyPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    fluidSet=new createSliderDivider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"immersion / m","buoyancy / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

    fluidSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = fluidSet.getValue();
    var x = -exploreThisGraph.getValues().xSet*1.8;
    var F = k*x;
    exploreThisGraph.plotValues(x,F);
    
    push();
		translate(235, 450);
		showMass(3, CIDEAGREY);
		translate(0, 15);
		showForce(F*PXSCALE*3, 0, CBUOYANCY);
    pop();
    
    
    placeWords('choose the density\nof the fluid which you\nimmerse the object in', 50, 280);

  placeTitleBold("The local environment affects the buoyancy force: choose fluid, vary immersion");
}

function mousePressed(){
    fluidSet.mousePressed();
    
	}
function mouseReleased(){
    fluidSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
