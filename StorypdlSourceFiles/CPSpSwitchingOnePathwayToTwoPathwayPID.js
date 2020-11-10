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

	annotatebutton = new checkButton(520-150, 65,"set pathways",false);
	leadlinesbutton = new checkButton(520-10, 65,"label pathways",false);
	advicebutton = new checkButton(520+140, 65,"tell me more",false);
	inputchoose=new radioButtons(19, 141,["particles","radiation","electrical","mechanical"],false);
	nottargetchoose=new radioButtons(360+150, 141,["particles","radiation","electrical","mechanical"],false);
	targetchoose=new radioButtons(360+150,232,["particles","radiation","electrical","mechanical"],false);

	inputtoDivvy=new IanSlider(20,380,100,15,0,[0.7],false);
	twoWayDivvy=new IanSlider(510,380,150,15,0,[0.4],false);
}

function draw() {
	background(cWhite);
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
		subHead('qualitative: what happens',0, 0);

		push();
			translate(230,100);
			scale(1.20);
			device("two");

			push();
				translate(-83,-50);
				switch(inputpathway){
						case "particles":
							powerPathway("particles");
							pathinlabel="heating by particles";
							break;
						case "radiation":
							powerPathway("radiation");
							pathinlabel="heating by radiation";
							break;
						case "mechanical":
							powerPathway("mechanical");
							pathinlabel="mechanical working";
							break;
						case "electrical":
							powerPathway("electrical");
							pathinlabel="electrical working";
							break;
						 }
			pop();

			push();
				translate(28,-10);
				switch(nottargetpathway){
					case "particles":
						powerPathway("particles");
						pathnontargetlabel="heating by particles";
						break;
					case "radiation":
						powerPathway("radiation");
						pathnontargetlabel="heating by radiation";
						break;
					case "mechanical":
						powerPathway("mechanical");
						pathnontargetlabel="mechanical working";
						break;
					case "electrical":
						powerPathway("electrical");
						pathnontargetlabel="electrical working";
						break;
				 }
			pop();

			push();
				translate(28,15);
				switch(targetpathway){
					case "particles":
						powerPathway("particles");
						pathtargetlabel="heating by particles";
						break;
					case "radiation":
						powerPathway("radiation");
						pathtargetlabel="heating by radiation";
						break;
					case "mechanical":
						powerPathway("mechanical");
						pathtargetlabel="mechanical working";
						break;
					case "electrical":
						powerPathway("electrical");
						pathtargetlabel="electrical working";
						break;
				 }
			pop();
		pop();
	pop();

		words("set\ninput\npower", 45, 385);
		words("good result", 535, 385);
		words("poor result", 535, 535);

	if(annotatebutton.buttonisChecked){
		inputpathway=inputchoose.makeChoice();
		targetpathway=targetchoose.makeChoice();
		nottargetpathway=nottargetchoose.makeChoice();

		 }

	//quantitative
	 push();
		translate(20,360);
		subHead('quantitative: how much',0, 0);
		push();
			translate(160,80);
			power(inputpower);
			if (leadlinesbutton.buttonisChecked && inputpower!=0){
				leadlinediagramnegativedeep("power in\ninput pathway", -25, (-inputpower/2)*pxscale);
			}
		pop();
		push();
			translate(296,80);
			power(targetpower);
			if (leadlinesbutton.buttonisChecked && targetpower!=0){
				leadlinediagramnegative("power in\ntarget\noutput pathway", -25, (-targetpower/2)*pxscale);
				 }
			translate(0,-targetpower*pxscale);
			power(nontargetpower);
			if (leadlinesbutton.buttonisChecked && nontargetpower!=0){
				leadlinediagram("power in\nnon-target\noutput pathway", -25, (-nontargetpower/2)*pxscale);
			 }
		pop();
	pop();

	if (advicebutton.buttonisChecked){
		advicedroid(width-70, 82, "The device is switching power from the " + pathinlabel + " pathway to the " + pathtargetlabel + " pathway and to the  " + pathnontargetlabel + " pathway.", 180, 118);
		advicedroid(width-70, 311, "The input power is being switched and from the " + pathinlabel + " pathway. The output is divided between two parhways: one is the target(" + pathtargetlabel + " pathway), the other is not(" + pathtargetlabel + " pathway).", 180, 160);
		}

	if (leadlinesbutton.buttonisChecked){
		leadlinediagram("input\npathway ("+pathinlabel+")", 178, 152);
		leadlinediagramnegative("target\noutput\npathway\n("+pathtargetlabel+")", 292, 244);
		leadlinediagram("non-target\noutput\npathway\n("+pathnontargetlabel+")", 292, 204);
		leadlinediagramnegativedeep("device", 216, 240);
		}

	titleBold("Switching from one pathway to two pathways: targeted and not by the device you choose");
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