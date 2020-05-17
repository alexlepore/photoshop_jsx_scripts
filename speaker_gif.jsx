//Grab current document
var current = app.activeDocument;

//main call (passes var current)
speakerAutomation(current);

//main
function speakerAutomation(currentDocument){

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
    var largeSizeWidth,
    smallSizeWidth,
    largeSizeHeight,
    smallSizeHeight;
    
    largeSizeWidth = UnitValue(150, "px");
    smallSizeWidth = UnitValue(80, "px");
    largeSizeHeight = UnitValue(150, "px");
    smallSizeHeight = UnitValue(80, "px");

    //declare the gif save options and new file
    var gifFile = new File();
    var gifSaveOptions = new GIFSaveOptions()
    gifSaveOptions.colors = 256;
    gifSaveOptions.dither = Dither.DIFFUSION;
    gifSaveOptions.ditherAmount = 100;
    gifSaveOptions.matte = MatteType.WHITE;
    gifSaveOptions.interlaced = false;
    gifSaveOptions.transparency = true;

    //find current width
    var currentDocumentWidth = currentDocument.width;
    alert(currentDocumentWidth);

    currentDocument.resizeImage(largeSizeWidth, largeSizeHeight);
    currentDocument.saveAs(gifFile, gifSaveOptions);

    currentDocument.resizeImage(smallSizeWidth, smallSizeHeight);
    currentDocument.saveAs(gifFile, gifSaveOptions);
}
