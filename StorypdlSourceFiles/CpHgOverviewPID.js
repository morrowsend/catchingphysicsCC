// {CPHgOverviewPID}{800}{600}

const ideasBoxes=
[
	[0,"vibrations at source",120,40,200,36],
	[1,"different amplitudes",580+60,0,200,36],
	[2,"different frequencies",580+99,80,200,36],
	[3,"vibrations copied to medium and travel at speed",90,250,140,116],
	[4,"reflections",340-60,250-40,120,36],
	[5,"trip times",340-60,250+40,120,36],
	[6,"measuring distances and making images",540+148+20-300+40,250,140-20,116],
	[7,"vibrations at ear",120,440,200,36],
	[8,"heard as sounds if pitch and loudness inside box of hearing",280,560,180,72],
	[9,"different pitch",380+99,440+40,180,36],
	[10,"different loudness",380+60,440-40,180,36]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[0, 3, 16],
	[3, 4, 16],
	[3, 5, 16],
	[4, 6, 16],
	[5, 6, 16],
	[7, 10, 16],
	[7, 9, 16],
	[0, 3, 16],
	[3, 7, 16],
	[1, 10, 16],
	[2, 9, 16]
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
	placeTitleBold("Connections in the hearing reader");

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
function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}