let form=document.querySelector('form')
let allInputs=document.querySelectorAll('.form-control')
let submitBtn=document.querySelector('.btn')
let userData=JSON.parse(localStorage.getItem('dataOfUsers'))|| []
form.addEventListener('submit', function(event){
   event.preventDefault();
   let userObject={
    userName: allInputs[0].value,
    emailAddress: allInputs[1].value,
    password: allInputs[2].value
   }
   let dublicateUser=userData.find(user=>user.userName===userObject.userName && user.emailAddress===userObject.emailAddress)
   if(dublicateUser){
    alert('You have already singed in')
   }else if(allInputs[0].value&&allInputs[1].value&&allInputs[2].value){
    userData.push(userObject)
    localStorage.setItem('dataOfUsers',JSON.stringify(userData))
    submitBtn.disabled=true
    alert('You have successfully signed up')
   }else{
      alert('pls fill out the form')
   }
})
console.log(JSON.parse(localStorage.getItem('dataOfUsers')));