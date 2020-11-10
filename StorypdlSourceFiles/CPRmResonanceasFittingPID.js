// {CPRmResonanceasFittingPID}{800}{600}

const photonData=[["purple",730,"#912D8D"],["green",565,"#62B94D"],["yellow",520,"#FED47F"],["red",450,"#EB392E"]];

const materialData=[[3,"#230305"],[4,"#9F311B"],[6,"#E17818"],[7,"#6A1D18"],[9,"#D5401A"]];

const materialblockdepth=60;
const photonSetloc=[20,80];
const materialSetloc=[20,280];
const tightnessSetloc=[20,460];



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 600);

    	powerbutton = new checkButton(520, 80,"picture the power  ",false);

		photonSet=new IanSlider(photonSetloc[0],photonSetloc[1],120,15,0,[0.3],false);
		materialSet=new IanSlider(materialSetloc[0],materialSetloc[1],160,15,0,[0.75],false);
		tightnessSet=new IanSlider(tightnessSetloc[0],tightnessSetloc[1],100,15,0,[0.75],false);

}


function draw() {
    background(cWhite);
	powerbutton.drawButton();
    materialSet.draw();
    words("choose\nmaterial", materialSetloc[0]+30, materialSetloc[1]+10)
    tightnessSet.draw();
    words("require\nclose match", tightnessSetloc[0]+30, tightnessSetloc[1]+100);
    words("require\nloose match", tightnessSetloc[0]+30, tightnessSetloc[1]+10)
    photonSet.draw();

    noStroke();
    rectMode(CENTER);

    for (i = 0; i < photonData.length; i++) {
words(photonData[i][0]+"("+photonData[i][1]+" THz)", photonSetloc[0]+30, photonSetloc[1]+10+i*36)
fill(photonData[i][2])
rect(photonSetloc[0]+150, photonSetloc[1]+5+i*36,20,8);
				}
	rectMode(CORNER);

    var materialenergy=2+materialSet.getValue()*4;
     var materialcolour=materialData[((1-materialSet.getValue())*4).toFixed(0)][1];
    var photonenergy = 3+photonSet.getValue()*3;

    var matchtightness=map(tightnessSet.getValue(),0,1,0.1,0.9);

    var fractionalfit=1/(1+pow(((photonenergy-materialenergy)/matchtightness),2));


    push();
		translate(260, 136);
		quantum(photonenergy);
		words("quantum energy\n(the key)", 40, 0);
		translate(0, 164);
		energy(photonenergy);

		translate(60, 0);
		energy(materialenergy);
		translate(0,140);
		energy(materialenergy);
		words("material energy gap\n(the lock)", 40, 0);
		fill(materialcolour);
		rect(-20, 0, 40, 10);
		rect(-20, -materialenergy*pxscale, 40, -10);
	pop();

	var powerincident = 8;


	// if((floor(photonenergy)).toFixed(0)==materialenergy.toFixed(0)){
// 	var powerabsorbed = 8;
// 	} else{
// 	var powerabsorbed = 0;
// 	}

var powerabsorbed = 8*fractionalfit;
	var powertransmitted = powerincident-powerabsorbed;

if(powerbutton.buttonisChecked){
	push();
		translate(590, 300)
		fill(materialcolour)
		rect(0, 0, 100, materialblockdepth);
		rect(0, -materialenergy*10,100, -materialblockdepth);
	pop();



	push();
		translate(550, 550);
		power(powerincident);
		words("incident",-30,20);
		words("absorbed",70,20);
		words("transmitted",170,20);
		translate(100, 0);
		power(powerabsorbed);
		translate(100, -powerabsorbed*pxscale);
		power(powertransmitted);
	pop();
}



  titleBold("Resonance: key matches lock, more or less");
}

function mousePressed(){
        materialSet.mousePressed();
        photonSet.mousePressed();
        tightnessSet.mousePressed();
	}
function mouseReleased(){
        materialSet.mouseReleased();
        photonSet.mouseReleased();
        tightnessSet.mouseReleased();
        powerbutton.changeState();
    }







