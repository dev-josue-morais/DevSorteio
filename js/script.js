const numberFron = document.querySelector("#start");
const numberTo = document.querySelector("#end");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(numberFron.value);
    console.log(numberTo.value);
});

let randomInt = Math.floor(Math.random() * 11); 
console.log(randomInt);

function generateKeyframes() {
    const colors = [];

    for (let i = 0; i < 250; i++) {
        let r = 255 - Math.round(i * 255 / 249); 
        let g = Math.round(i * 255 / 249); 
        let b = 0;
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    for (let i = 0; i < 250; i++) {
        let r = 0; 
        let g = 255 - Math.round(i * 255 / 249); 
        let b = Math.round(i * 255 / 249); 
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    for (let i = 0; i < 250; i++) {
        let r = Math.round(i * 255 / 249);
        let g = 0; 
        let b = 255 - Math.round(i * 255 / 249);
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    let keyframes = "@keyframes pulseGradient {\n";
    const totalSteps = colors.length;
    const percentageStep = (100 / totalSteps).toFixed(2); 

    for (let i = 0; i < totalSteps; i++) {
        const percentage = (i * percentageStep).toFixed(2) + "%"; 
        keyframes += `    ${percentage} {\n        background: radial-gradient(circle, ${colors.join(", ")});\n    }\n`;
        const lastColor = colors.pop();
        colors.unshift(lastColor);
    }

    keyframes += `    100% {\n        background: radial-gradient(circle, ${colors.join(", ")});\n    }\n`;
    keyframes += "}";
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    document.querySelector('.background').style.animation = 'pulseGradient 15s infinite linear';
} generateKeyframes();
