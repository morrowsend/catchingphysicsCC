// {CPOverviewPID}{800}{600}

// data for the whole

const ideasBoxes=
[
	[0,"seeing",70,100,100,36],
	[1,"hearing",70,230,100,36],
	[2,"moving",70,360,100,36],
	[3,"controlling",70,490,100,36],
	[4,"photons",330,130,100,36],
	[5,"waves",330,200,100,36],
	[6,"stories of journeys",390,330,220,36],
	[7,"kinds of forces",390,390,220,36],
	[8,"something for nothing?",390,460,220,36],
	[9,"switching power",390,520,220,36],
	[10,"radiation and matter",690,160,183,36],
	[11,"setting trajectories ",690,360,183,36],
	[12,"setting limits",690,490,183,36]
]

const ideaFlowLinks=
[
	[0, 4, 16],
	[1, 5, 16],
	[4, 10, 16],
	[2, 6, 16],
	[2, 7, 16],
	[2, 8, 16],
	[3, 8, 16],
	[3, 9, 16],
	[6, 11, 16],
	[7, 11, 16],
	[8, 12, 16],
	[9, 12, 16]
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
	placeTitleBold("Connections in catching physics");

		for (j=0; j<ideaFlowLinks.length; j++) {
			placeCatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[j][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][ylocIndex],ideaFlowLinks[j][linkweightIndex]);
		}

		for (i in ideasBoxes) {
		placeCatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
		}
  }
