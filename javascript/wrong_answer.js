/*This is telling the page to play the linked audio file once the page is loaded */
window.onload = function() {
  document.getElementById("wrong_answer").play();
}

/*This is linked to the button that says "Try Again"*/
/*When the user presses the "Try Again" button they will be linked back to the page that lead them there so that they can try to answer the question again*/
function goBack() {
    window.history.back();
}
