let allServices=document.querySelector('.all-services')
let loadMore=document.querySelector('.loadMore')
let searchName=document.querySelector('#searchName') 
let sortBtn=document.querySelector('.fa-sort')
let BASE_URL="http://localhost:8080/services"
function fillData(arr){
    allServices.innerHTML=''
    arr.forEach(element => {
        allServices.innerHTML+=`
        <div class="single-service">
        <img src="./images/${element.img}" alt="">
        <div class="service-text">
            <h4> ${element.name}</h4>
            <p>${element.text}</p>
            <button onclick="edit(${element.id})">Edit</button>
            <button onclick="deleteItem(${element.id})">Delete</button>
            <button>add to favourites</button>
        </div>
       </div>
        `
    });
}
let allData=[]
let partData=[]
let num=3
async function getData(){
    const res= await axios(BASE_URL)
    const data=await res.data
    allData=data
    partData=[...allData]
    fillData(partData.slice(0,num))
}
getData()
loadMore.addEventListener('click', function(){
    num+=3
    fillData(partData.slice(0,num))
})
let searchedArr=[]
let isSearched=false
searchName.addEventListener('input', function(e){
    isSearched=true
     searchedArr= partData.filter(item=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
     fillData(searchedArr)
})
let sortedArr=[]
let asc='asc'
sortBtn.addEventListener('click', function(){
   if(asc=='asc'){
    asc='dsc'
    isSearched?sortedArr=searchedArr.sort((a, b)=>a.name.localeCompare(b.name)):sortedArr=partData.sort((a, b)=>a.name.localeCompare(b.name))
    fillData(sortedArr)
   }else if(asc=='dsc'){
    asc='default'
    isSearched?sortedArr=searchedArr.sort((a, b)=>b.name.localeCompare(a.name)):sortedArr=partData.sort((a, b)=>b.name.localeCompare(a.name))
    fillData(sortedArr)
   }else{
    asc="asc"
    isSearched?fillData(searchedArr):fillData(partData)
   }
})
function deleteItem(id){
   axios.delete(`${BASE_URL}/${id}`)
}
function edit(id){
    window.location.href=`add-edit.html?id=${id}`
}

