// FileName: CgElectricalFlowPatternPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 420);
    setvoltage = new controlStripVerticalPositive();
	setvoltage.create(184-136+20,130);
    setresistance = new controlStripVerticalPositive();
	setresistance.create(384-136+35,130);
	advicebutton = new checkButton(525-136+5+60, 65,"tell me more",false);

	 
}

function draw() {
    background(cWhite);
    advicebutton.drawButton();
   
   let thevoltage=createVector(setvoltage.getValues().xSet,setvoltage.getValues().ySet);
   let theresistance=createVector(setresistance.getValues().xSet,setresistance.getValues().ySet);
   let voltages = thevoltage.y*pixelscaling;
   let resistance = 2+theresistance.y*pixelscaling;
   let magnitudetheCurrent=(voltages/resistance)*pixelscaling*.2	;
   
 
push();
		translate(68, 270);
		circuitSimple("bulb");
		push();
			translate(30,0);
			currentArrow(magnitudetheCurrent,0);
			translate(156,0);
			currentArrow(magnitudetheCurrent,180);
			translate(-80, 0);
			currentArrow(magnitudetheCurrent,90);
			currentArrow(magnitudetheCurrent,270);
		pop();
pop();
    
    	if (advicebutton.buttonisChecked){
		advicedroid(600-131+60,100,"The battery pushes. The map resists. When there is a push, there is a current. Make the resistance larger to make the current smaller.", 160, 120);
		
			} 
    
    wordsframe("increase how much battery pushes", 204-136+20, 65, 80, 100);
    wordsframe("increase how much bulb resists", 404-136+35, 65, 80, 100);

	titleBold('An electrical loop: pushing and resisting results in a current');
	
}

function mouseReleased(){
	advicebutton.changeState();
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

