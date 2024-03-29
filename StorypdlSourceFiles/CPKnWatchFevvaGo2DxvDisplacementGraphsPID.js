// KinWatchFevvaGo2DxvDisplacementGraphsPID

var stateof=0;
var runtime=0;
var masterTicker=0;
var stepNumber=0;
const controllers=[];
const scaleFactorDisplacement=20;
const scaleFactorVelocity=2;
var Fevvaposition; // you need to create any accumulated vectors here

// var velcyxvalues = new ArshowRay(0);
// var velcyyvalues = new ArshowRay(0);

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	FevvaTop1=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop1.svg");
	FevvaTop2=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop2.svg");
	FevvaTop3=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop3.svg");
	FevvaTop4=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop4.svg");
	FevvaTop5=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop5.svg");
	FevvaTop6=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop6.svg");
	FevvaTop7=loadImage("../__PDLgraphics/FevvaFlight/FevvaTop7.svg");

}
function setup(){
    createCanvas(950, 800);
    
    controlbutton=new CreateControlButton(20,height-50,60,30);
    
     const xloc =60;
    for (let i = 0; i<2; i++){
		controllers[i]= new CreateControlPuck();
		let yloc = 108+90*i;
		controllers[i].create(xloc,yloc);
    }
    
    displYSparker = new SparkLineGraph;
    displYSparker.create(20,610,800,40,"displacement\nvertical\ncomponent","PN",0);
    displXSparker = new SparkLineGraph;
    displXSparker.create(20,700,800,40,"displacement\nhorizontal\ncomponent","PN",0);

}

function draw() {
    background(CWHITE);
    imageMode(CENTER);
    controlbutton.drawButton();
   var initialdisplacement = createVector(controllers[0].getValues().xSet,-controllers[0].getValues().ySet).mult(scaleFactorDisplacement);
   var Fevvavelocity = createVector(controllers[1].getValues().xSet,-controllers[1].getValues().ySet).mult(scaleFactorVelocity);

	var Fspeed = Fevvavelocity.mag();
	
      if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }  
    
    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);

            placeWords("set\nwhere your\ncrow starts",112,80);
            resetVariables();
            Fevvaposition = initialdisplacement;
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
				Fevvaposition.add(Fevvavelocity);
				displYSparker.acquire(Fevvaposition.y*-100);
				displXSparker.acquire(Fevvaposition.x*100);
				stepNumber++;
			}
			
			stepNumber=stepNumber%7;
			displYSparker.plot();
			displXSparker.plot();
					break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            fill(CWHITE);
            noStroke();
            rect(14, 63, 90, 90);
			displYSparker.plot();
			displXSparker.plot();
            break;
                      }

    push();
		translate(300,300);
		rotate(Fevvaposition.heading());
		showDisplacement(Fevvaposition.mag(),90,CPOVCHARLIE);
    pop();

    push();
		translate(300+Fevvaposition.x*PIXELSCALING,300+Fevvaposition.y*PIXELSCALING);
        
		push();
			rotate(Fevvavelocity.heading()); 
				 
				switch (stepNumber) {
					case 0:
						image(FevvaTop1,0,0);
					break;

					case 1:
						image(FevvaTop2,0,0);
					break;

					case 2:
						image(FevvaTop3,0,0);
					break;

					case 3:
						image(FevvaTop4,0,0);
					break;

					case 4:
						image(FevvaTop5,0,0);
					break;

					case 5:
						image(FevvaTop6,0,0);
					break;
				
					case 6:
						image(FevvaTop7,0,0);
					break;
				}

		pop();
		push();
			rotate(Fevvavelocity.heading());
			translate((-Fspeed*PXSCALE*PXSCALE/2),-32);
			showVelocity(Fspeed*PXSCALE,90,CPOVCHARLIE);
		pop();
    pop();
    
    push();
		translate(300,300);
		rotate(Fevvaposition.heading());
		drawPoV("CharlieRight");
    pop();
        
if (runtime>=400){
 stateof=2;
 }

	placeWords("set\nbird\nvelocity",112,170);
	placeTitleBold("take your crow for a flight: watch Fevva go");  
}


function mouseReleased(){
	controlbutton.checkPressed();
	}
	
function resetVariables(){
    runtime=0;
    displYSparker.slValues=[];
    displXSparker.slValues=[];
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
}

  





