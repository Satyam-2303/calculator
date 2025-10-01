const inputDisplay=document.querySelector('.input');
const outpuDisplay=document.querySelector('.output');
const numberInput=document.querySelectorAll('.number');
const operatorInput=document.querySelectorAll('.operator')

function inputting(nodelist){
    nodelist.forEach(element => {
        element.addEventListener('click',()=>{
            inputDisplay.textContent+=element.textContent;
            console.log(inputDisplay);
        })
    });
}
inputting(numberInput);
inputting(operatorInput);

const allClear=document.querySelector('.allClear');

allClear.addEventListener('click',() => {
    inputDisplay.textContent='';
    outpuDisplay.textContent='';
})

const clear=document.querySelector('.clear');

clear.addEventListener('click',() => {
    inputDisplay.textContent=inputDisplay.textContent.slice(0,-1);
})

const equalTo=document.querySelector('.equal');

equalTo.addEventListener('click', () => {
    outpuDisplay.textContent=evaluateMathExpression(inputDisplay.textContent);
})

function evaluateMathExpression(expr) {
    const tokens = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);
    if (!tokens) return NaN;
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token === '*' || token === '/') {
            const a = parseFloat(stack.pop());
            const b = parseFloat(tokens[++i]);
            let result;

            if (token === '/') {
                result = a / b;
            } else {
                result = a * b;
            }

            stack.push(result);
        } else {
            stack.push(token);
        }
    }
    let result = parseFloat(stack[0]);
    for (let i = 1; i < stack.length; i += 2) {
        const operator = stack[i];
        const num = parseFloat(stack[i + 1]);

        if (operator === '+') {
            result = result + num;
        } else if (operator === '-') {
            result = result - num;
        }
    }

    return parseFloat(result.toFixed(2));
}

