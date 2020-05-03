// a little bit of code to prepare pdl directories from the raw js files
// # outputPath directory must be created or emptied before running the script

const FileHound = require('filehound');
const fs = require('fs');
const path = require('path');

const basePath ='/Users/ian/catchingPhysicsCC/';
var inputPath =  basePath+'/StorypdlSourceFiles/';
var outputPath = basePath + 'catchingPhysics/';

var thisFrame ='<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>XXX</title>\n\t\t<link rel="stylesheet" type="text/css" href="../../__support/PDLCP.css">\n\t\t<script src="../../__support/p5.min.js"></script>\n\t\t<script src="../../__support/p5.dom.min.js"></script>\n\t\t<script src="../../__support/pdlEnvironment.js"></script>\n\t\t<script src="YYY.js"></script>\n\t</head>\n\t<body>\n\t</body>\n</html>';


const files = FileHound.create()
  .paths(inputPath)
  .ext('js')
  .findSync();
  
  files.forEach(processthis);

function processthis(curentFile){
console.log(curentFile);
	var thisfilename= path.parse(curentFile).name;
	var thisOne=thisFrame;
	fs.mkdirSync(outputPath+thisfilename);
	fs.copyFileSync(curentFile,outputPath+thisfilename+'/'+thisfilename+'.js');
	thisOne=thisOne.replace('XXX',thisfilename);
	thisOne=thisOne.replace('YYY',thisfilename);
	fs.writeFileSync(outputPath+thisfilename+'/'+'index.html',thisOne);
}
