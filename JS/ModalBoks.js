// Modal boks styring
// denne er for at få fat på modal boksen 
var modal = document.getElementById("modalBoks");

// denne er for at få fat på en knap, så vi kan åbne modalboksen 
var button = document.getElementById("Galleri");

// denne er for at kunne lukke vores modalBoks
var span = document.getElementsByClassName("close")[0];

// når du klikker på knappen, så kommer modalboksen op
button.onclick = function(){
   modal.style.display = "block";
}

// når brugeren klikker på span, (X) lukker modalboksen igen
span.onclick = function (){
   modal.style.display = "none";
}

// når brugeren klikker uden for modalboksen, så lukker den sig også 
window.onclick = function (event){
   if (event.target == modal){
      modal.style.display ="none";
   }
}



