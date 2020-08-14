// MgPedallingPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=1;
var kazposition;
var kazvelocity;
const pedalforce = 0.01;
var controlbutton;
var pedalling=false;

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
    
    controlbutton=new controlButton(20,550,60,30);
    pedalbutton=new controlButton(width-100,80,60,30);
    
    const xloc =60;
    for (let i = 0; i<2; i++){
		controllers[i]= new controlPuck();
		let yloc = 108+90*i;
		controllers[i].create(xloc,yloc);
    }
    
}

function draw() {
    background(cWhite);
    imageMode(CENTER);
    

        
    var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
    var initialvelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);


    controlbutton.drawButton();
    
    
    if (pedalbutton.buttonwasPressed){
    pedalling=true;
    }
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    switch(stateof){
        case 0:
//            ready to go
            words("go",28,height-32);
			runtime=0;
			pedalling=false;
            words("set\nwhere you\nstart",112,80);
            words("set\nstarting\nspeed,\ndirection",112,170);
            kazposition=initialdisplacement;
            kazvelocity=initialvelocity;
            break;
        case 1:
//            running
			if(pedalling==false){
				pedalbutton.drawButton();
				words("pedal", width-90, 100);
			}
           words("pause",28,height-32);
            fill(cWhite);
            noStroke();
            rect(14, 63, 90, 180);
            masterTicker++;
    
    if (masterTicker%20==0){
        runtime++;
        var kazacceleration=createVector(kazvelocity.x,kazvelocity.y);
        kazacceleration.normalize();
        if (kazvelocity.mag()>0.1){
			if(pedalling==true){
				kazvelocity.add(kazacceleration.mult(pedalforce));
			}
			kazposition.add(kazvelocity);
			stepNumber++;
		} else{
			stateof=2
		}
    }
            
            stepNumber=stepNumber%6;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            fill(cWhite);
            noStroke();
            rect(14, 63, 90, 180);
            break;
                      }
    push();
		translate(300,300);
		rotate(kazposition.heading());
		displacement(kazposition.mag(),90,cpovAlice);
    pop();

    push();
		translate(300+kazposition.x*pixelscaling,300+kazposition.y*pixelscaling);
		push();
		rotate(kazvelocity.heading()); 
        if (pedalling==true){              
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
				translate((-kazvelocity.mag()*pxscale*pxscale/2),-32);
				velocity(kazvelocity.mag()*pxscale,90,cpovAlice);
			pop();
			if(pedalling==true){
			push();
				rotate(kazvelocity.heading());
				force(pedalforce*500,90, cgrip);
			pop();
			}
			
    pop();
    
    push();
		translate(300,300);
		rotate(kazposition.heading());
		PoV("AliceRight");
    pop();
        


	
	titleBold("speeding up a bike");  
}


function mouseReleased(){
	controlbutton.checkPressed();
	pedalbutton.checkPressed();
	}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

