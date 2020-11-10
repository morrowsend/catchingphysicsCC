// {CPRmElectromagneticWavePID}{600}{600}

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
  createCanvas(600, 600, WEBGL);
justWords("An electromagnetic wave – drag to rotate", "invertedtitle", 20, 10, width-60);


}

function draw(){
 background(cWhite);
   orbitControl();
   
   var omegatee = frameCount/200;
   
   var delay = 0.3;

	noStroke();
	rotateZ(PI/2);

for (i = 0; i < 100; i++) {
translate(0, 0,-80);
push(); 				


	push();
		var Bfield =12*sin(omegatee+delay*i);
		if (Bfield>0){
		force3D(abs(Bfield), 90, cBfield);
		}else{
		force3D(abs(Bfield), -90, cBfield);}
	pop();
	
	push();
		rotateZ(PI/2);
		var Efield =8*cos(omegatee+delay*i);
		if (Efield>0){
		force3D(abs(Efield), 90, cEfield);
		}else{
		force3D(abs(Efield), -90, cEfield);}
	pop();
	
	push();
	rotateX(PI/2);
	velocity3D(3, 0, cpovAlice);
	pop();
pop();
}
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
  
