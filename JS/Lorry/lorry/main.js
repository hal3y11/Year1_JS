//set up constants for field sets
const redLorryFieldset = document.getElementById("redLorryFieldset");
const yellowLorryFieldset = document.getElementById("yellowLorryFieldset");

//listen for clicks
redLorryFieldset.addEventListener("click", showYellow);
yellowLorryFieldset.addEventListener("click", showRed);

//default 
function initialise() {
    redLorryFieldset.classList.remove("hidden");
    yellowLorryFieldset.classList.add("hidden");
}

//shows red fieldset 
function showRed() {
    redLorryFieldset.classList.remove("hidden");
    yellowLorryFieldset.classList.add("hidden");
}

//shows yellow fieldset 
function showYellow() {
    redLorryFieldset.classList.add("hidden");
    yellowLorryFieldset.classList.remove("hidden");
}

//initialise function goes at bottom of code
initialise();
