// KnAccelerationAccumulatesVelocitybyInterval1DPID

const fluxions=[];
const fluents=[];
const pqfluxions=[];
const pqfluents=[];

const numberoffluxions =4;
const fluentscaling = 6;
const fluxionscaling = 10;

const ylocfluxion =108;
const ylocfluentIntial = 208;
const xlocfluentIntial = 100;

const xstepdisplay=150;
const ylocfluxionrep = 370;
const ylocfluentrep = 520;
const xlocfluent1=100;
const xlocfluxion1=xlocfluent1+xstepdisplay/2;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(900, 650);
    for (let i = 0; i<numberoffluxions; i++){
		fluxions[i]= new CreateControlStripVertical();
		let xloc = xlocfluxion1+xstepdisplay*i;
		fluxions[i].create(xloc,ylocfluxion);
    }
    
    
    fluents[0]= new CreateControlStripVertical();
    fluents[0].create(xlocfluentIntial,ylocfluentIntial);
}

function draw() {
    background(CWHITE);
    
    for (let i = 0; i<fluxions.length; i++){
		pqfluxions[i]=createVector(fluxions[i].getValues().xSet,fluxions[i].getValues().ySet,).mult(fluxionscaling);
    }
    
    pqfluents[0]=createVector(fluents[0].getValues().xSet,fluents[0].getValues().ySet,).mult(fluentscaling);

	for (let i = 1; i<fluxions.length+1; i++){
		pqfluents[i]=createVector(30,30);
    }
    
//     eye-guiding grid
    stroke(CIDEAGREY);
    strokeWeight(0.5);
    push();
		translate(xlocfluent1,0);
		for (let i = 1; i<fluxions.length+2; i++){
			line(0, 80, 0, height-30);
			translate(xstepdisplay, 0);
		}
    pop();
//     labels for grid
    push();
		translate(xlocfluent1,0);
		for (let i = 1; i<fluxions.length+2; i++){
			placeWords("t="+i,-11,height-20);
			translate(xstepdisplay, 0);
		}
    pop();

   
	
// 	accumulate

	for (let i = 0; i<fluxions.length; i++){
		pqfluents[i+1].set(pqfluents[i]);
		pqfluents[i+1].add(pqfluxions[i]);
    }


	push();
		translate(xlocfluxion1, ylocfluxionrep);
		for (let i = 0; i<pqfluxions.length; i++){
			showAcceleration(pqfluxions[i].mag(), degrees(-pqfluxions[i].heading()+PI/2), CACCELERATION);
			translate(xstepdisplay, 0);
				}
    pop();
    
    push();
		translate(xlocfluent1, ylocfluentrep);
		for (let i = 0; i<pqfluents.length; i++){
				showVelocity(pqfluents[i].mag(), degrees(-pqfluents[i].heading()+PI/2), CIDEAGREEN);
			translate(xstepdisplay, 0);
			}
    pop();

	
	placeWords("set\ninitial\nvelocity", xlocfluent1+xstepdisplay*(fluxions.length)+95, 188);
	placeWords("set\nthe fluxions\nfor each interval", xlocfluxion1+xstepdisplay*(fluxions.length-1)+100, 88);

	placeWords("velocity\nat\nthis\ntime", xlocfluent1+xstepdisplay*(fluxions.length)+95, ylocfluentrep);
	placeWords("acceleration\nduring\nthis\ninterval", xlocfluxion1+xstepdisplay*(fluxions.length-1)+95, ylocfluxionrep);
	
    placeTitleBold("Acceleration accumulates velocity, interval by interval");
}



function keyTyped() {
  if (key === 's') {
    saveCanvas('aSnapshot', 'png');
  } 
    return false;
  }
