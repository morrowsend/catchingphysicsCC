// CPMgConstVelocityPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=1;
var kazposition;
var kazvelocity;
const theforces = -0.01;
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
    
    sliderForces=new createSliderDivider(700,80,60,15,1,[0.5],false);
    
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
    sliderForces.draw();
    
    var theforces = 0.01+sliderForces.getValue()*0.01; // 5 steps 0-4
    console.log(theforces);
	controlbutton.drawButton();
        
    var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
    var initialvelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);

    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
			braking=false;
            placeWords("set\nwhere you\nstart",112,80);
            placeWords("set\nstarting\nspeed,\ndirection",112,170);
            kazposition=initialdisplacement;
            kazvelocity=initialvelocity;
            break;
        case 1:
//            running
			
           placeWords("pause",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 180);
            masterTicker++;
    
    if (masterTicker%20==0){
        runtime++;
        var kazacceleration=createVector(kazvelocity.x,kazvelocity.y);
        kazacceleration.normalize();
		kazposition.add(kazvelocity);
		stepNumber++;
		}
            
            stepNumber=stepNumber%6;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 180);
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
			pop();
			push();
				rotate(kazvelocity.heading());
				translate((-kazvelocity.mag()*PXSCALE*PXSCALE/2),-32);
				showVelocity(kazvelocity.mag()*PXSCALE,90,CPOVALICE);
			pop();
			if (stateof!=0){
			push();
				rotate(kazvelocity.heading());
				showForce(theforces*500,270, CGRIP);
				showForce(theforces*500,90, CDRAG);
			pop();
			}
    pop();
    
    push();
		translate(300,300);
		rotate(kazposition.heading());
		drawPoV("AliceRight");
    pop();
        
	placeWords("no wind", 750-26, 100+16);
	placeWords("headwind", 750-26, 100+16-30);
	placeWords("tailwind", 750-26, 100+16+30);

	
	placeTitleBold("No change, on a bike");  
}

function mousePressed(){
        sliderForces.mousePressed();
}


function mouseReleased(){
	sliderForces.mouseReleased();
	controlbutton.checkPressed();
	}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

