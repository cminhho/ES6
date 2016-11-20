// Default Parameter là giá trị mặc định của tham số khi truyền vào các function.
//

var sayHello = (domain = 'World') => {
  return 'Hello ' + domain;
}
console.log('NOT transmit parameters: ' + sayHello());
console.log('WITH transmit parameters: ' + sayHello('World!'));
// NOT transmit parameters: Hello World
// WITH transmit parameters: Hello World!
