let countDisplay = document.getElementById("count");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let count = 0;

increase.addEventListener("click", () =>{
    count++;
    countDisplay.innerHTML = count
    if (count > 0){
        countDisplay.style.color = "green"
    } else if (count == 0) {
        countDisplay.style.color = "black"
    } else countDisplay.style.color = "red"
    
});
decrease.addEventListener("click", () =>{
    count--;
    countDisplay.innerHTML = count
    if (count > 0){
        countDisplay.style.color = "green"
    } else if (count == 0) {
        countDisplay.style.color = "black"
    } else countDisplay.style.color = "red"
});
reset.addEventListener("click", () =>{
    countDisplay.innerHTML = 0
    count = 0;
    countDisplay.style.color = "black"
});