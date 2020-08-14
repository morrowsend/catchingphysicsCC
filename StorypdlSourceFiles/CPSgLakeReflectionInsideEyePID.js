// SgLakeReflectionInsideEyePID
function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
insideeye = loadImage("../__PDLgraphics/SgInsideEyeMode.svg");

}
function setup(){
    createCanvas(700, 600);
}

function draw() {
    background(cWhite);
    
	image(insideeye, 10, 60);
	words("rays for the direct view", 170, 85);
	words("rays for the reflected view", 170, 85+255);
	advicedroid(629, 200-128, "Draw the direct rays through simpler and simpler eyes. The blue ray is from the base of the mountain, the green ray is from the top.\nOn the back of the eye, the blue one is above the green one.", 250, 110);
	advicedroid(629, 200-128+255, "Draw the reflected rays through simpler and simpler eyes. The blue ray is from the base of the mountain, the green ray is from the top.\nOn the back of the eye, the green one is above the blue one.\n\n So one must be upside down. Our brains have learnt which to choose to show 'up the right way'.", 250, 185);

	titleBold("Inside simpler and simpler eyes, looking at the view");
}

