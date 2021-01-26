// CPKfBombardmentForcePID

var presureAbove, pressureBelow;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(380,600);
    setPressureTop=new createSliderDivider(280,250,60,15,2,[0.33],false);
    setPressureBottom=new createSliderDivider(280,370,60,15,2,[0.67],false);
}

function draw() {
    background(CWHITE);

    setPressureTop.draw();
    setPressureBottom.draw();

    presureAbove=int((1+(setPressureTop.getValue())*3));
    pressureBelow=int((1+(setPressureBottom.getValue())*3));


    push();
		translate(100,260);
		stroke(CDEVICEGREY);
		strokeWeight(4);
		line(-20,80,100,80);
		drawPressureParticles(presureAbove);
		translate(0,80);
		drawPressureParticles(pressureBelow);
    pop();

    push();
		translate(180,310);
		drawPressureGauge(presureAbove);
		translate(0,80);
		drawPressureGauge(pressureBelow);
    pop();

    push();
		translate(140,340);
		showForce((pressureBelow-presureAbove)*8,0,CBUOYANCY);
    pop();


    placeTitleBold("difference in bombardment and force");

}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

function mousePressed(){
    setPressureTop.mousePressed();
    setPressureBottom.mousePressed();
  }

function mouseReleased(){
    setPressureTop.mouseReleased();
    setPressureBottom.mouseReleased();
    }
