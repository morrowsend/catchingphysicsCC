// CPKnOverviewPID
    


// data for this topic

const ideasBoxes=
[
	[0,"records of journeys",115,0,190,36],
	[1,"step by step",120,80,120,36],
	[2,"arrows for reporting",320,80,180,36],
	[3,"displacement",560,50,120,36],
	[4,"velocity",560,110,120,36],
	[5,"predicting journeys",110,240,180,36],
	[6,"accumulations",300,240,140,36],
	[7,"velocity accumulates displacement",560+64,210-10,310,36],
	[8,"acceleration accumulates velocity",560+64,270+10,310,36],
	[9,"different displays ",100,340,160,36],
	[10,"making graphs as records",140,450,230,36],
	[11,"moving along a line",430,450,180,36],
	[12,"accumulations with arrows predict journeys",670,450,220,72]
	
]

const ideaCrossLinks=
[
	[2, 6, 8],
	[6, 12, 8]
]

const ideaFlowLinks=
[
	[0, 1, 16],
	[1, 2, 16],
	[2, 3, 16],
	[2, 4, 16],
	[0, 5, 16],
	[9, 5, 16],
	[5, 6, 16],
	[7, 6, 16],
	[8, 6, 16],
	[9, 10, 16],
	[9, 11, 16]
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
    crosslinksbutton = new checkButton(width-130, 65,"the core",false); 
//     noLoop();
}


function draw() { 	
    background(cWhite);
	title("Connections in the stories of journeys reader");
	crosslinksbutton.drawButton();


push();
		translate(0, 100);
		
		if (crosslinksbutton.buttonisChecked){
            for (i in ideaCrossLinks) {
        drawcatchingPhysicsCrossLink(ideasBoxes[ideaCrossLinks[i][linkStartIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkStartIndex]][ylocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][xlocIndex],ideasBoxes[ideaCrossLinks[i][linkEndIndex]][ylocIndex],ideaCrossLinks[i][linkweightIndex]);
        }
    }

        for (i in ideaFlowLinks) {
        drawcatchingPhysicsFlowLink(ideasBoxes[ideaFlowLinks[i][linkStartIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[i][linkStartIndex]][ylocIndex],ideasBoxes[ideaFlowLinks[i][linkEndIndex]][xlocIndex],ideasBoxes[ideaFlowLinks[i][linkEndIndex]][ylocIndex],ideaFlowLinks[i][linkweightIndex]);
        }
        
				
        for (i in ideasBoxes) {
        drawcatchingPhysicsIdeaBox(ideasBoxes[i][textIndex],ideasBoxes[i][xlocIndex],ideasBoxes[i][ylocIndex],ideasBoxes[i][widthIndex],ideasBoxes[i][heightIndex]);
        }
	pop();
  }

function mouseReleased(){
		crosslinksbutton.changeState();
}
