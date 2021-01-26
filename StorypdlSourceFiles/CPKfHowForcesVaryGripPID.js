// CPKfHowForcesVaryGripPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    roughnessSet=new createSliderDivider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"supporting force / N","grip / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

    roughnessSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = roughnessSet.getValue();
    var x = -exploreThisGraph.getValues().xSet*1.8;
    var F = k*x;
    exploreThisGraph.plotValues(x,F);
    
    push();
		translate(235, 450);
		showMass(3, CIDEAGREY);
		translate(0, 15);
		showForce(F*PXSCALE*2, 90, CGRIP);
		translate(0, -15);
		showForce(x*PXSCALE*2.8, 0, CCOMPRESSION);
    pop();
    
    
    placeWords('set roughness\nof the surface', 50, 280);

  placeTitleBold("Affecting the grip force: choose the surface roughness, vary supporting force");
}

function mousePressed(){
    roughnessSet.mousePressed();
    
	}
function mouseReleased(){
    roughnessSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
