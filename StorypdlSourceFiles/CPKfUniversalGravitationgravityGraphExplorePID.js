// CPKfUniversalGravitationgravityGraphExplorePID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(730, 450);
    mass1Set=new IanSlider(20,80,60,15,4,[0.7],false);
    mass2Set=new IanSlider(20,180,60,15,4,[0.7],false);
	exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(200,150,200,1,"separation / m","gravity force / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(cWhite);

    mass1Set.draw();
    mass2Set.draw();
    exploreThisGraph.draw();
    
    exploreThisGraph.getValues();
    var k = (0.1+mass1Set.getValue())*(0.1+mass2Set.getValue())/28;
    var theSeparation = -exploreThisGraph.getValues().xSet*1.8;
    theSeparation=constrain(theSeparation,0.2,0.9);
    var theForce = k/(theSeparation*theSeparation);
    if (theForce<1){
    exploreThisGraph.plotValues(theSeparation,theForce);
    }
    
    push();
		translate(300, 400);
		mass(mass1Set.getValue()*3, cideaBlue);
		push();
			translate(mass1Set.getValue()*1.5, 0);
			force(theForce*pxscale*2, 90, cforceRed);
		pop();
		translate(theSeparation*200, 0);
		mass(mass2Set.getValue()*3, cideaRed);
		push();
			translate(mass2Set.getValue()*1.5, 0);
			force(theForce*pxscale*2, -90, cforceBlue);
		pop();
    pop();
    
    
    words('set masses', 50, 90);

  titleBold("The gravity force depends on the values of both masses and the separation");
}

function mousePressed(){
    mass1Set.mousePressed();
    mass2Set.mousePressed();
    
	}
function mouseReleased(){
    mass1Set.mouseReleased();
    mass2Set.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
