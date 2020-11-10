// {CPRmPhotonsKeyLockSimplePID}{800}{600}

const photonData=[["purple",730,"#912D8D"],["green",565,"#62B94D"],["yellow",520,"#FED47F"],["red",450,"#EB392E"]];

const materialData=[[3,"#230305"],[4,"#9F311B"],[6,"#E17818"],[7,"#6A1D18"],[9,"#D5401A"]];

const materialblockdepth=60;

const photonSetloc=[20,80];

const materialSetloc=[20,280];



function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}


function setup(){
    createCanvas(800, 600);

	powerbutton = new checkButton(520, 80,"picture the power  ",false);

	photonSet=new IanSlider(photonSetloc[0],photonSetloc[1],120,15,2,[0.3],false);
	materialSet=new IanSlider(materialSetloc[0],materialSetloc[1],160,15,3,[0.75],false);

}


function draw() {
    background(cWhite);

    materialSet.draw();
    photonSet.draw();
	powerbutton.drawButton();

    noStroke();
    rectMode(CENTER);
    for (i = 0; i < materialData.length; i++) {
		fill(materialData[i][1])
		rect(materialSetloc[0]+40, materialSetloc[1]+i*40,20,30);
				}


    for (i = 0; i < photonData.length; i++) {
words(photonData[i][0]+"("+photonData[i][1]+" THz)", photonSetloc[0]+30, photonSetloc[1]+10+i*36)
fill(photonData[i][2])
rect(photonSetloc[0]+150, photonSetloc[1]+5+i*36,20,8);
				}
	rectMode(CORNER);

    var materialenergy=materialData[((1-materialSet.getValue())*4).toFixed(0)][0];
     var materialcolour=materialData[((1-materialSet.getValue())*4).toFixed(0)][1];
    var photonenergy = photonData[((1-photonSet.getValue())*3).toFixed(0)][1]/100;

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


	if((floor(photonenergy)).toFixed(0)==materialenergy.toFixed(0)){
	var powerabsorbed = 8;
	} else{
	var powerabsorbed = 0;
	}
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
		words("absorbed",55,20);
		words("transmitted",140,20);
		translate(85, 0);
		power(powerabsorbed);
		translate(85, -powerabsorbed*pxscale);
		power(powertransmitted);
	pop();
}

  titleBold("Lock(energy to change the matter) and key(photon energy)");
}

function mousePressed(){
    materialSet.mousePressed();
    photonSet.mousePressed();
	}
function mouseReleased(){
	materialSet.mouseReleased();
	photonSet.mouseReleased();
	powerbutton.changeState();
    }


function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}






