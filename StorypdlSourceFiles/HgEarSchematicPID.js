// FileName: HgEarSchematicPID

function preload() {
   chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	theear = loadImage("../__PDLgraphics/HgEarSchematic.svg");
}
function setup(){
    createCanvas(620, 620);
}

function draw() {
    background(cWhite);
    image(theear, 20,100);
	wordsframe("the outer ear collects and channels vibrations to the middle ear", 30, 480,150,200);
	wordsframe("the middle ear copies these vibrations to the bones", 175, 480,150,200);
	wordsframe("in the inner ear these vibrations are copied from the bones to the liquid in the inner ear\nthese vibrations are changed into nerve impulses: electrical signals sent to the brain", 305, 480,250,200);
	subHead("outer ear",100,90);
	subHead("middle ear",220,90);
	subHead("inner ear",336,90);
	words("ear canal",158,449);
	words("ear drum",229,449);
	words("bones",314,405);
	words("eustachian tube",312,459);
	words("cochlea",472,413);
	words("auditory nerve",498,373);
	words("brain",476,239);

	titleBold("The human ear – a simple description");  
}
