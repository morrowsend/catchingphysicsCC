// filename: SGRaysShadowPID
    const bw=30; // half book width
    const ww=140; //half wall width
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(590, 440);
    bookposition = new controlStripHorizontal();
	bookposition.create(227,100);    
    wallposition = new controlStripHorizontal();
	wallposition.create(402,100);    
}

function draw() {
    background(cWhite);
    
    var thepos=createVector(bookposition.getValues().xSet,bookposition.getValues().ySet);
    var sb=100-thepos.x*50; // from source to book

    var movewall=createVector(wallposition.getValues().xSet,wallposition.getValues().ySet);
    var ss=300-movewall.x*50; //from source to screen
   
    var sw = ss*(bw/sb);
	push();
		translate(100, 250);
		transducer(clight, 0);
		// the wall
		strokeWeight(1);
		stroke(cideaRed);
		line(ss, +ww, ss, -ww);
		leadlinediagram("the wall", ss, ww*.9);
		// the book
		stroke(cideaBlue);
		fill(cideaBlue);
		rectMode(RADIUS);
		rect(sb+8, 0, 5, bw);
		leadlinediagram("the book", sb+4, bw/2);
		// the shadow
		strokeWeight(4);
		stroke(cideaGrey);
		line(ss, +sw, ss, -sw);
		leadlinediagram("the shadow", ss, -sw/2);
		// 	the rays
		rayC(0, 0, ss, +sw);
		rayC(0, 0, ss, -sw);
	pop();

	titleBold("Drawing rays to predict a shadow of a book on a wall");
}

