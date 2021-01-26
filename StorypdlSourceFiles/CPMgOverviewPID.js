// {CPMgOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"journeys",70,60,100,36],
	[1,"metres covered",220+40,60-30,160,36],
	[2,"seconds taken",220+40,120-30,160,36],
	[3,"distance & direction",420+15+40,60-30,210,36],
	[4,"duration",380+40,120-30,100,36],
	[5,"record",420+320,20,80,36],
	[6,"predict",420+320,100,80,36],
	[7,"changing movement",120,280,210,36],
	[8,"force",300,280,80,36],
	[9,"speed up",240+270,210,170,36],
	[10,"slow down",240+270,350,170,36],
	[11,"change direction",240+270,280,170,36],
	[12,"force changes motion",700+40,280,80,176],
	[13,"moving something",60+50,470,180,36],
	[14,"trade-offs",300,470,120,36],
	[15,"choose low force or low distance using machine assist",380+154+106,450,280,72]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 2, 16],
	[1, 3, 16],
	[2, 4, 16],
	[3, 5, 16],
	[3, 6, 16],
	[4, 5, 16],
	[4, 6, 16],
	[7, 8, 16],
	[9, 8, 16],
	[11, 8, 16],
	[10, 8, 16],
	[9, 12, 16],
	[11, 12, 16],
	[10, 12, 16],
	[13, 14, 16],
	[14, 15, 16],
	[7, 13, 16],
	[7, 0, 16]
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
	placeTitleBold("Connections in the moving reader");


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
