// {CPSgEyeSeeingconceptualToPhysicalPID}{660}{440}
 let showother=false;
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	video = loadImage("../__PDLgraphics/SgFireVideo.svg");
	camera = loadImage("../__PDLgraphics/SgBookCamera.svg");
}
function setup() {
    createCanvas(660,450);
    advicebutton = new CreateCheckButton(440, 80,"tell me more",false);
    switchbutton=new CreateControlButton(20,400,90,30);
}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();
	switchbutton.drawButton();
	placeWords("show other",28,420);

	if (switchbutton.buttonwasPressed){
		showother=!showother;
		switchbutton.buttonwasPressed=false;
    }

	placeConceptualPane(200, 130, 360, 100);
	placePhysicalPane(200, 300, 360, 180);
	placeTransitionRedescribe(200,195,0);

//pane 01 contents
	push();
		translate(30, 200);
		if (showother==true){
		image(video,20,40);
		}else{
		image(camera,20,40);
		}
		placeWords("to record this", 6, 30);
		placeWords("with this", 258, 30);
		placeWords("...something has to travel between them,\ncarrying some information about what's recorded", 6, 150);

	pop();

//pane 02 contents
	push();
		translate(90, 130);
		drawTransducer(CLIGHT, 0);
		showBeamC(0, 0, 224, 0, CLIGHT);
		translate(224, 0);
		drawTransducer(CABSORB, 180);
	pop();

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(590,140-76,"The blue pane is the simple world of physics.\n\n\nThe green pane shows the everyday, the lived-in world, full of more complicated things. But in some ways these things behave just like the simple things in the world of physics.", 200, 220)
	}

placeTitleBold("Seeing – the story of a journey")

}

function mouseReleased(){
	advicebutton.changeState();
	switchbutton.checkPressed();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
