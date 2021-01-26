// CPTrSameTimeSurfaces
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/Jost-300-Light.ttf");
	italicFont= loadFont("../__support/Jost-300-LightItalic.ttf");
	titleFont = loadFont("../__support/Jost-700-Bold.ttf");
}
function setup(){
  createCanvas(800, 600, WEBGL);
  ortho();
justplaceWords("Times", "invertedtitle", 20, 10, width-60);
// 
// justplaceWords("drag the mouse to spin the diagram", "passCommentL", 20, height-90, 150);

// durationslider = createSlider(1,180,30);
// durationslider.position(302, 54);

	ShowSlicesbutton = createCheckbox("Show red nows...",false);
	ShowSlicesbutton.position(20, 60);
	ShowSlicesbutton.class("PDLbutton");
	
	ShowTimeAxisbutton = createCheckbox("Show time axis",false);
	ShowTimeAxisbutton.position(630, 60);
	ShowTimeAxisbutton.class("PDLbutton");
	
// 	justplaceWords("set duration for influence", "infoText", 437, 62, 180);

}

function draw(){
  background(CWHITE);
  orbitControl();
	rotateX(PI/2);
  noStroke();
  fill(CFORCERED);
  box(250, 250,1);
  if (ShowSlicesbutton.checked()){
	push();
		// past slices
		for (i = 1; i < 6; i++) {
			translate(0,0,40);
			box(250, 250,2);
		}
	pop();
	}
  fill(CFORCEGREEN);
  push();
  rotateY(PI/6);
  box(250, 250,1);
  if (ShowSlicesbutton.checked()){
	push();
		// past slices
		for (i = 1; i < 6; i++) {
			translate(0,0,40);
			box(250, 250,2);
		}
	pop();
	}
  fill(CFORCEBLUE);
  push();
  rotateY(-PI/8);
  box(250, 250,1);
  if (ShowSlicesbutton.checked()){
	push();
		// past slices
		for (i = 1; i < 6; i++) {
			translate(0,0,40);
			box(250, 250,2);
		}
	pop();
	}
	if (ShowTimeAxisbutton.checked()){
	  rotateX(PI/2);
		drawAxis3D(250);
	}
	pop();

  // if (ShowTimeAxisbutton.checked()){
// 	  rotateX(PI/2);
// 		drawAxis3D(250);
// 	}
}
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
