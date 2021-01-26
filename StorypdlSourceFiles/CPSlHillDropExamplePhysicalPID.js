// {CPSlHillDropExamplePhysicalPID}{900}{700}

var describeprocess = "Start up the hill SymbolArrowright freewheel down the hill SymbolArrowright end up moving quickly at the bottom of the hill. SpacingLinebreak That is the process.";
var describesnapshot1 = "The bike and rider are stationary at the top of the hill.";
var describesnapshot2 = "The bike and rider are whizzing along at the bottom of the hill. The surroundings are a bit warmer because of all the air that was stirred up, and because the bike is not that well oiled.";



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	snapShot1 =loadImage("../__PDLgraphics/HillDropsnapshot01.png");
	snapShot2 =loadImage("../__PDLgraphics/HillDropsnapshot02.png");
}
function setup(){
	createCanvas(900, 700);
	noLoop();
	justplaceWords("first snapshot","passComment",20, 130,150);
	justplaceWords("second snapshot","passComment",width-190, 130,150);
	justplaceWords(describesnapshot1,"passCommentL",20, 550,380);
	justplaceWords(describesnapshot2,"passCommentR",width-420, 550,380);
	justplaceWords(describeprocess,"passComment",20, 60,840);

}

function draw() {
	background(CWHITE);
	image(snapShot1,20,130);
	image(snapShot2,width-420,130);
placeTitleBold("The physical description of the change.");
}
