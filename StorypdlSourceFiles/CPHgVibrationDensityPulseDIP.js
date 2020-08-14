// HgVibrationDensityPulseDIP

var wherePulse=100;

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
    createCanvas(700,450);
}


function draw() {
background(cWhite);
   

	  push();
	  fill(120);
	  rect(20,80,660,200);
	  pop();
	  
	  drawPulse(wherePulse, 80, 80, 198);
	  
	  push();
	  noStroke();
	  fill(255);
	  rect(660,80,700,200);
	  pop();
	  
	  wherePulse=wherePulse+1;
	  wherePulse=wherePulse%800;
	  
	  
	  push();
	  translate(400,400);
	  if (wherePulse>300 && wherePulse<380){
	  quantity(6*abs(cos(wherePulse/10)),cideaGrey,'');
	  } else{
	  quantity(6,cideaGrey,'')
	  }
	  words('density in the medium\nright here',20,0);
	  pop();
	  
	
	  title('pulses of density from source to detector');
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

function drawPulse(xloc, yloc, pulsewidth, pulseheight) {

  noFill();

    for (var i = xloc; i <= xloc+pulsewidth/4; i++) {
      var inter = map(i, xloc, xloc+pulsewidth/4, 0, 1);
      var c = lerpColor(color(120), color(80), inter);
      stroke(c);
      line(i, yloc, i, yloc+pulseheight);
    }
    for (var i = xloc+pulsewidth/4; i <= xloc+pulsewidth/2; i++) {
      var inter = map(i, xloc+pulsewidth/4, xloc+pulsewidth/2, 0, 1);
      var c = lerpColor(color(80), color(120), inter);
      stroke(c);
      line(i, yloc, i, yloc+pulseheight);
    }
    for (var i = xloc+pulsewidth/2; i <= xloc+pulsewidth*.75; i++) {
      var inter = map(i, xloc+pulsewidth/2, xloc+pulsewidth*.75, 0, 1);
      var c = lerpColor(color(120), color(80), inter);
      stroke(c);
      line(i, yloc, i, yloc+pulseheight);
    }
    for (var i = xloc+pulsewidth*.75; i <= xloc+pulsewidth; i++) {
      var inter = map(i, xloc+pulsewidth*.75, xloc+pulsewidth, 0, 1);
      var c = lerpColor(color(80), color(120), inter);
      stroke(c);
      line(i, yloc, i, yloc+pulseheight);
    }
 }
