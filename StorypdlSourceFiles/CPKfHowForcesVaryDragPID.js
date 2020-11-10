// CPKfHowForcesVaryDragPID


let chooseSpeed =false;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 500);
    fluidSet=new IanSlider(20,270,60,15,4,[0.7],false);
    exploreThisGraph= new exploreRelationshipGraph;
    exploreThisGraph.create(270,150,200,1,"immersion / JustUnit{m 3}","drag / N");
    exploreThisGraph.setLabels();

	choiceButton= new radioButtons(20, 90+22,["speed","immersion"],false);


}

function draw() {
    background(cWhite);

    fluidSet.draw();
    exploreThisGraph.draw();
    exploreThisGraph.getValues();

	var thechoice=choiceButton.makeChoice();

    if(thechoice=="speed"){
		exploreThisGraph.xlabel.html(pmlparse("speed / JustUnit{m s -1}"));
		var k = fluidSet.getValue();
		var speed = -exploreThisGraph.getValues().xSet
		var F = k*speed*speed*speed;
		exploreThisGraph.plotValues(speed,F);
		push();
			translate(235, 450);
			mass(3, cideaGrey);
			translate(15, 0);
			force(F*pxscale*2, 90, cdrag);
			translate(speed*5-15, -30);
			velocity(speed*pxscale, -90, cforceGreen);
		pop();
    } else {
		exploreThisGraph.xlabel.html(pmlparse("immersion / JustUnit{m 3}"));

		var k = fluidSet.getValue();
		var immersion = -exploreThisGraph.getValues().xSet*1.7;
		var F = k*immersion*immersion;
		exploreThisGraph.plotValues(immersion,F);
		push();
			translate(235, 450);
			mass(3, cideaGrey);
			translate(15, 0);
			force(F*pxscale*2, 90, cdrag);
			translate(-15, -30);
			velocity(8, -90, cforceGreen);
		pop();

   }


    words('choose fluid', 50, 280);

  titleBold("Affecting the drag force: choose the fluid, vary immersion or speed");
}

function mousePressed(){
    fluidSet.mousePressed();

	}
function mouseReleased(){
    fluidSet.mouseReleased();
    }

function makeChoice(){
chooseSpeed =!chooseSpeed;
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
