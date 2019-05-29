var buttonPlay = document.querySelector(".play");
var buttonMute = document.querySelector(".unmute");
var background = document.querySelector(".background");

//Event to pause and play video
buttonPlay.addEventListener("click", function(){
    if (background.paused) {
        background.play();
        buttonPlay.innerHTML = "&#10074;&#10074;";
              }
    else {
        background.pause();
        buttonPlay.innerHTML = "&#9658;";
          }
});

//Event to mute and unmute video
buttonMute.addEventListener("click", function(){
    if(background.muted == false){
        background.muted = true;
        buttonMute.innerHTML = "🕨";
      } else {
        background.muted = false;
        buttonMute.innerHTML="🕪";
      }
});