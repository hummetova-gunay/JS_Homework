let menuIcon=document.querySelector('.fa-bars')
let mobilePages=document.querySelector('.mobile-pages')
menuIcon.addEventListener('click', function(){
    mobilePages.classList.toggle('show')
})

///////////////////////////////////////

let BASE_URL="http://localhost:8080/products"
let FAV_URL="http://localhost:8080/favs"
let allProducts=document.querySelector('#section-products')
let loadBtn=document.querySelector('#loadMore')
let searchInput=document.querySelector('#searchInput')
let sortBtn=document.querySelector('.fa-sort')
function fillData(arr){
    allProducts.innerHTML=''
    arr.forEach(element => {
        allProducts.innerHTML+=`
        <div class="single-product">
        <img src="./images/${element.image}" alt="">
       <div class="product-text">
        <h3>${element.prodName}</h3>
        <span>$${element.prodPrice}</span>
        <div class="fav-basket">
         <a href="">+Add to cart</a>
         <i class="fa-regular fa-heart" onclick="addFav(${element.id})"></i>
         <i class="fa-solid fa-pen-to-square" onclick="editProd(${element.id})"></i>
        </div>
       </div>
     </div>
        `
    });

}
let alldata=[]
let partofData=[]
let seacrhedArr=[]
let sortedArr=[]
let asc="asc"
let num=4
let isSearched=false
function searchProd(anyArr){
    isSearched=true
    searchInput.addEventListener('input', function(e){
        seacrhedArr=anyArr.filter((item)=>item.prodName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        fillData(seacrhedArr)
    })
}
function sortByname(anyArr){
   sortBtn.addEventListener('click', function(){
    console.log('sorted');
    if(asc==="asc"){
        asc="dsc"
        sortedArr=anyArr.sort((a,b)=>a.prodName.localeCompare(b.prodName))
        fillData(sortedArr)
    }else if(asc==="dsc"){
        asc="asc"
        sortedArr=anyArr.sort((a,b)=>b.prodName.localeCompare(a.prodName))
        fillData(sortedArr)
    }
   })
}

function loadMore(arr){
    num+=4
    loadBtn.addEventListener('click', async function(arr){
            const res= await axios(BASE_URL)
            const data= await res.data
            arr = data
            fillData(arr)
            searchProd(arr)
            sortByname(arr)
        })
}
async function returnData(arr){
    const res= await axios(BASE_URL)
    const data= await res.data
    alldata = data
    arr=[...alldata]
    fillData(arr.slice(0,num))
    searchProd(arr.slice(0,num))
    sortByname(arr.slice(0,num))
    loadMore(arr.slice(0,num))
}
returnData(partofData.reverse())

let x = setInterval(()=>{
    let startDate= new Date("Jan 8, 2024 06:50:20").getTime()
// console.log(startDate);
let now= new Date().getTime()
// console.log(now);
let howFar=startDate-now
// console.log(howFar);
let days =Math.floor(howFar/(24*60*60*1000))
// console.log(days);
let hours = Math.floor((howFar % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((howFar % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((howFar % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.minutes').innerHTML=minutes
    document.querySelector('.seconds').innerHTML=seconds  
    if(howFar<0){
        clearInterval(x)
    } 
},1000);
function editProd(id){
    window.location.href=`add-edit.html?id=${id}`
}
let favArr=[]
function addFav(id){
  favArr= alldata.filter(item=>item.id==id)
   console.log(favArr);
   let obj={
    image:favArr[0].image,
    prodName:favArr[0].prodName,
    prodPrice:favArr[0].prodPrice
   }
   axios.post(FAV_URL, obj)
   window.location.href="fav.html"
}