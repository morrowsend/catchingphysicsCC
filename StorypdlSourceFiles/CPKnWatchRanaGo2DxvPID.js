// KnWatchRanaGo2DxvPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=2;
var ranaposition; // you need to create any accumulated vectors here

var controlbutton;


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	ranaTop1=loadImage("../__PDLgraphics/ranawalk/ranaTop1.svg");
	ranaTop2=loadImage("../__PDLgraphics/ranawalk/ranaTop2.svg");
	ranaTop3=loadImage("../__PDLgraphics/ranawalk/ranaTop3.svg");
	ranaTop4=loadImage("../__PDLgraphics/ranawalk/ranaTop4.svg");
	ranaTop5=loadImage("../__PDLgraphics/ranawalk/ranaTop5.svg");
	ranaTop6=loadImage("../__PDLgraphics/ranawalk/ranaTop6.svg");
	ranaStopped=loadImage("../__PDLgraphics/ranawalk/ranaCurledTop.svg");

}
function setup(){
    createCanvas(800, 600);
    
    controlbutton=new controlButton(20,550,60,30);
    
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
    
	controlbutton.drawButton();
        
   var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
   var ranavelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);
    
    var Rspeed = ranavelocity.mag();
    
    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
            words("go",28,height-32);
            
            words("set\nwhere your\nhog starts",112,80);
            runtime=0;
            ranaposition=initialdisplacement;
            break;
        case 1:
//            running
            words("pause",28,height-32);
            fill(cWhite);
            noStroke();
            rect(14, 63, 90, 90);
            masterTicker++;
    
    if (masterTicker%20==0){
        runtime++;
        ranaposition.add(ranavelocity.mult(5));
        stepNumber++;
    }
            
            stepNumber=stepNumber%6;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            fill(cWhite);
            noStroke();
            rect(14, 63, 90, 90);
            break;
                      }
    
    push();
		translate(300,300);
		rotate(ranaposition.heading());
		displacement(ranaposition.mag(),90,cpovBob);
    pop();

    push();
		translate(300+ranaposition.x*pixelscaling,300+ranaposition.y*pixelscaling);
        
 push();
		rotate(ranavelocity.heading()); 
        if (ranavelocity.mag()!=0){              
			switch (stepNumber) {
				case 0:
					image(ranaTop1,0,0);
				break;

				case 1:
					image(ranaTop2,0,0);
				break;

				case 2:
					image(ranaTop3,0,0);
				break;

				case 3:
					image(ranaTop4,0,0);
				break;

				case 4:
					image(ranaTop5,0,0);
				break;

				case 5:
					image(ranaTop6,0,0);
				break;
			}
			}else{
			image(ranaStopped, 0, 0)
			}
			pop();
			push();
				rotate(ranavelocity.heading());
				translate((-Rspeed*pxscale*pxscale/2),-32);
				velocity(Rspeed*pxscale,90,cpovBob);
			pop();
    pop();
    
    push();
		translate(300,300);
		rotate(ranaposition.heading());
		PoV("BobRight");
    pop();
        


	words("set\nhedgehog\nvelocity",112,170);
	
	titleBold("take your hedhehog for a walk: watch Rana go");  
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



