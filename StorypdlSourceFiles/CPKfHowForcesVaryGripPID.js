// CPKfHowForcesVaryGripPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    roughnessSet=new IanSlider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"supporting force / N","grip / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(cWhite);

    roughnessSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = roughnessSet.getValue();
    var x = -exploreThisGraph.getValues().xSet*1.8;
    var F = k*x;
    exploreThisGraph.plotValues(x,F);
    
    push();
		translate(235, 450);
		mass(3, cideaGrey);
		translate(0, 15);
		force(F*pxscale*2, 90, cgrip);
		translate(0, -15);
		force(x*pxscale*2.8, 0, ccompression);
    pop();
    
    
    words('set roughness\nof the surface', 50, 280);

  titleBold("Affecting the grip force: choose the surface roughness, vary supporting force");
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
