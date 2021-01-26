// {CPSgRoughLakeReflectionPID}{950}{560}
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	roughreflect = loadImage("../__PDLgraphics/SgRoughLakeReflection.svg");
}
function setup(){
    createCanvas(950, 560);
}

function draw() {
    background(CWHITE);

	image(roughreflect, 20, 60);
	placeWordsFrame("The image is clear because the rays are in order.\nLight from neighbouring parts of the tree reaches neighbouring parts of the eye.", 780, 60, 160, 400);
	placeWordsFrame("No image because the rays are not in order.\nLight from neighbouring parts of the tree does not reach neighbouring parts of the eye", 780, 226, 160, 400);
	placeWordsFrame("No image because the rays predict that light from one place on the tree ends up at several places in the eye.\nThis is diffuse reflection.", 780, 392, 160, 400);

	placeTitleBold("Reflections from a rough lake jumble up the rays so that you don't see a tree reflected");
}

