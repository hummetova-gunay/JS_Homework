let detail=document.querySelector('#detail')
let countryName= new URLSearchParams(window.location.search).get('name')
// console.log(countryName);
 function detailCountry(){
     axios(`https://restcountries.com/v3.1/name/${countryName}`).then(res=>{
        console.log(res.data);
       detail.innerHTML=`
       <div class="col col-lg-6">
             <img src="${res.data[0].flags.svg}" alt="">
            </div>
            <div class="detail-text col col-lg-6">
               <h3>${res.data[0].name.common}</h3>
             <div class="row">
                <div class="col-6">
                    <p>Native name:${res.data[0].name.nativeName.ara?.common}</p>
                    <p>Population:${res.data[0].population}</p>
                    <p>Region:${res.data[0].region}</p>
                    <p>Sub region:${res.data[0].subregion}</p>
                    <p>Capital:${res.data[0].capital[0]}</p>
                </div>
                <div class="col-6">
                    <p>Top level domain:${res.data[0].tld[0]}</p>
                    <p>Currencies:${res.data[0].currencies.DZD?.name}</p>
                    <p>Languages:${res.data[0].languages.ara}</p>
                </div>
             </div> 
             <h5>Border countries:</h5>
             <span>${res.data[0].borders[0]}</span>
             <span>${res.data[0].borders[1]}</span>
             <span>${res.data[0].borders[2]}</span>
            </div>
       `
    })
}
detailCountry()