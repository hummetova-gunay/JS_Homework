let arrivals=document.querySelector('.arrivals')
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
                        <button>
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
async function getFav(){
    const res=await axios(FAV_URL)
    const data= await res.data
    fill(data)
}
getFav()
let faved=document.querySelector('.faved')
axios(FAV_URL).then((res)=>{
    faved.innerHTML=`<img src="./images/heart.png" alt="">(${res.data.length})`
})