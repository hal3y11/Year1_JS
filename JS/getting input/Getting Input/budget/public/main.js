//when page loads
//get references to interactive elements 

const txtBudget = document.getElementById("budget");
const txtRent = document.getElementById("rent");
const txtFood = document.getElementById("food");
const txtTransport = document.getElementById("transport");
const txtOutput = document.getElementById("output");
const btnCalculateBudget = document.getElementById("calculateBudget");
const btnReset = document.getElementById("reset");


//listen for user interactions
btnCalculateBudget.addEventListener("click", calculateBudget);
btnReset.addEventListener("click", reset);



function calculateBudget() {
    
    let budget = parseFloat(txtBudget.value);
    let rent = parseFloat(txtRent.value);
    let food = parseFloat(txtFood.value);
    let transport = parseFloat(txtTransport.value);

    let outgoings = rent + food + transport;
    let remainingBudget = budget - outgoings;

    //remaining budget
    txtOutput.innerText = `After your spending you have ${remainingBudget.toFixed(2)} of your budget left`;
}

function reset() {
    console.log("reset")

    //This resets the input fields to 0 when called
    txtBudget.value = 0;
    txtRent.value = 0;
    txtFood.value = 0;
    txtTransport.value = 0;

    //Clears the output field
    txtOutput.innerText = '';
}

