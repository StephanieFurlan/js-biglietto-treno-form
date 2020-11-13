// button - Genera --> ticket calculation
var enter = document.getElementById("enter");
enter.addEventListener("click", function() {

   // get values from inputs
   var name = document.getElementById("name").value;
   var km = document.getElementById("km").value;
   var age = document.getElementById("age").value;

   // check for empty values
   var errorString = "";
   var error = false;

   if (name == "") {
      errorString += "Name: empty field!";
      error = true;
   }

   if (km == "") {
      errorString += "Km: empty field!";
      error = true;
   }



   if (error) {
      alert("ERROR: " + errorString);
   } else {
      // calculate ticket price
      var price = km * 0.21;
      var offer = "Standard";

      if (age == "Minorenne") {
         price *= (1 -  20 / 100);
         offer = "Sconto Minorenne - 20%";
      } else if (age == "Over 65") {
         price *= (1 -  40 / 100);
         offer = "Sconto Over 65 - 40%";
      }


      // random CP Code and carriage
      document.getElementById("show-carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
      document.getElementById("show-codice-CP").innerHTML = Math.floor(Math.random() * 10000) + 90001;


      // assign values
      document.getElementById("show-name").innerHTML = name;
      document.getElementById("show-offer").innerHTML = offer;
      document.getElementById("price").innerHTML = price.toFixed(2) + " €";


      // change style of form
      var form = document.getElementById("form");
      form.classList.add("form-small");

      // display ticket
      var ticket = document.getElementById("ticket");
      ticket.style.visibility = "visible";
      ticket.classList.add("ticket-show");
   }


});

var reset = document.getElementById("reset");
reset.addEventListener("click", function() {

   // change style of form
   var form = document.getElementById("form");
   form.classList.remove("form-small");

   // hide ticket
   var ticket = document.getElementById("ticket");
   ticket.style.visibility = "hidden";
   ticket.classList.remove("ticket-show");

});
