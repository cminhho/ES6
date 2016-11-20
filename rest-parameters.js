// Rest Parameters có nghĩa là tham số còn lại, điều này có nghĩa là bạn có thể
//  khai báo một hàm với số lượng tham số không xác định, đây là một tính năng mới
//  khiến Javascript ngày càng trở nên mạnh mẽ hơn.

let restParameters = (main, sub, ...other) => {
  console.log(main);
  console.log(sub);
  console.log(other);
}
restParameters('facebook', 'youtube');
restParameters('facebook', 'youtube', 'github', 'dockerhub');
