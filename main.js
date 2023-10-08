//napraviti funkciju koja pravi izgled digitrona
//dodavanje event-listenera na svaki broj

let container = document.querySelector('.container');

main();

function main() {

    container.innerHTML = `${createHead()}
    <div class="main-container">${createNumbers()}
    ${createOperationsContainer()}</div>
    `;
    createNumButtons();
    createOperationButtons();
}

function createHead() {
    let text = "";

    text += `<div class="header"></div>`

    return text;
}

function createNumbers() {
    let text = "";

    text += `<div class="numbersContainer"></div>`;

    return text;
}

function createOperationsContainer() {
    let text = "";

    text += `<div class="operationContainer"></div>`;

    return text;
}

function createNumButtons() {
    let numbersContainer = document.querySelector('.numbersContainer')
    for (let i = 0; i < 12; i++) {
        numbersContainer.innerHTML += `<div class="numBox"></div>`
    }

    let allNumBoxes = document.querySelectorAll('.numBox');

    allNumBoxes.forEach((box, index) => {
        box.innerHTML = index + 1;
    
        if (index == 9) {
            box.innerHTML = 0;
        } else if (index == 10) {
            box.innerHTML = '.'
        } else if (index == 11) {
            box.innerHTML = '=';
        }

        box.addEventListener('click', func)
    })
}

function createOperationButtons() {
    let operationContainer = document.querySelector('.operationContainer')

    for (let i = 0; i < 4; i++) {
        operationContainer.innerHTML += `<div class="operationBox"></div>`
    }

    let allOperationBoxes = document.querySelectorAll('.operationBox');

    let operators = ['+', '-', '*', '/'];

    allOperationBoxes.forEach((box, index) =>{
    box.innerHTML = operators[index];
    })
}



