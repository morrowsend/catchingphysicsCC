// KnAccelerationAccumulatesVelocitybyIntervalPID

var pucksize = 20;
var controlBarrier=30;

var velcyscaling = 6;
var acclnscaling = 10;

var displayincrement=150;

var v0location=100;
var v1location=v0location+displayincrement;
var v2location=v1location+displayincrement;
var v3location=v2location+displayincrement;
var v4location=v3location+displayincrement;

var a01location=175;
var a12location=a01location+displayincrement;
var a23location=a12location+displayincrement;
var a34location=a23location+displayincrement;

var heightdisplaya = 370;
var heightdisplayv = 520;

var velcy0SetterX = dragvelcy0PuckX =  v0location;
var velcy0SetterY = dragvelcy0PuckY =  208;

var accln01SetterX = dragaccln01PuckX =  a01location;
var accln01SetterY = dragaccln01PuckY =  108;

var accln12SetterX = dragaccln12PuckX =  a12location;
var accln12SetterY = dragaccln12PuckY =  108;

var accln23SetterX = dragaccln23PuckX =  a23location;
var accln23SetterY = dragaccln23PuckY =  108;

var accln34SetterX = dragaccln34PuckX =  a34location;
var accln34SetterY = dragaccln34PuckY =  108;



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    rana=loadImage("../__PDLgraphics/ranawalk/ranaCurledTop.svg");
}

function setup(){
    createCanvas(900, 650);
}

function draw() {
    background(CWHITE);
    
    var velcy1 = createVector(0, 0);
    var velcy2 = createVector(0, 0);
    var velcy3 = createVector(0, 0);
    var velcy4 = createVector(0, 0);
    
    stroke(CIDEAGREY);
    strokeWeight(0.5);
    
	line(v0location, 80, v0location, height-30);
	line(v1location, 80, v1location, height-30);
	line(v2location, 80, v2location, height-30);
	line(v3location, 80, v3location, height-30);
	line(v4location, 80, v4location, height-30);

        
   //  velcy0 puck (2D slider), returns a vector. Create one per slider.
	stroke(CSLIDERDARKGREY);
	strokeWeight(1);
	fill(CSLIDERLIGHTGREY);
	rect(velcy0SetterX-controlBarrier-pucksize/2, velcy0SetterY-controlBarrier-pucksize/2, 2*controlBarrier+pucksize, 2*controlBarrier+pucksize,5);
	fill(CWHITE);
	if(dist(dragvelcy0PuckX, dragvelcy0PuckY, mouseX, mouseY)< pucksize/2 && mouseIsPressed)  {
		fill(CSLIDERDARKGREY);
		dragvelcy0PuckX = mouseX;
		dragvelcy0PuckY = mouseY;
	}
	dragvelcy0PuckX=constrain(dragvelcy0PuckX,velcy0SetterX-controlBarrier,velcy0SetterX+controlBarrier);
	dragvelcy0PuckY=constrain(dragvelcy0PuckY,velcy0SetterY-controlBarrier,velcy0SetterY+controlBarrier);
	rect(dragvelcy0PuckX-pucksize/2, dragvelcy0PuckY-pucksize/2, pucksize, pucksize,5)
	stroke(CSLIDERDARKGREY);
	strokeWeight(2);
	fill(CSLIDERDARKGREY);
	line(velcy0SetterX, velcy0SetterY, dragvelcy0PuckX, dragvelcy0PuckY);
	ellipse(dragvelcy0PuckX, dragvelcy0PuckY, 2, 2);
	var velcy0 = createVector((dragvelcy0PuckX-velcy0SetterX)/(2*controlBarrier),(velcy0SetterY-dragvelcy0PuckY)/(2*controlBarrier)).mult(velcyscaling);
	
	//  accln01 puck (2D slider), returns a vector. Create one per slider.
	stroke(CSLIDERDARKGREY);
	strokeWeight(1);
	fill(CSLIDERLIGHTGREY);
	rect(accln01SetterX-controlBarrier-pucksize/2, accln01SetterY-controlBarrier-pucksize/2, 2*controlBarrier+pucksize, 2*controlBarrier+pucksize,5);
	fill(CWHITE);
	if(dist(dragaccln01PuckX, dragaccln01PuckY, mouseX, mouseY)< pucksize/2 && mouseIsPressed)  {
		fill(CSLIDERDARKGREY);
		dragaccln01PuckX = mouseX;
		dragaccln01PuckY = mouseY;
	}
	dragaccln01PuckX=constrain(dragaccln01PuckX,accln01SetterX-controlBarrier,accln01SetterX+controlBarrier);
	dragaccln01PuckY=constrain(dragaccln01PuckY,accln01SetterY-controlBarrier,accln01SetterY+controlBarrier);
	rect(dragaccln01PuckX-pucksize/2, dragaccln01PuckY-pucksize/2, pucksize, pucksize,5)
	stroke(CSLIDERDARKGREY);
	strokeWeight(2);
	fill(CSLIDERDARKGREY);
	line(accln01SetterX, accln01SetterY, dragaccln01PuckX, dragaccln01PuckY);
	ellipse(dragaccln01PuckX, dragaccln01PuckY, 2, 2);
	var accln01 = createVector((dragaccln01PuckX-accln01SetterX)/(2*controlBarrier),(accln01SetterY-dragaccln01PuckY)/(2*controlBarrier)).mult(acclnscaling);
	
    //  accln12 puck (2D slider), returns a vector. Create one per slider.
	stroke(CSLIDERDARKGREY);
	strokeWeight(1);
	fill(CSLIDERLIGHTGREY);
	rect(accln12SetterX-controlBarrier-pucksize/2, accln12SetterY-controlBarrier-pucksize/2, 2*controlBarrier+pucksize, 2*controlBarrier+pucksize,5);
	fill(CWHITE);
	if(dist(dragaccln12PuckX, dragaccln12PuckY, mouseX, mouseY)< pucksize/2 && mouseIsPressed)  {
		fill(CSLIDERDARKGREY);
		dragaccln12PuckX = mouseX;
		dragaccln12PuckY = mouseY;
	}
	dragaccln12PuckX=constrain(dragaccln12PuckX,accln12SetterX-controlBarrier,accln12SetterX+controlBarrier);
	dragaccln12PuckY=constrain(dragaccln12PuckY,accln12SetterY-controlBarrier,accln12SetterY+controlBarrier);
	rect(dragaccln12PuckX-pucksize/2, dragaccln12PuckY-pucksize/2, pucksize, pucksize,5)
	stroke(CSLIDERDARKGREY);
	strokeWeight(2);
	fill(CSLIDERDARKGREY);
	line(accln12SetterX, accln12SetterY, dragaccln12PuckX, dragaccln12PuckY);
	ellipse(dragaccln12PuckX, dragaccln12PuckY, 2, 2);
	var accln12 = createVector((dragaccln12PuckX-accln12SetterX)/(2*controlBarrier),(accln12SetterY-dragaccln12PuckY)/(2*controlBarrier)).mult(acclnscaling);
	
	//  accln23 puck (2D slider), returns a vector. Create one per slider.
	stroke(CSLIDERDARKGREY);
	strokeWeight(1);
	fill(CSLIDERLIGHTGREY);
	rect(accln23SetterX-controlBarrier-pucksize/2, accln23SetterY-controlBarrier-pucksize/2, 2*controlBarrier+pucksize, 2*controlBarrier+pucksize,5);
	fill(CWHITE);
	if(dist(dragaccln23PuckX, dragaccln23PuckY, mouseX, mouseY)< pucksize/2 && mouseIsPressed)  {
		fill(CSLIDERDARKGREY);
		dragaccln23PuckX = mouseX;
		dragaccln23PuckY = mouseY;
	}
	dragaccln23PuckX=constrain(dragaccln23PuckX,accln23SetterX-controlBarrier,accln23SetterX+controlBarrier);
	dragaccln23PuckY=constrain(dragaccln23PuckY,accln23SetterY-controlBarrier,accln23SetterY+controlBarrier);
	rect(dragaccln23PuckX-pucksize/2, dragaccln23PuckY-pucksize/2, pucksize, pucksize,5)
	stroke(CSLIDERDARKGREY);
	strokeWeight(2);
	fill(CSLIDERDARKGREY);
	line(accln23SetterX, accln23SetterY, dragaccln23PuckX, dragaccln23PuckY);
	ellipse(dragaccln23PuckX, dragaccln23PuckY, 2, 2);
	var accln23 = createVector((dragaccln23PuckX-accln23SetterX)/(2*controlBarrier),(accln23SetterY-dragaccln23PuckY)/(2*controlBarrier)).mult(acclnscaling);
	
	//  accln34 puck (2D slider), returns a vector. Create one per slider.
	stroke(CSLIDERDARKGREY);
	strokeWeight(1);
	fill(CSLIDERLIGHTGREY);
	rect(accln34SetterX-controlBarrier-pucksize/2, accln34SetterY-controlBarrier-pucksize/2, 2*controlBarrier+pucksize, 2*controlBarrier+pucksize,5);
	fill(CWHITE);
	if(dist(dragaccln34PuckX, dragaccln34PuckY, mouseX, mouseY)< pucksize/2 && mouseIsPressed)  {
		fill(CSLIDERDARKGREY);
		dragaccln34PuckX = mouseX;
		dragaccln34PuckY = mouseY;
	}
	dragaccln34PuckX=constrain(dragaccln34PuckX,accln34SetterX-controlBarrier,accln34SetterX+controlBarrier);
	dragaccln34PuckY=constrain(dragaccln34PuckY,accln34SetterY-controlBarrier,accln34SetterY+controlBarrier);
	rect(dragaccln34PuckX-pucksize/2, dragaccln34PuckY-pucksize/2, pucksize, pucksize,5)
	stroke(CSLIDERDARKGREY);
	strokeWeight(2);
	fill(CSLIDERDARKGREY);
	line(accln34SetterX, accln34SetterY, dragaccln34PuckX, dragaccln34PuckY);
	ellipse(dragaccln34PuckX, dragaccln34PuckY, 2, 2);
	var accln34 = createVector((dragaccln34PuckX-accln34SetterX)/(2*controlBarrier),(accln34SetterY-dragaccln34PuckY)/(2*controlBarrier)).mult(acclnscaling);
	
	
// 	accumulate
velcy1.set(velcy0);
velcy1.add(accln01);
velcy2.set(velcy1);
velcy2.add(accln12);
velcy3.set(velcy2);
velcy3.add(accln23);
velcy4.set(velcy3);
velcy4.add(accln34);

	push();
	translate(a01location, heightdisplaya);
	showAcceleration(accln01.mag(), degrees(-accln01.heading()+PI/2), CACCELERATION);
	pop();
	
	push();
	translate(a12location, heightdisplaya);
	showAcceleration(accln12.mag(), degrees(-accln12.heading()+PI/2), CACCELERATION);
	pop();
	
	push();
	translate(a23location, heightdisplaya);
	showAcceleration(accln23.mag(), degrees(-accln23.heading()+PI/2), CACCELERATION);
	pop();
	
	push();
	translate(a34location, heightdisplaya);
	showAcceleration(accln34.mag(), degrees(-accln34.heading()+PI/2), CACCELERATION);
	pop();
	
	push();
	translate(v0location, heightdisplayv);
	showVelocity(velcy0.mag(), degrees(-velcy0.heading()+PI/2), CIDEAGREEN);
	pop();
	
	push();
	translate(v1location, heightdisplayv);
	showVelocity(velcy1.mag(), degrees(-velcy1.heading()+PI/2), CIDEAGREEN);
	pop();
	
	push();
	translate(v2location, heightdisplayv);
	showVelocity(velcy2.mag(), degrees(-velcy2.heading()+PI/2), CIDEAGREEN);
	pop();
	
	push();
	translate(v3location, heightdisplayv);
	showVelocity(velcy3.mag(), degrees(-velcy3.heading()+PI/2), CIDEAGREEN);
	pop();
	
	push();
	translate(v4location, heightdisplayv);
	showVelocity(velcy4.mag(), degrees(-velcy4.heading()+PI/2), CIDEAGREEN);
	pop();
	
	placeWords("set\ninitial\nvelocity", v0location+50, 188);
	placeWords("set\nthe accelerations\nfor each interval", a34location+100, 88);
	placeWords("t=0",v0location-11,height-20);
	placeWords("t=1",v1location-11,height-20);
	placeWords("t=2",v2location-11,height-20);
	placeWords("t=3",v3location-11,height-20);
	placeWords("t=4",v4location-11,height-20);
	placeWords("velocity\nat\nthis\ntime", v4location+95, heightdisplayv);
	placeWords("acceleration\nduring\nthis\ninterval", a34location+95, heightdisplaya);
	
    placeTitleBold("Acceleration accumulates velocity, interval by interval");
}



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }

