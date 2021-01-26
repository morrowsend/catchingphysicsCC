// CPKfUniversalGravitationgravityGraphExplorePID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(730, 450);
    mass1Set=new createSliderDivider(20,80,60,15,4,[0.7],false);
    mass2Set=new createSliderDivider(20,180,60,15,4,[0.7],false);
	exploreThisGraph= new CreateExploreRelationshipGraph;
    exploreThisGraph.create(200,150,200,1,"separation / m","gravity force / N");
    exploreThisGraph.setLabels();
}

function draw() {
    background(CWHITE);

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
		showMass(mass1Set.getValue()*3, CIDEABLUE);
		push();
			translate(mass1Set.getValue()*1.5, 0);
			showForce(theForce*PXSCALE*2, 90, CFORCERED);
		pop();
		translate(theSeparation*200, 0);
		showMass(mass2Set.getValue()*3, CIDEARED);
		push();
			translate(mass2Set.getValue()*1.5, 0);
			showForce(theForce*PXSCALE*2, -90, CFORCEBLUE);
		pop();
    pop();
    
    
    placeWords('set masses', 50, 90);

  placeTitleBold("The gravity force depends on the values of both masses and the separation");
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
