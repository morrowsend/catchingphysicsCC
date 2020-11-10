// CPKfDrawForceOnMassPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
      createCanvas( 400, 300);
    noLoop();
}

function draw() {
    background(cWhite);
    
	push();
		translate(350-18,150);
		mass(3,cdeviceGrey);
		force(8,180,cgravity);
		words("non-contact", -40, -30);
	pop();
    
    push();
    translate(160,150);
    mass(3,cdeviceGrey);
    words("frictional", -25, -30);
    translate(0,15);
    force(6,90,cslip);
    pop();
    
    push();
    translate(50,150);
    mass(2,cdeviceGrey);
    words("support", -25, 30);
    translate(0,10);
   force(8,0,cbuoyancy);
    pop();
    
    
  titleBold("drawing forces exerted on masses");
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }
