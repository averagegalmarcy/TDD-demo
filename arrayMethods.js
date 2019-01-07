function hof(fn) {
  return fn();
  }
  
function add () {
  return 1 + 7;
}

console.log(hof(add));

function double (a) {
  return a * 2;
}
const doubleNumbers = [1, 2, 3].map(double);
console.log(doubleNumbers);

//declare a function
//pass the function into the map function in a new const

//can also pass indexOfElement
//if you only have one argument you don't need parenthesis 

// const doubleNumbers = [1, 2, 3].map((elementsInArray, indexOfElement) => {;
// console.log(elementsInArray, indexOfElement);
// return elementsInArray * 2;
// });

function addThree(a) {
  return a + 3;
}

const array = [2, 4, 6, 7]
const addThreeNums = array.map(addThree);
console.log(addThreeNums);

const returnOddNums = array.filter(elementsInArray => {
  return elementsInArray % 2 === 1;
});
console.log(returnOddNums);

