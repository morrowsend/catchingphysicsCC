// KnVelocityAccumulatesDisplacementGraphs1DPID


var stateof=0;
var runtime=0;
var masterTicker=0;
var objectLocation=0;


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(950, 730);
    
	controlbutton=new CreateControlButton(20,height-50,60,30);
    
    velcySparker = new SparkLineGraph;
    velcySparker.create(20,420,800,80,"velocity","PN",0);
    displSparker = new SparkLineGraph;
    displSparker.create(20,590,800,80,"displacement","PN",0);
    
    
    displacmentSet=new createSliderDivider(40,220,100,15,0,[0.7],false);
    velocitySet=new createSliderDivider(200,220,100,15,0,[0.7],false);

}

function draw() {
    background(CWHITE);
    
    velocitySet.draw();
	controlbutton.drawButton();
    var initialdisplacement = (displacmentSet.getValue()-0.5)*200;
    var velocityAccumlates = (velocitySet.getValue(0)-0.5)*2;
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    } 
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
            displacmentSet.draw();
            placeWords("set\ninitial\ndisplacement",70,230);
            resetVariables();
            objectLocation=initialdisplacement;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            runtime++;
            masterTicker=runtime;
            objectLocation+=velocityAccumlates*5;
            velcySparker.acquire(velocityAccumlates*30);
            displSparker.acquire(objectLocation*10);
            velcySparker.plot();
            displSparker.plot();
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
			velcySparker.plot();
            displSparker.plot();
				break;
                      }
    
    push();
    translate(300,170);
    showDisplacement(objectLocation/10,90,CPOVCHARLIE);
    pop();
    push();
    translate(300+objectLocation,120);
    drawPoVObject("Alice");
    translate((-velocityAccumlates*50),32);
    showVelocity(velocityAccumlates*PXSCALE,90,CPOVCHARLIE);
    pop();
    
    push();
    translate(40,120);
    drawPoV("CharlieRight");
    pop();
    
 if (runtime>=400){
 stateof=2;
 }
    


    placeWords("set\nvelocity",230,230);
  placeTitleBold("set velocity and watch displacement accumulate");  
}

function mousePressed(){
        displacmentSet.mousePressed();
        velocitySet.mousePressed();

	}
function mouseReleased(){
        displacmentSet.mouseReleased();
        velocitySet.mouseReleased();
		controlbutton.checkPressed();
    }


function resetVariables(){
    displacementOne=0;
    runtime=0;
    displSparker.slValues= [];
    velcySparker.slValues= [];
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
