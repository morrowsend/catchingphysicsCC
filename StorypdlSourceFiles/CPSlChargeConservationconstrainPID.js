// {CPSlChargeConservationconstrainPID}{620}{450}


function preload() {
  chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(620, 450);
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
    pspace2D(150, 150,  " charge on object two","charge on object one", chunkone*70, 70*chunktwo);
    pop();

    push();
    translate(440,400);
    quantity((chunkone+chunktwo)*pxscale, celectric, "");
    translate(60,0);
    quantity(chunkone*pxscale, celectric, "")
    translate(20,-chunkone*pxscale*pxscale);
    quantity(chunktwo*pxscale, celectric, "")
    pop();


	words("share out charge",445,135);
	words("all charge on object one",445,85);
	words("all charge on object two",445,185);
  words("set\ntotal\ncharge",45,90);
	titleBold("Possibilities limited: charge is conserved");
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
