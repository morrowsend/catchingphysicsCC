// CPMgPulleyPID

// add interpreter droids?
const maxheightlifted=100;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600	,740);
	sliderHeight=new createSliderDivider(40,220,100,15,0,[0],false);
	sliderPulleys=new createSliderDivider(40,80,60,15,2,[0.334],false);
}

function draw() {
    background(CWHITE);


	sliderHeight.draw();

	var heightlifted = maxheightlifted-(1-sliderHeight.getValue())*maxheightlifted;
    sliderPulleys.draw();

    var howmanypulleys = 1+int(sliderPulleys.getValue()*3);

	push();
		translate(280,300);
		pulleysetY(howmanypulleys, heightlifted);
	pop();

    placeWords("choose number\nof ropes to\nshare your load", 70, 90);
    placeWords("lift the load\nby pulling\nthe rope", 70, 230);

	placeTitleBold("Sharing the load with ropes: using pulleys to lift");
}


function pulleysetY(numberofpulleys, heightlifted){

	const closestapproach=60;
	var pulleyradius = 15;
	var pulleyincrement=6;
	var pulleysep =36;
	var ropethickness=2;
	var separation=maxheightlifted+closestapproach-heightlifted;
	var pulleygap=separation;
	var oldpulleystep=0;



		noStroke();
		fill(CPULLEYDARKGREY);
switch(numberofpulleys){

        case 1:
//            description
		translate(0, 156);
   rect(-2, -51, 4, -350);
            break;
        case 2:
//            description
            translate(0, 114	);
            rect(-2, -97, 4, -262);
            break;
        case 3:
//            description
            translate(0, 60);
            rect(-2, -151, 4, -154);
            break;
        case 4:
//            description
            translate(0, -14);
            rect(-2, -225, 4, -8);
// ellipse(0,0,130,130);
            break;

         }

   push();
   scale(-1,-1);
   for (var i = 0; i < numberofpulleys; i = i+1){
      pulleyradius= 15+i*pulleyincrement;
      var pulleystep=pulleysep+i*pulleyradius*.6;

      fill(CPULLEYROPERED);
      if (i==0){
         push();
         translate(-pulleyradius,0);
         rotate(atan((pulleyradius)/(separation-pulleyradius-5)));
         rect(0,0,ropethickness,-sqrt(sq(separation-pulleyradius-5)+sq(pulleyradius)));

         pop();
         rect(pulleyradius-ropethickness,0,ropethickness,-(separation));
      }
      else{
         push();
         translate(-pulleyradius,0);
         rotate(atan((pulleyincrement)/(pulleygap-pulleystep)));
         rect(0,0,ropethickness,-sqrt(sq(pulleyincrement)+sq(pulleygap-oldpulleystep)));
         pop();
         rect(pulleyradius-ropethickness,0,ropethickness,-(pulleygap));
      }
      if (i==(numberofpulleys-1)){
          push();
			  translate(0,-(pulleygap+pulleyradius-ropethickness));
			  push();
				  rotate(-5*PI/8);
				  rect(0,0,ropethickness,-90);
			  pop();
			translate(0,-40);
			fill(CIDEABROWN);
			ellipse(0, 0, 200, 50);
			rectMode(CENTER);
			rect(0, -15, 200, 30);
			rectMode(CORNER);
			ellipse(0, -30, 200, 50);
			noFill();
			stroke(CDEVICEGREY);
			line(120, 0, 120, -heightlifted);

			strokeWeight(2);
			noFill();
			stroke(CPULLEYROPERED);
			curve(-90, -100, -119, 0, -84-30,73-30,-44,53);
			for (i = 0; i < 2*numberofpulleys; i++) {
				noStroke();
				fill(CPULLEYROPERED);
					rect(-120-10*i,0,ropethickness,-heightlifted);
					strokeWeight(2);
					noFill();
					stroke(CPULLEYROPERED);
					if (i!=2*numberofpulleys-1){
					if (i%2==0){
						arc(-124-10*i,-heightlifted,10,5,PI,0,OPEN);
					} else{
		arc(-124-10*i,0,10,5,0,PI,OPEN);					}
				}
				}
			push();
			scale(-1,-1);
			translate(74, -85);
	// 		thehand
	stroke(CDRAWTIFO);
	strokeWeight(1);
	noFill();

	beginShape();
			vertex(6.74, 13.79);
			bezierVertex(6.28, 14.12, 5.8, 14.44, 5.3, 14.71);
			bezierVertex(5.04, 14.84, 4.79, 14.97, 4.48, 15.04);
			bezierVertex(4.42, 15.06, 4.29, 15.07, 4.26, 15.08);
			bezierVertex(4.26, 15.09, 4.26, 15.09, 4.23, 15.13);
			bezierVertex(4.18, 15.21, 4.15, 15.34, 4.13, 15.47);
			bezierVertex(4.04, 16, 4.02, 16.61, 3.71, 17.16);
			bezierVertex(3.42, 17.71, 2.83, 18.13, 2.23, 18.11);
			vertex(2.22, 18.06);
			bezierVertex(2.73, 17.79, 3.08, 17.42, 3.26, 16.94);
			bezierVertex(3.46, 16.47, 3.59, 15.94, 3.74, 15.38);
			bezierVertex(3.78, 15.23, 3.82, 15.09, 3.92, 14.93);
			bezierVertex(3.97, 14.85, 4.09, 14.75, 4.22, 14.74);
			bezierVertex(4.34, 14.73, 4.34, 14.73, 4.42, 14.72);
			bezierVertex(4.67, 14.69, 4.94, 14.59, 5.19, 14.48);
			bezierVertex(5.71, 14.28, 6.22, 14.03, 6.71, 13.75);
			vertex(6.74, 13.79);
	endShape();

	beginShape();
			vertex(3.33, 15.36);
			bezierVertex(2.53, 15.9, 1.72, 16.45, 1.03, 17.09);
			bezierVertex(0.86, 17.25, 0.7, 17.42, 0.6, 17.6);
			bezierVertex(0.5, 17.82, 0.49, 17.74, 0.61, 17.95);
			bezierVertex(0.76, 18.24, 1.28, 18.15, 1.78, 18.16);
			vertex(1.79, 18.2);
			bezierVertex(1.58, 18.33, 1.37, 18.45, 1.1, 18.51);
			bezierVertex(0.84, 18.59, 0.47, 18.52, 0.23, 18.27);
			bezierVertex(0.18, 18.21, 0.12, 18.13, 0.1, 18.09);
			bezierVertex(0.08, 18.06, -0.01, 17.9, 0, 17.8);
			bezierVertex(0.01, 17.57, 0.11, 17.44, 0.19, 17.32);
			bezierVertex(0.37, 17.09, 0.57, 16.94, 0.77, 16.78);
			bezierVertex(1.56, 16.18, 2.43, 15.73, 3.31, 15.31);
			vertex(3.33, 15.36);
	endShape();

	beginShape();
			vertex(0.55, 18.82);
			bezierVertex(0.67, 18.95, 0.73, 19.11, 0.82, 19.22);
			bezierVertex(0.89, 19.35, 0.97, 19.46, 1.06, 19.53);
			bezierVertex(1.15, 19.6, 1.26, 19.58, 1.3, 19.66);
			bezierVertex(1.35, 19.75, 1.43, 19.85, 1.56, 20.07);
			vertex(1.56, 20.15);
			bezierVertex(1.39, 20.33, 1.17, 20.39, 0.95, 20.33);
			bezierVertex(0.73, 20.27, 0.61, 20.03, 0.55, 19.85);
			bezierVertex(0.48, 19.66, 0.46, 19.48, 0.46, 19.32);
			bezierVertex(0.46, 19.15, 0.5, 19, 0.48, 18.86);
			vertex(0.55, 18.82);
	endShape();

	beginShape();
			vertex(4.5, 20.21);
			bezierVertex(5.67, 20.84, 7.04, 21.1, 8.29, 20.88);
			bezierVertex(8.91, 20.76, 9.5, 20.46, 10.12, 20.27);
			bezierVertex(10.72, 20.05, 11.38, 19.9, 11.84, 19.47);
			vertex(11.92, 19.48);
			bezierVertex(11.87, 19.89, 11.57, 20.15, 11.31, 20.39);
			bezierVertex(11.03, 20.63, 10.72, 20.8, 10.41, 20.96);
			bezierVertex(9.78, 21.26, 9.09, 21.43, 8.36, 21.47);
			bezierVertex(6.93, 21.58, 5.54, 21.1, 4.45, 20.28);
			vertex(4.5, 20.21);
	endShape();

	beginShape();
			vertex(9.31, 17.49);
			bezierVertex(10.02, 17.88, 10.79, 18.16, 11.57, 18.33);
			bezierVertex(12.35, 18.5, 13.15, 18.55, 13.92, 18.43);
			bezierVertex(14.67, 18.31, 15.41, 17.94, 16.17, 17.72);
			bezierVertex(16.92, 17.46, 17.68, 17.22, 18.38, 16.82);
			vertex(18.44, 16.86);
			bezierVertex(17.98, 17.62, 17.19, 18.05, 16.44, 18.42);
			bezierVertex(15.67, 18.75, 14.86, 18.97, 13.98, 19.03);
			bezierVertex(12.25, 19.13, 10.6, 18.5, 9.27, 17.56);
			vertex(9.31, 17.49);
	endShape();

	beginShape();
			vertex(14.42, 13.95);
			bezierVertex(15.06, 14.47, 15.77, 14.92, 16.52, 15.26);
			bezierVertex(17.28, 15.57, 18.04, 15.82, 18.87, 15.92);
			vertex(18.87, 15.94);
			bezierVertex(18.03, 16.11, 17.16, 15.85, 16.43, 15.44);
			bezierVertex(15.68, 15.05, 15, 14.55, 14.4, 13.97);
			vertex(14.42, 13.95);
	endShape();

	beginShape();
			vertex(19.32, 13.33);
			bezierVertex(20.11, 16.04, 21.28, 18.66, 22.88, 20.97);
			bezierVertex(23.68, 22.12, 24.61, 23.18, 25.7, 24.04);
			bezierVertex(26.8, 24.89, 28.01, 25.64, 29.22, 26.35);
			bezierVertex(31.65, 27.78, 34.18, 29.06, 36.61, 30.54);
			bezierVertex(37.82, 31.29, 39.03, 32.05, 40.17, 32.9);
			bezierVertex(40.74, 33.33, 41.3, 33.78, 41.83, 34.28);
			bezierVertex(42.32, 34.79, 42.85, 35.33, 43.07, 36.03);
			vertex(43, 36.06);
			bezierVertex(42.69, 35.43, 42.15, 34.97, 41.6, 34.54);
			bezierVertex(41.05, 34.1, 40.47, 33.71, 39.88, 33.33);
			bezierVertex(38.69, 32.58, 37.47, 31.87, 36.23, 31.19);
			bezierVertex(33.77, 29.8, 31.32, 28.38, 28.91, 26.87);
			bezierVertex(27.7, 26.11, 26.51, 25.33, 25.39, 24.41);
			bezierVertex(24.28, 23.49, 23.35, 22.37, 22.57, 21.18);
			bezierVertex(21.02, 18.77, 19.95, 16.1, 19.25, 13.35);
			vertex(19.32, 13.33);
	endShape();

	beginShape();
			vertex(7.21, 14.2);
			bezierVertex(7.46, 12.94, 8.23, 11.76, 9.38, 11.07);
			bezierVertex(10.58, 10.48, 11.75, 10.09, 12.91, 9.55);
			bezierVertex(14.07, 9.03, 15.19, 8.44, 16.32, 7.9);
			bezierVertex(17.45, 7.35, 18.59, 6.81, 19.51, 5.94);
			vertex(19.57, 5.98);
			bezierVertex(18.95, 7.18, 17.75, 7.89, 16.67, 8.56);
			bezierVertex(15.55, 9.21, 14.34, 9.65, 13.14, 10.1);
			bezierVertex(11.96, 10.57, 10.68, 10.93, 9.56, 11.4);
			bezierVertex(8.47, 11.94, 7.63, 13.01, 7.28, 14.22);
			vertex(7.21, 14.2);
	endShape();

	beginShape();
			vertex(19.88, 5.11);
			bezierVertex(20.29, 4.14, 21.27, 3.52, 22.28, 3.33);
			bezierVertex(23.31, 3.11, 24.36, 3.33, 25.36, 3.46);
			bezierVertex(27.38, 3.71, 29.41, 3.84, 31.44, 3.77);
			bezierVertex(31.95, 3.76, 32.46, 3.73, 32.96, 3.68);
			bezierVertex(33.2, 3.66, 33.47, 3.62, 33.73, 3.62);
			bezierVertex(34.02, 3.62, 34.28, 3.65, 34.54, 3.7);
			bezierVertex(35.57, 3.9, 36.54, 4.25, 37.51, 4.58);
			bezierVertex(39.44, 5.27, 41.33, 6.02, 43.28, 6.55);
			bezierVertex(44.26, 6.81, 45.25, 7.02, 46.22, 7.04);
			bezierVertex(47.18, 7.04, 48.19, 6.84, 49.17, 6.63);
			bezierVertex(51.14, 6.2, 53.1, 5.65, 55.04, 5.04);
			bezierVertex(56.99, 4.46, 58.9, 3.78, 60.78, 3.01);
			bezierVertex(61.72, 2.63, 62.65, 2.21, 63.54, 1.74);
			bezierVertex(64.43, 1.26, 65.34, 0.76, 66.01, 0);
			vertex(66.07, 0.04);
			bezierVertex(65.45, 0.88, 64.57, 1.47, 63.72, 2.03);
			bezierVertex(62.84, 2.57, 61.92, 3.05, 61, 3.49);
			bezierVertex(59.14, 4.37, 57.21, 5.09, 55.27, 5.76);
			bezierVertex(53.32, 6.4, 51.34, 6.96, 49.32, 7.36);
			bezierVertex(48.3, 7.54, 47.29, 7.73, 46.2, 7.71);
			bezierVertex(45.13, 7.66, 44.12, 7.41, 43.12, 7.13);
			bezierVertex(41.14, 6.55, 39.25, 5.76, 37.34, 5.04);
			bezierVertex(36.39, 4.69, 35.43, 4.33, 34.46, 4.12);
			bezierVertex(34.22, 4.08, 33.97, 4.04, 33.75, 4.03);
			bezierVertex(33.5, 4.03, 33.26, 4.07, 33, 4.09);
			bezierVertex(32.48, 4.13, 31.97, 4.14, 31.45, 4.15);
			bezierVertex(29.4, 4.16, 27.35, 3.99, 25.33, 3.68);
			bezierVertex(24.32, 3.53, 23.31, 3.29, 22.31, 3.48);
			bezierVertex(21.33, 3.63, 20.37, 4.22, 19.95, 5.14);
			vertex(19.88, 5.11);
	endShape();

	beginShape();
			vertex(47.25, 10.08);
			bezierVertex(47.57, 12.69, 47.91, 15.29, 48.29, 17.88);
			bezierVertex(48.49, 19.18, 48.72, 20.47, 48.9, 21.76);
			bezierVertex(49.07, 23.06, 49.25, 24.35, 49.5, 25.64);
			vertex(49.45, 25.66);
			bezierVertex(48.92, 24.44, 48.67, 23.13, 48.41, 21.84);
			bezierVertex(48.16, 20.55, 48.04, 19.24, 47.89, 17.93);
			bezierVertex(47.6, 15.32, 47.38, 12.71, 47.2, 10.09);
			vertex(47.25, 10.08);
	endShape();

	beginShape();
			vertex(45.87, 13.34);
			bezierVertex(45.76, 15.07, 45.82, 16.81, 45.99, 18.54);
			bezierVertex(46.14, 20.26, 46.42, 21.97, 46.85, 23.65);
			bezierVertex(47.27, 25.32, 47.87, 26.94, 48.56, 28.51);
			bezierVertex(49.24, 30.09, 50.11, 31.59, 51.12, 33.01);
			vertex(51.08, 33.04);
			bezierVertex(49.85, 31.79, 48.89, 30.3, 48.11, 28.73);
			bezierVertex(47.34, 27.14, 46.84, 25.45, 46.46, 23.74);
			bezierVertex(45.71, 20.32, 45.5, 16.8, 45.83, 13.33);
			vertex(45.87, 13.34);
	endShape();

	beginShape();
			vertex(41.98, 42.11);
			bezierVertex(43.38, 42.33, 44.81, 42.3, 46.21, 42.16);
			bezierVertex(47.62, 42.02, 49.01, 41.76, 50.36, 41.38);
			bezierVertex(51.72, 41, 53.02, 40.47, 54.33, 39.97);
			bezierVertex(55.65, 39.49, 56.93, 38.9, 58.27, 38.37);
			vertex(58.31, 38.43);
			bezierVertex(57.18, 39.34, 55.92, 40.04, 54.62, 40.66);
			bezierVertex(53.31, 41.26, 51.91, 41.65, 50.51, 41.96);
			bezierVertex(49.1, 42.27, 47.67, 42.47, 46.24, 42.53);
			bezierVertex(44.8, 42.57, 43.36, 42.51, 41.96, 42.18);
			vertex(41.98, 42.11);
	endShape();

	beginShape();
			vertex(55.24, 36.01);
			bezierVertex(56.64, 36.66, 58.13, 37.13, 59.65, 37.24);
			bezierVertex(60.4, 37.29, 61.16, 37.22, 61.84, 36.96);
			bezierVertex(62.55, 36.69, 63.24, 36.35, 63.94, 36.02);
			bezierVertex(65.32, 35.34, 66.68, 34.59, 68.12, 34);
			bezierVertex(68.84, 33.72, 69.57, 33.42, 70.32, 33.2);
			bezierVertex(71.07, 33.02, 71.87, 32.71, 72.68, 32.99);
			vertex(72.65, 33.06);
			bezierVertex(72.28, 33, 71.91, 33.13, 71.56, 33.26);
			bezierVertex(71.2, 33.38, 70.85, 33.53, 70.51, 33.69);
			bezierVertex(69.81, 34.01, 69.11, 34.33, 68.43, 34.68);
			bezierVertex(67.04, 35.36, 65.61, 35.96, 64.18, 36.56);
			bezierVertex(63.47, 36.87, 62.75, 37.17, 62, 37.42);
			bezierVertex(61.22, 37.68, 60.4, 37.7, 59.61, 37.61);
			bezierVertex(58.04, 37.4, 56.57, 36.82, 55.21, 36.08);
			vertex(55.24, 36.01);
	endShape();

	beginShape();
			vertex(18.42, 18.08);
			bezierVertex(19.04, 18.42, 19.64, 18.79, 20.21, 19.21);
			bezierVertex(20.5, 19.42, 20.77, 19.64, 21.03, 19.9);
			bezierVertex(21.28, 20.15, 21.53, 20.42, 21.65, 20.78);
			vertex(21.66, 20.81);
			vertex(21.64, 20.83);
			bezierVertex(21.16, 21.56, 20.49, 22.06, 19.79, 22.52);
			bezierVertex(19.43, 22.74, 19.05, 22.93, 18.62, 23.02);
			bezierVertex(18.2, 23.13, 17.7, 23.06, 17.35, 22.78);
			bezierVertex(16.63, 22.26, 16.29, 21.34, 16.37, 20.49);
			bezierVertex(16.43, 19.62, 16.93, 18.86, 17.57, 18.34);
			vertex(17.59, 18.35);
			bezierVertex(17.01, 18.94, 16.61, 19.7, 16.58, 20.5);
			bezierVertex(16.55, 21.29, 16.87, 22.12, 17.5, 22.58);
			bezierVertex(18.13, 23.09, 19.01, 22.75, 19.69, 22.35);
			bezierVertex(20.37, 21.94, 21.07, 21.42, 21.52, 20.78);
			vertex(21.51, 20.82);
			bezierVertex(21.42, 20.51, 21.19, 20.23, 20.95, 19.98);
			bezierVertex(20.71, 19.72, 20.44, 19.49, 20.16, 19.28);
			bezierVertex(19.61, 18.84, 19.02, 18.45, 18.41, 18.1);
			vertex(18.42, 18.08);
	endShape();

	beginShape();
			vertex(21.15, 22.31);
			bezierVertex(20.43, 23.78, 19.64, 25.22, 18.69, 26.57);
			bezierVertex(18.2, 27.23, 17.7, 27.9, 16.94, 28.39);
			bezierVertex(16.54, 28.64, 16.06, 28.69, 15.63, 28.68);
			bezierVertex(15.19, 28.67, 14.77, 28.61, 14.35, 28.51);
			bezierVertex(12.72, 28.11, 11.16, 27.38, 9.87, 26.27);
			bezierVertex(9.25, 25.71, 8.67, 25.02, 8.28, 24.3);
			bezierVertex(8.07, 23.93, 7.88, 23.56, 7.73, 23.16);
			bezierVertex(7.66, 22.96, 7.6, 22.75, 7.57, 22.54);
			bezierVertex(7.55, 22.33, 7.52, 22.09, 7.68, 21.89);
			vertex(7.73, 21.95);
			bezierVertex(7.64, 22.29, 7.85, 22.69, 8.04, 23.02);
			bezierVertex(8.23, 23.36, 8.46, 23.69, 8.71, 24.01);
			bezierVertex(9.2, 24.66, 9.71, 25.21, 10.35, 25.69);
			bezierVertex(11.6, 26.64, 12.99, 27.48, 14.51, 27.93);
			bezierVertex(15.26, 28.13, 16.07, 28.29, 16.7, 27.97);
			bezierVertex(17.35, 27.6, 17.89, 26.97, 18.4, 26.34);
			bezierVertex(19.4, 25.08, 20.28, 23.69, 21.09, 22.28);
			vertex(21.15, 22.31);
	endShape();

	beginShape();
			vertex(14.03, 20.13);
			bezierVertex(13.83, 20.66, 13.59, 21.19, 13.31, 21.69);
			bezierVertex(13.17, 21.94, 13.06, 22.23, 12.82, 22.42);
			bezierVertex(12.59, 22.59, 12.28, 22.82, 11.88, 22.71);
			vertex(11.87, 22.63);
			bezierVertex(12.04, 22.38, 12.11, 22.14, 12.26, 21.92);
			bezierVertex(12.4, 21.69, 12.63, 21.53, 12.82, 21.33);
			vertex(13.96, 20.09);
			vertex(14.03, 20.13);
	endShape();

	beginShape();
			vertex(16.11, 26.72);
			bezierVertex(15.67, 26.09, 15.2, 25.48, 14.69, 24.92);
			bezierVertex(14.43, 24.65, 14.16, 24.38, 13.87, 24.14);
			bezierVertex(13.6, 23.89, 13.3, 23.67, 12.94, 23.56);
			vertex(12.94, 23.53);
			bezierVertex(13.34, 23.5, 13.72, 23.72, 14.03, 23.95);
			bezierVertex(14.34, 24.2, 14.6, 24.49, 14.84, 24.79);
			bezierVertex(15.33, 25.39, 15.75, 26.04, 16.13, 26.71);
			vertex(16.11, 26.72);
	endShape();

	beginShape();
			vertex(13.89, 28.88);
			bezierVertex(13.86, 29.72, 13.93, 30.6, 14.28, 31.35);
			bezierVertex(14.45, 31.73, 14.75, 32.01, 15.06, 32.3);
			bezierVertex(15.37, 32.59, 15.7, 32.85, 16.04, 33.09);
			bezierVertex(16.73, 33.55, 17.51, 33.89, 18.31, 33.95);
			bezierVertex(19.12, 34.03, 19.9, 33.77, 20.67, 33.44);
			bezierVertex(21.43, 33.09, 22.17, 32.68, 22.91, 32.25);
			bezierVertex(23.28, 32.04, 23.65, 31.83, 24.04, 31.63);
			bezierVertex(24.45, 31.45, 24.81, 31.21, 25.39, 31.17);
			bezierVertex(25.58, 31.19, 25.98, 30.9, 26.27, 30.65);
			bezierVertex(26.58, 30.39, 26.87, 30.08, 27.17, 29.79);
			bezierVertex(27.47, 29.49, 27.75, 29.17, 28.03, 28.85);
			bezierVertex(28.29, 28.53, 28.6, 28.19, 28.75, 27.83);
			vertex(28.82, 27.83);
			bezierVertex(28.62, 28.73, 28.07, 29.41, 27.57, 30.13);
			bezierVertex(27.32, 30.48, 27.02, 30.81, 26.71, 31.13);
			bezierVertex(26.55, 31.28, 26.39, 31.44, 26.2, 31.58);
			bezierVertex(26.02, 31.71, 25.77, 31.9, 25.44, 31.92);
			bezierVertex(25.15, 31.93, 24.75, 32.14, 24.39, 32.32);
			vertex(23.26, 32.9);
			bezierVertex(22.49, 33.29, 21.71, 33.67, 20.9, 33.99);
			bezierVertex(20.09, 34.3, 19.17, 34.56, 18.26, 34.43);
			bezierVertex(17.36, 34.32, 16.53, 33.91, 15.83, 33.39);
			bezierVertex(15.47, 33.12, 15.15, 32.83, 14.85, 32.51);
			bezierVertex(14.56, 32.21, 14.24, 31.87, 14.08, 31.44);
			bezierVertex(13.75, 30.61, 13.73, 29.73, 13.81, 28.87);
			vertex(13.89, 28.88);
	endShape();

	beginShape();
			vertex(24.82, 30.05);
			bezierVertex(24.23, 29.65, 23.66, 29.21, 23.13, 28.73);
			bezierVertex(22.86, 28.49, 22.6, 28.23, 22.37, 27.94);
			bezierVertex(22.18, 27.64, 21.96, 27.3, 21.98, 26.92);
			vertex(22.01, 26.92);
			bezierVertex(22.12, 27.25, 22.34, 27.52, 22.57, 27.79);
			bezierVertex(22.79, 28.06, 23.03, 28.32, 23.27, 28.58);
			bezierVertex(23.76, 29.09, 24.29, 29.57, 24.84, 30.03);
			vertex(24.82, 30.05);
	endShape();

	beginShape();
			vertex(23.4, 39.69);
			bezierVertex(22.81, 39.29, 22.24, 38.85, 21.71, 38.36);
			bezierVertex(21.44, 38.13, 21.18, 37.87, 20.96, 37.58);
			bezierVertex(20.76, 37.28, 20.54, 36.94, 20.57, 36.56);
			vertex(20.59, 36.55);
			bezierVertex(20.71, 36.89, 20.93, 37.16, 21.15, 37.42);
			bezierVertex(21.37, 37.69, 21.61, 37.96, 21.85, 38.22);
			bezierVertex(22.34, 38.73, 22.87, 39.21, 23.42, 39.67);
			vertex(23.4, 39.69);
	endShape();

	beginShape();
			vertex(31.82, 41.97);
			bezierVertex(31.23, 41.57, 30.66, 41.13, 30.13, 40.64);
			bezierVertex(29.86, 40.4, 29.6, 40.15, 29.37, 39.86);
			bezierVertex(29.18, 39.56, 28.96, 39.22, 28.98, 38.84);
			vertex(29.01, 38.83);
			bezierVertex(29.12, 39.17, 29.34, 39.44, 29.57, 39.7);
			bezierVertex(29.79, 39.97, 30.03, 40.24, 30.27, 40.5);
			bezierVertex(30.76, 41.01, 31.29, 41.49, 31.84, 41.95);
			vertex(31.82, 41.97);
	endShape();

	beginShape();
			vertex(19.32, 35.23);
			bezierVertex(18.81, 36.04, 18.52, 37.11, 18.96, 37.96);
			bezierVertex(19.41, 38.8, 20.16, 39.48, 20.97, 39.97);
			bezierVertex(21.78, 40.46, 22.76, 40.77, 23.62, 40.49);
			bezierVertex(24.47, 40.18, 25.27, 39.55, 26.03, 38.96);
			bezierVertex(26.79, 38.35, 27.52, 37.69, 28.26, 37.04);
			bezierVertex(28.65, 36.72, 28.99, 36.39, 29.46, 36.08);
			bezierVertex(29.83, 35.91, 30.1, 35.51, 30.41, 35.14);
			bezierVertex(31.04, 34.4, 31.61, 33.6, 32.23, 32.82);
			bezierVertex(32.86, 32.06, 33.43, 31.24, 34.22, 30.6);
			vertex(34.27, 30.66);
			bezierVertex(33.95, 31.02, 33.7, 31.45, 33.44, 31.87);
			vertex(32.65, 33.12);
			bezierVertex(32.13, 33.96, 31.59, 34.78, 31, 35.6);
			bezierVertex(30.69, 35.98, 30.4, 36.45, 29.87, 36.74);
			bezierVertex(29.51, 36.97, 29.12, 37.3, 28.74, 37.61);
			bezierVertex(27.97, 38.22, 27.2, 38.85, 26.39, 39.44);
			bezierVertex(25.58, 40.02, 24.78, 40.62, 23.75, 40.96);
			bezierVertex(22.68, 41.25, 21.61, 40.83, 20.77, 40.29);
			bezierVertex(19.94, 39.72, 19.2, 38.98, 18.75, 38.06);
			bezierVertex(18.32, 37.07, 18.7, 35.99, 19.26, 35.19);
			vertex(19.32, 35.23);
	endShape();

	beginShape();
			vertex(30.4, 33.68);
			bezierVertex(29.98, 33.23, 29.54, 32.79, 29.09, 32.38);
			vertex(28.39, 31.79);
			bezierVertex(28.16, 31.59, 27.94, 31.39, 27.66, 31.27);
			vertex(27.66, 31.24);
			bezierVertex(28, 31.23, 28.29, 31.42, 28.55, 31.59);
			bezierVertex(28.8, 31.78, 29.02, 32, 29.23, 32.23);
			bezierVertex(29.66, 32.69, 30.05, 33.17, 30.42, 33.66);
			vertex(30.4, 33.68);
	endShape();

	beginShape();
			vertex(27.11, 39.89);
			bezierVertex(26.72, 40.99, 26.86, 42.27, 27.57, 43.15);
			bezierVertex(28.26, 44.03, 29.34, 44.58, 30.44, 44.77);
			bezierVertex(31.55, 44.95, 32.68, 44.74, 33.78, 44.48);
			bezierVertex(34.89, 44.22, 35.98, 43.83, 37.08, 43.37);
			vertex(37.12, 43.43);
			bezierVertex(36.23, 44.24, 35.14, 44.83, 33.98, 45.21);
			bezierVertex(32.82, 45.58, 31.53, 45.64, 30.32, 45.35);
			bezierVertex(29.11, 45.06, 27.98, 44.4, 27.27, 43.36);
			bezierVertex(26.56, 42.31, 26.55, 40.94, 27.04, 39.86);
			vertex(27.11, 39.89);
	endShape();

	beginShape();
			vertex(35.02, 37.86);
			bezierVertex(34.28, 37.63, 33.56, 37.34, 32.87, 36.96);
			bezierVertex(32.52, 36.78, 32.19, 36.57, 31.89, 36.3);
			bezierVertex(31.61, 36.03, 31.33, 35.67, 31.33, 35.26);
			vertex(31.36, 35.26);
			bezierVertex(31.5, 35.62, 31.76, 35.88, 32.06, 36.12);
			bezierVertex(32.34, 36.36, 32.65, 36.58, 32.97, 36.79);
			bezierVertex(33.62, 37.19, 34.32, 37.54, 35.03, 37.84);
			vertex(35.02, 37.86);
	endShape();

	beginShape();
			vertex(37.33, 41.37);
			bezierVertex(38.24, 40.44, 39.04, 39.41, 39.68, 38.31);
			bezierVertex(39.99, 37.75, 40.2, 37.17, 40.47, 36.61);
			bezierVertex(40.74, 36.04, 40.96, 35.47, 41.19, 34.83);
			vertex(41.26, 34.84);
			bezierVertex(41.44, 35.5, 41.36, 36.22, 41.17, 36.87);
			bezierVertex(40.97, 37.53, 40.58, 38.1, 40.18, 38.64);
			bezierVertex(39.39, 39.72, 38.44, 40.65, 37.37, 41.43);
			vertex(37.33, 41.37);
	endShape();

	beginShape();
			vertex(36.64, 37.75);
			bezierVertex(36.96, 36.97, 37.22, 36.17, 37.44, 35.37);
			bezierVertex(37.54, 34.97, 37.59, 34.56, 37.7, 34.17);
			bezierVertex(37.82, 33.78, 37.91, 33.39, 38.04, 32.97);
			vertex(38.09, 32.97);
			bezierVertex(38.24, 33.39, 38.23, 33.84, 38.19, 34.27);
			bezierVertex(38.14, 34.7, 37.97, 35.1, 37.82, 35.5);
			bezierVertex(37.51, 36.29, 37.13, 37.05, 36.68, 37.77);
			vertex(36.64, 37.75);
	endShape();

	beginShape();
			vertex(35.83, 38.84);
			bezierVertex(35.86, 39.48, 35.8, 40.13, 35.6, 40.76);
			bezierVertex(35.51, 41.08, 35.4, 41.41, 35.16, 41.67);
			bezierVertex(34.92, 41.92, 34.61, 42.14, 34.26, 42.15);
			vertex(34.24, 42.11);
			bezierVertex(34.45, 41.84, 34.63, 41.63, 34.76, 41.37);
			bezierVertex(34.91, 41.13, 35.09, 40.89, 35.23, 40.62);
			bezierVertex(35.49, 40.07, 35.67, 39.46, 35.78, 38.83);
			vertex(35.83, 38.84);
	endShape();

pop();
          pop();
      }
      drawPulley(pulleyradius*2,"D");
      oldpulleystep=pulleysep+i*pulleyradius*.6;
      pulleygap+=2*pulleystep;
      translate(0,pulleystep);
   }
   pop();

   translate(0,separation);

   push();
   rotate(0);
   for (var i = 0; i < numberofpulleys; i = i+1){
      pulleyradius= 15+i*pulleyincrement;
      drawPulley(pulleyradius*2,"D");
      translate(0,pulleysep+i*pulleyradius*.6);
   }
   pop();



}
function mousePressed(){
        sliderHeight.mousePressed();
        sliderPulleys.mousePressed();

	}
function mouseReleased(){
        sliderHeight.mouseReleased();
        sliderPulleys.mouseReleased();
        }

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
}

function thehand(){
stroke(CDRAWTIFO);
strokeWeight(1);
noFill();

beginShape();
        vertex(6.74, 13.79);
        bezierVertex(6.28, 14.12, 5.8, 14.44, 5.3, 14.71);
        bezierVertex(5.04, 14.84, 4.79, 14.97, 4.48, 15.04);
        bezierVertex(4.42, 15.06, 4.29, 15.07, 4.26, 15.08);
        bezierVertex(4.26, 15.09, 4.26, 15.09, 4.23, 15.13);
        bezierVertex(4.18, 15.21, 4.15, 15.34, 4.13, 15.47);
        bezierVertex(4.04, 16, 4.02, 16.61, 3.71, 17.16);
        bezierVertex(3.42, 17.71, 2.83, 18.13, 2.23, 18.11);
        vertex(2.22, 18.06);
        bezierVertex(2.73, 17.79, 3.08, 17.42, 3.26, 16.94);
        bezierVertex(3.46, 16.47, 3.59, 15.94, 3.74, 15.38);
        bezierVertex(3.78, 15.23, 3.82, 15.09, 3.92, 14.93);
        bezierVertex(3.97, 14.85, 4.09, 14.75, 4.22, 14.74);
        bezierVertex(4.34, 14.73, 4.34, 14.73, 4.42, 14.72);
        bezierVertex(4.67, 14.69, 4.94, 14.59, 5.19, 14.48);
        bezierVertex(5.71, 14.28, 6.22, 14.03, 6.71, 13.75);
        vertex(6.74, 13.79);
endShape();

beginShape();
        vertex(3.33, 15.36);
        bezierVertex(2.53, 15.9, 1.72, 16.45, 1.03, 17.09);
        bezierVertex(0.86, 17.25, 0.7, 17.42, 0.6, 17.6);
        bezierVertex(0.5, 17.82, 0.49, 17.74, 0.61, 17.95);
        bezierVertex(0.76, 18.24, 1.28, 18.15, 1.78, 18.16);
        vertex(1.79, 18.2);
        bezierVertex(1.58, 18.33, 1.37, 18.45, 1.1, 18.51);
        bezierVertex(0.84, 18.59, 0.47, 18.52, 0.23, 18.27);
        bezierVertex(0.18, 18.21, 0.12, 18.13, 0.1, 18.09);
        bezierVertex(0.08, 18.06, -0.01, 17.9, 0, 17.8);
        bezierVertex(0.01, 17.57, 0.11, 17.44, 0.19, 17.32);
        bezierVertex(0.37, 17.09, 0.57, 16.94, 0.77, 16.78);
        bezierVertex(1.56, 16.18, 2.43, 15.73, 3.31, 15.31);
        vertex(3.33, 15.36);
endShape();

beginShape();
        vertex(0.55, 18.82);
        bezierVertex(0.67, 18.95, 0.73, 19.11, 0.82, 19.22);
        bezierVertex(0.89, 19.35, 0.97, 19.46, 1.06, 19.53);
        bezierVertex(1.15, 19.6, 1.26, 19.58, 1.3, 19.66);
        bezierVertex(1.35, 19.75, 1.43, 19.85, 1.56, 20.07);
        vertex(1.56, 20.15);
        bezierVertex(1.39, 20.33, 1.17, 20.39, 0.95, 20.33);
        bezierVertex(0.73, 20.27, 0.61, 20.03, 0.55, 19.85);
        bezierVertex(0.48, 19.66, 0.46, 19.48, 0.46, 19.32);
        bezierVertex(0.46, 19.15, 0.5, 19, 0.48, 18.86);
        vertex(0.55, 18.82);
endShape();

beginShape();
        vertex(4.5, 20.21);
        bezierVertex(5.67, 20.84, 7.04, 21.1, 8.29, 20.88);
        bezierVertex(8.91, 20.76, 9.5, 20.46, 10.12, 20.27);
        bezierVertex(10.72, 20.05, 11.38, 19.9, 11.84, 19.47);
        vertex(11.92, 19.48);
        bezierVertex(11.87, 19.89, 11.57, 20.15, 11.31, 20.39);
        bezierVertex(11.03, 20.63, 10.72, 20.8, 10.41, 20.96);
        bezierVertex(9.78, 21.26, 9.09, 21.43, 8.36, 21.47);
        bezierVertex(6.93, 21.58, 5.54, 21.1, 4.45, 20.28);
        vertex(4.5, 20.21);
endShape();

beginShape();
        vertex(9.31, 17.49);
        bezierVertex(10.02, 17.88, 10.79, 18.16, 11.57, 18.33);
        bezierVertex(12.35, 18.5, 13.15, 18.55, 13.92, 18.43);
        bezierVertex(14.67, 18.31, 15.41, 17.94, 16.17, 17.72);
        bezierVertex(16.92, 17.46, 17.68, 17.22, 18.38, 16.82);
        vertex(18.44, 16.86);
        bezierVertex(17.98, 17.62, 17.19, 18.05, 16.44, 18.42);
        bezierVertex(15.67, 18.75, 14.86, 18.97, 13.98, 19.03);
        bezierVertex(12.25, 19.13, 10.6, 18.5, 9.27, 17.56);
        vertex(9.31, 17.49);
endShape();

beginShape();
        vertex(14.42, 13.95);
        bezierVertex(15.06, 14.47, 15.77, 14.92, 16.52, 15.26);
        bezierVertex(17.28, 15.57, 18.04, 15.82, 18.87, 15.92);
        vertex(18.87, 15.94);
        bezierVertex(18.03, 16.11, 17.16, 15.85, 16.43, 15.44);
        bezierVertex(15.68, 15.05, 15, 14.55, 14.4, 13.97);
        vertex(14.42, 13.95);
endShape();

beginShape();
        vertex(19.32, 13.33);
        bezierVertex(20.11, 16.04, 21.28, 18.66, 22.88, 20.97);
        bezierVertex(23.68, 22.12, 24.61, 23.18, 25.7, 24.04);
        bezierVertex(26.8, 24.89, 28.01, 25.64, 29.22, 26.35);
        bezierVertex(31.65, 27.78, 34.18, 29.06, 36.61, 30.54);
        bezierVertex(37.82, 31.29, 39.03, 32.05, 40.17, 32.9);
        bezierVertex(40.74, 33.33, 41.3, 33.78, 41.83, 34.28);
        bezierVertex(42.32, 34.79, 42.85, 35.33, 43.07, 36.03);
        vertex(43, 36.06);
        bezierVertex(42.69, 35.43, 42.15, 34.97, 41.6, 34.54);
        bezierVertex(41.05, 34.1, 40.47, 33.71, 39.88, 33.33);
        bezierVertex(38.69, 32.58, 37.47, 31.87, 36.23, 31.19);
        bezierVertex(33.77, 29.8, 31.32, 28.38, 28.91, 26.87);
        bezierVertex(27.7, 26.11, 26.51, 25.33, 25.39, 24.41);
        bezierVertex(24.28, 23.49, 23.35, 22.37, 22.57, 21.18);
        bezierVertex(21.02, 18.77, 19.95, 16.1, 19.25, 13.35);
        vertex(19.32, 13.33);
endShape();

beginShape();
        vertex(7.21, 14.2);
        bezierVertex(7.46, 12.94, 8.23, 11.76, 9.38, 11.07);
        bezierVertex(10.58, 10.48, 11.75, 10.09, 12.91, 9.55);
        bezierVertex(14.07, 9.03, 15.19, 8.44, 16.32, 7.9);
        bezierVertex(17.45, 7.35, 18.59, 6.81, 19.51, 5.94);
        vertex(19.57, 5.98);
        bezierVertex(18.95, 7.18, 17.75, 7.89, 16.67, 8.56);
        bezierVertex(15.55, 9.21, 14.34, 9.65, 13.14, 10.1);
        bezierVertex(11.96, 10.57, 10.68, 10.93, 9.56, 11.4);
        bezierVertex(8.47, 11.94, 7.63, 13.01, 7.28, 14.22);
        vertex(7.21, 14.2);
endShape();

beginShape();
        vertex(19.88, 5.11);
        bezierVertex(20.29, 4.14, 21.27, 3.52, 22.28, 3.33);
        bezierVertex(23.31, 3.11, 24.36, 3.33, 25.36, 3.46);
        bezierVertex(27.38, 3.71, 29.41, 3.84, 31.44, 3.77);
        bezierVertex(31.95, 3.76, 32.46, 3.73, 32.96, 3.68);
        bezierVertex(33.2, 3.66, 33.47, 3.62, 33.73, 3.62);
        bezierVertex(34.02, 3.62, 34.28, 3.65, 34.54, 3.7);
        bezierVertex(35.57, 3.9, 36.54, 4.25, 37.51, 4.58);
        bezierVertex(39.44, 5.27, 41.33, 6.02, 43.28, 6.55);
        bezierVertex(44.26, 6.81, 45.25, 7.02, 46.22, 7.04);
        bezierVertex(47.18, 7.04, 48.19, 6.84, 49.17, 6.63);
        bezierVertex(51.14, 6.2, 53.1, 5.65, 55.04, 5.04);
        bezierVertex(56.99, 4.46, 58.9, 3.78, 60.78, 3.01);
        bezierVertex(61.72, 2.63, 62.65, 2.21, 63.54, 1.74);
        bezierVertex(64.43, 1.26, 65.34, 0.76, 66.01, 0);
        vertex(66.07, 0.04);
        bezierVertex(65.45, 0.88, 64.57, 1.47, 63.72, 2.03);
        bezierVertex(62.84, 2.57, 61.92, 3.05, 61, 3.49);
        bezierVertex(59.14, 4.37, 57.21, 5.09, 55.27, 5.76);
        bezierVertex(53.32, 6.4, 51.34, 6.96, 49.32, 7.36);
        bezierVertex(48.3, 7.54, 47.29, 7.73, 46.2, 7.71);
        bezierVertex(45.13, 7.66, 44.12, 7.41, 43.12, 7.13);
        bezierVertex(41.14, 6.55, 39.25, 5.76, 37.34, 5.04);
        bezierVertex(36.39, 4.69, 35.43, 4.33, 34.46, 4.12);
        bezierVertex(34.22, 4.08, 33.97, 4.04, 33.75, 4.03);
        bezierVertex(33.5, 4.03, 33.26, 4.07, 33, 4.09);
        bezierVertex(32.48, 4.13, 31.97, 4.14, 31.45, 4.15);
        bezierVertex(29.4, 4.16, 27.35, 3.99, 25.33, 3.68);
        bezierVertex(24.32, 3.53, 23.31, 3.29, 22.31, 3.48);
        bezierVertex(21.33, 3.63, 20.37, 4.22, 19.95, 5.14);
        vertex(19.88, 5.11);
endShape();

beginShape();
        vertex(47.25, 10.08);
        bezierVertex(47.57, 12.69, 47.91, 15.29, 48.29, 17.88);
        bezierVertex(48.49, 19.18, 48.72, 20.47, 48.9, 21.76);
        bezierVertex(49.07, 23.06, 49.25, 24.35, 49.5, 25.64);
        vertex(49.45, 25.66);
        bezierVertex(48.92, 24.44, 48.67, 23.13, 48.41, 21.84);
        bezierVertex(48.16, 20.55, 48.04, 19.24, 47.89, 17.93);
        bezierVertex(47.6, 15.32, 47.38, 12.71, 47.2, 10.09);
        vertex(47.25, 10.08);
endShape();

beginShape();
        vertex(45.87, 13.34);
        bezierVertex(45.76, 15.07, 45.82, 16.81, 45.99, 18.54);
        bezierVertex(46.14, 20.26, 46.42, 21.97, 46.85, 23.65);
        bezierVertex(47.27, 25.32, 47.87, 26.94, 48.56, 28.51);
        bezierVertex(49.24, 30.09, 50.11, 31.59, 51.12, 33.01);
        vertex(51.08, 33.04);
        bezierVertex(49.85, 31.79, 48.89, 30.3, 48.11, 28.73);
        bezierVertex(47.34, 27.14, 46.84, 25.45, 46.46, 23.74);
        bezierVertex(45.71, 20.32, 45.5, 16.8, 45.83, 13.33);
        vertex(45.87, 13.34);
endShape();

beginShape();
        vertex(41.98, 42.11);
        bezierVertex(43.38, 42.33, 44.81, 42.3, 46.21, 42.16);
        bezierVertex(47.62, 42.02, 49.01, 41.76, 50.36, 41.38);
        bezierVertex(51.72, 41, 53.02, 40.47, 54.33, 39.97);
        bezierVertex(55.65, 39.49, 56.93, 38.9, 58.27, 38.37);
        vertex(58.31, 38.43);
        bezierVertex(57.18, 39.34, 55.92, 40.04, 54.62, 40.66);
        bezierVertex(53.31, 41.26, 51.91, 41.65, 50.51, 41.96);
        bezierVertex(49.1, 42.27, 47.67, 42.47, 46.24, 42.53);
        bezierVertex(44.8, 42.57, 43.36, 42.51, 41.96, 42.18);
        vertex(41.98, 42.11);
endShape();

beginShape();
        vertex(55.24, 36.01);
        bezierVertex(56.64, 36.66, 58.13, 37.13, 59.65, 37.24);
        bezierVertex(60.4, 37.29, 61.16, 37.22, 61.84, 36.96);
        bezierVertex(62.55, 36.69, 63.24, 36.35, 63.94, 36.02);
        bezierVertex(65.32, 35.34, 66.68, 34.59, 68.12, 34);
        bezierVertex(68.84, 33.72, 69.57, 33.42, 70.32, 33.2);
        bezierVertex(71.07, 33.02, 71.87, 32.71, 72.68, 32.99);
        vertex(72.65, 33.06);
        bezierVertex(72.28, 33, 71.91, 33.13, 71.56, 33.26);
        bezierVertex(71.2, 33.38, 70.85, 33.53, 70.51, 33.69);
        bezierVertex(69.81, 34.01, 69.11, 34.33, 68.43, 34.68);
        bezierVertex(67.04, 35.36, 65.61, 35.96, 64.18, 36.56);
        bezierVertex(63.47, 36.87, 62.75, 37.17, 62, 37.42);
        bezierVertex(61.22, 37.68, 60.4, 37.7, 59.61, 37.61);
        bezierVertex(58.04, 37.4, 56.57, 36.82, 55.21, 36.08);
        vertex(55.24, 36.01);
endShape();

beginShape();
        vertex(18.42, 18.08);
        bezierVertex(19.04, 18.42, 19.64, 18.79, 20.21, 19.21);
        bezierVertex(20.5, 19.42, 20.77, 19.64, 21.03, 19.9);
        bezierVertex(21.28, 20.15, 21.53, 20.42, 21.65, 20.78);
        vertex(21.66, 20.81);
        vertex(21.64, 20.83);
        bezierVertex(21.16, 21.56, 20.49, 22.06, 19.79, 22.52);
        bezierVertex(19.43, 22.74, 19.05, 22.93, 18.62, 23.02);
        bezierVertex(18.2, 23.13, 17.7, 23.06, 17.35, 22.78);
        bezierVertex(16.63, 22.26, 16.29, 21.34, 16.37, 20.49);
        bezierVertex(16.43, 19.62, 16.93, 18.86, 17.57, 18.34);
        vertex(17.59, 18.35);
        bezierVertex(17.01, 18.94, 16.61, 19.7, 16.58, 20.5);
        bezierVertex(16.55, 21.29, 16.87, 22.12, 17.5, 22.58);
        bezierVertex(18.13, 23.09, 19.01, 22.75, 19.69, 22.35);
        bezierVertex(20.37, 21.94, 21.07, 21.42, 21.52, 20.78);
        vertex(21.51, 20.82);
        bezierVertex(21.42, 20.51, 21.19, 20.23, 20.95, 19.98);
        bezierVertex(20.71, 19.72, 20.44, 19.49, 20.16, 19.28);
        bezierVertex(19.61, 18.84, 19.02, 18.45, 18.41, 18.1);
        vertex(18.42, 18.08);
endShape();

beginShape();
        vertex(21.15, 22.31);
        bezierVertex(20.43, 23.78, 19.64, 25.22, 18.69, 26.57);
        bezierVertex(18.2, 27.23, 17.7, 27.9, 16.94, 28.39);
        bezierVertex(16.54, 28.64, 16.06, 28.69, 15.63, 28.68);
        bezierVertex(15.19, 28.67, 14.77, 28.61, 14.35, 28.51);
        bezierVertex(12.72, 28.11, 11.16, 27.38, 9.87, 26.27);
        bezierVertex(9.25, 25.71, 8.67, 25.02, 8.28, 24.3);
        bezierVertex(8.07, 23.93, 7.88, 23.56, 7.73, 23.16);
        bezierVertex(7.66, 22.96, 7.6, 22.75, 7.57, 22.54);
        bezierVertex(7.55, 22.33, 7.52, 22.09, 7.68, 21.89);
        vertex(7.73, 21.95);
        bezierVertex(7.64, 22.29, 7.85, 22.69, 8.04, 23.02);
        bezierVertex(8.23, 23.36, 8.46, 23.69, 8.71, 24.01);
        bezierVertex(9.2, 24.66, 9.71, 25.21, 10.35, 25.69);
        bezierVertex(11.6, 26.64, 12.99, 27.48, 14.51, 27.93);
        bezierVertex(15.26, 28.13, 16.07, 28.29, 16.7, 27.97);
        bezierVertex(17.35, 27.6, 17.89, 26.97, 18.4, 26.34);
        bezierVertex(19.4, 25.08, 20.28, 23.69, 21.09, 22.28);
        vertex(21.15, 22.31);
endShape();

beginShape();
        vertex(14.03, 20.13);
        bezierVertex(13.83, 20.66, 13.59, 21.19, 13.31, 21.69);
        bezierVertex(13.17, 21.94, 13.06, 22.23, 12.82, 22.42);
        bezierVertex(12.59, 22.59, 12.28, 22.82, 11.88, 22.71);
        vertex(11.87, 22.63);
        bezierVertex(12.04, 22.38, 12.11, 22.14, 12.26, 21.92);
        bezierVertex(12.4, 21.69, 12.63, 21.53, 12.82, 21.33);
        vertex(13.96, 20.09);
        vertex(14.03, 20.13);
endShape();

beginShape();
        vertex(16.11, 26.72);
        bezierVertex(15.67, 26.09, 15.2, 25.48, 14.69, 24.92);
        bezierVertex(14.43, 24.65, 14.16, 24.38, 13.87, 24.14);
        bezierVertex(13.6, 23.89, 13.3, 23.67, 12.94, 23.56);
        vertex(12.94, 23.53);
        bezierVertex(13.34, 23.5, 13.72, 23.72, 14.03, 23.95);
        bezierVertex(14.34, 24.2, 14.6, 24.49, 14.84, 24.79);
        bezierVertex(15.33, 25.39, 15.75, 26.04, 16.13, 26.71);
        vertex(16.11, 26.72);
endShape();

beginShape();
        vertex(13.89, 28.88);
        bezierVertex(13.86, 29.72, 13.93, 30.6, 14.28, 31.35);
        bezierVertex(14.45, 31.73, 14.75, 32.01, 15.06, 32.3);
        bezierVertex(15.37, 32.59, 15.7, 32.85, 16.04, 33.09);
        bezierVertex(16.73, 33.55, 17.51, 33.89, 18.31, 33.95);
        bezierVertex(19.12, 34.03, 19.9, 33.77, 20.67, 33.44);
        bezierVertex(21.43, 33.09, 22.17, 32.68, 22.91, 32.25);
        bezierVertex(23.28, 32.04, 23.65, 31.83, 24.04, 31.63);
        bezierVertex(24.45, 31.45, 24.81, 31.21, 25.39, 31.17);
        bezierVertex(25.58, 31.19, 25.98, 30.9, 26.27, 30.65);
        bezierVertex(26.58, 30.39, 26.87, 30.08, 27.17, 29.79);
        bezierVertex(27.47, 29.49, 27.75, 29.17, 28.03, 28.85);
        bezierVertex(28.29, 28.53, 28.6, 28.19, 28.75, 27.83);
        vertex(28.82, 27.83);
        bezierVertex(28.62, 28.73, 28.07, 29.41, 27.57, 30.13);
        bezierVertex(27.32, 30.48, 27.02, 30.81, 26.71, 31.13);
        bezierVertex(26.55, 31.28, 26.39, 31.44, 26.2, 31.58);
        bezierVertex(26.02, 31.71, 25.77, 31.9, 25.44, 31.92);
        bezierVertex(25.15, 31.93, 24.75, 32.14, 24.39, 32.32);
        vertex(23.26, 32.9);
        bezierVertex(22.49, 33.29, 21.71, 33.67, 20.9, 33.99);
        bezierVertex(20.09, 34.3, 19.17, 34.56, 18.26, 34.43);
        bezierVertex(17.36, 34.32, 16.53, 33.91, 15.83, 33.39);
        bezierVertex(15.47, 33.12, 15.15, 32.83, 14.85, 32.51);
        bezierVertex(14.56, 32.21, 14.24, 31.87, 14.08, 31.44);
        bezierVertex(13.75, 30.61, 13.73, 29.73, 13.81, 28.87);
        vertex(13.89, 28.88);
endShape();

beginShape();
        vertex(24.82, 30.05);
        bezierVertex(24.23, 29.65, 23.66, 29.21, 23.13, 28.73);
        bezierVertex(22.86, 28.49, 22.6, 28.23, 22.37, 27.94);
        bezierVertex(22.18, 27.64, 21.96, 27.3, 21.98, 26.92);
        vertex(22.01, 26.92);
        bezierVertex(22.12, 27.25, 22.34, 27.52, 22.57, 27.79);
        bezierVertex(22.79, 28.06, 23.03, 28.32, 23.27, 28.58);
        bezierVertex(23.76, 29.09, 24.29, 29.57, 24.84, 30.03);
        vertex(24.82, 30.05);
endShape();

beginShape();
        vertex(23.4, 39.69);
        bezierVertex(22.81, 39.29, 22.24, 38.85, 21.71, 38.36);
        bezierVertex(21.44, 38.13, 21.18, 37.87, 20.96, 37.58);
        bezierVertex(20.76, 37.28, 20.54, 36.94, 20.57, 36.56);
        vertex(20.59, 36.55);
        bezierVertex(20.71, 36.89, 20.93, 37.16, 21.15, 37.42);
        bezierVertex(21.37, 37.69, 21.61, 37.96, 21.85, 38.22);
        bezierVertex(22.34, 38.73, 22.87, 39.21, 23.42, 39.67);
        vertex(23.4, 39.69);
endShape();

beginShape();
        vertex(31.82, 41.97);
        bezierVertex(31.23, 41.57, 30.66, 41.13, 30.13, 40.64);
        bezierVertex(29.86, 40.4, 29.6, 40.15, 29.37, 39.86);
        bezierVertex(29.18, 39.56, 28.96, 39.22, 28.98, 38.84);
        vertex(29.01, 38.83);
        bezierVertex(29.12, 39.17, 29.34, 39.44, 29.57, 39.7);
        bezierVertex(29.79, 39.97, 30.03, 40.24, 30.27, 40.5);
        bezierVertex(30.76, 41.01, 31.29, 41.49, 31.84, 41.95);
        vertex(31.82, 41.97);
endShape();

beginShape();
        vertex(19.32, 35.23);
        bezierVertex(18.81, 36.04, 18.52, 37.11, 18.96, 37.96);
        bezierVertex(19.41, 38.8, 20.16, 39.48, 20.97, 39.97);
        bezierVertex(21.78, 40.46, 22.76, 40.77, 23.62, 40.49);
        bezierVertex(24.47, 40.18, 25.27, 39.55, 26.03, 38.96);
        bezierVertex(26.79, 38.35, 27.52, 37.69, 28.26, 37.04);
        bezierVertex(28.65, 36.72, 28.99, 36.39, 29.46, 36.08);
        bezierVertex(29.83, 35.91, 30.1, 35.51, 30.41, 35.14);
        bezierVertex(31.04, 34.4, 31.61, 33.6, 32.23, 32.82);
        bezierVertex(32.86, 32.06, 33.43, 31.24, 34.22, 30.6);
        vertex(34.27, 30.66);
        bezierVertex(33.95, 31.02, 33.7, 31.45, 33.44, 31.87);
        vertex(32.65, 33.12);
        bezierVertex(32.13, 33.96, 31.59, 34.78, 31, 35.6);
        bezierVertex(30.69, 35.98, 30.4, 36.45, 29.87, 36.74);
        bezierVertex(29.51, 36.97, 29.12, 37.3, 28.74, 37.61);
        bezierVertex(27.97, 38.22, 27.2, 38.85, 26.39, 39.44);
        bezierVertex(25.58, 40.02, 24.78, 40.62, 23.75, 40.96);
        bezierVertex(22.68, 41.25, 21.61, 40.83, 20.77, 40.29);
        bezierVertex(19.94, 39.72, 19.2, 38.98, 18.75, 38.06);
        bezierVertex(18.32, 37.07, 18.7, 35.99, 19.26, 35.19);
        vertex(19.32, 35.23);
endShape();

beginShape();
        vertex(30.4, 33.68);
        bezierVertex(29.98, 33.23, 29.54, 32.79, 29.09, 32.38);
        vertex(28.39, 31.79);
        bezierVertex(28.16, 31.59, 27.94, 31.39, 27.66, 31.27);
        vertex(27.66, 31.24);
        bezierVertex(28, 31.23, 28.29, 31.42, 28.55, 31.59);
        bezierVertex(28.8, 31.78, 29.02, 32, 29.23, 32.23);
        bezierVertex(29.66, 32.69, 30.05, 33.17, 30.42, 33.66);
        vertex(30.4, 33.68);
endShape();

beginShape();
        vertex(27.11, 39.89);
        bezierVertex(26.72, 40.99, 26.86, 42.27, 27.57, 43.15);
        bezierVertex(28.26, 44.03, 29.34, 44.58, 30.44, 44.77);
        bezierVertex(31.55, 44.95, 32.68, 44.74, 33.78, 44.48);
        bezierVertex(34.89, 44.22, 35.98, 43.83, 37.08, 43.37);
        vertex(37.12, 43.43);
        bezierVertex(36.23, 44.24, 35.14, 44.83, 33.98, 45.21);
        bezierVertex(32.82, 45.58, 31.53, 45.64, 30.32, 45.35);
        bezierVertex(29.11, 45.06, 27.98, 44.4, 27.27, 43.36);
        bezierVertex(26.56, 42.31, 26.55, 40.94, 27.04, 39.86);
        vertex(27.11, 39.89);
endShape();

beginShape();
        vertex(35.02, 37.86);
        bezierVertex(34.28, 37.63, 33.56, 37.34, 32.87, 36.96);
        bezierVertex(32.52, 36.78, 32.19, 36.57, 31.89, 36.3);
        bezierVertex(31.61, 36.03, 31.33, 35.67, 31.33, 35.26);
        vertex(31.36, 35.26);
        bezierVertex(31.5, 35.62, 31.76, 35.88, 32.06, 36.12);
        bezierVertex(32.34, 36.36, 32.65, 36.58, 32.97, 36.79);
        bezierVertex(33.62, 37.19, 34.32, 37.54, 35.03, 37.84);
        vertex(35.02, 37.86);
endShape();

beginShape();
        vertex(37.33, 41.37);
        bezierVertex(38.24, 40.44, 39.04, 39.41, 39.68, 38.31);
        bezierVertex(39.99, 37.75, 40.2, 37.17, 40.47, 36.61);
        bezierVertex(40.74, 36.04, 40.96, 35.47, 41.19, 34.83);
        vertex(41.26, 34.84);
        bezierVertex(41.44, 35.5, 41.36, 36.22, 41.17, 36.87);
        bezierVertex(40.97, 37.53, 40.58, 38.1, 40.18, 38.64);
        bezierVertex(39.39, 39.72, 38.44, 40.65, 37.37, 41.43);
        vertex(37.33, 41.37);
endShape();

beginShape();
        vertex(36.64, 37.75);
        bezierVertex(36.96, 36.97, 37.22, 36.17, 37.44, 35.37);
        bezierVertex(37.54, 34.97, 37.59, 34.56, 37.7, 34.17);
        bezierVertex(37.82, 33.78, 37.91, 33.39, 38.04, 32.97);
        vertex(38.09, 32.97);
        bezierVertex(38.24, 33.39, 38.23, 33.84, 38.19, 34.27);
        bezierVertex(38.14, 34.7, 37.97, 35.1, 37.82, 35.5);
        bezierVertex(37.51, 36.29, 37.13, 37.05, 36.68, 37.77);
        vertex(36.64, 37.75);
endShape();

beginShape();
        vertex(35.83, 38.84);
        bezierVertex(35.86, 39.48, 35.8, 40.13, 35.6, 40.76);
        bezierVertex(35.51, 41.08, 35.4, 41.41, 35.16, 41.67);
        bezierVertex(34.92, 41.92, 34.61, 42.14, 34.26, 42.15);
        vertex(34.24, 42.11);
        bezierVertex(34.45, 41.84, 34.63, 41.63, 34.76, 41.37);
        bezierVertex(34.91, 41.13, 35.09, 40.89, 35.23, 40.62);
        bezierVertex(35.49, 40.07, 35.67, 39.46, 35.78, 38.83);
        vertex(35.83, 38.84);
endShape();
}

