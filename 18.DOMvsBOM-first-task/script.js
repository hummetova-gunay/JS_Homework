let startBtn=document.querySelector('.start')
let stopBtn=document.querySelector('.stop')
let result=document.querySelector('#result')
let resetBtn=document.querySelector('.reset')
let incrementBtn=document.querySelector('.incr')
let decrementBtn=document.querySelector('.decr')
let number=document.querySelector('.input-number')

let interval=0;
let counter=0
startBtn.addEventListener('click', function () {
    interval= setInterval(() => {
        counter++;
        result.innerText=counter+number
    }, 1000);
})
stopBtn.addEventListener('click', function () {
    counter=0
    clearInterval(interval)
})
incrementBtn.addEventListener('click',function(){
    counter+=1
})
decrementBtn.addEventListener('click',function(){
    counter-=1
})
 resetBtn.addEventListener('click',function(){
    result.innerText=counter;
     counter=0;
      clearInterval(interval)
 })

