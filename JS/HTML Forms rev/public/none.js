const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");

cat1.addEventListener('click',removeElement);
cat2.addEventListener('click',changeVisibility);
cat3.addEventListener('click',resetElement);

function removeElement() {
    document.getElementById("imgbox1").style.display="none";
}
function changeVisibility() {
    document.getElementById("imgbox2").style.visibility="hidden";
}
function resetElement() {
    document.getElementById("imgbox1").style.display="block";
    document.getElementById("imgbox2").style.visibility="visible";
}