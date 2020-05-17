//Grab current document
var current = app.activeDocument;

//main call (passes var current)
sponsorBuilds(current);

//main
function sponsorBuilds(currentDocument){

    /*
    First thing we do is
    take the current document 
    and change the color mode. 
    The also added benefit is that
    it unlock all layers of the image
    allowing us to manipulate 
    and save it how we please*/
    currentDocument.changeMode(ChangeMode.RGB);

    //declare sponsor sizes
    var largeSize,
    smallSize,
    agendaSize;
    
    largeSize = UnitValue(250, "px");
    smallSize = UnitValue(150, "px");
    agendaSize = UnitValue(110, "px");

    //declare the gif save options & new file
    var gifFile = new File();
    var gifSaveOptions = new GIFSaveOptions()
    gifSaveOptions.colors = 256;
    gifSaveOptions.dither = Dither.DIFFUSION;
    gifSaveOptions.ditherAmount = 100;
    gifSaveOptions.matte = MatteType.WHITE;
    gifSaveOptions.interlaced = false;
    gifSaveOptions.transparency = true;


    //check current width
    var currentDocumentWidth = currentDocument.width;
    alert(currentDocumentWidth);

    currentDocument.resizeImage(largeSize);
    currentDocument.saveAs(gifFile, gifSaveOptions);

    currentDocument.resizeImage(smallSize);
    currentDocument.saveAs(gifFile, gifSaveOptions);

    currentDocument.resizeImage(agendaSize);
    currentDocument.saveAs(gifFile, gifSaveOptions);
}
