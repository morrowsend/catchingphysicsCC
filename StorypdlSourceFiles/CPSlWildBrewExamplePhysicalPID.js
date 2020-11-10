// {CPSlWildBrewExamplePhysicalPID}{900}{700}

var describeprocess = "Start with cold water SymbolArrowright burn the gas SymbolArrowright end up with hot water. That is the process."

var describesnapshot1 = "The water in the cup is cold. So is the cup. There is plenty of gas in the cylinder, and I have just lit the gas. Gas burns in air SymbolArrowright chemical change."

var describesnapshot2 = "The water in the cup is warmed, as is the cup. There is less gas in the cylinder, and I have just turned off the gas, so putting out the flame. The air around the water was also warmed. Temperature changes SymbolArrowright thermal change.";



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	snapShot1 =loadImage("../__PDLgraphics/WildBrewsnapshot01.png");
	snapShot2 =loadImage("../__PDLgraphics/WildBrewsnapshot02.png");
}
function setup(){
	createCanvas(900, 700);
	noLoop();
	justWords("first snapshot","passComment",20, 130,150);
	justWords("second snapshot","passComment",width-190, 130,150);
	justWords(describesnapshot1,"passCommentL",20, 550,380);
	justWords(describesnapshot2,"passCommentR",width-420, 550,380);
	justWords(describeprocess,"passComment",20, 60,840);

}

function draw() {
	background(cWhite);
	image(snapShot1,20,130);
	image(snapShot2,width-420,130);
titleBold("The physical description of the change.");
}
