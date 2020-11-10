// CPKfPressureDepthBuoyancyPID

var cp1, cp2,cp3,cp4;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
    createCanvas(500,450);

    cp1 = color(160, 212, 250);
    cp2 = color(119, 161, 244);
    cp3 = color(78, 109, 238);
    cp4 = color(37, 58, 232);
//    noLoop();
    setDepth=new IanSlider(400,170,200,15,0,[0.9],false);
}


function draw() {
    background(cWhite);

    pressureGradient(0, 150, width, 300, cp1, cp4);
    setDepth.draw();
    push();
		translate(width/2,170-(setDepth.getValue()-1)*200);
		pressuregauge((1-setDepth.getValue())*4);
    pop();

    titleBold("changing pressure with depth");
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

function mousePressed(){
    setDepth.mousePressed();
  }

function mouseReleased(){
    setDepth.mouseReleased();
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
