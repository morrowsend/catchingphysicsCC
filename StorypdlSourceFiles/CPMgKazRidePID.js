// CPMgKazRidePID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=2;
var kazposition; // you need to create any accumulated vectors here

var controlbutton;


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	KazSlowTop1=loadImage("../__PDLgraphics/KazBike/KazSlowTop01.svg");
	KazSlowTop2=loadImage("../__PDLgraphics/KazBike/KazSlowTop02.svg");
	KazSlowTop3=loadImage("../__PDLgraphics/KazBike/KazSlowTop03.svg");
	KazSlowTop4=loadImage("../__PDLgraphics/KazBike/KazSlowTop04.svg");
	KazSlowTop5=loadImage("../__PDLgraphics/KazBike/KazSlowTop05.svg");
	KazSlowTop6=loadImage("../__PDLgraphics/KazBike/KazSlowTop06.svg");
	KazStopped=loadImage("../__PDLgraphics/KazBike/KazSlowTop07.svg");

}
function setup(){
    createCanvas(800, 600);
    
    controlbutton=new CreateControlButton(20,550,60,30);
    
     const xloc =60;
    for (let i = 0; i<2; i++){
		controllers[i]= new CreateControlPuck();
		let yloc = 108+90*i;
		controllers[i].create(xloc,yloc);
    }

}

function draw() {
    background(CWHITE);
    imageMode(CENTER);
    
	controlbutton.drawButton();
        
   var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
   var kazvelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);
    
    var Rspeed = kazvelocity.mag();
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
            
            placeWords("set\nwhere your\nbike starts",112,80);
            runtime=0;
            kazposition=initialdisplacement;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 90);
            masterTicker++;
    
    if (masterTicker%20==0){
        runtime++;
        kazposition.add(kazvelocity.mult(5));
        stepNumber++;
    }
            
            stepNumber=stepNumber%6;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 90);
            break;
                      }
    
    push();
		translate(300,300);
		rotate(kazposition.heading());
		showDisplacement(kazposition.mag(),90,CPOVALICE);
    pop();

    push();
		translate(300+kazposition.x*PIXELSCALING,300+kazposition.y*PIXELSCALING);
        
 push();
		rotate(kazvelocity.heading()); 
        if (kazvelocity.mag()!=0){              
			switch (stepNumber) {
				case 0:
					image(KazSlowTop1,0,0);
				break;

				case 1:
					image(KazSlowTop2,0,0);
				break;

				case 2:
					image(KazSlowTop3,0,0);
				break;

				case 3:
					image(KazSlowTop4,0,0);
				break;

				case 4:
					image(KazSlowTop5,0,0);
				break;

				case 5:
					image(KazSlowTop6,0,0);
				break;
			}
			}else{
			image(KazStopped, 0, 0)
			}
			pop();
			push();
				rotate(kazvelocity.heading());
				translate((-Rspeed*PXSCALE*PXSCALE/2),-32);
				showVelocity(Rspeed*PXSCALE,90,CPOVALICE);
			pop();
    pop();
    
    push();
		translate(300,300);
		rotate(kazposition.heading());
		drawPoV("AliceRight");
    pop();
        


	placeWords("set\nbike\nspeed,\ndirection",112,170);
	
	placeTitleBold("Take your bike for a ride. A bird's-eye view of the journey.");  
}

function mouseReleased(){
	controlbutton.checkPressed();
	}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}



