// KnWatchJonnieGovelocityaccumulatesdisplacement1DPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var Jonnieposition=0;
var stepNumber=0;
var JonnieTrackheight=300;
var controlbutton;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

    JonnieSide1=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight1.svg");
    JonnieSide2=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight2.svg");
    JonnieSide3=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight3.svg");
    JonnieSide4=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight4.svg");
    JonnieSide5=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight5.svg");
    JonnieSide6=loadImage("../__PDLgraphics/JonnieWalk/JonnieSideRight6.svg");
    
}
function setup(){
    createCanvas(800, 500);
    
    controlbutton=new controlButton(20,450,60,30);
    
    displacmentSet=new IanSlider(40,220,100,15,0,[0.7],false);
    velocitySet=new IanSlider(200,220,100,15,0,[0.7],false);

}


function draw() {
    background(cWhite);
    imageMode(CENTER);
    
    velocitySet.draw();
    
    var initialdisplacement = (displacmentSet.getValue()-0.5)*200;
    var Jonnievelocity = 0.1+velocitySet.getValue();
    
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
			displacementOne=0;
			runtime=0;
			Jonnieposition=0;
            displacmentSet.draw();
            words("set\nwhere your\nhuman starts",70,230);
            Jonnieposition=initialdisplacement;
            break;
        case 1:
//            running
            words("pause",28,height-32);
            masterTicker++;
    
    if (masterTicker%20==0){
        runtime++;
        Jonnieposition+=Jonnievelocity*6;
        stepNumber++;
    }
            
            stepNumber=stepNumber%6;
            break;
        case 2:
//            paused
            words("reset",28,height-32);
            break;
                      }
    
    push();
    translate(300,JonnieTrackheight);
    displacement(Jonnieposition/5,90,cpovCharlie);
    pop();
    
    push();
    translate(300+Jonnieposition,-40);
        
switch (stepNumber) {
              case 0:
                image(JonnieSide1,Jonnieposition,JonnieTrackheight);

                break;

                case 1:
                image(JonnieSide2,Jonnieposition,JonnieTrackheight);

                 break;

               case 2:
               image(JonnieSide3,Jonnieposition,JonnieTrackheight);

                break;

              case 3:
              image(JonnieSide4,Jonnieposition,JonnieTrackheight);

              break;

              case 4:
              image(JonnieSide5,Jonnieposition,JonnieTrackheight);

                break;

            case 5:
              image(JonnieSide6,Jonnieposition,JonnieTrackheight);

            break;
            
            case 6:
              image(JonnieSide7,Jonnieposition,JonnieTrackheight);

            break;
              }
  
    
    translate((-Jonnievelocity*50)+Jonnieposition,JonnieTrackheight-32);
    velocity(Jonnievelocity*pxscale,90,cpovCharlie);
    pop();
    
    push();
    translate(40,120);
    PoV("CharlieRight");
    pop();
        


    words("set\nboy\nvelocity",230,230);
  titleBold("take your human for a walk: watch Jonnie go");  
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



function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

