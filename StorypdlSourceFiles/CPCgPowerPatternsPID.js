// CgPowerPatternsPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 420);
    setvoltage = new controlStripVerticalPositive();
	setvoltage.create(118,130);
    setresistance = new controlStripVerticalPositive();
	setresistance.create(333,130);
	advicebutton = new checkButton(454, 65,"tell me more",false);

	 
}

function draw() {
    background(cWhite);
    advicebutton.drawButton();
   
   let thevoltage=createVector(setvoltage.getValues().xSet,setvoltage.getValues().ySet);
   let theresistance=createVector(setresistance.getValues().xSet,setresistance.getValues().ySet);
   let voltages = thevoltage.y*pixelscaling;
   let resistance = 4+theresistance.y*pixelscaling;
   let magnitudetheCurrent=(voltages/resistance)*pixelscaling*.2	;
   let thepower =magnitudetheCurrent*voltages*.2;
 
push();
		translate(118, 270);
		circuitSimple("bulb");
		push();
				translate(-60,0);
				power(thepower);
				translate(340,0);
				power(thepower);
		pop();
pop();
    
    	if (advicebutton.buttonisChecked){
		advicedroid(529,100,"The battery is running-down. The power shows you how much. The bulb is glowing. The power shows you how much.", 120, 160);
		
			} 
    
    wordsframe("increase how much battery pushes", 138, 65, 80, 100);
    wordsframe("increase how much bulb resists", 353, 65, 80, 100);

	titleBold('An electrical loop: pushing and resisting affects power');
	
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

