// {CPKfOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"isolate object from enviroment",110,0,160,60],
	[1,"kinds of\ninteraction",119,200,100,60],
	[2,"kinds of\nforces",740,200,80,60],
	[3,"support",320,45,120,36],
	[4,"frictional",320,200,120,36],
	[5,"non-contact",320,200+155,120,36],
	[6,"compression",520,45-50,120,36],
	[7,"tension",520,45,120,36],
	[8,"buoyancy",520,45+50,120,36],
	[9,"grip",520,200-50,120,36],
	[10,"slip",520,200,120,36],
	[11,"drag",520,200+50,120,36],
	[12,"gravity",520,355-50,120,36],
	[13,"electrical",520,355,120,36],
	[14,"magnetic",520,355+50,120,36],
	[15,"exerted by part of the environment",80,440,120,80],
	[16,"an object,\n to predict changes in motion",400,465,280,60],
	[17,"acting on",730,440,100,36]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[1, 3, 16],
	[1, 4, 16],
	[1, 5, 16],
	[3, 6, 16],
	[3, 7, 16],
	[3, 8, 16],
	[4, 9, 16],
	[4, 10, 16],
	[4, 11, 16],
	[5, 12, 16],
	[5, 13, 16],
	[5, 14, 16],
	[2, 14, 16],
	[2, 13, 16],
	[2, 12, 16],
	[2, 11, 16],
	[2, 10, 16],
	[2, 9, 16],
	[2, 8, 16],
	[2, 7, 16],
	[2, 6, 16],
	[1, 15, 16],
	[2, 17, 16],
	[16, 15, 16],
	[16, 17, 16]
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
	placeTitleBold("Connections in the kinds of forces reader");


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
