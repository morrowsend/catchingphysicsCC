// filenamwe: HgSoundFrequencyPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(600, 400);
    sourcefrequency=new IanSlider(480,80,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);
        
    sourcefrequency.draw();
    
    magnitudesourcefrequency=sourcefrequency.getValue();
    
    displayfrequency=600*magnitudesourcefrequency;
    
    reportedfrequency=200*magnitudesourcefrequency;
    
    fill(cdeviceLightGrey);
    noStroke();
    rect(85,80,350,260)

    push();
    translate(150,360-reportedfrequency);
    soundSource(6,displayfrequency);
    pop();   
    
    
    words('drag\nto vary\nfrequency',510, 90);
    
    words('frequency',10, 90);
    words('amplitude',360, 355);
    meterinteger(reportedfrequency,"hertz",85,360);
    
    comment('vibrations\nof source\nslowed\nso you\ncan see them',470,250);
    
    titleBold('Varying frequency across some of the box of hearing');
}

function mousePressed(){
        sourcefrequency.mousePressed();
	}
function mouseReleased(){
        sourcefrequency.mouseReleased();
    }
