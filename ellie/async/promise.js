'use strict';

const promise = new Promise((resolve, reject) => {
  //doing something heavy(network...data...)
  console.log('doing something...');
  setTimeout(() => {
    //resolve("name");
    reject(new Error('no network'));
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
    console.log('finally');
  });

// Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(new Error('type error'));
  }, 2000);
});

fetchNumber
  .then((num) => num * 2) //resolve에서 가져온 1 곱하기 2 = 2
  .then((num) => num * 3) //2 곱하기 3 = 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 성공한다면 '6 빼기 1 = 5' 를 1초뒤에 실행
  })
  .then((num) => console.log(num)) // 실행되면 콘솔로그
  .catch((error) => {
    setTimeout(() => console.log(error), 5000);
  }); //  resolve에서 1을 못가져온다면 reject의 메세지를 받아 5초후에 출력
