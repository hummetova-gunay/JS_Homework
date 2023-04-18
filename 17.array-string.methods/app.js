// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
const newArr1=[]
function getUpper(anyArr) {
    for(let item of anyArr){
         texts=item[0].toUpperCase()+item.slice(1,-1)+item.at(-1).toUpperCase();
         newArr1.push(texts)
    }
}
getUpper(arr1)
console.log(newArr1)


// 2.String and Array
let text = 'We are MERN-Stack developers'
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
let newText1= text.replace('MERN-Stack','Front-end')
console.log(newText1)

// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newText2=text.replaceAll('e','a')
console.log(newText2.toLowerCase());

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
let newText3=text.concat('in Microsoft!')
console.log(newText3);

// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
 let newText4=text.toLowerCase()
 const indexesOfr=[]
for (let i=0;i<=newText4.length;i++){
    if(newText4[i]=='r'){
        indexesOfr.push(i)
    }
}console.log(indexesOfr)

// 5.Find index of first 'r' (excepting 'are').  // 9
let indexR=text.toLocaleLowerCase().indexOf('r',5)
console.log(indexR)

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let vowels = ['a', 'i', 'o', 'u', 'e']
const arrOfVowels=[]
for (let i = 0; i < text.length; i++){
   let vowelLetter=text[i].toLowerCase();
   if(vowels.includes(vowelLetter)){
    arrOfVowels.push(vowelLetter)
   }
}
// console.log(arrOfVowels)

const vowelSet = new Set(arrOfVowels);
const uniqueVowels = [...vowelSet];
console.log(uniqueVowels); 

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr3'.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },

]
let sumOfArea=0
 let calcArea=(anyArr)=>{
    arr3.forEach((item,i,ar)=>{
        if(item.region.length==6){
           sumOfArea+=item.area
        }
    })
    return sumOfArea
}
console.log(calcArea(arr3))

// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]

console.log(arr4.sort((a,b)=>a-b))

// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity))


// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
// let sortedByLength=[]
// sortedByLength.push(
// colors.sort((a, b) => {
//   return a.length - b.length;
// }))
// console.log(sortedByLength);


colors.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

console.log(colors);