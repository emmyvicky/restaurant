// select the table container element
function tableContainer(){
    // const tableContainer = document.querySelector("#table-container");
    const tableContainer = document.getElementById("tableContainer");
    // create a table element
    const table = document.createElement("table");
    
    // iterate from 0 to 100 and create a row for each number
    for (let i = 0; i <= 100; i++) {
      // create a table row element
      const row = document.createElement("tr");
    
      // create a table cell element for the number
      const cell = document.createElement("td");
      cell.textContent = i;
    
      // highlight the cell if the number is divisible by 17
      if (i % 17 === 0) {
        cell.style.backgroundColor = "yellow";
      }
    
      // append the cell to the row
      row.appendChild(cell);
    
      // append the row to the table
      table.appendChild(row);
    }

// append the table to the table container
tableContainer.appendChild(table);
};

let userInput = prompt('Please enter a number between 0 and 500');
let maxValue = 100;

while (userInput < 0 || userInput > 500) {
  alert('Invalid input! Please enter a number between 0 and 500');
  userInput = prompt('Please enter a number between 0 and 500');
}

if (userInput > maxValue) {
  alert(`Input too large! Maximum value set to ${maxValue}`);
  userInput = maxValue;
}