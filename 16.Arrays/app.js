// 1. Concatenate the following two variables and store it in a "fullStack" variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)
// 2. Find the average age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sumOfNumbers=0;
let countOfNumbers=0;
let averageOfAges=0
ages.forEach((item, index, array)=>{
    sumOfNumbers+=item;
    countOfNumbers++;
    averageOfAges = sumOfNumbers/countOfNumbers;
    return averageOfAges
})
console.log(averageOfAges)

// 3. Using countries array console.log following result:

const countries = ['Albania', 'Bolivia','Canada', 'Denmark', 'Ethiopia','Finland','Germany','Hungary','Ireland', 'Japan', 'Kenya' ]
let partOfCountries = countries.map((item, index, arr) =>
`${index}.${item.slice(0, 3).toLocaleUpperCase()}`
);
console.log(partOfCountries)

// 4. Find the sum of all indexes of 7.
let numbers = [ 4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7,];
const arrayOf7=[];
numbers.forEach((item,index,arr)=>{
    if(item==7){
       arrayOf7.push(numbers.indexOf(7));
       delete numbers[numbers.indexOf(7)]
       arrayOf7.push(numbers.indexOf(7));
       delete numbers[numbers.indexOf(7)];
       arrayOf7.push(numbers.indexOf(7));
       delete numbers[numbers.indexOf(7)];
       return arrayOf7
    }
})
let sumOfIndexes=0;
arrayOf7.forEach((item,index,arr)=>{
    sumOfIndexes+=item;
    return sumOfIndexes
})
console.log(sumOfIndexes)
// 5. Using todos array find all objects that completed property is "true".
const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
  ];
todos.forEach((item,index,arr)=>{
   if(item.completed == true){
       console.log(item)
   }
})
// 6. Using todos array find all objects that title property length is grater than 40.
todos.forEach((item,index,arr)=>{
    if(item.title.length>40){
        console.log(item)
    }
})