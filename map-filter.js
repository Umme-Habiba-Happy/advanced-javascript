//map
const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++){

// const element = numbers[i];
// const result = element * element;
// output.push(result);
// } 
// console.log(output);

// function square(element){
// return element * element ;
// }
// const result =  numbers.map(function(element){
//     return element * element ;
  
// })

const result = numbers.map (x => x * x);

// console.log(result);


//filter

const bigger = numbers.filter(x => x < 6);
console.log(bigger);
const bigger2 = numbers.find(x => x < 6);
console.log(bigger2);

marks = [44, 34, 46, 39]
const total = marks.map(x => x+x);
console.log(total);
