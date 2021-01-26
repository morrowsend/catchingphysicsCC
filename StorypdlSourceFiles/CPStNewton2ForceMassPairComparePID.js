// {CPStNewton2ForceMassPairComparePID}{950}{450}


var stateof=0;
var runtime=0;
var object1Location=0;
var object2Location=0;
var stamping = false;

function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
    createCanvas(900, 450);
    controlbutton=new CreateControlButton(37, height-50,60,30);
    traceCheckBox = new CreateCheckButton(width-142, height-50,"draw trace",false);

    force1Set=new createSliderDivider(40,80,80,15,0,[0.7],false);
    mass1Set=new createSliderDivider(140,80,80,15,0,[0.3],false);
    force2Set=new createSliderDivider(40,280,80,15,0,[0.5],false);
    mass2Set=new createSliderDivider(140,280,80,15,0,[0.6],false);

}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    traceCheckBox.drawButton();
    var varied1Force = 3+force1Set.getValue(0)*10;
    var varied1Mass = 1+mass1Set.getValue(0)*2;
    var varied2Force = 3+force2Set.getValue(0)*10;
    var varied2Mass = 1+mass2Set.getValue(0)*2;

    if (controlbutton.buttonwasPressed){
      stateof++;
      stateof=stateof%3;
      controlbutton.buttonwasPressed=false;
    }

    if(traceCheckBox.buttonisChecked){
      stamping=true;
    } else {
      stamping=false;
    }

    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",42,height-32);
            object1Location=0;
            object2Location=0;
            runtime=0;
            force1Set.draw();
			mass1Set.draw();
			force2Set.draw();
			mass2Set.draw();
			placeWords("set\ntop\nforce",70,90);
			placeWords("set\ntop\nmass",170,90);
			placeWords("set\nbottom\nforce",70,290);
			placeWords("set\nbottom\nmass",170,290);
            break;
        case 1:
//            running
            placeWords("pause",42,height-32);
            runtime++;
            object1Location=0.005*(varied1Force/varied1Mass)*pow(runtime,2);
            object2Location=0.005*(varied2Force/varied2Mass)*pow(runtime,2);
            if (stamping==true){
				for (i = 0; i < runtime; i=i+20) {
					push();
					translate(80+0.005*(varied1Force/varied1Mass)*pow(i,2),190);
					showMass(varied1Mass, CDEVICEGREY);
					pop();
					push();
					translate(80+0.005*(varied2Force/varied2Mass)*pow(i,2),250);
					showMass(varied2Mass, CDEVICEGREY);
					pop();
				}
            }
            break;
        case 2:
//            paused
            placeWords("reset",42,height-32);
            if (stamping==true){
				for (i = 0; i < runtime; i=i+20) {
					push();
					translate(80+0.005*(varied1Force/varied1Mass)*pow(i,2),190);
					showMass(varied1Mass, CDEVICEGREY);
					pop();
					push();
					translate(80+0.005*(varied2Force/varied2Mass)*pow(i,2),250);
					showMass(varied2Mass, CDEVICEGREY);
					pop();
				}
            }
            break;
                      }

    push();
		translate(80+object1Location,190);
		showMass(varied1Mass, CDEVICEGREY);
		showForce(varied1Force,90,CFORCEBLUE);
    pop();

    push();
		translate(80+object2Location,250);
		showMass(varied2Mass, CDEVICEGREY);
		showForce(varied2Force,90,CFORCEGREEN);
    pop();



	placeTitleBold("Vary the force and mass of either or both, compare the accelerations");
}

function mousePressed(){
        force1Set.mousePressed();
        mass1Set.mousePressed();
        force2Set.mousePressed();
        mass2Set.mousePressed();
	}

function mouseReleased(){
        force1Set.mouseReleased();
        mass1Set.mouseReleased();
        force2Set.mouseReleased();
        mass2Set.mouseReleased();
        controlbutton.checkPressed();
        traceCheckBox.changeState();
    }


function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
