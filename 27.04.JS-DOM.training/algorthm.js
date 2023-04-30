// // 1 Write a function that takes a string as input and returns the number of vowels in the string(DONE).
// let vowels=['a','e','o','u','i']
// let count=0
// // function countOfVowels(str) {
// //    for (let i=0;i<str.length;i++){
// //     vowels.includes(str[i])?count++ :null;
// //    }
// //    return count
// // }
// // console.log(countOfVowels('salam'));
// function countOfVowels(str) {
//     return str.split('').filter(item=>vowels.includes(item))
// }
// console.log(countOfVowels('salam').length);
// //2 Write a function that takes two sorted arrays and merges them into a single sorted array.(DONE)
// function sortedArrays(arr1,arr2) {
//   return  (arr1.sort((a,b)=>a-b).concat(arr2.sort((a,b)=>a-b))).sort((a,b)=>a-b)
// }
// console.log(sortedArrays([2,1,3,46,5],[23,5,7,1]));
//3 Write a function that takes an array of integers and returns the index of the first occurrence of a number that appears more than once.(FAILED)
function repeatedNumber (arr) {
    let result = arr.filter((item,i)=>i != arr.indexOf(item))[0]
   return arr.indexOf(result)
}
console.log(repeatedNumber([1,2,4,4,5,6,7,8,99,9,9]));
// //4 Write a function that takes an array of integers and returns the maximum sum of any contiguous subarray 
// // (i.e. a subarray in which the elements are contiguous).(DONE)
// let sum=0
// function maxSum(arr) {
//    return arr.map(element=>element.sort((a,b)=>b-a)[0]+element.sort((a,b)=>b-a)[1])
// }
// console.log(maxSum([[1,2],[3,5,6],[5,3,6]]));

// //5 Write a function that takes an array of integers and returns the kth smallest element in the array.(DONE)
// function kthELem(arr,k) {
//     return arr.sort((a,b)=>a-b)[k]
// }
// console.log(kthELem([1,2,3,10,5,9,3,6],4));

//6 Write a function that takes a binary tree as input and returns the sum of all the values in the tree