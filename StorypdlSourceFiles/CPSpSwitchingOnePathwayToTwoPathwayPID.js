// {CPSpSwitchingOnePathwayToTwoPathwayPID}{850}{568}

var inputpathway="particles";
var targetpathway="particles";
var nottargetpathway="particles";

function preload() {

	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(850,560);

	annotatebutton = new CreateCheckButton(520-150, 65,"set pathways",false);
	leadlinesbutton = new CreateCheckButton(520-10, 65,"label pathways",false);
	advicebutton = new CreateCheckButton(520+140, 65,"tell me more",false);
	inputchoose=new CreateRadioButtons(19, 141,["particles","radiation","electrical","mechanical"]);
	nottargetchoose=new CreateRadioButtons(360+150, 141,["particles","radiation","electrical","mechanical"]);
	targetchoose=new CreateRadioButtons(360+150,232,["particles","radiation","electrical","mechanical"]);

	inputtoDivvy=new createSliderDivider(20,380,100,15,0,[0.7],false);
	twoWayDivvy=new createSliderDivider(510,380,150,15,0,[0.4],false);
}

function draw() {
	background(CWHITE);
	annotatebutton.drawButton();
	leadlinesbutton.drawButton();
	advicebutton.drawButton();

	twoWayDivvy.draw();
	inputtoDivvy.draw();
	var inputpower = inputtoDivvy.getValue()*7;
	var targetpower = twoWayDivvy.getValue(0)*inputpower;
	var nontargetpower = (1-twoWayDivvy.getValue(0))*inputpower;

// qualitative
	push();
		translate(20,100);
		placeSubHead('qualitative: what happens',0, 0);

		push();
			translate(230,100);
			scale(1.20);
			drawDevice("two");

			push();
				translate(-83,-50);
				switch(inputpathway){
						case "particles":
							drawPowerPathway("particles");
							pathinlabel="heating by particles";
							break;
						case "radiation":
							drawPowerPathway("radiation");
							pathinlabel="heating by radiation";
							break;
						case "mechanical":
							drawPowerPathway("mechanical");
							pathinlabel="mechanical working";
							break;
						case "electrical":
							drawPowerPathway("electrical");
							pathinlabel="electrical working";
							break;
						 }
			pop();

			push();
				translate(28,-10);
				switch(nottargetpathway){
					case "particles":
						drawPowerPathway("particles");
						pathnontargetlabel="heating by particles";
						break;
					case "radiation":
						drawPowerPathway("radiation");
						pathnontargetlabel="heating by radiation";
						break;
					case "mechanical":
						drawPowerPathway("mechanical");
						pathnontargetlabel="mechanical working";
						break;
					case "electrical":
						drawPowerPathway("electrical");
						pathnontargetlabel="electrical working";
						break;
				 }
			pop();

			push();
				translate(28,15);
				switch(targetpathway){
					case "particles":
						drawPowerPathway("particles");
						pathtargetlabel="heating by particles";
						break;
					case "radiation":
						drawPowerPathway("radiation");
						pathtargetlabel="heating by radiation";
						break;
					case "mechanical":
						drawPowerPathway("mechanical");
						pathtargetlabel="mechanical working";
						break;
					case "electrical":
						drawPowerPathway("electrical");
						pathtargetlabel="electrical working";
						break;
				 }
			pop();
		pop();
	pop();

		placeWords("set\ninput\npower", 45, 385);
		placeWords("good result", 535, 385);
		placeWords("poor result", 535, 535);

	if(annotatebutton.buttonisChecked){
		inputpathway=inputchoose.makeChoice();
		targetpathway=targetchoose.makeChoice();
		nottargetpathway=nottargetchoose.makeChoice();

		 }

	//quantitative
	 push();
		translate(20,360);
		placeSubHead('quantitative: how much',0, 0);
		push();
			translate(160,80);
			showPower(inputpower);
			if (leadlinesbutton.buttonisChecked && inputpower!=0){
				placeLeadLineNegativeDeep("power in\ninput pathway", -25, (-inputpower/2)*PXSCALE);
			}
		pop();
		push();
			translate(296,80);
			showPower(targetpower);
			if (leadlinesbutton.buttonisChecked && targetpower!=0){
				placeLeadLineNegative("power in\ntarget\noutput pathway", -25, (-targetpower/2)*PXSCALE);
				 }
			translate(0,-targetpower*PXSCALE);
			showPower(nontargetpower);
			if (leadlinesbutton.buttonisChecked && nontargetpower!=0){
				placeLeadLine("power in\nnon-target\noutput pathway", -25, (-nontargetpower/2)*PXSCALE);
			 }
		pop();
	pop();

	if (advicebutton.buttonisChecked){
		placeAdviceDroid(width-70, 82, "The device is switching power from the " + pathinlabel + " pathway to the " + pathtargetlabel + " pathway and to the  " + pathnontargetlabel + " pathway.", 180, 118);
		placeAdviceDroid(width-70, 311, "The input power is being switched and from the " + pathinlabel + " pathway. The output is divided between two parhways: one is the target(" + pathtargetlabel + " pathway), the other is not(" + pathtargetlabel + " pathway).", 180, 160);
		}

	if (leadlinesbutton.buttonisChecked){
		placeLeadLine("input\npathway ("+pathinlabel+")", 178, 152);
		placeLeadLineNegative("target\noutput\npathway\n("+pathtargetlabel+")", 292, 244);
		placeLeadLine("non-target\noutput\npathway\n("+pathnontargetlabel+")", 292, 204);
		placeLeadLineNegativeDeep("device", 216, 240);
		}

	placeTitleBold("Switching from one pathway to two pathways: targeted and not by the device you choose");
}

function mousePressed(){
	twoWayDivvy.mousePressed();
	inputtoDivvy.mousePressed();
	}

function mouseReleased(){
	twoWayDivvy.mouseReleased();
	inputtoDivvy.mouseReleased();
	annotatebutton.changeState();
	leadlinesbutton.changeState();
	advicebutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}