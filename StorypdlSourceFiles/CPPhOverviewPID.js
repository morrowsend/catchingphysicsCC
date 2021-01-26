// {CPPhOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"hello photon",85,30,130,36],
	[1,"brightness / number per second",280+55+80,0,290,36],
	[2,"frequency / colour",280+80,60,180,36],
	[3,"spinning arrows",180,140,160,36],
	[4,"paths",340,140,80,36],
	[5,"contributions",480,140,130,36],
	[6,"added to resultant",620+68,140,180,36],
	[7,"predicting phenomena",140,240,240,36],
	[8,"reflection",80+80,300+20,120,36],
	[9,"refraction",240+80,300+20,120,36],
	[10,"diffraction",400+80,300+20,120,36],
	[11,"interference",580+80,300+20,140,36],
	[12,"engineering solutions",140,380,240,36],
	[13,"lenses",80+80,440+40,80,36],
	[14,"curved mirrors",220+80,440,180,36],
	[15,"predict everything in one framework",700,460,160,72]
]

const ideaCrossLinks=
[
	[8, 15, 8],
	[9, 15, 8],
	[10, 15, 8],
	[11, 15, 8],
	[13, 15, 8],
	[14, 15, 8],
	[0, 15, 24]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[0, 3, 16],
	[2, 3, 16],
	[3, 4, 16],
	[4, 5, 16],
	[5, 6, 16],
	[1, 6, 16],
	[3, 7, 16],
	[4, 7, 16],
	[5, 7, 16],
	[6, 7, 16],
	[7, 8, 16],
	[7, 9, 16],
	[7, 10, 16],
	[7, 11, 16],
	[12, 13, 16],
	[12, 14, 16]
]

// where to find things in the ideaBoxes array
const textIndex = 1;
const xlocIndex = 2;
const ylocIndex = 3;
const widthIndex = 4;
const heightIndex = 5;

//Where to find things in the ideasLinks array
const linkStartIndex =0;
const linkEndIndex =1;
const linkweightIndex =2;
const linkcolourIndex=3;

const cornerRound = 5;
const textOffset = 4;


function preload() {
	romanFont= loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	titleFont= loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(800,600);
    crosslinksbutton = new CreateCheckButton(width-130, 65,"the gains",false);
//     noLoop();
}


function draw() {
    background(CWHITE);
	placeTitleBold("Connections in the photons reader");
	crosslinksbutton.drawButton();


push();
		translate(0, 100);

		if (crosslinksbutton.buttonisChecked){
            for (i=0;i<ideaCrossLinks.length;i++) {
        placeCatchingPhysicsCrossLink(ideasBoxes[ideaCrossLinks[i][linkStartIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkStartIndex]][ylocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][ylocIndex],ideaCrossLinks[i][linkweightIndex]);
        }
    }


    for (j=0; j<ideaFlowLinks.length; j++) {
		placeCatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[j][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][ylocIndex],ideaFlowLinks[j][linkweightIndex]);
	}


        for (i in ideasBoxes) {
        placeCatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
        }
	pop();
  }

function mouseReleased(){
		crosslinksbutton.changeState();
}
