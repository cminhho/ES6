// const có nghĩa là hằng số, điều này có nghĩa nếu một biến được khai báo là hằng số
// thì bạn phải gán giá trị lúc khai báo luôn, và kể từ đó về sau bạn sẽ
// không thể thay đổi giá trị cho biến đó được nữa.
// Tuy nhiên có một lưu ý là biến const là một block-scoped (giống với let),
// vì vậy nó chỉ tồn tại trong phạm vi nó được khai báo mà thôi.
const info = {
  name: 'Ho Minh Chung',
  age: 24
};

console.log(info);

const age = 24;
// Trying to change the value
age = 18; // ERROR: Uncaught SyntaxError: Identifier 'info' has already been declared(…)

// Conts in the loop
// -------------------------------------------------
var domains = [
    'github',
    'google.com',
    'facebook.com'
];

for (domain of domains){
    const message = "Domain " + domain;
    console.log(message);
}
/* OUTPUT
Domain github
VM9297:9 Domain google.com
VM9297:9 Domain facebook.com
*/
