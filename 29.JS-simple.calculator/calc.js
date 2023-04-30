let result=document.querySelector('#result')
let value1=document.querySelector('#value1')
let value2=document.querySelector('#value2')
let addition=document.querySelector('#addition')
let substract=document.querySelector('#substract')
let multiply=document.querySelector('#multiply')
let division=document.querySelector('#division')
let reset=document.querySelector('#reset')
addition.addEventListener('click',function(){
    let num1 = parseFloat(value1.value);
    let num2 = parseFloat(value2.value);
    result.innerHTML = num1 + num2;
    if(!num1 || !num2){
        alert('Please enter the numbers')
    }
})
// substract.addEventListener('click',function(){
//     let num1 = parseFloat(value1.value);
//     let num2 = parseFloat(value2.value);
//     result.innerHTML = num1 - num2;
//     if(!num1 || !num2){
//         alert('Please enter the numbers')
//     }
// })

multiply.addEventListener('click',function(){
    let num1 = parseFloat(value1.value);
    let num2 = parseFloat(value2.value);
    result.innerHTML = num1*num2;
    if(!num1 || !num2){
        alert('Please enter the numbers')
    }
})
division.addEventListener('click',function(){
    let num1 = parseFloat(value1.value);
    let num2 = parseFloat(value2.value);
    result.innerHTML = num1/num2;
    if(!num1 || !num2){
        alert('Please enter the numbers')
    }
})
reset.addEventListener('click',function(){
    result.innerHTML = "";
    value1.value="";
    value2.value="";
     
})