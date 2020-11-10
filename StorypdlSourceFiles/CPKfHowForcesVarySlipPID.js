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
    roughnessSet=new IanSlider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"supporting force / N","slip / N");
    exploreThisGraph.setLabels();

	choiceButton= new radioButtons(20, 90+22,["supporting force","speed"],false);
}

function draw() {
    background(cWhite);

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
			mass(3, cideaGrey);
			translate(0, 15);
			force(F*pxscale*2, 90, cslip);
			translate(speed*5, -45);
			velocity(speed*pxscale, -90, cforceGreen);
		pop();
    } else {
		exploreThisGraph.xlabel.html("supporting force / N");

		var k = roughnessSet.getValue();
		var x = -exploreThisGraph.getValues().xSet*1.8;
		var F = k*x;
		exploreThisGraph.plotValues(x,F);
		push();
			translate(235, 450);
			mass(3, cideaGrey);
			translate(0, 15);
			force(F*pxscale*2, 90, cslip);
			translate(30, -45);
			velocity(8, -90, cforceGreen);
		pop();

   }


    words('set roughness\nof the surface', 50, 280);

  titleBold("Affecting the slip force: choose the surface roughness, vary supporting force or speed");
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
