var gallery =document.querySelector(".lower-bar-Galleri");
var modal =document.querySelector(".modal");

gallery.addEventListener("click", function(){
console.log("clicked");
modal.style.display =  "block";
}); 

var close=document.querySelector(".close");
close.addEventListener("click", function(){
modal.style.display="none";
});
