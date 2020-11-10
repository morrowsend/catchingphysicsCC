// CPKfParticlesPressureDepthPID

var cp1, cp2,cp3,cp4;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(595,550);
    cp1 = color(160, 212, 250);
    cp2 = color(119, 161, 244);
    cp3 = color(78, 109, 238);
    cp4 = color(37, 58, 232);
    setDepth=new IanSlider(320,140,240,15,2,[0.67],false);
}

function draw() {
    background(cWhite);
    pressureGradient(20, 100, 200, 320, cp1, cp4);
    setDepth.draw();
    push();
		translate(450,100);
		stroke(cdeviceGrey);
		strokeWeight(4);
		line(0,0,0,320);
		line(0,320,80,320);
		line(80,320,80,0);
		pressureparticles(1);
		translate(0,80);
		pressureparticles(2);
		translate(0,80);
		pressureparticles(3);
		translate(0,80);
		pressureparticles(4);
    pop();

    push();
		translate(100,140-(setDepth.getValue()-1)*240);
		pressuregauge((1-setDepth.getValue())*4);
		translate(440,0);
		pressuregauge((1-setDepth.getValue())*4);
    pop();

    titleBold("what the particles do at different pressures");
}

function mousePressed(){
    setDepth.mousePressed();
  }

function mouseReleased(){
    setDepth.mouseReleased();
    }
    
function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

function pressureGradient(xloc, yloc, fluidWidth, fluidDepth, pressurestart, pressureend) {
    noFill();
    for (var i = yloc; i <= yloc+fluidDepth; i++) {
      var inter = map(i, yloc, yloc+fluidDepth, 0, 1);
      var plotColour = lerpColor(pressurestart, pressureend, inter);
      stroke(plotColour);
      line(xloc, i, xloc+fluidWidth, i);
    }
    stroke(cdeviceGrey);
    strokeWeight(4);
    line(xloc,yloc,xloc,yloc+fluidDepth);
    line(xloc,yloc+fluidDepth,xloc+fluidWidth,yloc+fluidDepth);
    line(xloc+fluidWidth,yloc,xloc+fluidWidth,yloc+fluidDepth);
}
