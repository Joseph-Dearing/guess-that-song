/*This is telling the page to play the linked audio file once the page is loaded */
// window.onload = function() {
//     document.getElementById("game_start").play();
// }
//The code above has been grayed out as I am trying to find a way to over-ride Chrome's autoplay policy
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
    //This code will over-ride Chromes auto-play blocking policy
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
//This code is for browsers other then Chrome and also will prevent double audio in the background