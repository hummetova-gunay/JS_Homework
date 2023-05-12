let resetBtn=document.querySelector('#reset')
let posNeg=document.querySelector('#pos-neg')
let percentage=document.querySelector('#percentage')
let fraction=document.querySelector('#fraction')
let equal=document.querySelector('#equal')
let numbers=document.querySelectorAll('.number')
let operation=document.querySelectorAll('.operation')
let result=document.querySelector('#result')
let screen=document.querySelector('#screen')
let myBtn=document.querySelectorAll('.my-btn')

let value=0
 numbers.forEach(elem=>{
    elem.addEventListener('click',function(){
      elem.setAttribute("value", elem.innerHTML)
    value =elem.value
      console.log(value);
    })
})

let ops=0
operation.forEach(el=>{
    el.addEventListener('click', function(){
       el.setAttribute('value', el.innerHTML)
       ops=el.value
       console.log(ops);
    })
})

myBtn.forEach(item=>{
    item.addEventListener('click',function(){
        screen.value+=item.value
        equal.addEventListener('click',function(){
           result.innerHTML= eval(screen.value)
        })
    })
})
resetBtn.addEventListener('click',function(){
    screen.value=''
    result.innerHTML=0
})
percentage.addEventListener('click', function(){
    result.innerHTML=screen.value/100
})
posNeg.addEventListener('click', function(){
    if(screen.value>0){
       screen.value=-screen.value
    }else{
        screen.value=+screen.value
    }
})

