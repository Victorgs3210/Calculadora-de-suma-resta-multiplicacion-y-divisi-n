
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")

function suma(){
    let suma = parseFloat(num1.value) + parseFloat(num2.value)
    console.log(suma);
}
function resta(){
    let resta = parseFloat(num1.value) - parseFloat(num2.value)
    console.log(resta);
}
function mult(){
    let multi = parseFloat(num1.value) * parseFloat(num2.value)
    console.log(multi);
}
function div(){
    let divi = parseFloat(num1.value) / parseFloat(num2.value)
    console.log(divi);
}


