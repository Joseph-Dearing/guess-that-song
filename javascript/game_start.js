/*This is telling the page to play the linked audio file once the page is loaded */
// window.onload = function() {
//     document.getElementById("game_start").play();
// }
//The code above has been grayed out as I am trying to find a way to over-ride Chrome's 
//and other web browers auto-play blocking features.
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }
//The code above is new, and might be able to over-ride Chromes autoplay block policy