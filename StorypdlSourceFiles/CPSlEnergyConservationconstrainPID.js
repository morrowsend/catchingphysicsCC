// {CPSlEnergyConservationconstrainPID}{660}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(660, 450);
    totalmassSet=new IanSlider(20,80,100,15,0,[0.7],false);
    chunkdivideSet=new IanSlider(420,80,100,15,0,[0.5],false);
}

function draw() {
    background(cWhite);

    chunkdivideSet.draw();
    totalmassSet.draw();


    var variedchunkone = chunkdivideSet.getValue(0);
    var variedchunktwo = 1-chunkdivideSet.getValue(0);
    var variedtotalmass = totalmassSet.getValue(0);

    var chunkone=variedtotalmass*variedchunkone;
    var chunktwo=variedtotalmass*variedchunktwo;

    push();
    translate(250, 250);
    pspace2D(150, 150,  " energy in store two","energy in store one", chunkone*70, 70*chunktwo);
    pop();

    push();
    translate(440,400);
    energy((chunkone+chunktwo)*pxscale);
    translate(60,0);
    energy(chunkone*pxscale);
    translate(40,-chunkone*pxscale*pxscale);
    energy(chunktwo*pxscale);
    pop();


	words("share out energy",445,135);
	words("all energy in store one",445,85);
	words("all energy in store two",445,185);
  words("set\ntotal\nenergy",45,90);
	titleBold("Possibilities limited: energy is conserved");
}

function mousePressed(){
        chunkdivideSet.mousePressed();
        totalmassSet.mousePressed();
	}

function mouseReleased(){
        chunkdivideSet.mouseReleased();
        totalmassSet.mouseReleased();
    }



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
