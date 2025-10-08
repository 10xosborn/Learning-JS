const numbers = [1, 2, 3, 4, 5];

//map method to double each number in the array
const doubled = numbers.map(num => num * 2);

//filter method to get only even numbers
const filtered = numbers.filter(num => num % 2 === 0);

//reduce method to sum all numbers in the array
const sum = numbers.reduce((total, num) => total + num, 0);

//find method to get the first number greater than 3
const found = numbers.find(num => num > 30);

// console.log('Doubled:', doubled);
//  console.log('Filtered (Even NUmbers):', filtered);
// console.log ('Sum:', sum);
console.log('Found (First nummbers > 3):', found);