let menuIcon=document.querySelector('.fa-bars')
let normalNav=document.querySelector('.normal-nav')
let newNavbar=document.querySelector('.new-navbar')
let search=document.querySelector('#search')
let magnifiyingGlass=document.querySelector('#magnifiyingGlass')
// menuIcon.addEventListener('click', function(){
//     console.log(normalNav);
//     normalNav.style.display="none"
//     newNavbar.style.display="block"
// })
let count = 4;
let arrivals=document.querySelector('.arrivals')
let searchInput=document.querySelector('#searchInput')
let sortBtn=document.querySelector('.sortBtn')
let viewmore=document.querySelector('#viewmore')
const BASE_URL="http://localhost:8000/flower"
const FAV_URL="http://localhost:8000/fav-flower"
function fill(arr){
    arrivals.innerHTML=""
    arr.forEach(element => {
        arrivals.innerHTML+=`
        <div class="single-arrival">
                    <div class="image" style="background-image: url(./images/${element.bgImage});">
                    <div class="icons">
                        <button>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onclick="deleteFun(${element.id})">
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        <button onclick="addFav(${element.id})">
                        <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    </div>
                    <div class="text">
                        <p>${element.name}</p>
                        <p class="price">${element.price}</p>
                        <button class="btn">See detail</button>
                    </div>
                </div>
        `
    });
}
let arrOfData=[]
let partOfData=[]
async function getData(){
    const res= await axios(BASE_URL)
    arrOfData=await res.data
     partOfData=[...arrOfData]
    fill(partOfData.slice(0,count))
    // fill(arrOfData)
}
getData()
async function deleteFun(id){
  await axios.delete(`${BASE_URL}/${id}`)
}
search.style.display="none"
magnifiyingGlass.addEventListener('click', function(){
    search.style.display="block"
})
let searched=[]
let isSearched=false
function searchName(){
    searchInput.addEventListener('input', function(e){
        isSearched=true
        console.log(e.target.value);
        searched=arrOfData.filter((item)=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        fill(searched)
    })
}
searchName()
let bool="asc"
let sorted=[]
sortBtn.addEventListener('click', function(){
    if(bool==="asc"){
      bool="dsc"
      isSearched?sorted=searched.sort((a,b)=>a.price-b.price):sorted=arrOfData.sort((a,b)=>a.price-b.price)
    }else if(bool==="dsc"){
      bool="asc"
      isSearched?sorted=searched.sort((a,b)=>b.price-a.price):sorted=arrOfData.sort((a,b)=>b.price-a.price)
    }
    fill(sorted)
})
viewmore.addEventListener('click',function(){
    count+=4;
    console.log(count);
    console.log(viewmore.value);
    let arr = arrOfData.slice(0,count)
    fill(arr)
   if(viewmore.value==="View more"){
       viewmore.value="View less"
       fill(arrOfData.slice(0,count))
   }else{
    viewmore.value="View more"
    fill(partOfData)
   }
})

async function addFav(id){
    arrOfData.filter((el)=>{
        el.id==id
        ?obj={
           name:el.name,
           price:el.price,
           bgImage:el.bgImage
        }
        :undefined
    })
  await axios.post(FAV_URL,obj)
  window.location.href="fav.html"
}
let faved=document.querySelector('.faved')
axios(FAV_URL).then((res)=>{
    faved.innerHTML=`<img src="./images/heart.png" alt="">(${res.data.length})`
})


