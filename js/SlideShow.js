slideDelay: 4000,
fadeDelay: 35,
wrapperID: "slideShowImages",
buttonID: "slideShowButton",
buttonStartText: "Start Slides",
buttonStopText: "Stop Slides",

initializeGlobals();  

if ( insufficientSlideShowMarkup() ) {
  return;
}

 // Assert: there's at least one slide image.

if (globals.slideImages.length == 1) {
  return;
}

// Assert: there are at least two slide images.

initializeSlideShowMarkup();

globals.wrapperObject.addEventListener('click', toggleSlideShow, false);

if (globals.buttonObject) {
  globals.buttonObject.addEventListener('click', toggleSlideShow, false);
} 

startSlideShow();