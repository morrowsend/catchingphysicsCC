// CPSnHydraulicsForceDistanceSharePID

const loadweight=12;

function preload() {
    chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
	createCanvas(800,400);
	sliderHeight=new createSliderDivider(40,220,100,15,0,[0],false);
	sliderArea=new createSliderDivider(40,80,60,15,2,[0.334],false);
	forcesbutton = new CreateCheckButton(656,80,"show forces",false);
	distancesbutton = new CreateCheckButton(637,120,"show distances",false);
	morebutton = new CreateCheckButton(653,160,"tell me more",false);

}

function draw() {
    background(CWHITE);
	forcesbutton.drawButton();
	distancesbutton.drawButton();
	morebutton.drawButton();

	sliderHeight.draw();
	var volumeshiftedLR = (1-sliderHeight.getValue())*1200;
    
    sliderArea.draw();
    
    var ratio = 1+int(sliderArea.getValue()*3);
    if(distancesbutton.buttonisChecked){
    stroke(CIDEARED);
    strokeWeight(4);
    line(404, 177, 404, 237-volumeshiftedLR/20);
}
    push();
		translate(156+238, 185-volumeshiftedLR/20);
		if(forcesbutton.buttonisChecked){
			push();
				translate(36, 55)
				showForce(loadweight/ratio, 0, CCOMPRESSION);
			pop();
		}
		scale(0.2);
    supporthand();
	pop();
	push();
		translate(420, 330);
		scale(-1,1);
		hydraulicsystemY(ratio,volumeshiftedLR);
	pop();
	
	placeWords("choose\nhow to share\nthe load", 70, 90);
    placeWords("lift the load\nby shifting\nthe fluid", 70, 230);
    
    if(morebutton.buttonisChecked){
placeAdviceDroid(580, 80, "There is a trade-off.\n\nChoose to share most of the load – push further.\nChoose to push further – less force needed.", 170, 129);
		}

 placeTitleBold("sharing a load with hydraulic system");
}
function supporthand(){
	noFill();
	stroke(CDRAWTIFO);
	strokeWeight(1);
	beginShape();
        vertex(216.26, 211.22);
        bezierVertex(216.26, 211.22, 219.55, 213.4, 226.13, 217.74);
        bezierVertex(232.7, 222.09, 236.27, 224.53, 236.83, 225.05);
        bezierVertex(237.39, 225.57, 234.12, 223.44, 227.03, 218.66);
        bezierVertex(219.94, 213.88, 215.63, 210.98, 214.11, 209.95);
        bezierVertex(212.59, 208.93, 208.88, 211.15, 203, 216.61);
        bezierVertex(197.12, 222.07, 194.09, 224.67, 193.89, 224.4);
        bezierVertex(193.7, 224.14, 196.44, 221.26, 202.09, 215.76);
        bezierVertex(207.74, 210.27, 210.01, 207.02, 208.89, 206.03);
        bezierVertex(207.77, 205.03, 204.92, 200.35, 200.34, 191.97);
        bezierVertex(195.76, 183.59, 193.35, 179.01, 193.11, 178.24);
        bezierVertex(192.87, 177.46, 190.84, 178.45, 187.02, 181.22);
        bezierVertex(183.2, 183.98, 178.37, 187.98, 172.53, 193.21);
        bezierVertex(166.68, 198.44, 163.71, 201, 163.62, 200.86);
        bezierVertex(163.52, 200.73, 166.4, 198.05, 172.24, 192.82);
        bezierVertex(178.09, 187.58, 182.82, 183.45, 186.45, 180.43);
        bezierVertex(190.08, 177.4, 195.1, 174.77, 201.51, 172.54);
        bezierVertex(207.92, 170.31, 207.87, 166.61, 201.35, 161.46);
        bezierVertex(194.83, 156.3, 190.67, 153.19, 188.87, 152.12);
        bezierVertex(187.08, 151.06, 186.52, 150.58, 187.2, 150.69);
        bezierVertex(187.88, 150.8, 191.99, 153.63, 199.51, 159.18);
        bezierVertex(207.04, 164.74, 211.2, 167.85, 211.99, 168.52);
        bezierVertex(212.77, 169.18, 213.76, 170.19, 214.94, 171.55);
        bezierVertex(216.12, 172.9, 218.71, 176.34, 222.72, 181.86);
        bezierVertex(226.73, 187.39, 230.35, 191.69, 233.57, 194.78);
        bezierVertex(236.8, 197.87, 240.78, 201.01, 245.5, 204.21);
        bezierVertex(250.23, 207.41, 255.33, 206.83, 260.8, 202.47);
        bezierVertex(266.27, 198.11, 267.92, 192.9, 265.75, 186.85);
        bezierVertex(263.57, 180.8, 261.48, 175.69, 259.47, 171.53);
        bezierVertex(257.46, 167.36, 253.66, 162.27, 248.07, 156.26);
        bezierVertex(242.48, 150.24, 237.1, 144.27, 231.93, 138.35);
        bezierVertex(226.77, 132.42, 222.88, 128.13, 220.26, 125.47);
        bezierVertex(217.64, 122.81, 213.3, 118.74, 207.23, 113.26);
        bezierVertex(201.17, 107.78, 194.76, 102.76, 188.01, 98.19);
        bezierVertex(181.27, 93.63, 176.32, 90.61, 173.17, 89.13);
        bezierVertex(170.01, 87.65, 164.53, 85.75, 156.71, 83.44);
        bezierVertex(148.89, 81.12, 142.85, 79.17, 138.61, 77.57);
        bezierVertex(134.37, 75.97, 129.12, 72.57, 122.87, 67.37);
        bezierVertex(116.61, 62.17, 112.35, 58.23, 110.09, 55.55);
        bezierVertex(107.84, 52.86, 104.95, 49.08, 101.42, 44.21);
        bezierVertex(97.89, 39.34, 94.53, 34.55, 91.32, 29.85);
        bezierVertex(88.12, 25.14, 85.91, 20.01, 84.71, 14.47);
        bezierVertex(83.5, 8.92, 82.58, 4.87, 81.94, 2.32);
        bezierVertex(81.3, -0.22, 78.43, -0.68, 73.33, 0.97);
        bezierVertex(68.22, 2.61, 61.03, 5.89, 51.75, 10.81);
        bezierVertex(42.47, 15.74, 36.17, 19.32, 32.84, 21.55);
        bezierVertex(29.52, 23.79, 24.12, 27.57, 16.64, 32.89);
        bezierVertex(9.17, 38.21, 4.1, 41.88, 1.43, 43.9);
        bezierVertex(-1.23, 45.92, -0.18, 50.19, 4.6, 56.72);
        bezierVertex(9.38, 63.25, 14.04, 69.93, 18.6, 76.76);
        bezierVertex(23.16, 83.58, 27.91, 89.9, 32.85, 95.71);
        bezierVertex(37.78, 101.52, 42.78, 106.81, 47.84, 111.58);
        bezierVertex(52.89, 116.35, 57.67, 122.09, 62.17, 128.81);
        bezierVertex(66.67, 135.53, 69.23, 139.5, 69.87, 140.7);
        bezierVertex(70.5, 141.9, 72.68, 146.11, 76.42, 153.32);
        bezierVertex(80.15, 160.52, 83.9, 167.74, 87.65, 174.96);
        bezierVertex(91.41, 182.18, 95.17, 189.4, 98.95, 196.62);
        bezierVertex(102.72, 203.84, 106.5, 211.05, 110.29, 218.24);
        bezierVertex(114.08, 225.44, 117.63, 232.15, 120.93, 238.38);
        bezierVertex(124.24, 244.61, 128.19, 248.93, 132.79, 251.34);
        bezierVertex(137.39, 253.74, 144.46, 256.17, 154, 258.63);
        bezierVertex(163.55, 261.08, 170.99, 262.66, 176.33, 263.37);
        bezierVertex(181.67, 264.08, 189.36, 264.13, 199.42, 263.54);
        bezierVertex(209.48, 262.95, 217.2, 261.98, 222.59, 260.62);
        bezierVertex(227.98, 259.27, 234.09, 257.62, 240.92, 255.69);
        bezierVertex(247.75, 253.76, 251.67, 248.91, 252.67, 241.16);
        bezierVertex(253.69, 233.4, 253.79, 226.2, 252.99, 219.56);
        bezierVertex(252.2, 212.91, 249.44, 207.99, 244.71, 204.78);
        bezierVertex(239.99, 201.58, 234.73, 196.66, 228.94, 190.01);
        bezierVertex(223.16, 183.36, 219.54, 179.05, 218.09, 177.09);
        bezierVertex(216.64, 175.13, 215.33, 173.47, 214.15, 172.12);
        bezierVertex(212.97, 170.77, 211.01, 170.28, 208.27, 170.65);
        bezierVertex(205.54, 171.03, 202.41, 171.98, 198.91, 173.52);
        bezierVertex(195.4, 175.05, 195.16, 179.6, 198.17, 187.15);
        bezierVertex(201.18, 194.71, 203.11, 199.03, 203.95, 200.13);
        bezierVertex(204.79, 201.22, 207.05, 203.34, 210.73, 206.5);
        bezierVertex(214.42, 209.65, 219.15, 210.64, 224.93, 209.47);
        bezierVertex(230.7, 208.3, 233.64, 207.78, 233.73, 207.91);
        bezierVertex(233.83, 208.04, 230.94, 208.63, 225.07, 209.67);
        bezierVertex(219.2, 210.71, 216.26, 211.22, 216.26, 211.22);
	endShape()
    }

function hydraulicsystemY(ratio,volumeshiftedLR){

  var jointubeheight = 20;
  var jointubewidth=160;
  var areaLH=20;
  var areaRH=areaLH*ratio;
  var systemtubeheight=200;
  var fillabletubeheight=systemtubeheight-jointubeheight;



  var fluidheightLH=(fillabletubeheight/2)+volumeshiftedLR/areaLH;
  var fluidheightRH=(fillabletubeheight/2)-volumeshiftedLR/areaRH;

  noStroke();
  fill(CPULLEYLIGHTGREY);
  rectMode(CORNERS);
  //fluid
 rect(-areaLH,0,jointubewidth+areaRH,-jointubeheight);
  rect(-areaLH,-jointubeheight,0,-fluidheightLH);
  rect(jointubewidth,-jointubeheight,jointubewidth+areaRH,-fluidheightRH);

//tubes
  stroke(CPULLEYLIGHTGREY);
  strokeWeight(2);
  line(-areaLH,0,jointubewidth+areaRH,0);
  line(0,-jointubeheight,jointubewidth,-jointubeheight);
  line(-areaLH,0,-areaLH,-systemtubeheight);
  line(0,-jointubeheight,0,-systemtubeheight);
  line(jointubewidth+areaRH,0,jointubewidth+areaRH,-systemtubeheight);
  line(jointubewidth,-jointubeheight,jointubewidth,-systemtubeheight);
  // pistons
  stroke(CIDEAGREY);
  strokeWeight(2);
  line(-areaLH,-fluidheightLH, 0, -fluidheightLH);
  line(jointubewidth,-fluidheightRH, jointubewidth+areaRH, -fluidheightRH);
  if(distancesbutton.buttonisChecked){
  stroke(CIDEARED);
    strokeWeight(4);
    line(jointubewidth-10, 1200/areaRH-fillabletubeheight/2, jointubewidth-10, -fluidheightRH);
    
  }
  //load
	translate(jointubewidth+(areaRH/2), -fluidheightRH);
	stroke(CIDEABROWN);
	strokeWeight(16);
	strokeCap(SQUARE);
	line(0, 0, 0, -loadweight*7);

	if(forcesbutton.buttonisChecked){
		showForce(loadweight, 0, CCOMPRESSION);
	}
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}

function mousePressed(){
        sliderHeight.mousePressed();
        sliderArea.mousePressed();

	}
function mouseReleased(){
        sliderHeight.mouseReleased();
        sliderArea.mouseReleased();
		forcesbutton.changeState();
		distancesbutton.changeState();
		morebutton.changeState();
        }
