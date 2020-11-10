// {CPSpDeviceSwitchingPathwaysPID}{850}{360}

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
	createCanvas(850,360);

	annotatebutton = new checkButton(520-150, 65,"set pathways",false);
	leadlinesbutton = new checkButton(520-10, 65,"label pathways",false);
	advicebutton = new checkButton(520+140, 65,"tell me more",false);
	inputchoose=new radioButtons(19, 141,["particles","radiation","electrical","mechanical"],false);
	nottargetchoose=new radioButtons(360+150, 141,["particles","radiation","electrical","mechanical"],false);
	targetchoose=new radioButtons(360+150,232,["particles","radiation","electrical","mechanical"],false);

}

function draw() {
	background(cWhite);
	annotatebutton.drawButton();
	leadlinesbutton.drawButton();
	advicebutton.drawButton();

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

	if(annotatebutton.buttonisChecked){
		inputpathway=inputchoose.makeChoice();
		targetpathway=targetchoose.makeChoice();
		nottargetpathway=nottargetchoose.makeChoice();

		 }



	if (advicebutton.buttonisChecked){
		advicedroid(width-70, 82, "The device is switching power from the " + pathinlabel + " pathway to the " + pathtargetlabel + " pathway and to the  " + pathnontargetlabel + " pathway.", 180, 118);
		}

	if (leadlinesbutton.buttonisChecked){
		leadlinediagram("input\npathway ("+pathinlabel+")", 178, 152);
		leadlinediagramnegative("target\noutput\npathway\n("+pathtargetlabel+")", 292, 244);
		leadlinediagram("non-target\noutput\npathway\n("+pathnontargetlabel+")", 292, 204);
		leadlinediagramnegativedeep("device", 216, 240);
		}

	titleBold("A device switches pathway");
}


function mouseReleased(){
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