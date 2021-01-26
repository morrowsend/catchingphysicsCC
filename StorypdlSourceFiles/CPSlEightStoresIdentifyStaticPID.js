// {CPSlEightStoresIdentifyStaticPID}{768}{1840}

// "chemical";
var chemicalfilled = "molecules are being pulled apart";
var chemicalemptied = "atoms or molecules are combining all by themselves"

// "gravity"
var gravityfilled = "something is being lifted away from a planet, just separating two masses"
var gravityemptied = "anything falling towards the surface of an astronomical object, just  allowing two masses to get closer"

// "kinetic"
var kineticfilled = "something is speeding up,  any massive object gets faster"
var kineticemptied = "something is slowing down, any massive object gets slower"

// "thermal"
var thermalfilled = "particles vibrating more (solid), or rushing around and vibrating more (fluid): the temperature increases, or the phase of matter changes"
var thermalemptied = "particles vibrating less (solid), or rushing around and vibrating less (fluid): the temperature decreases, or the phase of matter changes"


// "elastic"
var elasticfilled = "a spring is being squeezed or stretched, so that it is no longer at its natural length, fluid being compressed"
var elasticemptied = "a spring or rubber band relaxing back to its natural length. a volume of compressed air being allowed to expand"

// "vibration"
var vibrationfilled = "something moving to and fro more and more, so vibrating more and more"
var vibrationemptied = "something moving to and fro less and less, so vibrating less and less"

// "nuclear"
var nuclearfilled = "making very high or very low mass nuclei (only possible in stars)"
var nuclearemptied = "low mass nuclei joining to gether (so fusing, fusion): high mass nuclei splitting (so fissioning, fission)"

// "electric-magnetic"
var electricmagneticfilled = "attracting magnets or charges are  pulled apart"
var electricmagneticemptied = "attracting magnets or charges are allowed to come together"

var offset = 220;
var start = 70;
var xlocfilled=100;
var xlocemptied=500;

function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
   romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
   italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
   titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup() {
    createCanvas(768,1840);
    noLoop(); //static diagram
}


function draw() {
background(CWHITE);

IDfilledStore("thermal",thermalfilled,start);
IDemptiedStore("thermal",thermalemptied,start);
IDfilledStore("chemical",chemicalfilled,start+offset); IDemptiedStore("chemical",chemicalemptied,start+offset);
IDfilledStore("gravity",gravityfilled,start+offset*2);
IDemptiedStore("gravity",gravityemptied,start+offset*2);
IDfilledStore("kinetic",kineticfilled,start+offset*3);
IDemptiedStore("kinetic",kineticemptied,start+offset*3);
IDfilledStore("elastic",elasticfilled,start+offset*4);
IDfilledStore("vibration",vibrationfilled,start+offset*5);
IDfilledStore("nuclear",nuclearfilled,start+offset*6);
IDfilledStore("electricmagnetic",electricmagneticfilled,start+offset*7);
IDemptiedStore("elastic",elasticemptied,start+offset*4);
IDemptiedStore("vibration",vibrationemptied,start+offset*5);
IDemptiedStore("nuclear",nuclearemptied,start+offset*6);
IDemptiedStore("electricmagnetic",electricmagneticemptied,start+offset*7);

 placeTitleBold("Identifying energy stores which are filled and emptied using physical clues");
}

function IDfilledStore(storeKind,filledtext,yloc){
     if (storeKind!="electricmagnetic"){
         var storeDescriptor=storeKind;
     }else{
         var storeDescriptor="electric-magnetic";
     }
     justplaceWords(storeDescriptor+' store filled if: ' + filledtext,"explanatorytextalignL",xlocfilled+50, yloc+10,150);
    push();
        translate(xlocfilled,yloc+210);
        drawStoreFilled(storeKind);
        translate(-30,-197);
        noFill();
        stroke(CDEVICELIGHTGREY);
        line(70,-8,230,-8);
        line(230,-8,230,176);
        line(70,176,230,176);
        line(150,-20,150,-40);
        line(150,196,150,216);
    pop();
 }

function IDemptiedStore(storeKind,emptiedtext,yloc){
     if (storeKind!="electricmagnetic"){
         var storeDescriptor=storeKind;
     }else{
         var storeDescriptor="electric-magnetic";
     }
     justplaceWords(storeDescriptor+' store emptied if: ' + emptiedtext,"explanatorytextalignL",xlocemptied+50, yloc+10,150);
    push();
        translate(xlocemptied,yloc+210);
        drawStoreEmptied(storeKind);
        translate(-30,-197);
        noFill();
        stroke(CDEVICELIGHTGREY);
        line(70,-8,230,-8);
        line(230,-8,230,176);
        line(70,176,230,176);
        line(150,-20,150,-40);
        line(150,196,150,216);
    pop();
 }
