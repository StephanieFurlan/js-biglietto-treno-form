function checkAge(age) {
   if (!isNaN(age) && age >= 0 && age <= 120 && age % 1 == 0) {
      return true;
   }
   return false;
}

function checkKm(km) {
   console.log(km);
   if (!isNaN(km) && km >= 0) {
      return true;
   }
   return false;
}

var enter = document.getElementById("enter");
enter.addEventListener("click", function() {

   var name = document.getElementById("name").value;
   document.getElementById("show-name").innerHTML = name;


   var km = document.getElementById("km").value;
   var age = document.getElementById("age").value;

   var price = km * 0.21;
   var offer = "Standard";

   if (age == "Minorenne") {
      price *= (1 -  20 / 100);
      offer = "Sconto Minorenne - 20%";
   } else if (age == "Over 65") {
      price *= (1 -  40 / 100);
      offer = "Sconto Over 65 - 40%";
   }

   document.getElementById("show-offer").innerHTML = offer;


   document.getElementById("show-carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;

   document.getElementById("show-codice-CP").innerHTML = Math.floor(Math.random() * 10000) + 90001;

   document.getElementById("price").innerHTML = price + " E";

   var form = document.getElementById("form");
   form.classList.add("form-small");


   var ticket = document.getElementById("ticket");
   ticket.style.display = "inline-block";
   ticket.classList.add("ticket-show");

});

var reset = document.getElementById("reset");
reset.addEventListener("click", function() {

   var form = document.getElementById("form");
   form.classList.remove("form-small");

   var ticket = document.getElementById("ticket");
   ticket.style.display = "none";
   ticket.classList.remove("ticket-show");
});
