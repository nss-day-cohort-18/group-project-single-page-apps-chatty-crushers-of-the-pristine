"use strict";

var firstNum = document.getElementById("firstnumber");
var secondNum = document.getElementById("secondnumber");
var answer = document.getElementById("output");

var add = document.getElementById("addButt");
var subtract = document.getElementById("subButt");
var multiply = document.getElementById("multiButt");
var divide = document.getElementById("diviButt");

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
add.addEventListener("click", function(event){
    var sum = parseFloat(firstNum.value) + parseFloat(secondNum.value);
    answer.innerHTML = sum;
    // sum = answer.innerHTML;
    console.log(sum);
});

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
subtract.addEventListener("click", function(event){
    var sum = parseFloat(firstNum.value) - parseFloat(secondNum.value);
    answer.innerHTML = sum;

});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
multiply.addEventListener("click", function(event){
    var sum = parseFloat(firstNum.value) * parseFloat(secondNum.value);
    answer.innerHTML = sum;

});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
divide.addEventListener("click", function(event){
    var sum = parseFloat(firstNum.value) / parseFloat(secondNum.value);
    answer.innerHTML = sum;

});

/* Listeners to ensure that entries to the calculator are numbers */

firstNum.addEventListener("keypress", function(event){
   var key = window.event ? event.keyCode : event.which;
   if (event.keyCode === 8 || event.keyCode === 46) {
       return true;
   } else if ( key < 48 || key > 57 ) {
       alert("Numbers only. We cannot operate on letters or characters at this time.");
   } else {
       return true;
   }
});

secondNum.addEventListener("keypress", function(event){
   var key = window.event ? event.keyCode : event.which;
   if (event.keyCode === 8 || event.keyCode === 46) {
       return true;
   } else if ( key < 48 || key > 57 ) {
       alert("Numbers only. We cannot operate on letters or characters at this time.");
   } else {
       return true;
   }
});
