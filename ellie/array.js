"use strict";

// 1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2.배열 접근
const fruits = ["tomato", "banana", "peach", "apple"];
console.log(fruits[0]); //tomato
console.log(fruits[fruits.length - 1]); //apple
console.log(fruits.length); //4

// 3. print all the fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} // tomato banana peach apple

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
} // tomato banana peach apple

// c. forEach

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
//이걸 arrow함수로 줄이면:
fruits.forEach((fruit) => console.log(fruit)); // tomato banana peach apple

// 4. Addition, deletion, copy
// a. push
fruits.push("papaya", "melon");
console.log(fruits); // tomato banana peach apple papaya melon

// b. pop
fruits.pop();
console.log(fruits); // tomato banana peach apple papaya

// add an item from beginning
// c. unshift
fruits.unshift("lemon");
console.log(fruits); // lemon tomato banana peach apple papaya

// remove an item from beginning
// c. shift
fruits.shift();
console.log(fruits); // tomato banana peach apple papaya

//!note! shift와 unshift는 pop과 push보다 느리다. 왜냐하면 앞에서 사건이 일어나기 때문에 뒤로 미루고 땡기기를 반복하면 느림.

// 5. index로 remove item
fruits.splice(1, 1);
console.log(fruits); // tomato peach apple papaya
fruits.splice(1, 0, "grape", "pear"); //지우지 않고 넣기
console.log(fruits); // tomato grape pear apple papaya

// 6. combine two arrays
const fruits2 = ["strawberry", "watermelon"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 7. Searching
console.clear();
// indexOf
console.log(fruits);
console.log(fruits.indexOf("pear")); //2
console.log(fruits.indexOf("lemon")); //-1

// includes
console.log(fruits.includes("pear")); //true
console.log(fruits.includes("lemon")); //false

// lastIndexOf
fruits.push("grape");
console.log(fruits);
console.log(fruits.indexOf("grape"));
console.log(fruits.lastIndexOf("grape"));
