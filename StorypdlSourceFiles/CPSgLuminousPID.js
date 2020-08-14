// SgLuminousPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	pane1 = loadImage("../__PDLgraphics/SgLuminousPane1.svg");
	pane2 = loadImage("../__PDLgraphics/SgLuminousPane2.svg");
	pane3 = loadImage("../__PDLgraphics/SgLuminousPane3.svg");
}
function setup() {
    createCanvas(660,700);
    advicebutton = new checkButton(440, 80,"tell me more",false);
    
}

function draw() {
	background(cWhite);
	advicebutton.drawButton();
	
	
	physicalPane(210, 160, 380, 180);
	physicalPane(210, 160+180+30, 380, 180);
	conceptualPane(210, 160+180+30+180+30, 380, 180);
	transitionRedescribe(210,160+90+15,0);
	transitionRedescribe(210,160+90+15+180+30,0);

//pane 01 contents
	push();
		translate(30, 40);
		image(pane1,40,30);
		words("concentrate on what's seen and who does the seeing", 2, 200);
	pop();
	
//pane 02 contents
	push();
		translate(40, 260);
		image(pane2,77,60);
		words("see this", 20, 45);
		words("with this eye", 238, 45);
		words("but how?", 159, 145);
	pop();

//pane 03 contents
	push();
		translate(90, 130+350);
		image(pane3,29,40);
		wordsframe("a beam of light travels from candle to eye",110,60,100,140);
		beamC(45, 50, 224, 50, clight);
		translate(224, 50);
		eye(0);
	pop();

//advice
if (advicebutton.buttonisChecked){
	advicedroid(2,590,140-76+67,"Here is a physics story. First select what you want to describe.\n\n\n Then sketch it again, with simplified things, being even more selective.\n\n\n\n\n\n\n\n\n Finally into the world of physics, now drawing with different kinds of things, such as beams of light. ", 200, 390);
	}

titleBold("Seeing something that is luminous")
	 
}

function mouseReleased(){
	advicebutton.changeState();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
