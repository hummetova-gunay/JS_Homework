// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
let textofFirstLetters=""
function secretName(anyArray) {
    anyArray.sort((a,b)=>a.localeCompare(b))
    let firstLetters=anyArray.map((element)=>element[0])
 return  textofFirstLetters =firstLetters.join('')
     
}
console.log(secretName(names1));
console.log(secretName(names2));
console.log(secretName(names3));

// 2.Manipulate array///////////////////////////////////////////////////////
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]
// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
users.forEach((element) => {
    (element.surname[0] === "R") & (element.uni === "UNEC")
      ? console.log(element)
      : null;
  });
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
users.forEach((element) => {
    (element.age === "22") & (element.name[0] === "A")
      ? console.log(element)
      : null;
  });
  
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
const newArr=[]
newArr.push(users.map((element)=>element.gender==='male'?`Mr ${element.name}` :`Ms ${element.name}`))
console.log(newArr);
// 2.4.Sort users by age (ascending).

users.sort((a,b)=>a.age-b.age)
console.log(users);

// 3.Shuffle array////////////////////////////////////////////////////////////////////
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function shuffle(anyArray) {
    anyArray.sort(() => Math.random() - 0.5)
    return anyArray
}
console.log(shuffle(letters));
console.log(shuffle(numbers));

// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
const newPrice=arr4.map((element)=>element.price/2)
console.log(newPrice);

// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251
// const reversedNumbers=[]
// function reverseNum(number){
//     let text=number.toString()
//     const arrayOfNumber=text.split('')
//     reversedNumbers.push(text,arrayOfNumber.reverse().join(''))
//     return reversedNumbers
// }
// console.log(reverseNum(num1).join(''));
// console.log(reverseNum(num2).join(''));
// console.log(reverseNum(num3).join(''));
function reverseNum(num) {
    let str = num.toString();
    let reverseStr = str.split("").reverse().join("");
    let result = str + reverseStr;
    return result;
  }
  console.log(reverseNum(num1))
   console.log(reverseNum(num2))
   console.log(reverseNum(num3))