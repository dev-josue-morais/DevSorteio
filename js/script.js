const numberFrom = document.querySelector("#start");
const numberTo = document.querySelector("#end");
const button = document.querySelector("button");

button.disabled = true; // Desabilitar o botão inicialmente

// Função para verificar se os dois números estão válidos
function validateInputs() {
    const fromValue = parseInt(numberFrom.value);
    const toValue = parseInt(numberTo.value);
    
    // Ativar o botão apenas se 'numberFrom' for menor que 'numberTo' e ambos forem válidos
    if (numberFrom.value !== "" && numberTo.value !== "" && fromValue < toValue) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// Adicionar eventos de input para verificar a validade dos números
numberFrom.addEventListener("input", function() {
    // Se o valor de 'numberFrom' não estiver vazio, habilita o campo 'numberTo'
    if (numberFrom.value !== "") {
        numberTo.disabled = false;

        // Se o valor de 'numberFrom' for alterado, resetar o campo 'numberTo'
        numberTo.value = "";
    } else {
        numberTo.disabled = true; // Desabilita 'numberTo' se 'numberFrom' estiver vazio
        numberTo.value = ""; // Limpa o valor de 'numberTo'
    }

    validateInputs(); // Verificar se os inputs estão válidos
});

numberTo.addEventListener("input", function() {
    // Se 'numberTo' for menor ou igual a 'numberFrom', limpar o valor de 'numberTo'
    if (parseInt(numberTo.value) <= parseInt(numberFrom.value) && numberTo.value !== "") {
        numberTo.setCustomValidity("O valor de 'to' deve ser maior que o valor de 'from'");
    } else {
        numberTo.setCustomValidity(""); // Limpa qualquer erro de validação
    }

    validateInputs(); // Verificar se os inputs estão válidos
});

// Evento de clique para gerar o número aleatório
button.addEventListener("click", function() {
    const fromValue = parseInt(numberFrom.value);
    const toValue = parseInt(numberTo.value);

    // Gerar o número aleatório entre 'from' e 'to'
    let randomInt = Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue;
    alert(`Número sorteado: ${randomInt}`);
});


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
    document.querySelector('.background').style.animation = 'pulseGradient 10s infinite linear';
} generateKeyframes();
