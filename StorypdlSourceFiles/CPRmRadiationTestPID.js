// {CPRmRadiationTestPID}{650}{500}

const particleType=["alpha", "beta","gamma"];
const testType=["absorber", "electric field","magnetic field"];
const testDetail=[["none", "paper","aluminium","lead"],["none", "top to bottom","bottom to top","none"],["none", "into screen","out of screen","none"]];
const detectorAngle=["right", "centre","left"];

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(650,500);

    particleSet=new createSliderDivider(20,360,100,15,1,[0],false);
    testSet=new createSliderDivider(172,360,100,15,1,[0],false);
    typeSet=new createSliderDivider(320,360,100,15,2,[0.3],false);
    angleSet=new createSliderDivider(489,360,100,15,1,[0.5],false);
}

function draw() {
    background(CWHITE);
	const testColour=[CABSORBGOOD,CELECTRIC,CMAGNETIC];// needs to be here, otherwise vars not recognised

    particleSet.draw();
//     placeWords("set source kind", 70, 510);
    var thisparticle = particleType[particleSet.getValue()*2];
    placeWords(particleType[2], 50, 370);
    placeWords(particleType[1], 50, 410);
    placeWords(particleType[0], 50, 460);

    testSet.draw();
//     placeWords("set test kind", 230, 510);
    var thistest = testType[testSet.getValue()*2];
    placeWords(testType[2], 202, 370);
    placeWords(testType[1], 202, 410);
    placeWords(testType[0], 202, 460);

    typeSet.draw();
//     placeWords("choose detail of test", 530, 510);
var thisdetail = testDetail[testSet.getValue()*2][(typeSet.getValue()*3).toFixed(0)];
    placeWords(testDetail[testSet.getValue()*2][3], 350, 370);
    placeWords(testDetail[testSet.getValue()*2][2], 350, 400);
    placeWords(testDetail[testSet.getValue()*2][1], 350, 430);
    placeWords(testDetail[testSet.getValue()*2][0], 350, 460);


    angleSet.draw();
//     placeWords("set source kind", 70, 510);
    var thisangle = detectorAngle[angleSet.getValue()*2];
    placeWords(detectorAngle[2], 509, 370);
    placeWords(detectorAngle[1], 509, 410);
    placeWords(detectorAngle[0], 509, 460);


    push();
		translate(80, 200);
		drawTransducer(CLIGHT, 0);
		translate(130,0);
		fill(testColour[testSet.getValue()*2]);
		rectMode(CENTER);
		rect(0,0, 80, 80);
		rotate(-PI/9*(angleSet.getValue()-0.5)*2);
		translate(150+133,0);
		drawTransducer(CBLACK,180);
	pop();


    push();
		translate(570, 200);
		if (thisparticle=="alpha" && thistest=="absorber" && thisdetail=="none" && thisangle=="centre"){
			showQuantity(5, CACTIVITY, "");
				}
		if (thisparticle=="alpha" && ((thistest=="electric field" && thisdetail=="top to bottom" && thisangle=="right")||(thistest=="electric field" && thisdetail=="bottom to top" && thisangle=="left")||(thistest=="electric field" && thisdetail=="none" && thisangle=="centre"))){
			showQuantity(5, CACTIVITY, "");
			}
if (thisparticle=="alpha" && ((thistest=="magnetic field" && thisdetail=="out of screen" && thisangle=="right")||(thistest=="magnetic field" && thisdetail=="into screen" && thisangle=="left")||(thistest=="magnetic field" && thisdetail=="none" && thisangle=="centre"))){
			showQuantity(5, CACTIVITY, "");
			}
if (thisparticle=="beta" && thistest=="absorber" && (thisdetail=="none" || thisdetail=="paper") && thisangle=="centre"){
			showQuantity(5, CACTIVITY, "");
				}
if (thisparticle=="beta" && ((thistest=="electric field" && thisdetail=="top to bottom" && thisangle=="left")||(thistest=="electric field" && thisdetail=="bottom to top" && thisangle=="right")||(thistest=="electric field" && thisdetail=="none" && thisangle=="centre"))){
			showQuantity(5, CACTIVITY, "");
				}
if (thisparticle=="beta" && ((thistest=="magnetic field" && thisdetail=="out of screen" && thisangle=="left")||(thistest=="magnetic field" && thisdetail=="into screen" && thisangle=="right")||(thistest=="magnetic field" && thisdetail=="none" && thisangle=="centre"))){
			showQuantity(5, CACTIVITY, "");
			}
		if (thisparticle=="gamma" && (thistest=="absorber"||thistest=="electric field"||thistest=="magnetic field") && thisdetail!="lead" && thisangle=="centre"){
			showQuantity(4, CACTIVITY, "");
				}
if (thisparticle=="gamma" && thistest=="absorber" && thisdetail=="lead" && thisangle=="centre"){
			showQuantity(2, CACTIVITY, "");
				}
	pop();

  placeTitleBold("Testing for different ionising radiations");
}

function mousePressed(){
        particleSet.mousePressed();
        testSet.mousePressed();
        typeSet.mousePressed();
        angleSet.mousePressed();

	}
function mouseReleased(){
        particleSet.mouseReleased();
        testSet.mouseReleased();
        typeSet.mouseReleased();
        angleSet.mouseReleased();

    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}





