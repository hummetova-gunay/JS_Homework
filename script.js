//1.Convert age to days
console.log(`1. task`)
function calcage(age){
    return age*365;
}
console.log(calcage(65));
console.log(calcage(0));
console.log(calcage(20))

//2.loop text
console.log(`2. task`)
let myJob = "Front-end Developer";
let part_of_string = "";

for (let i = 0; i < myJob.length; i++) {
  part_of_string += myJob[i];
  console.log(part_of_string);
}
//3.Sum of even numbers
console.log(`3. task`)
let sum=0;
 for(i=1; i<10; i++ ){
    if (i%2==0){
    sum+=i
    }
 }console.log(sum)


 //4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
 console.log(`4. task`)
 let multiply=1;
 for (i=1; i<17; i++){
    if(i%2==1){
        multiply*=i;
    }
}console.log(multiply)

//5.Multiply numbers between 10 and 18.
console.log(`5. task`)
let multiply_10_18=1;
for(c=10; c<=18; c++){
     multiply_10_18*=c
}console.log(multiply_10_18)

//6.Sum numbers between 17 and 30. Except 19, 20.
console.log(`6. task`)
let sum_17_30=0;
for (let d=17; d<=30;d++){
    if(d!=19 && d!= 20){
      sum_17_30+=d ;
    }
}console.log(sum_17_30)

// 7.Sum of even numbers and assign this result a variable.
// Sum of odd numbers and assign this result a variable.
console.log(`7. task`)
let number = 0; 
let sumEven = 0; 
let sumOdd = 0;

while (number<= 30) { 
   number++;
  if (number % 2 == 0) { 
    sumEven += number; 
  }else{
    sumOdd+=number
  }
}console.log(sumOdd-sumEven)

 //8.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
 console.log(`8. task`)
 let a=1;
 let power=1
for(; a<=16; a++){
    if(a%2==0){
        power=a**2;
        console.log(power)
    }
}
 



