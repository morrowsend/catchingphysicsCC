// {CPSpPhotonEmissionDetectionPowerPID}{800}{400}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(800,400);

	emittedpowerSet=new IanSlider(20,220,100,15,0,[0.7],false);
	detectedpowerSet=new IanSlider(720,220,100,15,0,[0.6],false);

	animatebutton =  new checkButton(400,360,"animate",false);

}

function draw(){
 background(cWhite);

 emittedpowerSet.draw();
 animatebutton.drawButton();
 emittedpower=emittedpowerSet.getValue()*7;
 words("set\naverage\nactivity", 50, 230);

 detectedpowerSet.draw();
 detectedpower=detectedpowerSet.getValue()*7;
 words("set\naverage\nactivity", 750, 230);

 push();
		translate(130, 120);
		transducer(clight, 0);
		push();
			translate(40, 120);
			power(emittedpower);
			translate(-22, 80);
			quantity(emittedpower*0.6,cactivity,"");
		pop();
		translate(538, 0);
		transducer(cBlack, 180);
		push();
			translate(-40, 120);
			power(detectedpower);
			translate(-22, 80);
			quantity(detectedpower*0.6,cactivity,"");
		pop();

	pop();

	if (animatebutton.buttonisChecked){
	push();
		translate(140, 120);
		if (Math.random()*emittedpower>0.3 && frameCount%20==0){
				quantum(2);
				}
		translate(518, 0);
		if (Math.random()*detectedpower>0.3 && frameCount%20==0){
				quantum(2);
				}
	pop();
	}



titleBold("power set by the number of photons emitted and detected each second")

}

function mousePressed(){
		emittedpowerSet.mousePressed();
		detectedpowerSet.mousePressed();

	}
function mouseReleased(){
		emittedpowerSet.mouseReleased();
		detectedpowerSet.mouseReleased();
		animatebutton.changeState();
	}


function keyTyped() {
  if (key == 's') {
	saveCanvas('aSnapshot', 'png');
  }
	return false;
  }

