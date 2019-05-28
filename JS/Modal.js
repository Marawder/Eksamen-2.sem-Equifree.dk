var gallery =document.querySelector(".lower-bar-Galleri");
var modal =document.querySelector(".modal");


//Får galleriet til at vise sig, med at give den display=block; // 
gallery.addEventListener("click", function(){
console.log("clicked");
modal.style.display =  "block";
}); 


//Den targeter krydset inde i galleriet som den så kan lukket med //
//var close=document.querySelector(".close");
//close.addEventListener("click", function(){
//modal.style.display="none";
//});


//Window er et pre-defineret event javascript forstår, som er hvis du klikker ændre steder end modalen, lukkes den // 
window.addEventListener("click", function(event) {
    if (event.target == modal){
        modal.style.display="none";
        }
});
