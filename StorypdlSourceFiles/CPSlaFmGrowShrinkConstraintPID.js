// {CPSlaFmGrowShrinkConstraintPID}{800}{400}

//constraint A=BC, A constant
var quantityB=2;
var quantityBOld;
var quantityA=10; //constant
var quantityC=5;
var quantityCOld;
var nochange = 0.5;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
    romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
    italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
    titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 400);
    changeOne=new createSliderDivider(40,280,100,15,3,[0.5],false);
    changeTwo=new createSliderDivider(240,280,100,15,3,[0.5],false);
    controlbutton=new CreateControlButton(448,281,80,30);


}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();

    changeOne.draw();
    changeTwo.draw();

    placeWords("start again", 450, 303);

    if(changeOne.getValue()!=0.5 && mouseX<180){
        changeTwo.setValue(nochange);
    }
    if(changeTwo.getValue()!=0.5 && mouseX>180){
        changeOne.setValue(nochange);
    }

    quantityB+=(changeOne.getValue()-0.5)/100;

    if (quantityB<=1){
        quantityB=1; //maybe other special conditions
    }

    quantityC+=(changeTwo.getValue()-0.5)/100;

    if (quantityBOld!=quantityB){
        quantityC=quantityA/quantityB;
    } else if (quantityCOld!=quantityC){
        quantityB=quantityA/quantityC;
    } else
        {
//            carry on
        }

    if (controlbutton.buttonwasPressed){
        quantityB=2;
        quantityBOld;
        quantityC=5;
        quantityCOld;
        changeOne.setValue(nochange);
        changeTwo.setValue(nochange);
        }

    // set the display here

    placeTitleBold("a constraint relationship(a=F/m): F set constant, varying either a or m")

    placeWords("increase\nmass",70,290);
    placeWords("decrease\nmass",70,360);

    placeWords("increase\nacceleration",270,290);
    placeWords("decrease\nacceleration",270,360);
    push();
        translate(300,150);
        showMass(quantityB*3,90,CCONGRAY);
        showForce(quantityA*2,90,CIDEABLUE);
        translate(0,-20-quantityB*PXSCALE*1.5);
        showAcceleration(quantityC*8,90,CACCELERATION);
    pop();

//    do not change blow here
    quantityBOld=quantityB;
    quantityCOld=quantityC;
}

function mousePressed(){
    changeOne.mousePressed();
    changeTwo.mousePressed();
    }

function mouseReleased(){
    changeOne.mouseReleased();
    changeTwo.mouseReleased();
    controlbutton.checkPressed();
    }


function keyTyped() {
    if (key === "s") {


    saveCanvas("aSnapshot", "png");
    }
    return false;
}

