// {CPHgSoundFrequencyPID}{600}{400}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
    romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
    italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
    titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 400);
    sourcefrequency=new createSliderDivider(480,80,100,15,0,[0.7],false);
}

function draw() {
    background(CWHITE);
    sourcefrequency.draw();

    magnitudesourcefrequency=sourcefrequency.getValue();
    displayfrequency=600*magnitudesourcefrequency;
    reportedfrequency=200*magnitudesourcefrequency;

    fill(CDEVICELIGHTGREY);
    noStroke();
    rect(85,80,350,260)

    push();
        translate(150,360-reportedfrequency);
        drawSoundSource(6,displayfrequency);
    pop();

    placeWords('drag\nto vary\nfrequency',510, 90);

    placeWords('frequency',10, 90);
    placeWords('amplitude',360, 355);
    placeMeterInteger(reportedfrequency,"hertz",85,360);

    placeAdviceDroid(470+60, 250-60, "vibrations of source slowed so you can see them", 100, 80);



    placeTitleBold('Varying frequency across some of the box of hearing');
}

function mousePressed(){
        sourcefrequency.mousePressed();
	}
function mouseReleased(){
        sourcefrequency.mouseReleased();
    }
