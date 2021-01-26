// CPKfMakingHolesBuoyancyForcePID

var cp1, cp2,cp3,cp4;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
    createCanvas(700,450);
    cp1 = color(160, 212, 250);
    cp2 = color(119, 161, 244);
    cp3 = color(78, 109, 238);
    cp4 = color(37, 58, 232);
    setDepth=new createSliderDivider(600,300,100,15,0,[0.9],false);
}


function draw() {
    background(CWHITE);
    
    pressureGradient(0, 200, 700, 250, cp1, cp4);
    setDepth.draw();
    
    push();
    translate(300,200-(setDepth.getValue()-1)*80);
    fill(CDEVICEGREY);
    
    rect(-200,0,400,-100);
    showForce((setDepth.getValue()-1)*18,180,CBUOYANCY);
    pop();

    placeTitleBold("making holes in water, experiencing force");

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
    stroke(CDEVICEGREY);
    strokeWeight(4);
    line(xloc,yloc,xloc,yloc+fluidDepth);
    line(xloc,yloc+fluidDepth,xloc+fluidWidth,yloc+fluidDepth);
    line(xloc+fluidWidth,yloc,xloc+fluidWidth,yloc+fluidDepth);
}
