//1
const arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
let sum =0;
    arr.forEach( (item,index,array)=> {
    sum += item;
   return sum;
})
console.log(sum)
//2
let count =0;
arr.forEach((element,index,array)=>{
      if(element===5){
        count++;
        return count;
      }
})
console.log(count);
//3
let biggestItem=0;
let countofMaxElem=0
arr.forEach((item,index,array)=>{
    for(let item of arr)   {
        biggestItem=Math.max(...arr);
        return biggestItem
    }
     if(item===biggestItem){
         countofMaxElem++
         return countofMaxElem;
    }
})
console.log(countofMaxElem);
console.log(biggestItem)



//4
let reminder=0;
let indexOfReminder=0;
arr.forEach((item,index,array)=>{
    if(item%3===2){
        reminder=item;
        indexOfReminder=array.indexOf(item)
        return reminder,indexOfReminder
    }
})
console.log(reminder)
console.log(indexOfReminder)