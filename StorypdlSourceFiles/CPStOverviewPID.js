// {CPStOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"predict a trajectory",110-40,200,100,60],
	[1,"accumulation relationships",300,120+81,130,197],
	[2,"constraint relationships",160,280+81,120,197],
	[3,"acceleration",600-40,280,110,36],
	[4,"force",450-40,320,80,36],
	[5,"mass",450-40,440,80,36],
	[6,"velocity",600,200,76,36],
	[7,"displacement",640,120,126,36],
	[8,"momentum",450,200,100,36],
	[9,"path",758,120,44,36],
	[10,"orbit",728,0,54,36],
	[11,"parabola",680,50,84,36],
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[4, 8, 16],
	[7, 9, 16],
	[6, 8, 16],
	[3, 4, 16],
	[3, 5, 16],
	[3, 6, 16],
	[6, 7, 16],
	[9, 11, 16],
	[9, 10, 16]
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
	placeTitleBold("Connections in the setting trajectories reader");


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
