// {CPWvOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"vibration",70,30,100,36],
	[1,"amplitude",240,0,100,36],
	[3,"frequency",240,60,100,36],
	[3,"to-and-fro / up-and-down",480,30,240,36],
	[5,"copy cat / mimic",104,160,170,36],
	[5,"with delay",280,160,110,36],
	[6,"line of mimics",88,260,140,36],
	[7,"mimic neighbour after delay",360,260,260,36],
	[8,"pulses and waves",620,320,190,36],
	[9,"two vibrations",88,450,140,36],
	[10,"different paths",330,340,180,36],
	[11,"11in and out of step",330,420,180,36],
	[12,"adding to zero, or more than zero",680,450-18,200,72]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[1, 3, 16],
	[2, 3, 16],
	[0, 4, 16],
	[4, 5, 16],
	[5, 7, 16],
	[4, 6, 16],
	[6, 7, 16],
	[7, 8, 16],
	[6, 10, 16],
	[6, 9, 16],
	[9, 10, 16],
	[9, 11, 16],
	[10, 12, 16],
	[11, 12, 16],
	[3, 8, 16],
	[8, 12, 16]
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
	placeTitleBold("Connections in the waves reader");

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
