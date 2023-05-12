let form=document.querySelector('form')
let allInputs=document.querySelectorAll('.form-control')
form.addEventListener('submit', function(event){
    event.preventDefault();
    let logObj={
     emailAddress: allInputs[0].value,
     password: allInputs[1].value
    }
    let userData=JSON.parse(localStorage.getItem('dataOfUsers'))||[]
    let matchedUser=userData.find(item=>item.emailAddress===logObj.emailAddress&&item.password===logObj.password)
    if(matchedUser){
        alert('you have successfully loged in')
        window.location.href='http://127.0.0.1:5500/03.05-JS.storage-myself/welcome.html'
    }else{
        alert('wrong data')
    }
})