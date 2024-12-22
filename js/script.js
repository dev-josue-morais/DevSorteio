const numberFron = document.querySelector("#start");
const numberTo = document.querySelector("#end");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(numberFron.value);
    console.log(numberTo.value);
});

let randomInt = Math.floor(Math.random() * 11); 
console.log(randomInt);