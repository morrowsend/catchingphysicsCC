// filename: SgEyeSeeingconceptualToPhysicalPID
 let showother=false;
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	video = loadImage("../__PDLgraphics/SgFireVideo.svg");
	camera = loadImage("../__PDLgraphics/SgBookCamera.svg");
}
function setup() {
    createCanvas(660,450);
    advicebutton = new checkButton(440, 80,"tell me more",false);
    switchbutton=new controlButton(20,400,90,30);
}

function draw() {
	background(cWhite);
	advicebutton.drawButton();
	switchbutton.drawButton();
	words("show other",28,420);
	
	if (switchbutton.buttonwasPressed){
		showother=!showother;
		switchbutton.buttonwasPressed=false;
    }  

	conceptualPane(200, 130, 360, 100);
	physicalPane(200, 300, 360, 180);
	transitionRedescribe(200,195,0);

//pane 01 contents
	push();
		translate(30, 200);
		if (showother==true){
		image(video,20,40);
		}else{
		image(camera,20,40);
		}
		words("to record this", 6, 30);
		words("with this", 258, 30);
		words("...something has to travel between them,\ncarrying some information about what's recorded", 6, 150);

	pop();

//pane 02 contents
	push();
		translate(90, 130);
		transducer(clight, 0);
		beamC(0, 0, 224, 0, clight);
		translate(224, 0);
		transducer(cabsorb, 180);
	pop();

//advice
if (advicebutton.buttonisChecked){
	advicedroid(590,140-76,"The blue pane is the simple world of physics.\n\n\nThe green pane shows the everyday, the lived-in world, full of more complicated things. But in some ways these things behave just like the simple things in the world of physics.", 200, 220)
	}

titleBold("Seeing – the story of a journey")
	 
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
