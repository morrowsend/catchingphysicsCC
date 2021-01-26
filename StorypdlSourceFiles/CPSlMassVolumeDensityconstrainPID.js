// {CPSlMassVolumeDensityconstrainPID}{680}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(680, 450);
    volumeSet=new createSliderDivider(40,300,100,15,0,[0.7],false);
    densitySet=new createSliderDivider(40,100,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);

    volumeSet.draw();
    densitySet.draw();


    var variedVolume = (volumeSet.getValue(0));
    var variedDensity = 0.1+(0.9*densitySet.getValue(0));

    var themass=variedVolume*variedDensity;

    push();
    translate(350, 250);
    createPossSpace2D(150, 200,  " mass","volume", variedVolume*80, 60*themass);
    pop();



	placeWords("vary\nvolume",70,310);
    placeWords("set\ndensity",70,110);
	placeTitleBold("Explore possibilities: Set density, vary volume, see the mass");
}

function mousePressed(){
        volumeSet.mousePressed();
        densitySet.mousePressed();
	}

function mouseReleased(){
        volumeSet.mouseReleased();
        densitySet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
