// 4 Create a webpage with an image that changes when the user clicks a button.
// For example, you could display a different image of a cat each time the button is clicked.(FAILED)




//5 Create a webpage with a countdown timer. 
// When the timer reaches 0, display an alert message on the page.

let p = document.createElement('p')
let body=document.querySelector('body')
let btn = document.createElement('button')
btn.innerHTML='start'
body.append(btn)
body.append(p)
let time=15
let interval
p.innerHTML=`00:${time}`
p.style.border='1px solid black'
p.style.width='80px'
p.style.textAlign='center'
btn.addEventListener('click', function(){
    this.setAttribute('disabled','true')
    time=15 
    clearInterval(interval)
    interval=setInterval(function(){
      time-=1
      p.innerHTML=`00:${time}`
      if(time===0){
        clearInterval(interval)
        alert('you missed')
        btn.disabled=false
      }
    },1000)
})


//Create a webpage that allows users to drag and drop items into a specific area. 
// When an item is dropped into the area, change the background color of the area to indicate that the item has been successfully dropped.

//Create a webpage with a search box that allows users to search for items in a list. 
// When the user submits the search query, highlight the matching items in the list

// let ulElem=document.querySelector('ul')
// let liElem=document.querySelectorAll('li')
// let searchBtn=document.querySelector('#searchBtn')
// let inputSearch=document.querySelector('#inputSearch')
// inputSearch.addEventListener('input', function(){
  
// })

