"use strict";

const promise = new Promise((resolve, reject) => {
  //doing something heavy(network...data...)
  console.log("doing something...");
  setTimeout(() => {
    //resolve("name");
    reject(new Error("no network"));
  }, 2000);
});

//위에서 promise 값이 잘 수행이 된다면 then, 콜백함수 value 전달
//value에는 위에 promise에서 잘 수행 되었을 때 받은 resolve 값('ellie')이 들어감
promise
  .then((value) => {
    console.log(value);
  })
  //chaining(array때 배운적 있음). then으로 받아온 promise에 catch를 등록
  //catch는 에러가 발생 했을 시 어떻게 처리 할건지 작성하는 코드.
  //catch를 작성하지 않으면 콘솔로그에 찍히는 대신 에러가 발생
  .catch((error) => {
    console.log(error);
  })
  //성공하든 실패하든 수행되는 finally
  .finally(() => {
    console.log("finally");
  });
