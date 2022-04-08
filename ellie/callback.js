//ex1)
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculator(callback) {
  const result = callback(6, 3);
  console.log(result);
}

calculator(add);
calculator(divide);

//ex2)
//비동기의 좋은 예)
console.log("1");
/*
setTimeout(function () {
  console.log("3");
}, 1000);
*/
//화살표 함수로 간단히 쓸 수 있다.
setTimeout(() => console.log("3"), 1000);
console.log("2");
