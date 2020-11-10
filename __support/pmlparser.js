//dev version 2020-08-12

function pmlparse(text) {
  // Strip critic markup

  text = XRegExp.replace(text, /{>>(.*?|\-|\:|\@)<<}/, "", "all"); //removes any critic markup comments, including file updates
  text = XRegExp.replace(text, /{\+\+(.*?)\+\+\}/, "", "all"); //removes any critic markup additions
  text = XRegExp.replace(text, /{\-\-(.*?)\-\-\}/, "", "all"); //removes any critic markup deletions
  text = XRegExp.replace(text, /{~~(.*?)~>(.*?)~~}/, "", "all"); //removes any critic markup substitutions
  text = XRegExp.replace(text, /{==(.*?)==}/, "", "all"); //removes any critic markup highlights

  // Strip any markdown headers inserted to help with editing & folding (must be in this order!)
  text = XRegExp.replace(text, /### /, "", "all"); //any h3
  text = XRegExp.replace(text, /## /, "", "all"); //any h2
  text = XRegExp.replace(text, /# /, "", "all"); //any h1

  // InsertGlyph

  // 	Unitary operators, expects to find, and strip, a trailing space
  text = XRegExp.replace(text, " SymbolDelta ", "&Delta;", "all"); //writes  delta (change in) character
  text = XRegExp.replace(text, " SymbolDifferential ", "d", "all"); //writes  delta (change in) character
  text = XRegExp.replace(
    text,
    " SymbolPlusorminus ",
    "&plusmn;&thinsp;",
    "all"
  ); //writes  plus or minus, and a following thin space
  text = XRegExp.replace(text, " SymbolPositive ", "&plus;&thinsp;", "all"); //writes  plus or minus, and a following thin space
  text = XRegExp.replace(text, " SymbolNegative ", "&minus;&thinsp;", "all"); //writes  plus or minus, and a following thin space

  // 	Binary operators,expects to find, and strips, and space from before and after, then inserts non-breaking space
  text = XRegExp.replace(
    text,
    " SymbolProportion ",
    "&nbsp;&prop;&nbsp;",
    "all"
  ); //writes  proportion wrapped by non-breaking spaces
  text = XRegExp.replace(
    text,
    " SymbolEquivalent ",
    "&nbsp;&equiv;&nbsp;",
    "all"
  ); //writes  equivalent to wrapped by non-breaking spaces
  text = XRegExp.replace(
    text,
    " SymbolMultipliedby ",
    "&nbsp;&times;&nbsp;",
    "all"
  ); //writes  multiplication sign wrapped by non-breaking spaces
  text = XRegExp.replace(text, " SymbolMinus ", "&nbsp;&minus;&nbsp;", "all"); //writes  minus sign wrapped by non-breaking spaces
  text = XRegExp.replace(text, " SymbolPlus ", "&nbsp;&plus;&nbsp;", "all"); //writes  minus sign wrapped by non-breaking spaces
  text = XRegExp.replace(
    text,
    " SymbolArrowright ",
    "&nbsp;&rarr;&nbsp;",
    "all"
  ); //writes  arrow right, wrapped in non-breaking spaces
  text = XRegExp.replace(text, " SymbolEqual ", "&nbsp;&equals;&nbsp;", "all"); //writes  equals sign wrapped by non-breaking spaces

  text = XRegExp.replace(text, " SymbolPi ", "&pi;", "all"); //writes  pi character
  text = XRegExp.replace(text, " SymbolCopyright ", "&copy;", "all"); //writes  copyright character
  text = XRegExp.replace(text, " SymbolEndash ", "&ndash;", "all"); //writes  ndash character
  text = XRegExp.replace(text, " SymbolEmdash ", "&mdash;", "all"); //writes  ndash character
  text = XRegExp.replace(text, "SymbolHalf", "&#xBD;", "all"); //writes  1/2 character
  text = XRegExp.replace(text, " SymbolThird ", "&#8531;", "all"); //writes  1/3 character
  text = XRegExp.replace(text, " SymbolQuarter ", "&frac14;", "all"); //writes  1/4 character
  text = XRegExp.replace(text, " SymbolAlpha ", "&alpha;", "all"); //writes  alpha character
  text = XRegExp.replace(text, " SymbolBeta ", "&beta;", "all"); //writes  beta character
  text = XRegExp.replace(text, " SymbolGamma ", "&gamma;", "all"); //writes  gamma character
  text = XRegExp.replace(text, " SymbolPercent ", "&percnt;", "all"); //writes  percent character
  // 	Expected tobe used inside{} or (), or where mnul scaping applied
  text = XRegExp.replace(text, " SymbolDegree ", "&deg;", "all"); //writes  degree character
  text = XRegExp.replace(
    text,
    " SymbolTemperaturecentigrade ",
    "&deg;C",
    "all"
  ); //writes  degress centigrade as physical quantity
  text = XRegExp.replace(text, " SymbolOhm ", "&Omega;", "all"); //writes  abbreviation for the unit ohms character
  text = XRegExp.replace(text, " SymbolEMF ", "&#8496;", "all"); //writes  abbreviation for the unit ohms character

  // 	 Physical quantities, represented by greek letters, italicised
  text = XRegExp.replace(text, " SymbolAngle ", "&theta;", "all"); //writes  theta as angle

  text = XRegExp.replace(text, " SymbolAngularv ", "<i>&omega;</i>", "all"); //writes  angular velocity symbol
  text = XRegExp.replace(text, " SymbolAngulara ", "<i>&alpha;</i>", "all"); //writes  angular acceleration symbol
  text = XRegExp.replace(text, " SymbolWavelength ", "<i>&lambda;</i>", "all"); //writes  wavelength symbol
  text = XRegExp.replace(text, " SymbolDensity ", "<i>&rho;</i>", "all"); //writes  wavelength symbol
  text = XRegExp.replace(text, " SymbolFlux ", "<i>&Phi;</i>", "all"); //writes  magnetic flux symbol
  text = XRegExp.replace(text, " SymbolEpsilon ", "<i>&epsilon;</i>", "all"); //writes  epsilon, as electrical permittivity symbol
  text = XRegExp.replace(text, " SymbolMu ", "<i>&mu;</i>", "all"); //writes  mu, as magnetic permeability symbol
  text = XRegExp.replace(text, " SymbolSigma ", "<i>&sigma;</i>", "all"); //writes  sigma, as charge density symbol
  text = XRegExp.replace(text, " SymbolStrain ", "<i>&epsilon;</i>", "all"); //writes  sigma, as charge density symbol
  text = XRegExp.replace(text, " SymbolStress ", "<i>&sigma;</i>", "all"); //writes  sigma, as charge density symbol

  // 	Just greek

  text = XRegExp.replace(text, "UcAlpha", "&Alpha;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcBeta", "&Beta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcGamma", "&Gamma;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcDelta", "&Delta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcEpsilon", "&Epsilon;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcZeta", "&Zeta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcEta", "&Eta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcTheta", "&Theta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcIota", "&Iota;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcKappa", "&Kappa;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcLambda", "&Lambda;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcMu", "&Mu;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcNu", "&Nu;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcXi", "&Xi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcOmicron", "&Omicron;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcPi", "&Pi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcRho", "&Rho;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcSigma", "&Sigma;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcTau", "&Tau;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcUpsilon", "&Upsilon;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcPhi", "&Phi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcChi", "&Chi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcPsi", "&Psi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "UcOmega", "&Omega;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcAlpha", "&alpha;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcBeta", "&beta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcGamma", "&gamma;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcDelta", "&delta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcEpsilon", "&epsilon;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcZeta", "&zeta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcEta", "&eta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcTheta", "&theta;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcIota", "&iota;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcKappa", "&kappa;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcLambda", "&lambda;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcMu", "&mu;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcNu", "&nu;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcXi", "&xi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcOmicron", "&omicron;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcPi", "&pi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcRho", "&rho;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcSigma", "&sigma;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcTau", "&tau;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcUpsilon", "&upsilon;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcPhi", "&phi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcChi", "&chi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcPsi", "&psi;", "all"); //writes  greek character
  text = XRegExp.replace(text, "LcOmega", "&omega;", "all"); //writes  greek character

  // add spacing
  text = XRegExp.replace(text, "SpacingLinebreak", "<br/>", "all"); // adds line breaks
  text = XRegExp.replace(text, "SpacingParabreak", "<br/><br/>", "all"); // adds para breaks
  text = XRegExp.replace(text, "SpacingThinspace", "&#8201;", "all"); // adds thinspaces
  text = XRegExp.replace(text, "SpacingNonbreakspace", "&nbsp;", "all"); //writes  non breaking space character

  // graphics and links

  // specialised graphic / links first, then fallback for all others

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?IMSP)}/,
    '<div class="spangraphic"><img src="SPTGraphics/$1.png"></div>\n<div class = "clear"></div>\n',
    "all"
  ); //processes png monochromatic, span
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?IMCP)}/,
    '<div class="graphic"><img src="SPTGraphics/$1.png"></div>\n',
    "all"
  ); //processes png monocromatic, single column
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?ICSP)}/,
    '<div class="spangraphic"><img src="SPTGraphics/$1.png"></div>\n<div class = "clear"></div>\n',
    "all"
  ); //processes png  colour, span
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?ICCP)}/,
    '<div class="graphic"><img src="SPTGraphics/$1.png"></div>\n',
    "all"
  ); //processes png  colour, single column

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?INCH)}/,
    '<div class="graphic"><img src="SPTGraphics/$1.svg"></div>\n',
    "all"
  ); //processes heads

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?INSC)}/,
    '<div class="spangraphic_topopup"><a href="SPTGraphics/$1.svg" class="pop-spangraphic"><img src="SPTGraphics/$1.svg"></a></div>\n<div class = "clear"></div>\n',
    "all"
  ); //processes SVG Wide drawn conceptual diagram
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?INCC)}/,
    '<div class="graphic_topopup"><a href="SPTGraphics/$1.svg" class="pop-singlegraphic"><img src="SPTGraphics/$1.svg"></a></div>\n',
    "all"
  ); //processes SVG Narrow drawn conceptual diagram

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?IFSC)}/,
    '<div class="spangraphic_topopup"><a href="SPTGraphics/' +
      '$1.svg" class="pop-spangraphic"><img src="SPTGraphics/' +
      '$1.svg"></a></div>\n<div class = "clear"></div>\n',
    "all"
  ); //processes SVG Wide drawn flow diagram
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?IFCC)}/,
    '<div class="graphic_topopup"><a href="SPTGraphics/' +
      '$1.svg" class="pop-singlegraphic"><img src="SPTGraphics/' +
      '$1.svg"></a></div>\n',
    "all"
  ); //processes SVG Narrow drawn flow diagram

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)IPSC}/,
    '<div class="spangraphic_topopup"><a href="SPTGraphics/$1EPSC.svg" class="pop-spangraphic" target="_blank"><img src="SPTGraphics/$1IPSC.svg"></a></div>\n<div class = "clear"></div>\n',
    "all"
  ); //processes SVG Wide paned paned conceptual diagram, that  has an explorable interactive version
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)IPCC}/,
    '<div class="graphic_topopup"><a href="SPTGraphics/$1EPCC.svg" class="pop-singlegraphic" target="_blank"><img src="SPTGraphics/$1IPCC.svg"></a></div>\n',
    "all"
  ); //processes SVG narrow paned drawn conceptual diagram, that has an explorable interactive version

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)PID}{(.*?)}{(.*?)}/,
    '<iframe  src="catchingphysicsToUpload/$1PID" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',
    "all"
  ); //processes PID (one of two pdl graphic types supported)
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)DIP}{(.*?)}{(.*?)}/,
    '<iframe  src="catchingphysicsToUpload/$1PID" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',
    "all"
  ); //processes DIP (one of two pdl graphic types supported)
  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)PSS}{(.*?)}{(.*?)}/,
    '<iframe  src="http://supportingphysicsteaching.net/SPTGraphics/ShowStory.html?file=http://supportingphysicsteaching.net/SPTGraphics/$1PSS.md" class="iframe" scrolling="no" style="border: 0" width = "$2" height = "$3"></iframe>\n',
    "all"
  ); //processes PSS (Story space embed)

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)CLIP}{(.*?)}{(.*?)}/,
    '<video width="$2" height="$3" controls>\n<source src="SPTWebGraphics/$1.mp4"\ntype="video/mp4">\n</video>\n',
    "all"
  ); // processes mp4 video clips

  text = XRegExp.replace(
    text,
    /InsertGraphic{(.*?)}/,
    '<div><img src="$1"></div>\n',
    "all"
  ); // processes non-typed graphics

  text = XRegExp.replace(
    text,
    /InsertLink\{(.+?)FILE\}/,
    '<p class = "download_doc_btn"><a href="SupportFiles/$1.zip"> download and unzip files to use</a></p></br>',
    "all"
  ); // deals with internal links for videoclips (CLIP suffix triggers)

  text = XRegExp.replace(
    text,
    /InsertLink\{(.*?)\}\{(.+?)PSD\}/,
    '<p><a href="http://supportingphysicsteaching.net/SupportPrintableDocuments/$2.html" class="printablelink">$1</a></p></br>',
    "all"
  ); // deals with internal links for printables

  text = XRegExp.replace(
    text,
    /InsertLink\{(.+?)CLIP\}/,
    '<p class = "download_doc_btn"><a href="SPTMediaFiles/$1.swf"> download clip to view</a></p></br>',
    "all"
  ); // deals with internal links for videoclips (CLIP suffix triggers)

  text = XRegExp.replace(
    text,
    /InsertLink\{(.+?)FILE\}/,
    '<p class = "download_doc_btn"><a href="SupportFiles/$1.zip"> download and unzip files to use</a></p></br>',
    "all"
  ); // deals with internal links for Files

  text = XRegExp.replace(
    text,
    /InsertLink\{(.+?)PDF\}/,
    '<p class = "download_doc_btn"><a href="SupportFiles/$1.pdf"> download the pdf to use</a></p></br>',
    "all"
  ); // deals with internal links for Files

  text = XRegExp.replace(
    text,
    /InsertLink{(.*?)}{(.+?)}/,
    '<p><a href="$2" class="internallink">$1</a></p></br>',
    "all"
  ); // deals with internal links

  text = XRegExp.replace(
    text,
    /InsertLinkPN\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="internallinkPN">$1</a></p></br>',
    "all"
  ); // deals with internal links
  text = XRegExp.replace(
    text,
    /InsertLinkTL\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="internallinkTL">$1</a></p></br>',
    "all"
  ); // deals with internal links
  text = XRegExp.replace(
    text,
    /InsertLinkTA\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="internallinkTA">$1</a></p></br>',
    "all"
  ); // deals with internal links

  text = XRegExp.replace(
    text,
    /URLLink\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="externallink">$1</a></p></br>',
    "all"
  ); // deals with external links

  //Slideshows

  text = XRegExp.replace(
    text,
    /StartSlideShow/,
    '<div class="SPTslideshow">',
    "all"
  ); // does start of slide show

  text = XRegExp.replace(
    text,
    /ShowPicture{(.*)}{(.*)}/,
    '<img class="$1" src="$2" style="width:30%">',
    "all"
  ); // does every image

  text = XRegExp.replace(
    text,
    /EndSlideShow{(.*)}{(.*)}/,
    '</div>\n<script>\nvar myIndex = 0;\ncarousel$1();\nfunction carousel$1() {\nvar i;\nvar x = document.getElementsByClassName("$1");\nfor (i = 0; i < x.length; i++) {\nx[i].style.display = "none";\n}\nmyIndex++;\nif (myIndex > x.length) {myIndex = 1}\nx[myIndex-1].style.display = "block";\nsetTimeout(carousel$1, $2); // Change image every 2 seconds\n}</script>',
    "all"
  ); // ends show and inserts script

  // techical-subscript and superscript
  text = XRegExp.replace(text, /QuantitySymbol{(\w)}/, "<i>$1</i>", "all"); // processes symbols
  text = XRegExp.replace(
    text,
    /QuantitySub{(.*?)}{(.*?)}/,
    "<i>$1</i><sub>$2</sub>",
    "all"
  ); // processes symbols with subscript
  text = XRegExp.replace(
    text,
    /QuantitySuper{(.*?)}{(.*?)}/,
    "<i>$1</i><sup>&thinsp;$2</sup>",
    "all"
  ); //processes symbols with subscript

  text = XRegExp.replace(
    text,
    /NPNucleus{(.*?)}{(.*?)}{(.*?)}/,
    '<span class = "hilowrap"><span class = "hiloHigh">$1</span><span class = "hiloLow">$2</span></span>$3',
    "all"
  ); //NPNucleus{nucleonNumber}{protonNumber}{nucleus}, for nuclei, mostly

  // techical-vectors
  text = XRegExp.replace(
    text,
    /VectorSub{(\w)}{(.*?)}/,
    '<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span><sub>$2</sub>',
    "all"
  ); // processes vectors with arrows and subscript
  text = XRegExp.replace(
    text,
    /VectorOver{(\w)}/,
    '<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>',
    "all"
  );
  text = XRegExp.replace(
    text,
    /VectorMagnitude{(\w)}/,
    '||<span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&thinsp;||',
    "all"
  ); // processes vector magnitudes

  // technical-quantities and units

  text = XRegExp.replace(text, /QuantitySymbol{(\w)}/, "<i>$1</i>", "all"); // processes symbols

  text = XRegExp.replace(
    text,
    /QuantityVector{(\w)}/,
    "<b><i>$1</i></b>",
    "all"
  ); // processes symbols

  //         JustUnit

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("JustUnit") >= 0) {
    var match = XRegExp.exec(text, /JustUnit{(.*?|-)}/);
    if (match) {
      var found = match[0];
      var qjMatch = XRegExp.exec(found, /JustUnit{(.*?|-)}/);
      var unit = parseUnit(qjMatch[1]);
      var qjSubs = '<span class = "groupedblock">' + unit + "</span>";
      text = text.replace(found, qjSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //ValueUnit

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("ValueUnit") >= 0) {
    var match = XRegExp.exec(text, /ValueUnit{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var quMatch = XRegExp.exec(found, /ValueUnit{(.*?)}{(.*?)}/);
      var number = quMatch[1];
      var unit = parseUnit(quMatch[2]);
      var quSubs =
        '<span class = "groupedblock">' + number + "&nbsp;" + unit + "</span>";
      text = text.replace(found, quSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //NumberUnit

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("NumberUnit") >= 0) {
    var match = XRegExp.exec(text, /NumberUnit{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var quMatch = XRegExp.exec(found, /NumberUnit{(.*?)}{(.*?)}/);
      var value = quMatch[1];
      var unit = parseUnit(quMatch[2]);
      var qvSubs =
        '<span class = "groupedblock">' + value + "&nbsp;" + unit + "</span>";
      text = text.replace(found, qvSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //QuantityValue

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("QuantityValue") >= 0) {
    var match = XRegExp.exec(text, /QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var quMatch = XRegExp.exec(found, /QuantityValue{(.*?)}{(.*?)}{(.*?)}/);
      var symbol = quMatch[1];
      var number = quMatch[2];
      var unit = parseUnit(quMatch[3]);
      var qvSubs =
        '<span class = "groupedblock"><i>' +
        symbol +
        "</i>&nbsp;=&nbsp;" +
        number +
        "&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qvSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //QuantityOrder

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("QuantityOrder") >= 0) {
    var match = XRegExp.exec(text, /QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var quMatch = XRegExp.exec(found, /QuantityOrder{(.*?)}{(.*?)}{(.*?)}/);
      var symbol = quMatch[1];
      var exponent = quMatch[2];
      var unit = parseUnit(quMatch[3]);
      var qvSubs =
        '<span class = "groupedblock"><i>' +
        symbol +
        "</i>&nbsp;~&nbsp;10<sup>" +
        exponent +
        "</sup>&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qvSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //ValueOrder

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("ValueOrder") >= 0) {
    var match = XRegExp.exec(text, /ValueOrder(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var quMatch = XRegExp.exec(found, /ValueOrder{(.*?)}{(.*?)}/);
      var exponent = quMatch[1];
      var unit = parseUnit(quMatch[2]);
      var joSubs =
        '<span class = "groupedblock">~&nbsp;10<sup>' +
        exponent +
        "</sup>&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, joSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //ValueExponent

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("ValueExponent") >= 0) {
    var match = XRegExp.exec(text, /ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var qeMatch = XRegExp.exec(found, /ValueExponent{(.*?)}{(.*?)}{(.*?)}/);
      var number = qeMatch[1];
      var exponent = qeMatch[2];
      var unit = parseUnit(qeMatch[3]);
      var qeSubs =
        '<span class = "groupedblock">' +
        number +
        '&nbsp;&times;&nbsp;10<sup class = "sscript">' +
        exponent +
        "</sup>&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qeSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //QuantityExponent

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("QuantityExponent") >= 0) {
    var match = XRegExp.exec(
      text,
      /QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/
    );
    if (match) {
      var found = match[0];
      var qeMatch = XRegExp.exec(
        found,
        /QuantityExponent{(.*?)}{(.*?)}{(.*?)}{(.*?)}/
      );
      var symbol = qeMatch[1];
      var number = qeMatch[2];
      var exponent = qeMatch[3];
      var unit = parseUnit(qeMatch[4]);
      var qeSubs =
        '<span class = "groupedblock"><i>' +
        symbol +
        "</i>&nbsp;=&nbsp;" +
        number +
        '&nbsp;&times;&nbsp;10<sup class = "sscript">' +
        exponent +
        "</sup>&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qeSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //ValueRange

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("ValueRange") >= 0) {
    var match = XRegExp.exec(text, /ValueRange{(.*?)}{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var qsMatch = XRegExp.exec(found, /ValueRange{(.*?)}{(.*?)}{(.*?)}/);
      var rangestart = qsMatch[1];
      var rangeend = qsMatch[2];
      var unit = parseUnit(qsMatch[3]);
      var qsSubs =
        '<span class = "groupedblock">' +
        rangestart +
        "&ndash;" +
        rangeend +
        "&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qsSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  //QuantityRange

  wordsHere = XRegExp.match(text, /[\w!]+/, "all");
  while (wordsHere.indexOf("QuantityRange") >= 0) {
    var match = XRegExp.exec(text, /QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/);
    if (match) {
      var found = match[0];
      var qsMatch = XRegExp.exec(
        found,
        /QuantityRange{(.*?)}{(.*?)}{(.*?)}{(.*?)}/
      );
      var symbol = qsMatch[1];
      var rangestart = qsMatch[2];
      var rangeend = qsMatch[3];
      var unit = parseUnit(qsMatch[4]);
      var qsSubs =
        '<span class = "groupedblock"><i>' +
        symbol +
        "</i>&nbsp;=&nbsp;" +
        rangestart +
        "&ndash;" +
        rangeend +
        "&nbsp;" +
        unit +
        "</span>";
      text = text.replace(found, qsSubs);
    } else {
      break;
    }
    wordsHere = XRegExp.match(text, /[\w]+/, "all");
  }

  text = XRegExp.replace(
    text,
    /WordSub{(.*?)}{(.*?)}/,
    "$1<sub>$2</sub>",
    "all"
  ); // processes symbols with subscript
  text = XRegExp.replace(
    text,
    /WordSuper{(.*?)}{(.*?)}/,
    "$1<sup>$2</sup>",
    "all"
  ); //processes words with subscript
  text = XRegExp.replace(
    text,
    /NumberSuper{(.*?)}{(.*?)}/,
    "$1<sup>$2</sup>",
    "all"
  ); //processes numbers raised to a power

  //technical-blocks, take 1
  text = XRegExp.replace(
    text,
    /FractionBlock{(.*?)}{(.*?)}/,
    '<span class = "relationship"><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span></span>',
    "all"
  );

  // technical- square roots
  text = XRegExp.replace(
    text,
    /QuantityRoot{(.*?)}/,
    '<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;<i>$1</i>&nbsp;</span></span>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /NumberRoot{(.*?)}/,
    '<span style="white-space: nowrap;">&radic;<span style="border-top: 1px solid #000000;">&nbsp;$1&nbsp;</span></span>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /WordRoot{(.*?)}/,
    '&nbsp;&nbsp;&nbsp;<span class="fractionroot"><span class="fraction">$1</span></span>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /FractionRoot{(.*?)}{(.*?)}/,
    '&nbsp;&nbsp;&nbsp;<span class="fractionroot"><span class="fraction"><span class="fractionuproot">&nbsp;<i>$1</i>&nbsp;</span><span class="fractiondown"><i>$2</i></span></span></span>',
    "all"
  );

  // VectorMatrix must follow units

  text = XRegExp.replace(
    text,
    /VectorMatrix{(\w)}{(.*?)}{(.*?)}{(.*?)}/,
    '<span><span class = "vector"><span class = "vectorarrow">&rarr;</span><span class = "vectorquantity">$1</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractionup">$3</span><span class="fractionup">$4</span></span></span>',
    "all"
  ); // processes vector matrix

  // Relationships, all equalities for now

  text = XRegExp.replace(
    text,
    /DifferenceABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&minus;&nbsp;$3</span>'
  ); // DifferenceABC
  text = XRegExp.replace(
    text,
    /SumABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&plus;&nbsp;$3</span>'
  ); //SumABC

  text = XRegExp.replace(
    text,
    /ProductABeqCD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship">$1&nbsp;&times;&nbsp;$2&nbsp;=&nbsp;$3&nbsp;&times;&nbsp;$4</span>'
  ); //ProductABeqCD
  text = XRegExp.replace(
    text,
    /ProductQuantityABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'
  ); //ProductQuantityABC
  text = XRegExp.replace(
    text,
    /ProductVectorCrossABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><i><b>$1</i></b>&nbsp;=&nbsp;<i><b>$2</i></b>&nbsp;&#x2a2f;&nbsp;<i><b>$3</i></b></span>'
  ); //ProductVectorABC
  text = XRegExp.replace(
    text,
    /ProductVectorDotABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;<i><b>$2</i></b>&nbsp;&middot;&nbsp;<b><i>$3</i></b></span>'
  ); //ProductVectorDotABC
  text = XRegExp.replace(
    text,
    /ProductABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship">$1&nbsp;=&nbsp;$2&nbsp;&times;&nbsp;$3</span>'
  ); //ProductABC
  text = XRegExp.replace(
    text,
    /ProductQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<i>$2</i>&nbsp;&times;&nbsp;<i>$3</i></span>'
  ); //QuantityProductAnBC
  text = XRegExp.replace(
    text,
    /ProductAnBC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship">$1&nbsp;=&nbsp;&minus;&thinsp;$2&nbsp;&times;&nbsp;$3</span>'
  ); //ProductAnBC
  text = XRegExp.replace(
    text,
    /EqualityAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g,
    '<span class = "relationship">$1&nbsp;=&nbsp;$2</span>'
  ); //EqualityAssertion
  text = XRegExp.replace(
    text,
    /ApproxeqAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g,
    '<span class = "relationship">$1&nbsp;&asymp;&nbsp;$2</span>'
  ); //ApproxeqAssertion
  text = XRegExp.replace(
    text,
    /ProportionAssertion{(.*|-|<|>|"?)}{(.*|-<|>|"?)}/g,
    '<span class = "relationship">$1&nbsp;&prop;&nbsp;$2</span>'
  ); //ProportionAssertion

  text = XRegExp.replace(
    text,
    /FractionAdBeqCdD{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4 </span></span></span></span>'
  ); //FractionAdBeqCdD
  text = XRegExp.replace(
    text,
    /FractionQuantityAnBC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'
  ); //FractionQuantityAnBC
  text = XRegExp.replace(
    text,
    /FractionQuantityABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span><i>$1</i>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span></span></span>'
  ); //FractionQuantityABC
  text = XRegExp.replace(
    text,
    /FractionVectorABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span><b><i>$1</i></b>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup"><b><i>$2</i></b></span><span class="fractiondown"><i>$3</i></span></span></span></span>'
  ); //FractionQuantityABC
  text = XRegExp.replace(
    text,
    /FractionAnBC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span>$1&nbsp;=&nbsp;&minus;&thinsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'
  ); //FractionAnBC
  text = XRegExp.replace(
    text,
    /FractionABC{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span>$1&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span></span></span>'
  ); //FractionABC
  text = XRegExp.replace(
    text,
    /FractionQuantityBdCeqA{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span class="fraction"><span class="fractionup"><i>$2</i></span><span class="fractiondown"><i>$3</i></span></span>&nbsp;=&nbsp;<i>$1</i></span>'
  ); //FractionQuantityBdAeqC
  text = XRegExp.replace(
    text,
    /FractionBdCeqA{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span class="fraction"><span class="fractionup">$2</span><span class="fractiondown">$3</span></span>&nbsp;=&nbsp;$1</span>'
  ); //FractionBdCeqA
  text = XRegExp.replace(
    text,
    /FractionAdBeqCDdEF{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><span><span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$3</span><span class="fractiondown">$4</span></span>&nbsp;&times;&nbsp;<span class="fraction"><span class="fractionup">$5</span><span class="fractiondown">$6</span></span></span></span>'
  ); //FractionAdBeqCDdEF
  text = XRegExp.replace(
    text,
    /EfficiencyCalc{(.*?)}{(.*?)}/g,
    '<span class = "relationship"> efficiency&nbsp;=&nbsp;<span class="fraction"><span class="fractionup">$1</span><span class="fractiondown">$2</span></span>&nbsp;&times;&nbsp;100&nbsp;&percnt;</span>'
  ); // EfficiencyCalc
  text = XRegExp.replace(
    text,
    /AccumulateRelationship{(.*?)}{(.*?)}{(.*?)}/g,
    '<span class = "relationship"><i>$1</i><sub> final($3)</sub>&nbsp;=&nbsp;<i>$1</i><sub> initial($3)</sub>&nbsp;+&nbsp;$2&nbsp;&times;&nbsp;&Delta;<i>t</i></span>'
  ); // AccumulateRelationship

  // Style text
  text = XRegExp.replace(
    text,
    XRegExp("(?s)QuotationThis{(.*?)}"),
    '<q class="double">$1</q>',
    "all"
  ); //processes quotes double (quotation)
  text = XRegExp.replace(
    text,
    XRegExp("(?s)QuoteThis{(.*?)}"),
    '<q class="single">$1</q>',
    "all"
  ); //processes quotes single (quote);
  text = XRegExp.replace(
    text,
    XRegExp("(?s)EmphasiseThis{(.*?)}"),
    "<em>$1</em>",
    "all"
  ); // processes emphasise
  text = XRegExp.replace(
    text,
    XRegExp("(?s)BoldThis{(.*?)}"),
    "<b>$1</b>",
    "all"
  ); // processes emphasise
  text = XRegExp.replace(
    text,
    XRegExp("(?s)SafetyTested{(.*?)}"),
    "<i>$1</i>",
    "all"
  ); // processes safety test claim
  text = XRegExp.replace(
    text,
    XRegExp("(?s)AttributThis{(.*?)}"),
    "<i>$1</i>",
    "all"
  ); // processes attributions

  //Headers

  text = XRegExp.replace(text, /WebTitle{(.*?)}/, "<h1>$1</h1>\n", "all"); // Web document title
  text = XRegExp.replace(
    text,
    /StepHeader{Purpose}/,
    '<br><p class="SPTactivityHeader"><strong>What the activity is for</strong></p>',
    "all"
  ); //reworks SPT prepareheader
  text = XRegExp.replace(
    text,
    /StepHeader{Prepare}/,
    '<br><p class="SPTactivityHeader"><strong>What to prepare</strong></p>',
    "all"
  ); //reworks SPT purposeheader
  text = XRegExp.replace(
    text,
    /StepHeader{Happens}/,
    '<br><p class="SPTactivityHeader"><strong>What happens during this activity</strong></p>',
    "all"
  ); //reworks SPT prepareheader
  text = XRegExp.replace(text, /StepHeader{(.*?)}/, "<h4>$1</h4>", "all"); //covers most cases
  text = XRegExp.replace(
    text,
    /ThinkHeader{(.*?)}/,
    '<p class="clear"></p><p class="Thinking"> <strong>$1</strong>\n</p><p class="clear"></p>',
    "all"
  );

  // SpeechBubbles

  text = XRegExp.replace(
    text,
    /WrongTrack{(.*)}/,
    '<p class="WrongTrack"><strong>Wrong Track: </strong>$1</p><p class="clear"></p>',
    "all"
  ); // does WrongTrack
  text = XRegExp.replace(
    text,
    /RightLines{(.*)}/,
    '<p class="RightLines"><strong>Right Lines: </strong> $1</p><p class="clear"></p>',
    "all"
  ); //does RightLines
  text = XRegExp.replace(
    text,
    /SafetyTip{(.*)}/,
    '<p class="safetynote"><strong>Safety note: </strong>$1</p><p class="clear"></p>',
    "all"
  ); // does SafetyTip
  text = XRegExp.replace(
    text,
    /TeacherTip{(.*)}/,
    '<p class="TeacherTip"><strong>Teacher Tip: </strong><q>$1</q></p><p class="clear"></p>',
    "all"
  ); // does TeacherTip
  text = XRegExp.replace(
    text,
    /AttributeThis{(.*)}/,
    '<p class="TeacherAttribute">$1</p><p class="clear"></p>',
    "all"
  ); // does TeacherAttribution
  text = XRegExp.replace(
    text,
    /TeacherSpeak{(.*)}/,
    '<p class="TeacherSpeak">Teacher: $1</p><p class="clear"></p>',
    "all"
  ); //does TeacherSpeak
  text = XRegExp.replace(
    text,
    /JustSpeak{(.*)}/,
    '<p class="TeacherSpeak">$1</p><p class="clear"></p>',
    "all"
  ); //does JustSpeak
  text = XRegExp.replace(
    text,
    /PupilSpeak{(.*)}{(.*)}/,
    '<p class="PupilSpeak">$1: $2</p><p class="clear"></p>',
    "all"
  ); // does PupilSpeak
  // dialogue
  text = XRegExp.replace(
    text,
    /TeacherOne{(.*)}/,
    '<div class="teacherone">$1</div><div class="clear"></div>\n',
    "all"
  );
  text = XRegExp.replace(
    text,
    /TeacherTwo{(.*)}/,
    '<div class="teachertwo">$1</div><div class="clear"></div>\n',
    "all"
  );
  text = XRegExp.replace(
    text,
    /TeacherThree{(.*)}/,
    '<div class="teacherthree">$1</div><div class="clear">\n',
    "all"
  );

  text = XRegExp.replace(
    text,
    /ComicBlock{(.*)}/,
    '<p class="ComicBlock">$1</p><p class="clear"></p>',
    "all"
  ); //does ComicBlock
  text = XRegExp.replace(
    text,
    /SpeechBlock{(.*)}/,
    '<p class="SpeechBlock">$1</p><p class="clear"></p>',
    "all"
  ); //does SpeechBlock
  text = XRegExp.replace(
    text,
    /HandBlock{(.*)}/,
    '<p class="HandBlock">$1</p><p class="clear"></p>',
    "all"
  ); //does SpeechBlock

  // Lists

  text = XRegExp.replace(text, /\- (.*)/, "<li>$1</li>", "all");
  text = XRegExp.replace(
    text,
    "ListEquipmentEnd",
    '</div><p class="clear"></p>',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListEquipment",
    '<div class="equipmentlist">',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListSequenceEnd",
    '</div><p class="clear"></p>',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListSequence",
    '<div class="sequencelist">',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListInformationEnd",
    '</div ><p class="clear"></p>',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListInformation",
    '<div class="informationlist">',
    "all"
  );

  XRegExp.replace(
    text,
    "ListMultipleChoiceEnd",
    '</div><p class="clear"></p>',
    "all"
  );
  text = XRegExp.replace(
    text,
    "ListMultipleChoice",
    '<div class="multiplechoicelist">',
    "all"
  );

  // Tables
  text = XRegExp.replace(text, "StartTable", "<table>");

  while (text.indexOf("TableHeader") > -1) {
    var match = XRegExp.exec(text, /TableHeader{(.*)}/);
    if (match) {
      var headerhtml =
        '\t<thead style="text-align:right">\n\t\t<tr class = "tit_bg">\n\t\t<th>' +
        match[1].split("}{").join("</td><td>") +
        "</th>\n\t\t</tr>\n\t<tbody>\n";
      var headerrow = match[0];
      text = XRegExp.replace(text, headerrow, headerhtml);
    } else {
      break;
    }
  }
  while (text.indexOf("TableRow") > -1) {
    match = XRegExp.exec(text, /TableRow{(.*)}/);
    if (match) {
      rowhtml =
        '\t\t<tr style="text-align:right">\n\t\t\t<td>' +
        match[1].split("}{").join("</td><td>") +
        "</td>\n\t\t</tr>";
      inputrow = match[0];
      text = XRegExp.replace(text, inputrow, rowhtml);
    }
  }
  text = XRegExp.replace(text, "StopTable", "\n\t</tbody>\n</table>");

  // technical-blocks, take 2
  text = XRegExp.replace(
    text,
    /GroupBlock{(.*?)}/,
    '<span class = "groupedblock">$1</span>',
    "all"
  ); // processes grouping, but only if its on a single line (otherwise deal with physical quantity first)

  // Coaching
  //SessionBlock0
  // no URL provided, so not a link
  text = XRegExp.replace(
    text,
    /PlanBlockNoLink{(.*)}{([0-9])([0-9])([0-9])([0-9])}{(.*)}{([0-9]{2})}/,
    '<div class= "SessionBlock"><p class="supporterblocknolink">$1</p><div class= "SessionBlockData">making physics connect FacetScore$2</p>providing tools to think with FacetScore$3</p>Making explicit links FacetScore$4</p>Exploiting physical experiences FacetScore$5</p><p class="TeacherSpeak">Around &#x23f3;$7 minutes. Coaching Notes: $6</p>   <p class="clear"></p><p><br/></p>\n</div>',
    "all"
  ); // does SessionBlockNoLink

  //rest have a link
  text = XRegExp.replace(
    text,
    /PlanBlock{(.*)}{(.*)}{([0-9])([0-9])([0-9])([0-9])}{(.*)}{([0-9]{2})}/,
    '<div class= "SessionBlock"><p><a href="$2" class="supporterblocklink">$1</a></p><div class= "SessionBlockData">making physics connect FacetScore$3</p>providing tools to think with FacetScore$4</p>Making explicit links FacetScore$5</p>Exploiting physical experiences FacetScore$6</p><p class="TeacherSpeak">Around &#x23f3;$8 minutes. Coaching Notes: $7</p>   <p class="clear"></p><p><br/></p>\n</div>',
    "all"
  );

  text = XRegExp.replace(text, "FacetScore0", "&#x1f44e;", "all");
  text = XRegExp.replace(text, "FacetScore1", "&#128077;", "all");
  text = XRegExp.replace(text, "FacetScore2", "&#128077;&#128077;", "all");
  text = XRegExp.replace(
    text,
    "FacetScore3",
    "&#128077;&#128077;&#128077;",
    "all"
  );
  text = XRegExp.replace(
    text,
    "FacetScore4",
    "&#128077;&#128077;&#128077;&#128077;",
    "all"
  );
  text = XRegExp.replace(
    text,
    "FacetScore5",
    "&#128077;&#128077;&#128077;&#128077;&#128077;",
    "all"
  );

  text = XRegExp.replace(
    text,
    /GuideBlock{(.*)}{(.*)}{(.*)}/,
    '<div class="SessionBlock">\n<p><a href="$2" class="supporterblocklink">$1</a></p>\n\t<div class= "SessionBlockData">\n\t<p class="TeacherSpeak">$3</p><p class="clear"></p><p><br/></p></div>',
    "all"
  ); // does GuideBlock

  text = XRegExp.replace(
    text,
    /GuideBlockNoLink{(.*)}{(.*)}/,
    '<div class="SessionBlock">\n<p class="supporterblocknolink">$1</p>\n\t<div class= "SessionBlockData">\n\t<p class="TeacherSpeak">$2</p><p class="clear"></p><p><br/></p></div>',
    "all"
  ); // does GuideBlock

  // Teachable sequence

  //   text = XRegExp.replace(text,/ActivityBlock{(.*)}{(.*)}{([0-9]{2})}{([0-4])([0-4])([0-4])([0-4])([0-4])}{(.*)}/,'<div class= "SessionBlock"><p><a href="$2" class="supporterblocklink">$1</a></p><p>target duration &#x23f3;$3 minutes.</p></p><div class= "SessionBlockData">making physics connect to the lived-in world FacetScore$4</p>providing tools for children to think with FacetScore$5</p>making explicit links to other parts of physics FacetScore$6</p></p>showing practices of physics FacetScore$7</p>engaging physical experiences FacetScore$8</p><p class="TeacherSpeak">Implementation notes: $9</p><p class="clear"></p><p><br/></p>\n</div>','all');

  //   text = XRegExp.replace(text,/DescribeActivity{(.*)}/,'<p class="TeacherSpeak">$1</p><p class="clear"></p>\n','all');
  //
  //   text = XRegExp.replace(text,/ActivityData{([0-9]{2})}{([0-4])([0-4])([0-4])([0-4])([0-4])}{([0-4])([0-4])([0-4])([0-4])}{(.*)}/,'<div class= "LessonBlock"><p class="LessonBlockHeader">Activity kind and duration</p><p>A $11. Estimated duration &#x23f3;$1 minutes.</p><p class="LessonBlockHeader">Children&apos;s thinking</p><p>making physics connect to the lived-in world <span class="facetscore">FacetScore$2</span></p><p>providing tools for children to think with <span class="facetscore">FacetScore$3</span></p><p>making explicit links to other parts of physics <span class="facetscore">FacetScore$4</span></p><p>showing practices of physics <span class="facetscore">FacetScore$5</span></p><p>engaging physical experiences <span class="facetscore">FacetScore$6</span></p><p class="LessonBlockHeader">Teacher practices</p><p>exemplifying thinking in physics<span class="facetscore">FacetScore$7</span></p><p>elucidating children&apos;s thinking<span class="facetscore">FacetScore$8</span></p><p>structuring a fertile ecosystem<span class="facetscore">FacetScore$9</span></p><p>feeding back on children&apos;s thinking<span class="facetscore">FacetScore$10</span></p></div>\n','all');
  //
  //   text = XRegExp.replace(text,/ActivitySummary{([0-9]{2})}{([0-4])([0-4])([0-4])([0-4])([0-4])}{([0-4])([0-4])([0-4])([0-4])}{(.*)}{(.*)}{(.*)}{(.*)}/,'<p><a href="$13" class="activitylinkheader">$12</a></p>\n<p>$1 minutes. A $11.  $14.</p>\n<div class= "LessonBlock">\n<p><b>Children&apos;s thinking</b></p><p>connecting physics <span class="SummaryScore">SummaryScore$2</span></p><p>providing tools <span class="SummaryScore">SummaryScore$3</span></p><p>physics interlinking<span class="SummaryScore">SummaryScore$4</span></p><p>showing practices<span class="SummaryScore">SummaryScore$5</span></p><p>experiencing<span class="SummaryScore">SummaryScore$6</span></p><p><b>Teacher practices</b></p><p>exemplifying <span class="SummaryScore">SummaryScore$7</span></p><p>elucidating<span class="SummaryScore">SummaryScore$8</span></p><p>structuring<span class="SummaryScore">SummaryScore$9</span></p><p>feeding back<span class="SummaryScore">SummaryScore$10</span></p></div>\n\n','all');

  // text = XRegExp.replace(text,/ChunkHeader{(.*?)}/,'<h4 class="chunkheader">$1</h4>',"all"); //covers most cases

  //   text = XRegExp.replace(text,/LessonBlock{(.*)}{(.*)}{([0-9]{2})}([0-4])([0-4])([0-4])([0-4])}{(.*)}{(.*)}/,'<div class= "SessionBlock"><p><a href="$2" class="supporterblocklink">$1</a></p><p>$10</p><p>target duration &#x23f3;$3 minutes.</p></p><div class= "SessionBlockData">making physics connect to the lived-in world FacetScore$4</p>providing tools for children to think with FacetScore$5</p>making explicit links to other parts of physics FacetScore$6</p></p>showing practices of physics FacetScore$7</p>engaging physical experiences FacetScore$8</p><p class="TeacherSpeak">Implementation notes: $9</p><p class="clear"></p><p><br/></p>\n</div>','all');

  // EEF links &  other work

  text = XRegExp.replace(
    text,
    /EEFPreconceptionsLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=10" class="EEFButtonPreconceptions">1 Preconceptions</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFSelfRegulationLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=14" class="EEFButtonSelfRegulation">2 Self-regulation</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFModellingLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=18" class="EEFButtonModelling">3 Modelling</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFMemoryLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=24" class="EEFButtonMemory">4 Memory</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFPracticalWorkLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=28" class="EEFButtonPracticalWork">5 Practical Work</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFLanguageScienceLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=32" class="EEFButtonLanguageScience">6 Language of Science</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFFeedbackLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/public/files/Publications/Science/EEF_improving_secondary_science.pdf#page=38" class="EEFButtonFeedback">7 Feedback</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFToolkitFeedbackLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1Feedback has a high impact on learning, for very low cost, based on moderate evidence. You provide the student with information that improves learning.</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/evidence-summaries/teaching-learning-toolkit/feedback/" class="EEFToolkit"> Toolkit: Feedback</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFToolkitMetaCognitionLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1Metacognition and self-regulation have a high impact on learning, for very low cost, based on extensive evidence. You help the students reflect on their learning to make it more effective.</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/evidence-summaries/teaching-learning-toolkit/meta-cognition-and-self-regulation/" class="EEFToolkit"> Toolkit: Metacognition</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFToolkitCollaborationLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1Collaborative learning has a moderate impact on learning, for very low cost, based on extensive evidence. You structure small groups so that every student can learn by contributing to a shared outcome.</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/evidence-summaries/teaching-learning-toolkit/meta-cognition-and-self-regulation/" class="EEFToolkit"> Toolkit: Collaborating</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /EEFToolkitCPeerTutorLink{(.*)}/g,
    '<div class=eefconnect>\n\t<div class=eefcomment>$1Peer tutoring has a moderate impact on learning, for low cost, based on extensive evidence. You provide the student with information that improves learning.</div>\n\t<div class=eeflink><a href="https://educationendowmentfoundation.org.uk/evidence-summaries/teaching-learning-toolkit/meta-cognition-and-self-regulation/" class="EEFToolkit"> Toolkit: Peer tutoring</a></div>\n</div>',
    "all"
  );

  text = XRegExp.replace(
    text,
    /PiperLink{(.*)}{(.*)}/g,
    '<div class= "PiperBlock"><div class= "pipercomment">$1</div><div class=PiperLink><a href="$2" class="IoPLinkButton"><span style="color:red">IOP research</span> <span style="color:black">review</span></a></div></div>',
    "all"
  );

  // other sequence links

  text = XRegExp.replace(
    text,
    /TeacherknowledgeLink\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="internallinkPN">$1</a></p>',
    "all"
  ); // deals with internal links
  text = XRegExp.replace(
    text,
    /ChildrenreasoningLink\{(.*?)\}\{(.+?)\}/,
    '<p><a href="$2" class="internallinkTL">$1</a></p>',
    "all"
  ); // deals with internal links
  // 	text = XRegExp.replace(text,/ActivityLink\{(.*?)\}\{(.+?)\}/,'<p><a href="$2" class="internallinkTA">$1</a></p>',"all");// deals with internal links
  text = XRegExp.replace(
    text,
    /ActivitySynopsis\{(.*?)\}\{(.+?)\}\{(.+?)\}\{(.+?)\}\{(.+?)\}\{(.+?)\}/,
    '<div class="activityheader">\n\t<div class="activityclock"><img src="ESLGraphics/ESLclock02-$1.png" width= "40px" alt="lesson clock" /></div>\n\t<div class="activitytitle">$2($4 &ndash; $3 minutes)</div>\n\t<div class="activitylink"><a href="$5" class="IoPLinkButton"><span style="color:red">IOP</span> activity notes</a></div>\n</div>\n<div class ="actvitydescriptor">$6</div>\n',
    "all"
  ); // deals with activity synopses

  text = XRegExp.replace(text, "FacetScore0", "", "all");
  text = XRegExp.replace(text, "FacetScore1", "&#x2713;", "all");
  text = XRegExp.replace(text, "FacetScore2", "&#x2713;&#x2713;", "all");
  text = XRegExp.replace(
    text,
    "FacetScore3",
    "&#x2713;&#x2713;&#x2713;",
    "all"
  );
  text = XRegExp.replace(
    text,
    "FacetScore4",
    "&#x2713;&#x2713;&#x2713;&#x2713;",
    "all"
  );

  text = XRegExp.replace(text, "SummaryScore0", "-", "all");
  text = XRegExp.replace(text, "SummaryScore1", "&#10003;", "all");
  text = XRegExp.replace(text, "SummaryScore2", "&#10003;&#10003;", "all");
  text = XRegExp.replace(
    text,
    "SummaryScore3",
    "&#10003;&#10003;&#10003;",
    "all"
  );
  text = XRegExp.replace(
    text,
    "SummaryScore4",
    "&#10003;&#10003;&#10003;&#10003;",
    "all"
  );

  // Diagnostic questions

  text = XRegExp.replace(
    text,
    /QuestionStem{(.*)}/g,
    '<div class="Mcquestion">\n<hr>\n<p class="Mcstem">$1</p></div>\n',
    "all"
  );
  text = XRegExp.replace(
    text,
    /QuestionItem{([A-E])}{(.*)}/g,
    '<div>\n\t<input id="option$1" type="radio" class="Mcitem" name="question-1-answers" value="$1" />\n\t<label for="question-1-answers-A"><span><span></span></span><strong>$1</strong>   $2</label>\n</div>\n\n',
    "all"
  );
  text = XRegExp.replace(
    text,
    /QuestionAnswer{(.*)}/g,
    '<input type = "button" class="Questioncheckbutton" value = "Check my answer" onclick = "checkAnswer()"/><div id ="theanswer" >$1</div>\n\n<div id ="showanswer"> </div>\n<hr>\n',
    "all"
  );
  // following are related metadata,not to be shown
  text = XRegExp.replace(text, /QuestionSource{(.*)}/g, "", "all");
  text = XRegExp.replace(text, /QuestionID{(.*)}/g, "", "all");
  text = XRegExp.replace(text, /QuestionDifficulty{(.*)}/g, "", "all");
  text = XRegExp.replace(text, /QuestionSkill{(.*)}/g, "", "all");
  text = XRegExp.replace(text, /QuestionTopic{(.*)}/g, "", "all");

  return text;
}

function parseUnit(unitString) {
  var unitBits = unitString.split(" ");

  for (var i = 1; i < unitBits.length; i++) {
    // the first array element needs nothing in front, and will not be a number, so don't process
    if (/\d/.test(unitBits[i])) {
      unitBits[i] = "<sup>" + unitBits[i] + "</sup>";
    } else {
      unitBits[i] = "&nbsp;" + unitBits[i];
    }
  }

  var htmLunitString = unitBits.join("");

  return htmLunitString;
}
