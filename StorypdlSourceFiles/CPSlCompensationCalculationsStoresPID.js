// {CPSlCompensationCalculationsStoresPID}{640}{460}

const magnitudes=[];
var values = [];
const scaleFactor=200;
const locpucks =[514,185];
const tradeOffOffset = 180;

var storefilling="";
var storeemptying="";
var tradeoffy="";
var tradeoffx="";


function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup() {
    createCanvas(700,460);

    magnitudes[0]= new controlPuckpositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);

	boxesbutton = new checkButton(474, 406,"trade-off",false);
	emptiedbutton = new checkButton(20, 406,"emptied",false);

	storeChoice=new radioButtons(20, 73,["chemical","gravity","kinetic","thermal","elastic","vibration","nuclear","electric-magnetic"],false);
}


function draw() {
	background(cWhite);
	boxesbutton.drawButton();
	emptiedbutton.drawButton();
	var storekind=storeChoice.makeChoice();
	// storeChoice.draw();
	// var thechoice = int((storeChoice.getValue()+0.1)*7);

	switch(storekind){
		case "chemical":
			   storefilling="molecules are being pulled apart";
			   storeemptying="atoms or molecules are combining all by themselves";
			   tradeoffy="energy/mole";
			   tradeoffx="mole";
			break;
		case "gravity":
				storefilling="something is being lifted away from a planet, just separating two masses";
				storeemptying="anything falling towards the surface of an astronomical object, just  allowing two masses to get closer";
				tradeoffy="force (mg)";
				tradeoffx="height";
			break;
		case "kinetic":
				storefilling="something is speeding up,  any massive object gets faster";
				storeemptying="something is slowing down, any massive object gets slower";
				tradeoffy="momentum";
				tradeoffx="velocity";
			break;
		case "thermal":
				storefilling="particles vibrating more (solid), or rushing around and vibrating more (fluid): the temperature increases, or the phase of matter changes";
				storeemptying="particles vibrating less (solid), or rushing around and vibrating less (fluid): the temperature decreases, or the phase of matter changes";
				tradeoffy="energy/kilogram";
				tradeoffx="kilogram";
			break;
		case "elastic":
				storefilling="a spring is being squeezed or stretched, so that it is no longer at its natural length, fluid being compressed";
				storeemptying="a spring or rubber band relaxing back to its natural length. a volume of compressed air being allowed to expand";
				tradeoffy="force";
				tradeoffx="displacement";
			break;
		case "vibration":
			storefilling="something moving to and fro more and more, so vibrating more and more";
			storeemptying="something moving to and fro less and less, so vibrating less and less";
			tradeoffy="maximum force";
			tradeoffx="amplitude";
			break;
		case "nuclear":
			storefilling="making very high or very low mass nuclei (only possible in stars)";
			storeemptying="low mass nuclei joining to gether (so fusing, fusion): high mass nuclei splitting (so fissioning, fission)";
			tradeoffy="energy/nucleon";
			tradeoffx="nucleon";
			break;
		case "electric-magnetic":
			storefilling="attracting magnets or charges are  pulled apart";
			storeemptying="attracting magnets or charges are allowed to come together";
			tradeoffy="energy/distance";
			tradeoffx="distance";
			break;
		 }


	subHead("for the "+storekind+" store", 180, 80);

	push();
        translate(180,120);
		subHead('qualitative',0, 0);
		translate(150,0);
		subHead('quantitative',0, 0);
	pop();

	words("set quantities", locpucks[0]-40,locpucks[1]-45);

      values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	words(tradeoffx, locpucks[0],locpucks[1]+61);
	words(tradeoffy, locpucks[0]+50, locpucks[1]-28);

	if (storekind==="electric-magnetic"){
		 storekind="electricmagnetic"
	 }


	push();
		translate(220, 350);
		if (emptiedbutton.buttonisChecked){
			storeEmptied(storekind);
			wordsframe(storekind+' store emptied if: ' + storeemptying, -40, 2,150,200);
			} else{
			storeFilled(storekind);
			wordsframe(storekind+' store filled if: ' + storefilling, -40, 2,250,200);
			}
	pop();

	push();
		translate(351,238);
		energy(values[0].x*values[0].y/1500);
	pop();



	if (boxesbutton.buttonisChecked){

	if((storekind=="kinetic")||(storekind=="elastic")||(storekind=="vibration")){	tradeOfftriangle(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,cconlightgreen,cconpink);
	}else{
	tradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,cconlightgreen,cconpink);
}
}


 titleBold("Calculations for energy shifted to or from a store (spot the trade-offs)");
}

function mouseReleased(){
		boxesbutton.changeState();
		emptiedbutton.changeState();
    }
