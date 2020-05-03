(function(window){
    "use strict";
    var Main = function () {

    };
    Main.prototype.start = function (content) {

        var fileContents = content;

        this.fileName = "";

        var frame = "<div class='pagetitle'>WEBTITLE</div><div class='thecontent'>DOCUMENTCONTENT</div>";

        //extract metadata

        var wipeFTitle,wipeHTitle,webTitle,identifier,match;

        match = XRegExp.match(fileContents,/FileName: (.*)/);
        if(match){
            identifier = XRegExp.split(match,": ")[1];
            this.fileName = identifier;
            wipeFTitle = 'FileName: ' + identifier;
        }

        webTitle = /WebTitle{(.*)}/.exec(fileContents)[1];
        
        wipeHTitle = /WebTitle{(.*)}/.exec(fileContents)[0];
        

        //delete metadata from file contents

        fileContents = fileContents.replace(wipeFTitle,'');
        fileContents = fileContents.replace(wipeHTitle,'');

        fileContents = pmlparse(fileContents);

        fileContents = marked(fileContents);



        frame = frame.replace('DOCUMENTCONTENT', fileContents);
        frame = frame.replace('WEBTITLE', webTitle);


        document.title = webTitle;

        $("#content").html(frame);
    };



    window.Main = new Main();
})(window);
