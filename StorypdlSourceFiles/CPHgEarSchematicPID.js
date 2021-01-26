// HgEarSchematicPID

function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
   romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
   italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
   titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	theear = loadImage("../__PDLgraphics/HgEarSchematic.svg");
}
function setup(){
    createCanvas(620, 620);
}

function draw() {
    background(CWHITE);
    image(theear, 20,100);
	placeWordsFrame("the outer ear collects and channels vibrations to the middle ear", 30, 480,150,200);
	placeWordsFrame("the middle ear copies these vibrations to the bones", 175, 480,150,200);
	placeWordsFrame("in the inner ear these vibrations are copied from the bones to the liquid in the inner ear\nthese vibrations are changed into nerve impulses: electrical signals sent to the brain", 305, 480,250,200);
	placeSubHead("outer ear",100,90);
	placeSubHead("middle ear",220,90);
	placeSubHead("inner ear",336,90);
	placeWords("ear canal",158,449);
	placeWords("ear drum",229,449);
	placeWords("bones",314,405);
	placeWords("eustachian tube",312,459);
	placeWords("cochlea",472,413);
	placeWords("auditory nerve",498,373);
	placeWords("brain",476,239);

	placeTitleBold("The human ear – a simple description");
}
