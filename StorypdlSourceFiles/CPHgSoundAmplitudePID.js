// {CPHgSoundAmplitudePID}{640}{400}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
    romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
    italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
    titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 400);
    sourceamplitude=new createSliderDivider(480,80,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);

    sourceamplitude.draw();

    magnitudesourceamplitude=sourceamplitude.getValue();

    displayamplitude=12*magnitudesourceamplitude;

    reportedamplitude=220*magnitudesourceamplitude;

    fill(CDEVICELIGHTGREY);
    noStroke();
    rect(85,80,350,260)

    push();
    translate(85+reportedamplitude,220);
    drawSoundSource(displayamplitude,300);
    pop();


    placeWords('drag\nto vary\namplitude',510, 90);

    placeWords('frequency',10, 90);
    placeWords('amplitude',360, 355);
    placeMeter(magnitudesourceamplitude,1,"millimetre",85,360);

    placeAdviceDroid(470+60, 250-60, "vibrations of source slowed so you can see them", 100, 80);

    placeTitleBold('Varying amplitude across some of the box of hearing');
}

function mousePressed(){
        sourceamplitude.mousePressed();
	}
function mouseReleased(){
        sourceamplitude.mouseReleased();
    }
