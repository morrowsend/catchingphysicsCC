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

    placePhysicalPane(143, 130, 100, 100);
    placePhysicalPane(193, 280, 200, 100);
    placeConceptualPane(193, 430, 200, 100);
    placePhysicalPane(393, 430, 100, 100);

    placeTransitionStep(143, 205, 90);
    placeTransitionRedescribe(143, 355, 90);
    placeTransitionStep(318, 280+150, 0);

//     step actions
	if (stepsbutton.checked()){
		paneNumber("01","P",143,130);
		paneNumber("02","P",143,280);
		paneNumber("03","C",143,430);
		paneNumber("04","P",393,430);
	}else{
		placeWords("describe\n  process\n\indicate\n  purpose", 103, 100);
		placeWords("bound process\n  in space and time", 103, 250);
		placeWords("identify stores\n\nestimate changes in energy\n  in each store", 103, 400);
		placeWords("insights\n  described\n& validate\n  purpose", 353, 400);
	}

 if (physicalconceptualbutton.checked()){
  placeRightLinesDroid(401,301,"Separate tangible (green) and conceptual (blue)", 170,70);
  }



if (feedbackbutton.checked()){
    placeLinkBarRight(440, 430, 100,CENERGY);
    placeLinkBarUp(540, 430, 300,CENERGY);
    placeLinkArrowLeft(540, 130, 345,CENERGY)
	placeRightLinesDroid(648,340,"Relate step 04 to step01 to check for insight", 170,70);
}




//     lived in world

if (livedinbutton.checked()){
	placeLinkArrowRight(45, 130, 45,CBLACK);
    push();
		translate(35, 110);
		scale(0.2);
		placeGirl4();
		translate(-80, 0);
		placeBoy1();
	pop();
				}



   placeTitleBold("Creating an energy description: four steps to enlightenment/avoidance of pain");
}


function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}


