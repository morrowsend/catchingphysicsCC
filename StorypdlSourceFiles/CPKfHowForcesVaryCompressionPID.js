// CPKfHowForcesVaryCompressionPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    stiffnessSet=new createSliderDivider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"distortion / m","compression / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

    stiffnessSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = stiffnessSet.getValue();
    var x = -exploreThisGraph.getValues().xSet*1.8;
    var F = k*x;
    exploreThisGraph.plotValues(x,F);
    
    push();
		translate(35, 450);
		showMass(3, CIDEAGREY);
		translate(-15, 0);
		showForce(F*PXSCALE*5, 90, CCOMPRESSION);
    pop();
    
    
    placeWords('set stiffness\nof the distorted part\nof the environment', 50, 280);

  placeTitleBold("The local environment affects the compression force: set stiffness, vary distortion");
}

function mousePressed(){
    stiffnessSet.mousePressed();
    
	}
function mouseReleased(){
    stiffnessSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
