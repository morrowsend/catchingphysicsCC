// {CPSlChargeConservationconstrainPID}{620}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(620, 450);
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
    createPossSpace2D(150, 150,  " charge on object two","charge on object one", chunkone*70, 70*chunktwo);
    pop();

    push();
    translate(440,400);
    showQuantity((chunkone+chunktwo)*PXSCALE, CELECTRIC, "");
    translate(60,0);
    showQuantity(chunkone*PXSCALE, CELECTRIC, "")
    translate(20,-chunkone*PXSCALE*PXSCALE);
    showQuantity(chunktwo*PXSCALE, CELECTRIC, "")
    pop();


	placeWords("share out charge",445,135);
	placeWords("all charge on object one",445,85);
	placeWords("all charge on object two",445,185);
  placeWords("set\ntotal\ncharge",45,90);
	placeTitleBold("Possibilities limited: charge is conserved");
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
