// {CPSgOverviewPID}{800}{600}

// data for this topic

const ideasBoxes=
[
	[0,"a source",75,0,100,36],
	[1,"light travels at speed",280-161,250,200,36],
	[2,"an eye detects",130-30,450,160,36],
	[3,"luminous",380+344,0,110,36],
	[4,"scattered",340,180-15,100,36],
	[5,"reflected",340,240-15,100,36],
	[6,"beams",340,300-15,100,36],
	[7,"absorbed",340,360-15,100,36],
	[8,"non-luminous",580+98+30,180-15+30,140,36],
	[9,"draw rays to predict",540,300-15+30,200,36],
	[10,"light enters eye and is absorbed – now I see",680-11,160+273,220,72],
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 3, 16],
	[1, 2, 16],
	[1, 4, 16],
	[1, 5, 16],
	[1, 6, 16],
	[1, 7, 16],
	[4, 8, 16],
	[5, 8, 16],
	[6, 9, 16],
	[7, 9, 16],
	[3, 10, 16],
	[8, 10, 16],
	[2, 10, 16]
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
    noLoop();
}


function draw() {
    background(CWHITE);
	placeTitleBold("Connections in the seeing reader");


push();
		translate(0, 100);


    for (j=0; j<ideaFlowLinks.length; j++) {
		placeCatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[j][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][ylocIndex],ideaFlowLinks[j][linkweightIndex]);
	}


        for (i in ideasBoxes) {
        placeCatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
        }
	pop();
  }
