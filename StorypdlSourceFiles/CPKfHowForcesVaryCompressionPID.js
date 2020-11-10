// CPKfHowForcesVaryCompressionPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    stiffnessSet=new IanSlider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"distortion / m","compression / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(cWhite);

    stiffnessSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = stiffnessSet.getValue();
    var x = -exploreThisGraph.getValues().xSet*1.8;
    var F = k*x;
    exploreThisGraph.plotValues(x,F);
    
    push();
		translate(35, 450);
		mass(3, cideaGrey);
		translate(-15, 0);
		force(F*pxscale*5, 90, ccompression);
    pop();
    
    
    words('set stiffness\nof the distorted part\nof the environment', 50, 280);

  titleBold("The local environment affects the compression force: set stiffness, vary distortion");
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
