// [CPRmOverviewPID]{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"radiations",70,100,100,36],
	[1,"waves",300-100,100-50,220-140,36],
	[2,"amplitude",300-100+150,100-30,220-120,36],
	[3,"frequency",300-100+150,100+30,220-120,36],
	[4,"activity",300-100+150,100+90,220-120,36],
	[5,"ionising radiations",300-100+150-120,100+90+250,220-50,36],
	[6,"transverse polarised",260,100-30-60-30,180,36],
	[7,"photons",300-100,100+50,220-140,36],
	[8,"half thickness",300+100,100+190,220-90,36],
	[9,"nuclear origins",300+170+20+130-30,100+190+30,220-60-15,36],
	[10,"half life",300-70,290,220-140,36],
	[11,"quanta of energy",300+200,100+90,220-64,36],
	[12,"lock and key effects",300+400-50-20,100+50-90-60-20,220-39,36],
	[13,"resonance",490+40,20+50-30,220-39-80-8,36],
	[14,"threshold effects",300+400,100+50-90,220-64,36],
	[15,"ionisation",300+400+30,290,130-35,36],
	[16,"alpha, beta, gamma",300+400+30+10,290+120,130-45-8,80],
	[17,"matter",300+400-30,100+50,100,36]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[0, 7, 16],
	[1, 2, 16],
	[1, 3, 16],
	[1, 6, 16],
	[7, 2, 16],
	[7, 3, 16],
	[7, 4, 16],
	[3, 11, 16],
	[4, 8, 16],
	[4, 10, 16],
	[11, 17, 16],
	[17, 14, 16],
	[17, 6, 16],
	[17, 12, 16],
	[17, 15, 16],
	[17, 9, 16],
	[13, 12, 16],
	[16, 15, 16],
	[16, 9, 16],
	[5, 9, 16],
	[5, 16, 16],
	[5, 0, 16]
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
	placeTitleBold("Connections in the radiations and matter reader");


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
