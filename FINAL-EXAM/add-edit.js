let BASE_URL='http://localhost:8080/services'
let id= new URLSearchParams(window.location.search).get('id')
console.log(id);
let imgInput=document.querySelector('#imgInput')
let nameInp=document.querySelector('#nameInp')
let textInp=document.querySelector('#textInp')
let form=document.querySelector('form')
async function createService(){
    if(nameInp.value&&textInp.value&&imgInput.value){
        let obj={
            img:imgInput.value.split('//')[2],
            name:nameInp.ariaValueMax,
            text:textInp.value
        }
        await axios.post(BASE_URL, obj)
        window.location.href='index.html'
    }else{
        alert('pls fill the form')
    }

}
if(id){
    axios(BASE_URL).then(res=>{
        res.data.forEach(element => {
            nameInp.value=element.name
            textInp.value=element.text
        });
    })
}
async function editService(){
    if(nameInp.value&&textInp.value&&imgInput.value){
        const editedProd={
            img:imgInput.value.split("\\")[2],
            text:textInp.value,
            name:nameInp.value
           }
          await axios.patch(`${BASE_URL}/${id}`, editedProd)
          window.location.href="index.html"
    }else{
        alert('pls fill the form')
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(id){
        editService()
    }else{
        createService()
    }
})