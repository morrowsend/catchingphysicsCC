// {CPSpOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"what's happening",110,0,160,36],
	[1,"pathways",280-161,160,120,36],
	[2,"switched by devices",360,400,180,36],
	[3,"how much happening there is",650,0,260,36],
	[4,"mechanical working",390,180-85,180,36],
	[5,"electrical working",390,240-85,180,36],
	[6,"heating by radiation",390,300-85,180,36],
	[7,"heating by particles",390,360-85,180,36],
	[8,"calculated power in watts",580+98-12,280,224,36],
	[9,"process possible,\nor device can be improved?",670,160+273,250,60]
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
	[6, 8, 16],
	[7, 8, 16],
	[3, 8, 16],
	[2, 8, 16],
	[2, 9, 16],
	[8, 9, 16]
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
}

function setup() {
    createCanvas(800,600);
    noLoop();
}


function draw() {
    background(cWhite);
	title("Connections in the switching power reader");


push();
		translate(0, 100);


        for (i in ideaFlowLinks) {
        drawcatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[i][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[i][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[i][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[i][linkEndIndex]][ylocIndex],ideaFlowLinks[i][linkweightIndex]);
        }


        for (i in ideasBoxes) {
        drawcatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
        }
	pop();
  }
