// CPMgSimplerWorld

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    thatBike=loadImage("../__PDLgraphics/KazBike/KazAveSide02.svg");
}
function setup(){
    createCanvas(400, 250);
 	transitionProgress=new createSliderDivider(250,100,80,15,0,[1],false);
}

function draw() {
    background(CWHITE);
    imageMode(CENTER);
    transitionProgress.draw();
    
    tint(255, 255*transitionProgress.getValue());
    image(thatBike,100,150);
        
    fill(120	, 120, 120, 255-255*transitionProgress.getValue());

    ellipse(100, 150, 100, 100);
    
    placeWords("lived-in world",280,110);
	placeWords("physics-world",280,180);
	placeTitleBold("Seeing very simply");  
}

function mousePressed(){
        transitionProgress.mousePressed();
	}
	
function mouseReleased(){
        transitionProgress.mouseReleased();
    }
    
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
