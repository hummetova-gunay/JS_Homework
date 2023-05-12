//1 FizzBuzz: Write a program that prints the numbers from 1 to 100.
//  But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

function FizzBuzz() {
    for(let i=0; i<100; i++){
        if(i%3===0){
        console.log('Fizz');

        }else if (i%5===0) {
            console.log('Buzz');

        } else if(i%15===0){
        console.log('FizzBuzz');
    }else{
        console.log(i);
    }
    }
}
// FizzBuzz()

//2 Prime Number Generator: Write a program that generates all prime numbers up to a given number.
function generatePrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  console.log(generatePrimes(10));
  

//3 Longest Word: Write a function that takes a string as input and returns the longest word in the string.
function longestWord(str) {
  let arr=  str.split(' ')
  let longword=''
  arr.forEach(element => {
    if(element.length>longword.length){
        longword=element
    }
  });
  return longword
}
console.log(longestWord('hello how are you?'));

//4 Fibonacci Sequence: Write a program that generates the Fibonacci sequence up to a given number.

function fibonacci(number) {
  let arr=[0,1]
  while(arr.length<=number){
    arr.push(arr[arr.length-1]+arr[arr.length-2])
}
return arr

}
console.log(fibonacci(10));

  

