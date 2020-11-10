// {CPRmPolarisationPID}{600}{600}

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
  createCanvas(600, 600, WEBGL);
justWords("polarisation of electromagnetic waves", "invertedtitle", 20, 10, width-60);

justWords("Two waves with different polarisations. SpacingParabreak Green arrow: direction of propagation SpacingLinebreak red arrow: electric vibration SpacingLinebreak blue arrow: magnetic vibration.  SpacingParabreak Drag to rotate your view", "infoBlock", 20, 40, width-60);


}

function draw(){
 background(cWhite);
   orbitControl();

   var omegatee = frameCount/200;

	noStroke();
	rotateZ(PI/2);

	push();
		var Bfield =12*sin(omegatee);
		if (Bfield>0){
		force3D(abs(Bfield), 90, cBfield);
		}else{
		force3D(abs(Bfield), -90, cBfield);}
	pop();

	push();
		rotateZ(PI/2);
		var Efield =8*cos(omegatee);
		if (Efield>0){
		force3D(abs(Efield), 90, cEfield);
		}else{
		force3D(abs(Efield), -90, cEfield);}
	pop();

	push();
	rotateX(PI/2);
	velocity3D(3, 0, cpovAlice);
	pop();

	push();
	translate(100, 100,0);
	rotateZ(PI/3);
		push();
			var Bfield =12*sin(omegatee);
			if (Bfield>0){
			force3D(abs(Bfield), 90, cBfield);
			}else{
			force3D(abs(Bfield), -90, cBfield);}
		pop();

		push();
			rotateZ(PI/2);
			var Efield =8*cos(omegatee);
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


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

