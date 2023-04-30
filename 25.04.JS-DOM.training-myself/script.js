//1 Create a simple webpage with a button. 
// When the button is clicked, display an alert message on the page.(DONE)
let btn=document.createElement('button')
document.body.append(btn)
btn.append('Click me')
btn.addEventListener('click',function(){
    alert('ARE U SURE TO EXIT?')
})

//2 Create a webpage with a form that allows users to enter their name and age. When the form is submitted, 
// display a message on the page that greets the user by name and tells them their age.(DONE)
let body=document.querySelector('body')
let formTag=document.createElement('form')
formTag.setAttribute('action','')
let labelName=document.createElement('label')
labelName.setAttribute("for","name")
labelName.innerHTML="enter ur name:"
let inputName=document.createElement('input')
inputName.setAttribute("type","text")
inputName.setAttribute('placeholder',"enter ur name")
let labelAge=document.createElement('label')
labelAge.setAttribute("for","age")
labelAge.innerHTML="enter ur age:"
let inputAge=document.createElement('input')
inputAge.setAttribute("type","text")
inputAge.setAttribute('placeholder',"enter ur age")
let submitBtn=document.createElement('input')
submitBtn.setAttribute('type','submit')
let br= document.createElement('br')
body.append(formTag)
formTag.append(labelName, inputName,br)
let br2= document.createElement('br')
formTag.append(labelAge, inputAge,br2)
formTag.append(submitBtn)

submitBtn.addEventListener('click',function(){
    alert('Your response submitted')
})
// Create a webpage that displays a list of items. 
// Add a button that, when clicked, adds a new item to the list.(DONE)
let addButton=document.createElement('button')
addButton.append('add new element')
body.append(addButton)
let ul = document.createElement('ul')
body.append(ul)
// let parentUl=ul.parentElement("div")
// body.append("div")
let arr=['Gunay','Gunay','Gunay',"Gunay"]
addButton.addEventListener('click',function(){
    let name=''
    arr.forEach(element=>{
      name =document.createElement('li')
       name.innerText=element
      
    }) 
    ul.append(name)
})