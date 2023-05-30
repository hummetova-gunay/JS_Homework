let allProducts=document.querySelector('#section-products')
let FAV_URL="http://localhost:8080/favs"
function showFav(arr){
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
        </div>
       </div>
     </div>
        `
    });
 
}
async function getFav(){
    const res=await axios(FAV_URL)
    const data=await res.data
    showFav(data)
}
getFav()