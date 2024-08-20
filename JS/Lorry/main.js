const txtHeader = document.getElementById("header"); 
const txtPara = document.getElementById("paragraph"); 
const imgFace = document.getElementById("face");

txtHeader.style.background = "lightgreen";

txtPara.innerText = "<h2>I am not a heading</h2>";
txtPara.innerHTML = "<h2>But, I am!</h2>";

imgFace.setAttribute("src", "images/sad.jpg");
imgFace.setAttribute("alt", "sad face");
