var buttonPlay = document.querySelector(".play");
var buttonMute = document.querySelector(".unmute");
var background = document.querySelector(".background");

buttonPlay.addEventListener("click", function(){
    if (background.paused) {
        background.play();
        buttonPlay.innerHTML = "Pause";
              }
    else {
        background.pause();
        buttonPlay.innerHTML = "Play";
          }
    
});

buttonMute.addEventListener("click", function(){
    if(background.muted == false){
        background.muted = true;
        buttonMute.innerHTML = "Unmute";
      } else {
        background.muted = false;
        buttonMute.innerHTML="Mute"
      }
    
});