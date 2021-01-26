// {CPSlIDeightStoresPID}{750}{340}

var storefilling="";
var storeemptying="";
var yloc = 100;
var xloc=240;
var offset=280;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
    romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
    italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
    titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(750,340);
    storeChoice=new CreateRadioButtons(20, 73,["chemical","gravity","kinetic","thermal","elastic","vibration","nuclear","electric-magnetic"]);
}

function draw() {
	background(CWHITE);
    var storekind=storeChoice.makeChoice();

    placeSubHead("for the "+storekind+" store", xloc-40, yloc-15);

    switch(storekind){
        case "chemical":
               storefilling="molecules are being pulled apart";
               storeemptying="atoms or molecules are combining all by themselves";
            break;
        case "gravity":
               storefilling="something is being lifted away from a planet, just separating two masses";
               storeemptying="anything falling towards the surface of an astronomical object, just  allowing two masses to get closer";
            break;
        case "kinetic":
               storefilling="something is speeding up,  any massive object gets faster";
               storeemptying="something is slowing down, any massive object gets slower";
            break;
        case "thermal":
               storefilling="particles vibrating more (solid), or rushing around and vibrating more (fluid): the temperature increases, or the phase of matter changes";
               storeemptying="particles vibrating less (solid), or rushing around and vibrating less (fluid): the temperature decreases, or the phase of matter changes";
            break;
        case "elastic":
               storefilling="a spring is being squeezed or stretched, so that it is no longer at its natural length, fluid being compressed";
               storeemptying="a spring or rubber band relaxing back to its natural length. a volume of compressed air being allowed to expand";
            break;
        case "vibration":
               storefilling="something moving to and fro more and more, so vibrating more and more";
               storeemptying="something moving to and fro less and less, so vibrating less and less";
            break;
        case "nuclear":
               storefilling="making very high or very low mass nuclei (only possible in stars)";
               storeemptying="low mass nuclei joining to gether (so fusing, fusion): high mass nuclei splitting (so fissioning, fission)";
            break;
        case "electric-magnetic":
               storefilling="attracting magnets or charges are  pulled apart";
               storeemptying="attracting magnets or charges are allowed to come together";
            break;
         }

     if (storekind==="electric-magnetic"){
		 storekind="electricmagnetic"
     }

     push();
        translate(xloc,yloc+210);
        drawStoreFilled(storekind);
        translate(offset,0);
        drawStoreEmptied(storekind);
    pop();

     placeWordsFrame(storekind+' store filled if: ' + storefilling, xloc+50, yloc+10,150,200);
     placeWordsFrame(storekind+' store emptied if: ' + storefilling, xloc+offset+50, yloc+10,150,200);

 placeTitleBold("Identifying energy stores which are filled and emptied using physical clues");
}

