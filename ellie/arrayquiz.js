"use strict";
//1
const fruits = "apple, banana, orange";
console.log(fruits);

//2
const fruit = ["🍎, 🥝, 🍌, 🍒"];
console.log(fruit);

//3
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array);

//4
const array2 = [1, 2, 3, 4, 5];
array2.splice(0, 2);
console.log(array2);

//5
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

 const goodStudent = 