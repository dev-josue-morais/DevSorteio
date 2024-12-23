const numberFrom = document.querySelector("#start");
const numberTo = document.querySelector("#end");
const button = document.querySelector("button");

button.disabled = true;

function validateInputs() {
    const fromValue = parseInt(numberFrom.value);
    const toValue = parseInt(numberTo.value);
    
    if (numberFrom.value !== "" && numberTo.value !== "" && fromValue < toValue) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

numberFrom.addEventListener("input", function() {
    if (numberFrom.value !== "") {
        numberTo.disabled = false;
        numberTo.value = "";
    } else {
        numberTo.disabled = true;
        numberTo.value = "";
    }

    validateInputs();
});

numberTo.addEventListener("input", function() {

    if (parseInt(numberTo.value) <= parseInt(numberFrom.value) && numberTo.value !== "") {
        numberTo.setCustomValidity("O valor Inicial deve ser maior que o valor de final");
    } else {
        numberTo.setCustomValidity("");
    }

    validateInputs();
});

button.addEventListener("click", function() {
    const fromValue = parseInt(numberFrom.value);
    const toValue = parseInt(numberTo.value);
    let randomInt = Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue;
    alert(`Número sorteado: ${randomInt}`);
});


function generateKeyframes() {
    const colors = [];

    // Gerar 250 cores interpolando de vermelho (#ff0000) para verde (#00ff00)
    for (let i = 0; i < 250; i++) {
        let r = 255 - Math.round(i * 255 / 255);
        let g = Math.round(i * 255 / 255);
        let b = 0;
        colors.push(`rgba(${r}, ${g}, ${b}, 0.5)`);
    }

    // Gerar 250 cores interpolando de verde (#00ff00) para azul (#0000ff)
    for (let i = 0; i < 250; i++) {
        let r = 0;
        let g = 255 - Math.round(i * 255 / 255);
        let b = Math.round(i * 255 / 255);
        colors.push(`rgba(${r}, ${g}, ${b}, 0.5)`);
    }

    // Gerar 250 cores interpolando de azul (#0000ff) para vermelho (#ff0000)
    for (let i = 0; i < 250; i++) {
        let r = Math.round(i * 255 / 255);
        let g = 0;
        let b = 255 - Math.round(i * 255 / 255);
        colors.push(`rgba(${r}, ${g}, ${b}, 0.5)`);
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

    keyframes += `    100% {\n        background: radial-gradient(circle, ${colors.join(", ")});\n    }\n}`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    document.querySelector('.background').style.animation = 'pulseGradient 50s infinite linear';
} generateKeyframes();
