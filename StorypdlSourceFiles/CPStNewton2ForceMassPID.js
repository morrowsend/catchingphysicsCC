// {CPStNewton2ForceMassPID}{800}{360}

var stateof=0;
var runtime=0;
var objectLocation=0;
var stamping = false;

function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(800, 360);

    controlbutton=new CreateControlButton(37,310,60,30);

    traceCheckBox = new CreateCheckButton(width-142, height-50,"draw trace",false);

    forceSet=new createSliderDivider(40,200,100,15,0,[0.7],false);
    massSet=new createSliderDivider(120,200,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    traceCheckBox.drawButton();
    forceSet.draw();
    massSet.draw();

    var variedForce = 3+forceSet.getValue(0)*10;
    var variedMass = 1+massSet.getValue(0)*2;

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
            placeWords("go",42,328);
            objectLocation=0;
            runtime=0;
            break;
        case 1:
//            running
            placeWords("pause",42,328);
            runtime++;
            objectLocation=0.005*(variedForce/variedMass)*pow(runtime,2);
            if (stamping==true){
				for (i = 0; i < runtime; i=i+20) {
					push();
					translate(80+0.005*(variedForce/variedMass)*pow(i,2),150);
					showMass(variedMass, CDEVICEGREY);
					pop();
				}
            }
            break;
        case 2:
//            paused
            placeWords("reset",42,328);
            if (stamping==true){
				for (i = 0; i < runtime; i=i+20) {
					push();
					translate(80+0.005*(variedForce/variedMass)*pow(i,2),150);
					showMass(variedMass, CDEVICEGREY);
					pop();
				}
            }
            break;
                      }

    push();
		translate(80+objectLocation,150);
		showMass(variedMass, CDEVICEGREY);
		showForce(variedForce,90,CFORCEBLUE);
    pop();


	placeWords("set\nforce",70,210);
    placeWords("set\nmass",150,210);
	placeTitleBold("Vary the force and mass, see the acceleration");
}

function mousePressed(){
        forceSet.mousePressed();
        massSet.mousePressed();
	}

function mouseReleased(){
        forceSet.mouseReleased();
        massSet.mouseReleased();
        controlbutton.checkPressed();
        traceCheckBox.changeState();
    }


function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
