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