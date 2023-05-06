// Define an array of pizza names
const pizzaArray = [
    "Americana",
    "Hawaiian",
    "Capricciosa",
    "Margherita",
    "Vegetarian",
    "Cheese and Garlic",
    "Roast Special",
    "Avocado",
    "Pesto Fetta"
  ];
  
  // Define the function that builds the pizza list
  function buildPizzaList() {
    // Get the pizza_menu div block
    const pizzaMenuDiv = document.getElementById("pizza_menu");
  
    // Remove the list_placeholder paragraph
    pizzaMenuDiv.removeChild(document.getElementById("list_placeholder"));
  
    // Create a new unordered list element
    const pizzaList = document.createElement("ul");
  
    // Loop through the pizzaArray and add each pizza name as a list item to the pizzaList
    pizzaArray.forEach(pizzaName => {
      const pizzaListItem = document.createElement("li");
      pizzaListItem.textContent = pizzaName;
      pizzaList.appendChild(pizzaListItem);
    });
  
    // Add the pizzaList to the pizza_menu div block
    pizzaMenuDiv.appendChild(pizzaList);
  }
  