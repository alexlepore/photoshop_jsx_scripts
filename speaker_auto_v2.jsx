var current = app.activeDocument;

//main call
speakerAutomation(current);

function speakerAutomation(currentDocument){

    //change mode
    currentDocument.changeMode(ChangeMode.RGB);

    //declare sponsor sizes
    var smallSizeWidth,
    smallSizeHeight;
    
    smallSizeWidth = UnitValue(80, "px");
    smallSizeHeight = UnitValue(80, "px");

    //save options
    var gifFile = new File();
    var gifSaveOptions = new GIFSaveOptions()
    gifSaveOptions.colors = 256;
    gifSaveOptions.dither = Dither.DIFFUSION;
    gifSaveOptions.ditherAmount = 100;
    gifSaveOptions.interlaced = true;
    gifSaveOptions.matte = MatteType.WHITE;
    gifSaveOptions.transparency = true;

    //flatten layers and save
    currentDocument.flatten();
    currentDocument.saveAs(gifFile, gifSaveOptions);
    
    currentDocument.resizeImage(smallSizeWidth, smallSizeHeight);
    currentDocument.saveAs(gifFile, gifSaveOptions);
}
