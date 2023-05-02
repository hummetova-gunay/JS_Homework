let resetBtn=document.querySelector('#reset')
let posNeg=document.querySelector('#pos-neg')
let percentage=document.querySelector('#percentage')
let division=document.querySelector('#division')
let multiply=document.querySelector('#multiply')
let substraction=document.querySelector('#substraction')
let addition=document.querySelector('#addition')
let fraction=document.querySelector('#fraction')
let equal=document.querySelector('#equal')
let numbers=document.querySelectorAll('.number')
let operation=document.querySelectorAll('.operation')
let result=document.querySelector('#result')
let screen=document.querySelector('#screen')
// numbers.forEach(item=>console.log(item.innerHTML))
numbers.forEach(item=>{
   item.addEventListener('click',function(){
        screen.value+=item.innerHTML
   })
})
operation.forEach(item=>{
    item.addEventListener('click',function(){
     screen.value+=item.innerHTML
    })
})
resetBtn.addEventListener('click',function(){
    screen.value=''
})
posNeg.addEventListener('click',function(){
numbers.forEach(item=>{
    item.addEventListener('click',function(){
        
        if(item.value==Math.abs(item.value)){
           screen.value=Math.abs(item.value)*(-1)
        }
        screen.value=''
    })
})
})