// Arrow Function Syntax
var functionName = (var1, var2) => {};

// Example
var hello = (name, message) => {
  console.log('Hello ' + name + ', message:' + message);
}

// Simple
var hello = (name, message) =>  console.log('Hello ' + name + ', message:' + message);

// Arrow Function with 1 arg
var hello = message =>  console.log(message);

// Arrow function without arg
var hello = () => console.log('Hello Arrow Function');

hello('Chung Ho', 'How to use Arrrow Function in ES6') // Hello Chung Ho, message:How to use Arrrow Function in ES6

//------------------------------------------------------------------------------
//
var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];
domain.map((val, key)=> {
  console.log(val.toUpperCase());
});

setTimeout(() => {
  console.log('3 seconds have passed');
}, 3000)
