let darkMode=document.querySelector('.dark-mode')
let searchZone=document.querySelector('#searchZone')
let selection=document.querySelector('.form-select')
let region;
let cards=document.querySelector('.all-cards')

selection.addEventListener('change', function(e){
    region=e.target.value
    console.log(region);
})
function fillCards(arr){
    cards.innerHTML=''
    arr.forEach(element => {
        cards.innerHTML+=`
        <div class="card col-3" style="width: 16rem;">
        <img src="${element.flags.svg}" class="card-img-top" alt=""  height="150px">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Population:${element.population}</p>
          <p class="card-text">Region:${element.region}</p>
          <p class="card-text">Capital:${element.capital}</p>
          <a href="details.html?name=${element.name}" class="btn btn-primary">details</a>
        </div>
        </div>
        `
    });
}
     axios('https://restcountries.com/v2/all').then((res)=>{
        fillCards(res.data)
    })


window.onload=function(){
    localStorage.getItem("dark") && document.body.classList.add("dark-body");
    darkMode.addEventListener('click', function(){
        if(localStorage.getItem('dark')){
            localStorage.removeItem('dark')
            document.body.classList.remove('dark-body')
        }else{
            localStorage.setItem('dark','mode')
            document.body.classList.add('dark-body')
        }
    })
}

// searchZone.addEventListener('input', function(e){
//      axios('https://restcountries.com/v2/all').then((res)=>{
//         let searchedCountries=[]
//         searchedCountries=res.data.filter((el)=>{
//             return el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
//         })
//         fillCards(searchedCountries)
//     })
// })
let arrData=[]
axios('https://restcountries.com/v2/all').then(res=>{
    arrData=res.data
})
searchZone.addEventListener('input', function(e){
    let searchedCountries=[]
    searchedCountries=arrData.filter(item=>{
        return item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    fillCards(searchedCountries)
})
selection.addEventListener('change', function(){
    let filtered=[]
    filtered=arrData.filter(el=>{
        return el.region.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    })
    fillCards(filtered)
})

