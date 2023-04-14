///////////// 1.Return the First Element in an Array.
const arr1=[1,2,3];
const arr2=[80,5,100];
const arr3=[-500,0,50];
function getFirstValue(anyArray) {
    let n=anyArray[0];
    return n
}console.log(getFirstValue(arr1))
console.log(getFirstValue(arr2))
console.log(getFirstValue(arr3))


////////////// 2.Return the Last Element in an Array.
const arrLast1=[1, 2, 3]
const arrLast2=["cat", "dog", "duck"]
const arrLast3=[true, false, true]
function getLastValue(arr) {
    let a=arr[arr.length-1];
    return a 
}console.log(getLastValue(arrLast1))
console.log(getLastValue(arrLast2))
console.log(getLastValue(arrLast3))


////////////// 3.Find the Index
// const textArray1=["hi", "edabit", "fgh", "abc"];
// const textArray2=["Red", "blue", "Blue", "Green"];
// const textArray3=["a", "g", "y", "d"];
// const textArray4=["Pineapple", "Orange", "Grape", "Apple"];
// let textIndex =function(anyPart){
//     for(let i =0; i<anyPart.length;i++){
//         if(anyPart[i]=="")
//     }
// }


/////////////// 4.Return the Sum of Two Numbers
function addition(a,b){
    let sum = a+b;
    console.log(sum)
} 
addition(3,2)
addition(-3,-6)
addition(7,3)

/////////////// 5.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. (used: Arrow function)
(x, y)=>{
    if(x+y<100){
       return true;
    }else{
        return false;
    }
};
console.log(20,85)

//////////////// 6.Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.
function volumeOfObj(width,length,height) {
    let volume= width*length*height;
    return volume
}console.log(volumeOfObj(3,4,5))


///////////////// 7.Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Create a function called "points(twoPointers, threePointers)" and add two parameters to it.
function basketPoint(twoPointers,threePointers) {
    let score = twoPointers*2 + threePointers*3;
    return score
}
console.log(basketPoint(1, 1));
console.log(basketPoint(7, 5));
console.log(basketPoint(38, 8));
// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).
const arr4=[
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
]
function fillInfo(smth) {
    for (let item of smth){
        item.smth ="Ulfat";
        item.surname ="Zakirli";
        item.city="Baku"
    }
    return smth;
}console.log((fillInfo(arr4)))