let allOffers=document.querySelector('.all-offers')
let searchInput=document.querySelector('#search')
let sortBtn=document.querySelector('.fa-sort')
let loadMore=document.querySelector('#loadMore')
const BASE_URL="http://localhost:8000/offers"
const FAV_URL="http://localhost:8000/fav"
function fillData(arr){
    allOffers.innerHTML=""
    arr.forEach(element => {
        allOffers.innerHTML+=`
        <div class="single-offer">
        <img src="./images/${element.image}" alt="">
        <div class="offer-text">
            <h4>${element.exercise}</h4>
            <p>${element.description}</p>
            <button onclick="edit(${element.id})">edit</button>
            <button onclick="addFav(${element.id})">Add fav</button>
        </div>
    </div>
        `
    });
}
let arrOfData=[]
let partOfData=[]
let count=3
async function getData(){
    const res= await axios(BASE_URL)
    arrOfData=await res.data
     partOfData=[...arrOfData].slice(0,count)
     fillData(partOfData)
}
getData()
let searched=[]
let isSearched=false
function searchName(){
    searchInput.addEventListener('input', function(e){
        isSearched=true
        searched=partOfData.filter((item)=>item.exercise.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        fillData(searched)
    })
}
searchName()
let bool="asc"
let sorted=[]
function sortName(){
    sortBtn.addEventListener('click', function(){
        if(bool==="asc"){
          bool="dsc"
          isSearched?sorted=searched.sort((a,b)=>a.exercise.localeCompare(b.exercise)):sorted=partOfData.sort((a,b)=>a.exercise.localeCompare(b.exercise))
        }else if(bool==="dsc"){
          bool="asc"
          isSearched?sorted=searched.sort((a,b)=>b.exercise.localeCompare(a.exercise)):sorted=partOfData.sort((a,b)=>b.exercise.localeCompare(a.exercise))
        }
        fillData(sorted)
    })
}
sortName()
loadMore.addEventListener('click',function(){
    count+=3;
    let arr = arrOfData.slice(0,count)
    fillData(arr)
    function searchName(){
        searchInput.addEventListener('input', function(e){
            isSearched=true
            searched=arr.filter((item)=>item.exercise.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
            fillData(searched)
        })
    }
    searchName()
    function sortName(){
        sortBtn.addEventListener('click', function(){
            if(bool==="asc"){
              bool="dsc"
              isSearched?sorted=searched.sort((a,b)=>a.exercise.localeCompare(b.exercise)):sorted=arr.sort((a,b)=>a.exercise.localeCompare(b.exercise))
            }else if(bool==="dsc"){
              bool="asc"
              isSearched?sorted=searched.sort((a,b)=>b.exercise.localeCompare(a.exercise)):sorted=arr.sort((a,b)=>b.exercise.localeCompare(a.exercise))
            }
            fillData(sorted)
        })
    }
    sortName()
})
function edit(id){
    window.location.href=`add-edit.html?id=${id}`
}
async function addFav(id){
    arrOfData.filter((el)=>{
        el.id==id
        ?obj={
           image:el.image,
           exercise:el.exercise,
           description:el.description
        }
        :undefined
    })
  await axios.post(FAV_URL,obj)
  window.location.href="fav.html"
}
////failed way///////
// function searchName(arrr){
//     searchInput.addEventListener('input', function(e){
//         isSearched=true
//         searched=arrr.filter((item)=>item.exercise.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
//         fillData(searched)
//     })
// }
// searchName(partOfData)
// function sortName(arrr){
//     sortBtn.addEventListener('click', function(){
//         if(bool==="asc"){
//           bool="dsc"
//           isSearched?sorted=searched.sort((a,b)=>a.exercise.localeCompare(b.exercise)):sorted=arrr.sort((a,b)=>a.exercise.localeCompare(b.exercise))
//         }else if(bool==="dsc"){
//           bool="asc"
//           isSearched?sorted=searched.sort((a,b)=>b.exercise.localeCompare(a.exercise)):sorted=arrr.sort((a,b)=>b.exercise.localeCompare(a.exercise))
//         }
//         fillData(sorted)
//     })
// }
// sortName(partOfData)
// loadMore.addEventListener('click', function(){
//     count+=3;
//     let arr = arrOfData.slice(0,count)
//     fillData(arr)
//     searchName(arr)
//     sortName(arr)
// })


