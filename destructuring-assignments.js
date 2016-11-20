// Destructuring Assignments đơn giản chỉ là cách tách các phần tử của Array
// hoặc Object thành nhiều biến chỉ bằng một đoạn code duy nhất.

// Array
// ------------------------------------------

let date = [20, 11, 2016];

let [d, m, y] = date;
let [, , yy] = date;

console.log("Day: " + d);   // Day: 20
console.log("Month: " + m); // Month: 11
console.log("Year: " + y);  // Year : 2016
console.log("Year: " + yy);  // Year : 2016

// Object
// ---------------------------------------------
let date = {
  day: 20,
  month: 11,
  year: 2016
};

let {date: d, month: m, year: y} = date;

let { year: yy } = date;

console.log("Day: " + d);   // Day: 20
console.log("Month: " + m); // Month: 11
console.log("Year: " + y);  // Year : 2016
console.log("Year: " + yy);  // Year : 2016

// Others
// -----------------------------------------------
let domain = ['Hello'];

let [main, sub = 'Hello'] = domain;

console.log(main);
console.log(sub);
