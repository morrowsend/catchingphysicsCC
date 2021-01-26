// {CPSlMomentumConservationconstrainPID}{660}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(660, 450);
    totalmassSet=new createSliderDivider(20,80,100,15,0,[0.7],false);
    chunkdivideSet=new createSliderDivider(420,80,100,15,0,[0.5],false);
}

function draw() {
    background(CWHITE);

    chunkdivideSet.draw();
    totalmassSet.draw();


    var variedchunkone = chunkdivideSet.getValue(0);
    var variedchunktwo = 1-chunkdivideSet.getValue(0);
    var variedtotalmass = totalmassSet.getValue(0);

    var chunkone=variedtotalmass*variedchunkone;
    var chunktwo=variedtotalmass*variedchunktwo;

    push();
    translate(250, 250);
    createPossSpace2D(150, 150,  " momentum of object two","momentum of object one", chunkone*70, 70*chunktwo);
    pop();

    push();
    translate(440,400);
    showMomentum((chunkone+chunktwo)*PXSCALE, 0, CIDEABLUE);
    translate(60,0);
    showMomentum(chunkone*PXSCALE, 0, CIDEARED);
    translate(0,-chunkone*PXSCALE*PXSCALE);
    showMomentum(chunktwo*PXSCALE, 0, CIDEAGREEN);
    pop();


	placeWords("share out momentum",445,135);
	placeWords("all momentum to object one",445,85);
	placeWords("all momentum to object two",445,185);
  placeWords("momentum:\nset\ntotal",45,90);
	placeTitleBold("Possibilities limited: momentum is conserved");
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
