// CPKfHowForcesVaryMagneticPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    massSet=new IanSlider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"separation / m","magnetic / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(cWhite);

    massSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();
    var k = massSet.getValue()/45;
    var theSeparation = -exploreThisGraph.getValues().xSet*1.7;
	theSeparation=constrain(theSeparation,0.2,0.9);

    var theForce = k/(theSeparation*theSeparation*theSeparation);
    exploreThisGraph.plotValues(theSeparation,theForce);
    
    push();
		translate(35, 450);
		mass(3, cideaGrey);
		force(theForce*pxscale*2, 90, cmagnetic);
    pop();
    
    
    words('set strength\nof magnet', 50, 280);

  titleBold("Affecting the magnetic force: set strength of magnet nearby, vary separation");
}

function mousePressed(){
    massSet.mousePressed();
    
	}
function mouseReleased(){
    massSet.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
