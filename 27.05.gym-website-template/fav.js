let allCards= document.querySelector('.all-cards')
const FAV_URL="http://localhost:8000/fav"
function fill(arr){
    allCards.innerHTML=""
    arr.forEach(element => {
        allCards.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="./images/${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.exercise}</h5>
          <p class="card-text">${element.description}</p>
          <a href="home.html" class="btn btn-primary">Go back</a>
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