"use strict"

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var veggieChooser = document.getElementById("veggies");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  if (event.target.checked === true) {
      // Get the value chosen from the DOM
      selectedTopping = event.target.id;
      // Determine the price of the topping chosen
      selectedTopping = SandwichMaker.addMeat(selectedTopping);
      console.log("The topping price is: " + selectedTopping);
      SandwichMaker.addTopping(selectedTopping);
  }
});

breadChooser.addEventListener("change", function(event) {
  if (event.target.checked === true) {
      // Get the value chosen from the DOM
      selectedTopping = event.target.id;
      // Determine the price of the topping chosen
      selectedTopping = SandwichMaker.addBread(selectedTopping);
      console.log("The topping price is: " + selectedTopping);
      SandwichMaker.addTopping(selectedTopping);
  }
});

cheeseChooser.addEventListener("change", function(event) {
  if (event.target.checked === true) {
      // Get the value chosen from the DOM
      selectedTopping = event.target.id;
      // Determine the price of the topping chosen
      selectedTopping = SandwichMaker.addCheese(selectedTopping);
      console.log("The topping price is: " + selectedTopping);
      SandwichMaker.addTopping(selectedTopping);
  }
});

condimentChooser.addEventListener("change", function(event) {
  if (event.target.checked === true) {
      // Get the value chosen from the DOM
      selectedTopping = event.target.id;
      // Determine the price of the topping chosen
      selectedTopping = SandwichMaker.addCondiment(selectedTopping);
      console.log("The topping price is: " + selectedTopping);
      SandwichMaker.addTopping(selectedTopping);
  }
});

veggieChooser.addEventListener("change", function(event) {
  if (event.target.checked === true) {
      // Get the value chosen from the DOM
      selectedTopping = event.target.id;
      // Determine the price of the topping chosen
      selectedTopping = SandwichMaker.addVeggie(selectedTopping);
      console.log("The topping price is: " + selectedTopping);
      SandwichMaker.addTopping(selectedTopping);
  }
});
