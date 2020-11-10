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
    setPressureTop=new IanSlider(280,250,60,15,2,[0.33],false);
    setPressureBottom=new IanSlider(280,370,60,15,2,[0.67],false);
}

function draw() {
    background(cWhite);

    setPressureTop.draw();
    setPressureBottom.draw();

    presureAbove=int((1+(setPressureTop.getValue())*3));
    pressureBelow=int((1+(setPressureBottom.getValue())*3));


    push();
		translate(100,260);
		stroke(cdeviceGrey);
		strokeWeight(4);
		line(-20,80,100,80);
		pressureparticles(presureAbove);
		translate(0,80);
		pressureparticles(pressureBelow);
    pop();

    push();
		translate(180,310);
		pressuregauge(presureAbove);
		translate(0,80);
		pressuregauge(pressureBelow);
    pop();

    push();
		translate(140,340);
		force((pressureBelow-presureAbove)*8,0,cbuoyancy);
    pop();


    titleBold("difference in bombardment and force");

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
