let form=  document.querySelector('form')
let inputImage=document.querySelector('#inputImage')
let prodName=document.querySelector('#prodName')
let prodPrice=document.querySelector('#prodPrice')
let heading=document.querySelector('h1')
let BASE_URL="http://localhost:8080/products"
let id= new URLSearchParams(window.location.search).get('id')
async function createProd(){
    if(prodName.value&&prodPrice.value&&inputImage.value){
        const prod={
            image:inputImage.value.split("\\")[2],
            prodName:prodName.value,
            prodPrice:prodPrice.value
        }
        await axios.post(BASE_URL, prod)
        window.location.href='index.html'
    }else{
        alert('pls fill the form')
    }
}
if(id){
   async function getProd(){
    const res=await axios(`${BASE_URL}/${id}`)
    const data=await res.data
    console.log(data);
    prodName.value=data.prodName
    prodPrice.value=data.prodPrice
   }
   getProd()
}
async function editProd(){
    if(prodName.value&&prodPrice.value&&inputImage.value){
        const editedProd={
            image:inputImage.value.split("\\")[2],
            prodName:prodName.value,
            prodPrice:prodPrice.value
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
        editProd()
    }else{
        createProd()
    }
})

