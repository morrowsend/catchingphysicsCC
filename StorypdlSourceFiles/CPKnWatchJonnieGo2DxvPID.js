// KnWatchJonnieGo2DxvPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=2;
var Jonnieposition; // you need to vreate any accumulated vectors here
var controlbutton;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	JonnieTop1=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop1.svg");
	JonnieTop2=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop2.svg");
	JonnieTop3=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop3.svg");
	JonnieTop4=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop4.svg");
	JonnieTop5=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop5.svg");
	JonnieTop6=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop6.svg");
	JonnieTop7=loadImage("../__PDLgraphics/JonnieWalk/JonnieTop7.svg");
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
    
   var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
   var Jonnievelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);

        
    
    var Jspeed = Jonnievelocity.mag();
    controlbutton.drawButton();
    
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
            words("set\nwhere your\nhuman starts",112,80);
            Jonnieposition = initialdisplacement;
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
				Jonnieposition.add(Jonnievelocity.mult(2));
				stepNumber++;
			}
			
					stepNumber=stepNumber%7;
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
		rotate(Jonnieposition.heading());
		displacement(Jonnieposition.mag(),90,cpovCharlie);
    pop();

    push();
		translate(300+Jonnieposition.x*pixelscaling,300+Jonnieposition.y*pixelscaling);
        
		push();
			rotate(Jonnievelocity.heading()); 
				 
				switch (stepNumber) {
					case 0:
						image(JonnieTop1,0,0);
					break;

					case 1:
						image(JonnieTop2,0,0);
					break;

					case 2:
						image(JonnieTop3,0,0);
					break;

					case 3:
						image(JonnieTop4,0,0);
					break;

					case 4:
						image(JonnieTop5,0,0);
					break;

					case 5:
						image(JonnieTop6,0,0);
					break;
				
					case 6:
						image(JonnieTop7,0,0);
					break;
				}

		pop();
		push();
			rotate(Jonnievelocity.heading());
			translate((-Jspeed*pxscale*pxscale/2),-32);
			velocity(Jspeed*pxscale,90,cpovCharlie);
		pop();
    pop();
    
    push();
		translate(300,300);
		rotate(Jonnieposition.heading());
		PoV("CharlieRight");
    pop();
        


	words("set\nhuman\nvelocity",112,170);
	titleBold("take your human for a walk: watch Jonnie go");  
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




