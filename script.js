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
    outpuDisplay.textContent=eval(inputDisplay.textContent);
})