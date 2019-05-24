var button = document.querySelector(".play");
var background = document.querySelector(".background");
button.addEventListener("click", function(){
    if (background.paused) {
        background.play();
        button.innerHTML = "Pause";
              }
    else {
        background.pause();
        button.innerHTML = "Play";
          }
    
});