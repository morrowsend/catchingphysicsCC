// CPKfUniversalGravitationHogPlanetgravityPID

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
    hog=loadImage("../__PDLgraphics/ranawalk/ranaCurledSide.svg");
}

function setup(){
    createCanvas(600, 450);
    
    
    sliderOne=new createSliderDivider(40,80,100,15,0,[0.7],false);
    sliderTwo=new createSliderDivider(200,80,100,15,4,[0.2],false);

}


function draw() {
    background(CWHITE);
    
    sliderOne.draw();
    sliderTwo.draw();
    
    placeConceptualPane(170, 300, 250, 150);
    placeConceptualPane(450, 300, 250, 280);
    placeTransitionRedescribe(310, 300, 0);
    
    var massRana = 1+sliderOne.getValue()*4; 
    var massPlanet = 1+sliderTwo.getValue()*6;
    var forceg = massRana*massPlanet*.3;
    
	push();
	translate(170, 280);
	imageMode(CENTER)
	image(hog, 0, 0);
	ellipseMode(CENTER);
	fill(CPANEGREEN);
	arc(0,130,370,200,PI+PI/6,-PI/6,CHORD);
	rect(-125, 56, 249, 58,0,0,10,10)
	showForce(forceg, 180, CFORCEGREEN);
	pop();	


push();
translate(450, 300);
ellipseMode(CENTER);
fill(CIDEARED)
ellipse(0,-110,10,10);
fill(CIDEAGREEN)
ellipse(0,110,10,10);
push();
translate(0, -110);
showForce(forceg, 180, CFORCEGREEN);
pop();
push();
translate(0, 110);
showForce(forceg, 0, CFORCERED);
pop();
pop();

	placeWords("set mass\nof hedgehog", 70, 90);
	placeWords("select mass\nof planet", 230, 90);

	placeTitleBold("Changing planet, changing hog: local view and Newtonian view");  
}

function mousePressed(){
        sliderOne.mousePressed();
        sliderTwo.mousePressed();

	}
function mouseReleased(){
        sliderOne.mouseReleased();
        sliderTwo.mouseReleased();

    }
    
function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
