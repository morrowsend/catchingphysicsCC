// filename: HgSoundAmplitudePID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(600, 400);
    sourceamplitude=new IanSlider(480,80,100,15,0,[0.7],false);
}

function draw() {
    background(cWhite);
        
    sourceamplitude.draw();
    
    magnitudesourceamplitude=sourceamplitude.getValue();
    
    displayamplitude=12*magnitudesourceamplitude;
    
    reportedamplitude=220*magnitudesourceamplitude;
    
    fill(cdeviceLightGrey);
    noStroke();
    rect(85,80,350,260)

    push();
    translate(85+reportedamplitude,220);
    soundSource(displayamplitude,300);
    pop();    
    
    
    words('drag\nto vary\namplitude',510, 90);
    
    words('frequency',10, 90);
    words('amplitude',360, 355);
    meter(magnitudesourceamplitude,1,"millimetre",85,360);
    
    comment('vibrations\nof source\nslowed\nso you\ncan see them',470,250);
    
    titleBold('Varying amplitude across some of the box of hearing');
}

function mousePressed(){
        sourceamplitude.mousePressed();
	}
function mouseReleased(){
        sourceamplitude.mouseReleased();
    }
