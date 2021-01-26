// {CPSlCurrentVoltageResistanceconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    voltageSet=new createSliderDivider(40,300,100,15,0,[0.7],false);
    resistanceSet=new createSliderDivider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);

    voltageSet.draw();
    resistanceSet.draw();


    var variedvoltage = (voltageSet.getValue(0));
    var variedresistance = 0.1+(0.9*resistanceSet.getValue(0));

    var thecurrent=variedvoltage/variedresistance;

    push();
    translate(350, 250);
    createPossSpace2D(150, 200,  " current","voltage", variedvoltage*80, 6*thecurrent);
    pop();


	placeWords("vary\nvoltage",70,310);
    placeWords("set\nresistance",70,110);
	placeTitleBold("Possibilities limited: Set resistance, vary voltage, see the current");
}

function mousePressed(){
        voltageSet.mousePressed();
        resistanceSet.mousePressed();
	}

function mouseReleased(){
        voltageSet.mouseReleased();
        resistanceSet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
