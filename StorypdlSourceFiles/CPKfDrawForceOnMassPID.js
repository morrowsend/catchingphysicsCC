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
    background(CWHITE);
    
	push();
		translate(350-18,150);
		showMass(3,CDEVICEGREY);
		showForce(8,180,CGRAVITY);
		placeWords("non-contact", -40, -30);
	pop();
    
    push();
    translate(160,150);
    showMass(3,CDEVICEGREY);
    placeWords("frictional", -25, -30);
    translate(0,15);
    showForce(6,90,CSLIP);
    pop();
    
    push();
    translate(50,150);
    showMass(2,CDEVICEGREY);
    placeWords("support", -25, 30);
    translate(0,10);
   showForce(8,0,CBUOYANCY);
    pop();
    
    
  placeTitleBold("drawing forces exerted on masses");
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }
