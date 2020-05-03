// builds a catchingPhysics pml files into html, placing these in zzzpmlRendered

const FileHound = require('filehound');
const fs = require('fs');
const path = require('path');
var XRegExp = require('xregexp');
var marked = require('marked');

var theModel={};
var theToC=[];
var prevbutton;
var nextbutton;
var thisindex;
const basePath ='/Users/ian/catchingPhysicsCC/';
var inputPath = basePath+'StorypmlSourceFiles/';
var outputPath = basePath + 'catchingPhysics/';

var parseErrors=[];
 
const files = FileHound.create()
  .paths(inputPath)
  .ext('md')
  .findSync();
  
// starts the process of constructing a model to enable forward and back buttons to be added
files.forEach(buildModel);
files.forEach(buildToC);

files.forEach(processthis);
var errorfilename=outputPath+'__errors.txt';

fs.writeFileSync(errorfilename,parseErrors.join("\n"));

function buildModel(item){
	var thisname= path.parse(item).name;
	var thisbranch=path.parse(item).name.slice(0,2);
	var thisnuggetnumber=path.parse(item).name.slice(2,4);
	theModel[thisbranch]=thisnuggetnumber;
}

function buildToC(item){
	var thisname= path.parse(item).name;
	var fileContents=fs.readFileSync(item,'UTF8');
	var webTitle = /WebTitle{(.*)}/.exec(fileContents)[1];
	theToC.push(thisname+webTitle);
}

function padToTwo(number) {
  if (number<=99) { number = ("0"+number).slice(-2); }
  return number.toString();
}

function processthis(value){
	var thisroute = path.parse(value).dir.slice(inputPath.length);
	thisroute=thisroute.replace(/\/([0-9])\//g,"0$1");
	thisroute=thisroute.replace(/\//g,"");
	var thisfilename= thisroute+path.parse(value).name;
	var contentsof=fs.readFileSync(value,'UTF8');
	var outputName=outputPath+thisfilename+'.html';
	var curentnuggetnumber=path.parse(value).name.slice(2,4);
	var branchname=path.parse(value).name.slice(0,2);


	if (curentnuggetnumber<theModel[branchname]){
		var nextbtntarget = branchname+padToTwo(Number(curentnuggetnumber)+1);
		nextbutton = '<a href="'+nextbtntarget+'.html" class="internallinkPN" title="next">> </a>&nbsp<a href="'+branchname+theModel[branchname]+'.html" class="internallinkPN" title="last">>></a>  ';
	} else{
		nextbutton="";
	}
	if (curentnuggetnumber!="01"){
		prevbutton = '<a href="'+branchname+'01.html" title="first" class="internallinkPN"> <<</a>&nbsp<a href="'+branchname+padToTwo(Number(curentnuggetnumber)-1)+'.html" title="previous" class="internallinkPN"> <</a>  ';
	} else{
		prevbutton="";
	}
	
	var whatIwant = contentsprocess(contentsof, thisfilename);
	fs.writeFileSync(outputName,whatIwant);
}

function contentsprocess(fileContents, thisfilename){
        var frame = '<!DOCTYPE html>\n<html>\n<head lang="en">\n<meta charset="UTF-8">\n<title>PAGETITLE</title>\n<link rel="stylesheet" href="../__support/PMLSupportCP.css"type="text/css">\n</head>\n<body>\n<div class="pagetitle">WEBTITLE</div>\n<div class="thecontent">DOCUMENTCONTENT</div>\n\n </br>PREVBUTTON NEXTBUTTON </body>\n</html>';

        //process metadata
        
        var filename,wipeFTitle,wipeHTitle,webTitle,identifier,match;

        match = XRegExp.match(fileContents,/FileName: (.*)/);
        if(match){
            identifier = XRegExp.split(match,": ")[1];
            fileName = identifier;
            wipeFTitle = 'FileName: ' + identifier;
        }

        webTitle = /WebTitle{(.*)}/.exec(fileContents)[1];
        wipeHTitle = /WebTitle{(.*)}/.exec(fileContents)[0];
       
        //delete metadata from file contents

        fileContents = fileContents.replace(wipeFTitle,'');
        fileContents = fileContents.replace(wipeHTitle,'');

        fileContents = pmlparsecatchingphysics(fileContents);

        fileContents = marked(fileContents);
        
        var testforString = fileContents.search("{");
	if (testforString!=-1){parseErrors.push(thisfilename);
	}


        frame = frame.replace('DOCUMENTCONTENT', fileContents);
        frame = frame.replace('WEBTITLE', webTitle);
        frame = frame.replace('PAGETITLE', webTitle);
        frame = frame.replace('NEXTBUTTON', nextbutton);
        frame = frame.replace('PREVBUTTON', prevbutton);
    // the toc and cover page
		if (thisfilename.slice(2,4)=="01"){
	
			const belongstoBranch = (item) => item.slice(0,2) == thisfilename.slice(0,2);
			let  thistoc = theToC.filter(belongstoBranch);
			thistoc.shift(); // take out the first nugget
			thisindex="<ul>\n"; // nix the index
			thistoc.forEach(buildindex);
			thisindex+="</ul>\n"
			frame = frame.replace('TOC', thisindex);
			frame=frame+"<p> This is a physics story that's a reliable guide for thinking about the world and acting in the world. The story is tested. It's both simple and not obvious. Practice re-imagining the world to see it more richly.</p><p>Find other stories from <a href='https://slowthinkingphysics.net/STPFrontMatter/catchingphysics.html'>here</a></p>.";
// 			add buttons here for every topic except the current one
		}

        return frame;
}

function buildindex(indexentry){
	let target = indexentry.slice(0,4)+".html";
	let descriptor = indexentry.slice(4,);
	thisindex += "\t<li><a href="+target+">"+descriptor+"</a></li>\n";
}

// dev catchingPhysics version 2020-04-01

function pmlparsecatchingphysics(text){
 
	// Strip critic markup

		text = XRegExp.replace(text,/{>>(.*?|\-|\:|\@)<<}/,'','all');//removes any critic markup comments, including file updates
		text = XRegExp.replace(text,/{\+\+(.*?)\+\+\}/,'','all');//removes any critic markup additions
		text = XRegExp.replace(text,/{\-\-(.*?)\-\-\}/,'','all');//removes any critic markup deletions
		text = XRegExp.replace(text,/{~~(.*?)~>(.*?)~~}/,'','all');//removes any critic markup substitutions
		text = XRegExp.replace(text,/{==(.*?)==}/,'','all');//removes any critic markup highlights
	



	// InsertGlyph
		
	
	
	// 	Unitary operators, expects to find, and strip, a trailing space
		text = XRegExp.replace(text,' SymbolDelta ','&Delta;','all');//writes  delta (change in) character
		text = XRegExp.replace(text,' SymbolDifferential ','d','all');//writes  delta (change in) character
		text = XRegExp.replace(text,' SymbolPlusorminus ','&plusmn;&thinsp;','all');//writes  plus or minus, and a following thin space
		text = XRegExp.replace(text,' SymbolPositive ','&plus;&thinsp;','all');//writes  plus or minus, and a following thin space
		text = XRegExp.replace(text,' SymbolNegative ','&minus;&thinsp;','all');//writes  plus or minus, and a following thin space

	
	// 	Binary operators,expects to find, and strips, and space from before and after, then inserts non-breaking space
		text = XRegExp.replace(text,' SymbolProportion ','&nbsp;&prop;&nbsp;','all');//writes  proportion wrapped by non-breaking spaces
		text = XRegExp.replace(text,' SymbolEquivalent ','&nbsp;&equiv;&nbsp;','all');//writes  equivalent to wrapped by non-breaking spaces
		text = XRegExp.replace(text,' SymbolMultipliedby ','&nbsp;&times;&nbsp;','all');//writes  multiplication sign wrapped by non-breaking spaces
		text = XRegExp.replace(text,' SymbolMinus ','&nbsp;&minus;&nbsp;','all');//writes  minus sign wrapped by non-breaking spaces
		text = XRegExp.replace(text,' SymbolPlus ','&nbsp;&plus;&nbsp;','all');//writes  minus sign wrapped by non-breaking spaces
		text = XRegExp.replace(text,' SymbolArrowright ','&nbsp;&rarr;&nbsp;','all');//writes  arrow right, wrapped in non-breaking spaces
		text = XRegExp.replace(text,' SymbolEqual ','&nbsp;&equals;&nbsp;','all');//writes  equals sign wrapped by non-breaking spaces
	
	
		text = XRegExp.replace(text,' SymbolPi ','&pi;','all');//writes  pi character
		text = XRegExp.replace(text,' SymbolCopyright ','&copy;','all');//writes  copyright character
		text = XRegExp.replace(text,' SymbolEndash ','&ndash;','all');//writes  ndash character
		text = XRegExp.replace(text,'SymbolHalf','&#xBD;','all');//writes  1/2 character
		text = XRegExp.replace(text,' SymbolThird ','&#8531;','all');//writes  1/3 character
		text = XRegExp.replace(text,' SymbolQuarter ','&frac14;','all');//writes  1/4 character
		text = XRegExp.replace(text,' SymbolAlpha ','&alpha;','all');//writes  alpha character
		text = XRegExp.replace(text,' SymbolBeta ','&beta;','all');//writes  beta character
		text = XRegExp.replace(text,' SymbolGamma ','&gamma;','all');//writes  gamma character
		text = XRegExp.replace(text,' SymbolPercent ','&percnt;','all');//writes  percent character
	// 	Expected tobe used inside{} or (), or where mnul scaping applied
		text = XRegExp.replace(text,' SymbolDegree ','&deg;','all');//writes  degree character
		text = XRegExp.replace(text,' SymbolTemperaturecentigrade ','&deg;C','all');//writes  degress centigrade as physical quantity
		text = XRegExp.replace(text,' SymbolOhm ','&Omega;','all');//writes  abbreviation for the unit ohms character
	
	// 	 Physical qunatites, represented by greek letters, italicised
		text = XRegExp.replace(text,' SymbolAngle ','&theta;','all');//writes  theta as angle
	
		text = XRegExp.replace(text,' SymbolAngularv ','<i>&omega;</i>','all');//writes  angular velocity symbol
		text = XRegExp.replace(text,' SymbolAngulara ','<i>&alpha;</i>','all');//writes  angular acceleration symbol
		text = XRegExp.replace(text,' SymbolWavelength ','<i>&lambda;</i>','all');//writes  wavelength symbol
		text = XRegExp.replace(text,' SymbolDensity ','<i>&rho;</i>','all');//writes  wavelength symbol
		text = XRegExp.replace(text,' SymbolFlux ','<i>&Phi;</i>','all');//writes  magnetic flux symbol
		text = XRegExp.replace(text,' SymbolEpsilon ','<i>&epsilon;</i>','all');//writes  epsilon, as electrical permittivity symbol
		text = XRegExp.replace(text,' SymbolMu ','<i>&mu;</i>','all');//writes  mu, as magnetic permeability symbol
		text = XRegExp.replace(text,' SymbolSigma ','<i>&sigma;</i>','all');//writes  sigma, as charge density symbol
		text = XRegExp.replace(text,' SymbolStrain ','<i>&epsilon;</i>','all');//writes  sigma, as charge density symbol
		text = XRegExp.replace(text,' SymbolStress ','<i>&sigma;</i>','all');//writes  sigma, as charge density symbol
	
	// 	Just greek
	
		text = XRegExp.replace(text,'UcAlpha','&Alpha;','all');//writes  greek character
		text = XRegExp.replace(text,'UcBeta','&Beta;','all');//writes  greek character
		text = XRegExp.replace(text,'UcGamma','&Gamma;','all');//writes  greek character
		text = XRegExp.replace(text,'UcDelta','&Delta;','all');//writes  greek character
		text = XRegExp.replace(text,'UcEpsilon','&Epsilon;','all');//writes  greek character
		text = XRegExp.replace(text,'UcZeta','&Zeta;','all');//writes  greek character
		text = XRegExp.replace(text,'UcEta','&Eta;','all');//writes  greek character
		text = XRegExp.replace(text,'UcTheta','&Theta;','all');//writes  greek character
		text = XRegExp.replace(text,'UcIota','&Iota;','all');//writes  greek character
		text = XRegExp.replace(text,'UcKappa','&Kappa;','all');//writes  greek character
		text = XRegExp.replace(text,'UcLambda','&Lambda;','all');//writes  greek character
		text = XRegExp.replace(text,'UcMu','&Mu;','all');//writes  greek character
		text = XRegExp.replace(text,'UcNu','&Nu;','all');//writes  greek character
		text = XRegExp.replace(text,'UcXi','&Xi;','all');//writes  greek character
		text = XRegExp.replace(text,'UcOmicron','&Omicron;','all');//writes  greek character
		text = XRegExp.replace(text,'UcPi','&Pi;','all');//writes  greek character
		text = XRegExp.replace(text,'UcRho','&Rho;','all');//writes  greek character
		text = XRegExp.replace(text,'UcSigma','&Sigma;','all');//writes  greek character
		text = XRegExp.replace(text,'UcTau','&Tau;','all');//writes  greek character
		text = XRegExp.replace(text,'UcUpsilon','&Upsilon;','all');//writes  greek character
		text = XRegExp.replace(text,'UcPhi','&Phi;','all');//writes  greek character
		text = XRegExp.replace(text,'UcChi','&Chi;','all');//writes  greek character
		text = XRegExp.replace(text,'UcPsi','&Psi;','all');//writes  greek character
		text = XRegExp.replace(text,'UcOmega','&Omega;','all');//writes  greek character
		text = XRegExp.replace(text,'LcAlpha','&alpha;','all');//writes  greek character
		text = XRegExp.replace(text,'LcBeta','&beta;','all');//writes  greek character
		text = XRegExp.replace(text,'LcGamma','&gamma;','all');//writes  greek character
		text = XRegExp.replace(text,'LcDelta','&delta;','all');//writes  greek character
		text = XRegExp.replace(text,'LcEpsilon','&epsilon;','all');//writes  greek character
		text = XRegExp.replace(text,'LcZeta','&zeta;','all');//writes  greek character
		text = XRegExp.replace(text,'LcEta','&eta;','all');//writes  greek character
		text = XRegExp.replace(text,'LcTheta','&theta;','all');//writes  greek character
		text = XRegExp.replace(text,'LcIota','&iota;','all');//writes  greek character
		text = XRegExp.replace(text,'LcKappa','&kappa;','all');//writes  greek character
		text = XRegExp.replace(text,'LcLambda','&lambda;','all');//writes  greek character
		text = XRegExp.replace(text,'LcMu','&mu;','all');//writes  greek character
		text = XRegExp.replace(text,'LcNu','&nu;','all');//writes  greek character
		text = XRegExp.replace(text,'LcXi','&xi;','all');//writes  greek character
		text = XRegExp.replace(text,'LcOmicron','&omicron;','all');//writes  greek character
		text = XRegExp.replace(text,'LcPi','&pi;','all');//writes  greek character
		text = XRegExp.replace(text,'LcRho','&rho;','all');//writes  greek character
		text = XRegExp.replace(text,'LcSigma','&sigma;','all');//writes  greek character
		text = XRegExp.replace(text,'LcTau','&tau;','all');//writes  greek character
		text = XRegExp.replace(text,'LcUpsilon','&upsilon;','all');//writes  greek character
		text = XRegExp.replace(text,'LcPhi','&phi;','all');//writes  greek character
		text = XRegExp.replace(text,'LcChi','&chi;','all');//writes  greek character
		text = XRegExp.replace(text,'LcPsi','&psi;','all');//writes  greek character
		text = XRegExp.replace(text,'LcOmega','&omega;','all');//writes  greek character

	// add spacing   
		text = XRegExp.replace(text,"SpacingLinebreak", '<br/>','all'); // adds line breaks
		text = XRegExp.replace(text,"SpacingParabreak", '<br/><br/>','all'); // adds para breaks
		text = XRegExp.replace(text,"SpacingThinspace", '&#8201;','all'); // adds thinspaces
		text = XRegExp.replace(text,'SpacingNonbreakspace','&nbsp;','all');//writes  XXX character


	// graphics and links

	// 3 graphic types only...note paths

		
	
		text = XRegExp.replace(text,/InsertGraphic{(.*?)PID}{(.*?)}{(.*?)}/,'<iframe  src="$1PID" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',"all");//processes PID (one of two pdl graphic types supported)
		
	text = XRegExp.replace(text,/InsertGraphic{(.*?)DIP}{(.*?)}{(.*?)}/,'<iframe  src="$1DIP" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',"all");//processes DIP (one of two pdl graphic types supported)

		text = XRegExp.replace(text,/InsertGraphic{(.*?)}/,'<div><img src="__graphics/$1"></div>\n',"all") // processes non-typed graphics
	
	
	
		text = XRegExp.replace(text,/InsertLink{(.*?)}{(.+?)}/,'<p><a href="$2" class="internallink">$1</a></p></br>',"all"); // deals with internal links
	
	
		text = XRegExp.replace(text,/URLLink\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="externallink">$1</a></p></br>',"all"); // deals with external links
	
		
	// techical-subscript and superscript
	text =  XRegExp.replace(text,/QuantitySymbol{(\w)}/,'<i>$1</i>',"all") // processes symbols
			text =  XRegExp.replace(text,/QuantitySub{(.*?)}{(.*?)}/,'<i>$1</i><sub>$2</sub>',"all") // processes symbols with subscript
			text =  XRegExp.replace(text,/QuantitySuper{(.*?)}{(.*?)}/,'<i>$1</i><sup>&thinsp;$2</sup>',"all") //processes symbols with subscript
	  

			text = XRegExp.replace(text,/NPNucleus{(.*?)}{(.*?)}{(.*?)}/,'<span class = "hilowrap"><span class = "hiloHigh">$1</span><span class = "hiloLow">$2</span>$3</span>',"all"); //NPNucleus{nucleonNumber}{protonNumber}{nucleus}, for nuclei, mostly


	// techical-vectors
			text =  XRegExp.replace(text,/VectorSub{(\w)}{(.*?)}/,'<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span><sub>$2</sub>',"all") // processes vectors with arrows and subscript
			text =  XRegExp.replace(text,/VectorOver{(\w)}/,'<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>',"all")
			text =  XRegExp.replace(text,/VectorMagnitude{(\w)}/,'||<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&thinsp;||',"all") // processes vector magnitudes

	// technical-quantities and units
	   
			text =  XRegExp.replace(text,/QuantitySymbol{(\w)}/,'<i>$1</i>',"all") // processes symbols
		
		
	//         JustUnit

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('JustUnit')>=0){
				var match = XRegExp.exec(text,/JustUnit{(.*?|-)}/);
				if(match){
					var found = match[0];
					var qjMatch = XRegExp.exec(found,/JustUnit{(.*?|-)}/);
					var unit = parseUnit(qjMatch[1]);
					var qjSubs = '<span class = "groupedblock">'+unit+'</span>';
					text = text.replace(found,qjSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
		
		   //ValueUnit

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('ValueUnit')>=0){
				var match = XRegExp.exec(text,/ValueUnit{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var quMatch = XRegExp.exec(found,/ValueUnit{(.*?)}{(.*?)}/);
					var number = quMatch[1];
					var unit = parseUnit(quMatch[2]);
					var quSubs = '<span class = "groupedblock">'+number+'&nbsp;'+unit+'</span>';
					text = text.replace(found,quSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
			//QuantityUnit

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('QuantityUnit')>=0){
				var match = XRegExp.exec(text,/QuantityUnit{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var quMatch = XRegExp.exec(found,/QuantityUnit{(.*?)}{(.*?)}{(.*?)}/);
					var symbol = quMatch[1];
					var value = quMatch[2];
					var unit = parseUnit(quMatch[3]);
					var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+value+'&nbsp;'+unit+'</span>';
					text = text.replace(found,qvSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
		  //QuantityValue

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('QuantityValue')>=0){
				var match = XRegExp.exec(text,/QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var quMatch = XRegExp.exec(found,/QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
					var symbol = quMatch[1];
					var number = quMatch[2];
					var unit = parseUnit(quMatch[3]);
					var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+number+'&nbsp;'+unit+'</span>';
					text = text.replace(found,qvSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
			  //QuantityOrder

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('QuantityOrder')>=0){
				var match = XRegExp.exec(text,/QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var quMatch = XRegExp.exec(found,/QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
					var symbol = quMatch[1];
					var exponent = quMatch[2];
					var unit = parseUnit(quMatch[3]);
					var qvSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;~&nbsp;10<sup>'+exponent+'</sup>&nbsp;'+unit+'</span>';
					text = text.replace(found,qvSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
			//ValueOrder

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('ValueOrder')>=0){
				var match = XRegExp.exec(text,/ValueOrder(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var quMatch = XRegExp.exec(found,/ValueOrder{(.*?)}{(.*?)}/);
					var exponent = quMatch[1];
					var unit = parseUnit(quMatch[2]);
					var joSubs = '<span class = "groupedblock">~&nbsp;10<sup>'+exponent+'</sup>&nbsp;'+unit+'</span>';
					text = text.replace(found,joSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
				
		
			   //ValueExponent

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('ValueExponent')>=0){
				var match = XRegExp.exec(text,/ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var qeMatch = XRegExp.exec(found,/ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
					var number = qeMatch[1];
					var exponent = qeMatch[2];
					var unit = parseUnit(qeMatch[3]);
					var qeSubs = '<span class = "groupedblock">'+number+'&nbsp;&times;&nbsp;10<sup class = "sscript">'+exponent+'</sup>&nbsp;'+unit+'</span>';
					text = text.replace(found,qeSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
			//QuantityExponent

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('QuantityExponent')>=0){
				var match = XRegExp.exec(text,/QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var qeMatch = XRegExp.exec(found,/QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
					var symbol = qeMatch[1];
					var number = qeMatch[2];
					var exponent = qeMatch[3];
					var unit = parseUnit(qeMatch[4]);
					var qeSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+number+'&nbsp;&times;&nbsp;10<sup class = "sscript">'+exponent+'</sup>&nbsp;'+unit+'</span>';
					text = text.replace(found,qeSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		

		
		
			 //ValueRange

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('ValueRange')>=0){
				var match = XRegExp.exec(text,/ValueRange{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var qsMatch = XRegExp.exec(found,/ValueRange{(.*?)}{(.*?)}{(.*?)}/);
					var rangestart = qsMatch[1];
					var rangeend = qsMatch[2];
					var unit = parseUnit(qsMatch[3]);
					var qsSubs = '<span class = "groupedblock">'+rangestart+'&ndash;'+rangeend+'&nbsp;'+unit+'</span>';
					text = text.replace(found,qsSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
			//QuantityRange

			wordsHere = XRegExp.match(text,/[\w!]+/,'all');
			while(wordsHere.indexOf('QuantityRange')>=0){
				var match = XRegExp.exec(text,/QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
				if(match){
					var found = match[0];
					var qsMatch = XRegExp.exec(found,/QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
					var symbol = qsMatch[1];
					var rangestart = qsMatch[2];
					var rangeend = qsMatch[3];
					var unit = parseUnit(qsMatch[4]);
					var qsSubs = '<span class = "groupedblock"><i>'+symbol+'</i>&nbsp;=&nbsp;'+rangestart+'&ndash;'+rangeend+'&nbsp;'+unit+'</span>';
					text = text.replace(found,qsSubs);
				}
				else
				{
					break;
				}
				wordsHere = XRegExp.match(text,/[\w]+/,'all');
			}
		
		

	  text =  XRegExp.replace(text,/WordSub{(.*?)}{(.*?)}/,'$1<sub>$2</sub>',"all") // processes symbols with subscript
			text =  XRegExp.replace(text,/WordSuper{(.*?)}{(.*?)}/,'$1<sup>$2</sup>',"all") //processes words with subscript
			text =  XRegExp.replace(text,/NumberSuper{(.*?)}{(.*?)}/,'$1<sup>$2</sup>',"all") //processes numbers raised to a power

	//technical-blocks, take 1
			text =  XRegExp.replace(text,/FractionBlock{(.*?)}{(.*?)}/,'<span class = "relationship"><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span></span>',"all");
		

	// technical- square roots
		text =  XRegExp.replace(text,/QuantityRoot{(.*?)}/,'<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;<i>$1</i>&nbsp;</span></span>',"all")
	
		text =  XRegExp.replace(text,/NumberRoot{(.*?)}/,'<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;$1&nbsp;</span></span>',"all")

		text =  XRegExp.replace(text,/FractionRoot{(.*?)}{(.*?)}/,'&nbsp;&nbsp;&nbsp;<span class="fractionroot"><span class="fraction"><span class="fractionuproot">&nbsp;<i>$1</i>&nbsp;</span><span class="fractiondown"><i>$2</i></span></span></span>',"all");

	// VectorMatrix must follow units

	text =  XRegExp.replace(text,/VectorMatrix{(\w)}{(.*?)}{(.*?)}{(.*?)}/,'<span><span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractionup">$3</span><span class="fractionup">$4</span></span></span>',"all") // processes vector matrix


	// Relationships, all equalities for now

		text = XRegExp.replace(text,/DifferenceABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&minus;&nbsp;$3</span>');	    // DifferenceABC
		text = XRegExp.replace(text,/SumABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&plus;&nbsp;$3</span>'); //SumABC

		text = XRegExp.replace(text,/ProductABeqCD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;&times;&nbsp;$2&nbsp;=&nbsp;$3&nbsp;&times;&nbsp;$4</span>'); //ProductABeqCD
		text = XRegExp.replace(text,/ProductQuantityABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'); //ProductQuantityABC
		text = XRegExp.replace(text,/ProductABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&times;&nbsp;$3</span>'); //ProductABC
		text = XRegExp.replace(text,/ProductQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'); //QuantityProductAnBC
		text = XRegExp.replace(text,/ProductAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;&minus;&thinsp;$2&nbsp;&times;&nbsp;$3</span>'); //ProductAnBC
		text = XRegExp.replace(text,/EqualityAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g, '<span class = "relationship">$1&nbsp;=&nbsp;$2</span>'); //EqualityAssertion
		text = XRegExp.replace(text,/FractionAdBeqCdD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4 </span></span></span></span>'); //FractionAdBeqCdD
		text = XRegExp.replace(text,/FractionQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'); //FractionQuantityAnBC
		text = XRegExp.replace(text,/FractionQuantityABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'); //FractionQuantityABC
		text = XRegExp.replace(text,/FractionAnBC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span>$1&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'); //FractionAnBC    
		text = XRegExp.replace(text,/FractionABC{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span>$1&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'); //FractionABC
		text = XRegExp.replace(text,/FractionQuantityBdCeqA{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span>&nbsp;=&nbsp;<i>$1</i></span>'); //FractionQuantityBdAeqC
		text = XRegExp.replace(text,/FractionBdCeqA{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span>&nbsp;=&nbsp;$1</span>'); //FractionBdCeqA
		text = XRegExp.replace(text,/FractionAdBeqCDdEF{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4</span></span>&nbsp;&times;&nbsp;<span class="fraction"><span class="fractionup">$5</span><span class="fractiondown">$6</span></span></span></span>'); //FractionAdBeqCDdEF
		text = XRegExp.replace(text,/EfficiencyCalc{(.*?)}{(.*?)}/g, '<span class = "relationship"> efficiency&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;&times;&nbsp;100&nbsp;&percnt;</span>'); // EfficiencyCalc
		text = XRegExp.replace(text,/AccumulateRelationship{(.*?)}{(.*?)}{(.*?)}/g, '<span class = "relationship"><i>$1</i><sub> final($3)</sub>&nbsp;=&nbsp;<i>$1</i><sub> initial($3)</sub>&nbsp;+&nbsp;$2&nbsp;&times;&nbsp;&Delta;<i>t</i></span>'); // AccumulateRelationship
	

	// Style text
		text = XRegExp.replace(text,XRegExp('(?s)QuotationThis{(.*?)}'),'<q class="double">$1</q>',"all"); //processes quotes double (quotation)
		text = XRegExp.replace(text,XRegExp('(?s)QuoteThis{(.*?)}'),'<q class="single">$1</q>',"all"); //processes quotes single (quote);
		text =  XRegExp.replace(text,XRegExp('(?s)EmphasiseThis{(.*?)}'),'<em>$1</em>',"all"); // processes emphasise
		text =  XRegExp.replace(text,XRegExp('(?s)SafetyTested{(.*?)}'),'<i>$1</i>',"all"); // processes safety test claim
		text =  XRegExp.replace(text,XRegExp('(?s)AttributThis{(.*?)}'),'<i>$1</i>',"all"); // processes attributions

	//Headers

		text = XRegExp.replace(text,/WebTitle{(.*?)}/,'<h1>$1</h1>\n',"all"); // Web document title
		text = XRegExp.replace(text,/StepHeader{(.*?)}/,'<h4>$1</h4>',"all"); //covers most cases
		text = XRegExp.replace(text,/ThinkHeader{(.*?)}/,'<p class="clear"></p><p class="Thinking"> <strong>$1</strong>\n</p><p class="clear"></p>',"all");
	   


	// SpeechBubbles

		text = XRegExp.replace(text,/WrongTrack{(.*)}/,'<p class="WrongTrack"><strong>Wrong Track: </strong>$1</p><p class="clear"></p>',"all");// does WrongTrack
		text = XRegExp.replace(text,/RightLines{(.*)}/,'<p class="RightLines"><strong>Right Lines: </strong> $1</p><p class="clear"></p>',"all");//does RightLines
		text = XRegExp.replace(text,/SafetyTip{(.*)}/,'<p class="safetynote"><strong>Safety note: </strong>$1</p><p class="clear"></p>',"all");// does SafetyTip
		text = XRegExp.replace(text,/TeacherTip{(.*)}/,'<p class="TeacherTip"><strong>Teacher Tip: </strong><q>$1</q></p><p class="clear"></p>',"all");// does TeacherTip
		text = XRegExp.replace(text,/AttributeThis{(.*)}/,'<p class="TeacherAttribute">$1</p><p class="clear"></p>',"all");// does TeacherAttribution
		text = XRegExp.replace(text,/TeacherSpeak{(.*)}/,'<p class="TeacherSpeak">Teacher: $1</p><p class="clear"></p>',"all");//does TeacherSpeak
		text = XRegExp.replace(text,/JustSpeak{(.*)}/,'<p class="TeacherSpeak">$1</p><p class="clear"></p>',"all");//does JustSpeak
		text = XRegExp.replace(text,/PupilSpeak{(.*)}{(.*)}/,'<p class="PupilSpeak">$1: $2</p><p class="clear"></p>',"all");// does PupilSpeak
		// dialogue
		text = XRegExp.replace(text,/TeacherOne{(.*)}/,"<div class=\"teacherone\">$1</div><div class=\"clear\"></div>\n","all");
		text = XRegExp.replace(text,/TeacherTwo{(.*)}/,"<div class=\"teachertwo\">$1</div><div class=\"clear\"></div>\n","all");
		text = XRegExp.replace(text,/TeacherThree{(.*)}/,"<div class=\"teacherthree\">$1</div><div class=\"clear\">\n","all");


	// Lists

		text = XRegExp.replace(text, /\- (.*)/,'<li>$1</li>',"all");
		text = XRegExp.replace(text,"ListEquipmentEnd",'</div><p class="clear"></p>','all');
		text = XRegExp.replace(text,"ListEquipment",'<div class="equipmentlist">','all');
		text = XRegExp.replace(text,"ListSequenceEnd",'</div><p class="clear"></p>','all');
		text = XRegExp.replace(text,"ListSequence",'<div class="sequencelist">','all');
		text = XRegExp.replace(text,"ListInformationEnd",'</div ><p class="clear"></p>','all');
		text = XRegExp.replace(text,"ListInformation",'<div class="informationlist">','all');
	
		XRegExp.replace(text,"ListMultipleChoiceEnd",'</div><p class="clear"></p>','all');
		text = XRegExp.replace(text,"ListMultipleChoice",'<div class="multiplechoicelist">','all');

	// Tables
		text = XRegExp.replace(text,'StartTable','<table>');

		while(text.indexOf('TableHeader')>-1) {
			var match = XRegExp.exec(text,/TableHeader{(.*)}/);
			if(match) {
				var headerhtml = '\t<thead style="text-align:right">\n\t\t<tr class = "tit_bg">\n\t\t<th>' + match[1].split('}{').join('</td><td>') + '</th>\n\t\t</tr>\n\t<tbody>\n';
				var headerrow = match[0];
				text = XRegExp.replace(text, headerrow, headerhtml);
			}
			else{
				break;
			}
		}
		while(text.indexOf('TableRow')>-1){
			match = XRegExp.exec(text,/TableRow{(.*)}/);
			if(match){
				rowhtml='\t\t<tr style="text-align:right">\n\t\t\t<td>'+match[1].split('}{').join('</td><td>')+'</td>\n\t\t</tr>';
				inputrow=match[0];
				text = XRegExp.replace(text,inputrow,rowhtml);
			}
		}
		text = XRegExp.replace(text,'StopTable','\n\t</tbody>\n</table>')




	// technical-blocks, take 2
			text =  XRegExp.replace(text, /GroupBlock{(.*?)}/,'<span class = "groupedblock">$1</span>',"all"); // processes grouping, but only if its on a single line (otherwise deal with physical quantity first)


        return text;
    };

function parseUnit(unitString){
	
	var unitBits = unitString.split(" ");
	
	for (var i=1 ;i < unitBits.length; i++){ // the first array element needs nothing in front, and will not be a number, so don't process
		if (/\d/.test(unitBits[i])){
			unitBits[i]='<sup>'+unitBits[i]+'</sup>';
		}else{
				unitBits[i]='&nbsp;'+unitBits[i];
		};
	}

	var htmLunitString=unitBits.join('');
	
	return htmLunitString;
}

