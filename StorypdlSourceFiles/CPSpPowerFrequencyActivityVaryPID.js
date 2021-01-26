// {CPSpPowerFrequencyActivityVaryPID}{470}{400}

const photonType=["red", "green","blue"];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(470, 400);
	photonSet=new createSliderDivider(300,220,100,15,1,[0],false);
	emittedactivitySet=new createSliderDivider(20,220,100,15,0,[0.7],false);
	animatebutton =  new CreateCheckButton(200,360,"animate",false);
}

function draw(){
 background(CWHITE);

 emittedactivitySet.draw();
 animatebutton.drawButton();
 emittedactivity=emittedactivitySet.getValue()*7;
 placeWords("set\naverage\nactivity", 50, 230);

photonSet.draw();
	placeWords("set\nphoton\nfrequency", 380, 230);
	var thisphotonenergy = (1+photonSet.getValue())*2;
	placeWords(photonType[2], 330, 230);
	placeWords(photonType[1], 330, 270);
	placeWords(photonType[0], 330, 310);

	push();
		translate(308, 120);
		showQuantum(thisphotonenergy);
	pop();

 push();
		translate(130, 120);
		drawTransducer(CLIGHT, 0);
		push();
			translate(40, 120);
			showPower(emittedactivity*thisphotonenergy/4);
			translate(-22, 80);
			showQuantity(emittedactivity*0.6,CACTIVITY,"");
		pop();

	pop();

	if (animatebutton.buttonisChecked){
	push();
		translate(140, 120);
		if (Math.random()*emittedactivity>0.3 && frameCount%20==0){
				showQuantum(thisphotonenergy);
				}
	pop();
	}



placeTitleBold("power set by photon frequency and activity")

}

function mousePressed(){
		emittedactivitySet.mousePressed();
		photonSet.mousePressed();

	}
function mouseReleased(){
		emittedactivitySet.mouseReleased();
		photonSet.mouseReleased();
		animatebutton.changeState();
	}


function keyTyped() {
  if (key == 's') {
	saveCanvas('aSnapshot', 'png');
  }
	return false;
  }

