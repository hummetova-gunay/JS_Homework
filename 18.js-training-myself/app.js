//1. Write a function that takes an array of numbers as input and
//  returns the sum of the squares of all even numbers in the array.
const arrOfnumbers=[1,2,3,4,5,6]
function sumOfEvenSquares(numbers) {
    return numbers.filter(number => number % 2 === 0).reduce((sum, number) => sum + number ** 2, 0); 
  }
  console.log(sumOfEvenSquares(arrOfnumbers))

//2. Write a function that takes an array of strings as input and returns a new array that
//  contains only the strings that have more than 3 characters and start with a vowel.
function filterStrings(array) {
    return array.filter(string => ['a', 'e', 'i', 'o', 'u'].includes(string[0].toLowerCase()) && string.length > 3);
  }
  const arrOfStr=['anam','atam','baci','qardas']
//   console.log(filterStrings(arrOfStr));
const strings = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'avocado'];
console.log(filterStrings(strings),filterStrings(arrOfStr)); 


//3. Write a function that takes an array of numbers as input 
// and returns a new array that contains only the numbers that are prime.
const numbers=[2,4,5,7,89,43,55,60]
// function getPrimes(numbers) {
//  return numbers.map(element=>{ 
//         for (let i = 1; i <=Math.sqrt(element); i++) {
//         if (element % i === 0) {
//           return false;
//         }else {
//             // return element
//         }
//       }
//     }
//     )
//   }
function getPrimes(numbers) {
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    return numbers.filter(isPrime);
}
console.log(getPrimes([1,2,3,4,5,6,7,8]));
  
//4. Write a function that takes an array of integers as input and returns the two numbers that sum up to the largest value. 
// For example, given the input [1, 2, 3, 4, 5], the function should return [4, 5] because they sum up to 9, which is the largest sum.
function maxSum(anyArray) {
 return anyArray.sort((a,b)=>b-a).slice(0,2)
}
console.log(maxSum([1, 2, 3, 4, 5]));
//5. Write a function that takes an array of numbers as input and returns the second-highest number in the array. 
// For example, given the input [1, 5, 2, 8, 3], the function should return 5
function secondMax(anyArray) {
    return anyArray.sort((a,b)=>b-a).slice(0,1)
   }
   console.log(secondMax([1, 2, 3, 4, 5]));
//6. Write a function that takes an array of strings as input and returns the longest string that is a palindrome (i.e., a word that reads the same forwards and backwards).
//  If there are multiple palindromes of the same length, return the first one found. For example, given the input ["ab", "deed", "noon", "level"], the function should return "deed".
function isPalindrome(str) {
     str === str.split('').reverse().join('');
     return `${str} is palindrome`
  }
 console.log(isPalindrome('deed')); 
//7. Write a function that takes an array of objects as input, where each object represents a person and has a "name" property and an "age" property.
//  The function should return a new array of objects that includes only the people who are under 18 years old and whose names start with a vowel.
//8. Write a function that takes an array of numbers as input and returns the median of the array 
// (i.e., the middle number when the array is sorted).
const arr=[1,2,3,4,5,6,7,8,9]
const arr2=[1,2,3,4,5,6,7,8]
let sortedArr=[]
let median=0
function findMedian(anyArr) {
    anyArr.length%2==0 ? median = anyArr[anyArr.length/2] :median=anyArr[(anyArr.length-1)/2]
    return median
}
console.log(findMedian(arr));
console.log(findMedian(arr2));

//9 Create a function that takes an array of numbers and returns an array of all the unique numbers in the array 
// using the Array.filter() and Array.indexOf() methods.
//10 Create a function that takes an array of strings and returns an object with properties representing the frequency of each word in the array.
//  For example, if the array contains "hello world hello", the function should return an object with properties "hello" and "world" and values 2 and 1 respectively, indicating that "hello" occurs twice and "world" occurs once.
//11 Create a function that takes a string and returns an object with properties representing the frequency of each character in the string.
//  For example, if the string contains "hello world", the function should return an object with properties "h", "e", "l", "o", "w", "r", and "d" and values 1, 1, 3, 2, 1, 1, and 1 respectively, indicating that each character occurs once or more in the string.
let obj ={
    name:'Gunay',
    lastName:'Hummatova',
    uni:'GSU'
}
console.log(Object.entries(obj));
 console.log('salam'.charAt(1));