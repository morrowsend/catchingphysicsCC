// CPKfForcesonaBoatCombinedPID

var forcebuoyancyLlocations = [112,170,180,165];
var forcebuoyancyRlocations = [248,170,180,165];
var forcebuoyancy1locations = [127,190,180,325]; 
var forcebuoyancy2locations = [162,190,180,285];
var forcebuoyancy3locations = [202,190,180,245];
var forcebuoyancy4locations = [237,190,180,205];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(474, 350);
    transitionProgress=new IanSlider(20,100,200,15,0,[0],false);
}

function draw() {
    background(cWhite);
    push();
		translate(10, 30);
		noStroke();
		fill(125,(1-transitionProgress.getValue())*255);
		rect(100,120,140,40);
		strokeWeight(3);
		stroke(240,(1-transitionProgress.getValue())*255);
		line(100, 160, 240, 160);
		line(100, 160, 100, 120);
		line(240, 160, 240, 120);
		tint(255, 255*(transitionProgress.getValue()));
		stroke(240,(transitionProgress.getValue())*255);
		fill(125,(transitionProgress.getValue())*255);
		ellipseMode(CENTER);
		arc(180, 120, 180, 80, 0, PI, CHORD);
		pop();

	transitionProgress.draw();
	words("combine", 40, 110);
	advicedroid(402, 80, "Direction and length are important for force arrows, so slide the force arrows to combine them.\n\nDon't spin or stretch the force arrows.", 140, 170);
	
    push();
 translate(translateObject(forcebuoyancy1locations[0],forcebuoyancy1locations[2]),translateObject(forcebuoyancy1locations[1],forcebuoyancy1locations[3]));
    force(4,0,cbuoyancy);
    pop();
    
push();
 translate(translateObject(forcebuoyancy2locations[0],forcebuoyancy2locations[2]),translateObject(forcebuoyancy2locations[1],forcebuoyancy2locations[3]));
    force(4,0,cbuoyancy);
    pop();
    
    push();
 translate(translateObject(forcebuoyancy3locations[0],forcebuoyancy3locations[2]),translateObject(forcebuoyancy3locations[1],forcebuoyancy3locations[3]));
    force(4,0,cbuoyancy);
    pop();
    
    push();
 translate(translateObject(forcebuoyancy4locations[0],forcebuoyancy4locations[2]),translateObject(forcebuoyancy4locations[1],forcebuoyancy4locations[3]));
    force(4,0,cbuoyancy);
    pop();
    
    push();
 translate(translateObject(forcebuoyancyLlocations[0],forcebuoyancyLlocations[2]),translateObject(forcebuoyancyLlocations[1],forcebuoyancyLlocations[3]));
    force(3,90,cbuoyancy);
    pop();
    
    push();
	translate(translateObject(forcebuoyancyRlocations[0],forcebuoyancyRlocations[2]),translateObject(forcebuoyancyRlocations[1],forcebuoyancyRlocations[3]));
		force(3,-90,cbuoyancy);
    pop();
    
    push();
		translate(180,175);
		force(16,180,cgravity);
    pop();
    
	titleBold("buoyancy and gravity forces on a simplified boat");  
}

function mousePressed(){
        transitionProgress.mousePressed();
	}
function mouseReleased(){
        transitionProgress.mouseReleased();
    }

function translateObject(startcoordinate,finishcoordinate){
return locationnow = startcoordinate + (finishcoordinate-startcoordinate)*transitionProgress.getValue()
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
