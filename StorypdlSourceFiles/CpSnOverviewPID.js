// {CPSnOverviewPID}{800}{600}



// data for this topic

const ideasBoxes=
[
	[0,"cost of tasks",90,10,140,36],
	[1,"possible and impossible",380,10,220,36],
	[2,"Cannot do better than straight: might do worse",580+88,28,220,72],
	[3,"lifting",70,100,100,36],
	[4,"sharing the load",300,100-30,220,36],
	[5,"sharing the movement",300,100+30,220,36],
	[6,"sharing load or movement or both\nchoose (low force or low distance to lift with machine assist)",500,175,100,72+30+74+74],
	[7,"hauling",70,250,100,36],
	[8,"across something (slip)",300,250-30,220,36],
	[9,"though something(drag)",300,250+30,220,36],
	[10,"warming",70,350,100,36],
	[11,"lighting",70,450,100,36],	[12,"trade-offs",600+124,460,110,36]
]

const ideaFlowLinks=
[
	[0, 3, 16],
	[0, 1, 16],
	[3, 7, 16],
	[7, 10, 16],
	[10, 11, 16],
	[1, 1, 16],
	[1, 2, 16],
	[5, 6, 16],
	[3, 4, 16],
	[3, 5, 16],
	[4, 6, 16],
	[5, 6, 16],
	[7, 8, 16],
	[7, 9, 16],
	[6, 8, 16],
	[6, 9, 16],
	[2, 12, 16],
	[6, 12, 16],
	[10, 12, 16],
	[11, 12, 16]
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
	placeTitleBold("Connections in the something for nothing reader");


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
