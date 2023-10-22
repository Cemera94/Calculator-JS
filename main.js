//napraviti funkciju koja pravi izgled digitrona
//dodavanje event-listenera na svaki broj

let container = document.querySelector('.container');
let numContainer = "";
let numContainer2 = "";
let result = 0;
let operation = ['+', '-', '*', '/'];

main();

let header = document.querySelector('.header');

function main() {

    container.innerHTML = `${createHead()}
    <div class="main-container">${createNumbers()}
    </div>
    `;
    createNumButtons();
    /* createOperationButtons(); */
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

/* function createOperationsContainer() {
    let text = "";

    text += `<div class="operationContainer"></div>`;

    return text;
} */

function createNumButtons() {
    let numbersContainer = document.querySelector('.numbersContainer')
    for (let i = 0; i < 16; i++) {
        numbersContainer.innerHTML += `<div class="numBox"></div>`
    }

    let allNumBoxes = document.querySelectorAll('.numBox');

    allNumBoxes.forEach((box, index) => {
        box.innerHTML = index + 1;
    
        if (index == 9) {
            box.innerHTML = 0;
        } else if (index == 10) {
            box.innerHTML = 'C'
            box.addEventListener('click', clearCalculator);
        } else if (index == 11) {
            box.innerHTML = '=';
        } else if (index == 12) {
            box.innerHTML = '/'; 
        } else if (index == 13) {
            box.innerHTML = '*'
        } else if (index == 14) {
            box.innerHTML = '+'
        } else if (index == 15) {
            box.innerHTML = '-'
        }
    })

    showNum();
}

function showNum() {
    let allNumBoxes = document.querySelectorAll('.numBox');


    allNumBoxes.forEach(box => {
        box.addEventListener('click', function click1() {
        
            if (this.innerHTML === "C") {
                clearCalculator();
            }else {
                numContainer += this.innerHTML;
                header.innerHTML += this.innerHTML;
    
                if (this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/") {
                    header.innerHTML = "";
                    showNum2();
                } 
            }

            
        })
    })
}

function showNum2() {
    let allNumBoxes = document.querySelectorAll('.numBox');

    allNumBoxes.forEach(box => {
        box.addEventListener('click', function click2() {

            if (this.innerHTML === "C") {
                clearCalculator();
            }else{
                numContainer2 += this.innerHTML;
                header.innerText += this.innerHTML.slice(0,-1);
    
                if (this.innerHTML === "=") {
                    header.innerHTML = "";
                    calculate();
                }
            }
           
        })
    })
}

function calculate() {  
    
    if (numContainer === "" || numContainer2 === "") {
        result = 0;
    }else{
        let num2length = numContainer2.length;
    
        numContainer = numContainer.slice(0, -num2length);
    
        numContainer2 = numContainer2.slice(0, -1); 
    
        console.log(numContainer);
    
    
        for (let i = 0; i < operation.length; i++) {
            if (numContainer[numContainer.length-1] === operation[i]) {
    
                switch (operation[i]) {
                    case '+':
                        result = Number(numContainer.slice(0, -1)) + Number(numContainer2);
                        break;
                    case '-':
                        result = Number(numContainer.slice(0, -1)) - Number(numContainer2);
                        break;
                    case '*':
                        result = Number(numContainer.slice(0, -1)) * Number(numContainer2);
                        break;
                    case '/':
                        result = Number(numContainer.slice(0, -1)) / Number(numContainer2);
                        break;
                    // Dodajte dodatne slučajeve prema potrebi
                    default:
                        console.log('Nepodržana operacija: ' + operation[i]);
                }
            }
        } 
        
    
        header.innerHTML = result;
    }
    
    
}


function clearCalculator() {
    numContainer = "";
    numContainer2 = "";
    result = 0;
    header.innerHTML = "";
}
