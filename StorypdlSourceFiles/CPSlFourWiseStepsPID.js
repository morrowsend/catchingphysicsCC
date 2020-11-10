//{CPSlFourWiseStepsPID}{800}{600}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 600);

    stepsbutton = createCheckbox("step numbers",false);
    stepsbutton.position(18, height-50);
    stepsbutton.class("PDLbutton");

    feedbackbutton = createCheckbox("validity check",false);
    feedbackbutton.position(220+80-5-150, height-50);
    feedbackbutton.class("PDLbutton");

    physicalconceptualbutton = createCheckbox("physical and conceptual",false);
    physicalconceptualbutton.position(220+80-30, height-50);
    physicalconceptualbutton.class("PDLbutton");

    livedinbutton = createCheckbox("show lived-in world",false);
    livedinbutton.position(94+94-54+200+300-177, height-50);
    livedinbutton.class("PDLbutton");
    }

function draw() {
    background(cdeviceLightGrey);

    physicalPane(143, 130, 100, 100);
    physicalPane(193, 280, 200, 100);
    conceptualPane(193, 430, 200, 100);
    physicalPane(393, 430, 100, 100);

    transitionStep(143, 205, 90);
    transitionRedescribe(143, 355, 90);
    transitionStep(318, 280+150, 0);

//     step actions
	if (stepsbutton.checked()){
		paneNumber("01","P",143,130);
		paneNumber("02","P",143,280);
		paneNumber("03","C",143,430);
		paneNumber("04","P",393,430);
	}else{
		words("describe\n  process\n\indicate\n  purpose", 103, 100);
		words("bound process\n  in space and time", 103, 250);
		words("identify stores\n\nestimate changes in energy\n  in each store", 103, 400);
		words("insights\n  described\n& validate\n  purpose", 353, 400);
	}

 if (physicalconceptualbutton.checked()){
  thinkRL("Separate tangible (green) \nand conceptual (blue)", 421, 341, 170,90);
  }



if (feedbackbutton.checked()){
    linkBarRight(440, 430, 100);
    linkBarUp(540, 430, 300);
    linkArrowLeft(540, 130, 345)
	thinkRL("Relate step 04 to step01\nto check for insight", 668, 340, 170,90);
}




//     lived in world

if (livedinbutton.checked()){
	linkArrowRight(45, 130, 45);
    push();
		translate(35, 110);
		scale(0.2);
		drawGirl4();
		translate(-80, 0);
		drawBoy1();
	pop();
				}



   titleBold("Creating an energy description: four steps to enlightenment/avoidance of pain");
}


function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


