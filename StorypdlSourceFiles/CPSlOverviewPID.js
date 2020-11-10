// CPSlOverviewPID



// data for this topic

const ideasBoxes=
[
	[0,"Constraint relationships",70,100+30-80,120,60],
	[1,"possibilities",350,100-30-80,135,36],
	[2,"impossibilities",350,100+30-80,135,36],
	[3,"limits",300-100+150,100+90-80,135,36],
	[4,"for quantities over changes",670,100+30-80,150,60],
	[5,"measureable and calculable quantities",670-90,350,120,110],
	[6,"conservation laws",350,400-215,135,60],
	[7,"mass\ncharge\nmomentum\nenergy",350,350,135,110],
	[8,"trade-offs",120,240+145,120,36]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[0, 3, 16],
	[4, 1, 16],
	[4, 2, 16],
	[4, 3, 16],
	[4, 5, 16],
	[0, 6, 16],
	[7, 6, 16],
	[0, 8, 16]
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
	title("Connections in the setting limits reader");


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
