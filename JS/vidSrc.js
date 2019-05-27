var forside = document.querySelector(".top-bar-front");
var normal = document.querySelector(".top-bar-normal");
var buePil = document.querySelector(".top-bar-buepil");
var sammenhold = document.querySelector(".top-bar-sammenhold");
var background = document.querySelector(".background");


forside.addEventListener("click", function(){
    console.log("clicked");
    background.src = "./video/Forside.mp4"
    background.play()
});

normal.addEventListener("click", function(){
    console.log("clicked");
    background.src = "./video/normalRidning.mp4"
    background.play()
    
});

buePil.addEventListener("click", function(){
    console.log("clicked");
    background.src = "./video/buePil.mp4"
    background.play()
});

sammenhold.addEventListener("click", function(){
    console.log("clicked");
    background.src = "./video/sammenhold.mp4"
    background.play()
    
}); 



// hvis den knap bliver trykket, ændre indhold/vid.src 