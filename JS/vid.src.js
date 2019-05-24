var forside = document.querySelector(".top-bar-front")
var normal = document.querySelector(".top-bar-normal")
var buePil = document.querySelector(".top-bar-buepil")
var sammenhold = document.querySelector(".top-bar-sammenhold")
var background = document.querySelector(".background")

forside.addEventListener("click", function(){
    background.src = "./video/Forside.mp4"
});

normal.addEventListener("click", function(){
    background.src = "./video/normalRidning.mp4"
});

buePil.addEventListener("click", function(){
    background.src = "./video/buePil.mp4"
});

sammenhold.addEventListener("click", function(){
    background.src = "Sammenhold.mp4"
}); 