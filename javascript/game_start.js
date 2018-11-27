/*This is telling the page to play the linked audio file once the page is loaded */
// window.onload = function() {
//     document.getElementById("game_start").play();
// }
//The code above has been grayed out as it no longer works with Chrome's autoplay policy
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
    //This code will over-ride Chromes auto-play blocking policy
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
