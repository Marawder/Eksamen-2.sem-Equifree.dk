/* 
    Use this function when you want to load a resource through AJAX
    Modify it to fit your needs
*/


function loadWithAjax(resource, callback) {
    // Create new AJAX resource
    var xhttp = new XMLHttpRequest();

    // when the Ajax
    xhttp.onreadystatechange = function() {

      // Check if it was a status 200
      if (this.readyState == 4 && this.status == 200) {
        console.log("Successfully loaded: "+resource);

        // Log out the response to the console
        console.groupCollapsed("Ajax request");
        console.log("status: " + this.status);
        console.dir(this);
        console.log("Received the following");
        console.log(this.responseText);
        console.groupEnd();
        // Call the callback function and send the response text along
        callback(this.responseText);
      }
    };
    xhttp.open("GET", resource, true);
    xhttp.send();
  }
  
  var firstStory = document.querySelector(".firstStory");
  var secondStory = document.querySelector(".secondStory");
  var thirdStory = document.querySelector(".thirdStory");
  let container = document.querySelector(".container");

  firstStory.addEventListener("click", function(e) {
      e.preventDefault();
    // Call the ajax function to load a text file
    loadWithAjax("firstStory.html", handleHtml);
    container.classList.add("openStory");
    
    });

    secondStory.addEventListener("click", function(e) {
        e.preventDefault();
    // Call the ajax function to load a text file
    loadWithAjax("secondStory.html", handleHtml);
    container.classList.add("openStory");
    });

   thirdStory.addEventListener("click", function(e) {
    e.preventDefault();
    // Call the ajax function to load a text file
    loadWithAjax("thirdStory.html", handleHtml);
    container.classList.add("openStory");
    });

    background.addEventListener ('click', function(event) {
        if (event.target == container) {
          container.classList.remove("openStory");
        }
      })

function handleHtml(data) {
    console.log("Callback function was called");
    console.groupCollapsed("Html Received:");
    console.log(data);
    console.groupEnd();
    document.querySelector(".container").innerHTML = data;
}