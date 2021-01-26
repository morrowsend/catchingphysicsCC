// {CPCgOverviewPID}{800}{600}

// data for this topic

const ideasBoxes=
[
	[0,"complete loop of moving stuff, working at a distance",-10,0,480,36],
	[1,"electrical loop",160,80,140,36],
	[2,"rope loop",-200,80,100,36],
	[3,"pulling",-120,160,80,36],
	[4,"battery",80,160,80,36],
	[5,"voltage",300,200,80,36],
	[6,"force",-330,200,80,36],
	[7,"grabbing",-220,250,100,36],
	[8,"resistor",180,250,100,36],
	[9,"resistance",310,280,100,36],
	[10,"moving rope",-100,320,150,36],
	[11,"moving charge",100,320,150,36],
	[12,"current",300,370,80,36],
	[13,"flow",-330,370,80,36],
	[14,"to-and-fro movement",-120,450,200,36],
	[15,"alternating current",120,450,200,36],
	[16,"power",300,450,80,36]
]

const ideaCrossLinks=
[
	[1, 2, 8],
	[3, 4, 8],
	[5, 6, 8],
	[10, 11, 8],
	[12, 13, 8],
	[7, 8, 8]
]

const ideaFlowLinks=
[
	[2, 7, 16],
	[2, 3, 16],
	[1, 4, 16],
	[1, 8, 16],
	[3, 10, 16],
	[3, 6, 16],
	[7, 10, 16],
	[4, 11, 16],
	[4, 5, 16],
	[8, 11, 16],
	[8, 9, 16],
	[11, 12, 16],
	[11, 15, 16],
	[10, 13, 16],
	[10, 14, 16],
	[0, 1, 16],
	[0, 2, 16]
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
    crosslinksbutton = new CreateCheckButton(width-130, 65,"loop links",false);
//     noLoop();
}


function draw() {
    background(CWHITE);
	placeTitleBold("Connections in the controlling reader");
	crosslinksbutton.drawButton();


push();
		translate(400, 100);


   for (j=0; j<ideaFlowLinks.length; j++) {
	   placeCatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[j][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[j][linkEndIndex]][ylocIndex],ideaFlowLinks[j][linkweightIndex]);
   }

	if (crosslinksbutton.buttonisChecked){
        for (i=0;i<ideaCrossLinks.length;i++) {
        placeCatchingPhysicsCrossLink(ideasBoxes[ideaCrossLinks[i][linkStartIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkStartIndex]][ylocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][ylocIndex],ideaCrossLinks[i][linkweightIndex]);
        }
    }

        for (i in ideasBoxes) {
        placeCatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
        }
	pop();
  }

function mouseReleased(){
		crosslinksbutton.changeState();
}
