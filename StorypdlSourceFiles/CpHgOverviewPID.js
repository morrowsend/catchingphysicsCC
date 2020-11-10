// CPHgOverviewPID
    


// data for this topic

const ideasBoxes=
[
	[0,"0vibrations at source",120,40,200,36],
	[1,"1different amplitudes",580+60,0,200,36],
	[2,"2different frequencies",580+99,80,200,36],
	[3,"3vibrations copied to medium and travel at speed",90,250,140,116],
	[4,"4reflections",340-60,250-40,120,36],
	[5,"5trip times",340-60,250+40,120,36],
	[6,"6measuring distances and making images",540+148+20-300+40,250,140-20,116],
	[7,"7vibrations at ear",120,440,200,36],
	[8,"8heard as sounds if pitch and loudness inside box of hearing",280,560,180,72],
	[9,"9different pitch",380+99,440+40,180,36],
	[10,"10different loudness",380+60,440-40,180,36]
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
}

function setup() {
    createCanvas(800,600);
    noLoop();
}


function draw() { 	
    background(cWhite);
	title("Connections in the hearing reader");


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
