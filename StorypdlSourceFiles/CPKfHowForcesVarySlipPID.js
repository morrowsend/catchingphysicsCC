// CPKfHowForcesVarySlipPID

let chooseSpeed =false;

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
    exploreThisGraph.create(270,150,200,1,"supporting force / N","slip / N");
    exploreThisGraph.setLabels();

	choiceButton= new CreateRadioButtons(20, 90+22,["supporting force","speed"]);
}

function draw() {
    background(CWHITE);

    roughnessSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();

	var thechoice=choiceButton.makeChoice();

    if(thechoice==="speed"){
		exploreThisGraph.xlabel.html(pmlparse("speed / JustUnit{m s -1}"));
		var k = roughnessSet.getValue();
		var speed = -exploreThisGraph.getValues().xSet
		var F = k*speed*speed;
		exploreThisGraph.plotValues(speed,F);
		push();
			translate(235, 450);
			showMass(3, CIDEAGREY);
			translate(0, 15);
			showForce(F*PXSCALE*2, 90, CSLIP);
			translate(speed*5, -45);
			showVelocity(speed*PXSCALE, -90, CFORCEGREEN);
		pop();
    } else {
		exploreThisGraph.xlabel.html("supporting force / N");

		var k = roughnessSet.getValue();
		var x = -exploreThisGraph.getValues().xSet*1.8;
		var F = k*x;
		exploreThisGraph.plotValues(x,F);
		push();
			translate(235, 450);
			showMass(3, CIDEAGREY);
			translate(0, 15);
			showForce(F*PXSCALE*2, 90, CSLIP);
			translate(30, -45);
			showVelocity(8, -90, CFORCEGREEN);
		pop();

   }


    placeWords('set roughness\nof the surface', 50, 280);

  placeTitleBold("Affecting the slip force: choose the surface roughness, vary supporting force or speed");
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
