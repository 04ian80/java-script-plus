"use strict";
//1 make a string out of an array
const fruits = ["apple", "banana", "orange"];
const fruitsString = fruits.join("-"); //내가 푼거: fruits.toString();
console.log(fruitsString);

//2 make an array out of a string
const fruit = "🍎, 🥝, 🍌, 🍒";
const fruitArray = fruit.split(","); //fruit.split("")를 할때 쌍따옴표 가운데에 스페이스를 줘야 한다.
console.log(fruitArray);

//3 make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const result2 = array.reverse();
console.log(result2);

//4 make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const result3 = array2.slice(2, 5);
console.log(result3);
console.log(array2);

//보기
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

array;
// 5 find a student with the score 90
const findNinety = students.find((ninety) => ninety.score === 90);
console.log(findNinety); // find 메소드는 90점인 요소 중 첫번째만 출력.
//내가 쓴 메소드는 filter. 왜냐하면 여러개를 추출해내고 싶을때는 find를 쓰면 안됨.

// 6 make an array of enrolled students
const result = students.filter((student) => student.enrolled);
console.log(result); //enrolled만 써도 enrolled가 되었는지 안되었는지 true 와 false로 구분 할 수 있기 때문에 굳이 ===true를 쓰지 않아도 됨.

// 7 make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const findScore = students.map((student) => student.score);
console.log(findScore); //객체 배열에서 속성 값을 배열로 추출

// 8 check if there is a student with the score lower than 50
const ifLowerThan50 = students.some((student) => student.score < 50);
console.log(ifLowerThan50); //배열에서 특정 객체 찾기.

// 9 compute students' average score
const result4 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result4 / students.length);

// 10 make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const stringScore = findScore.join();
console.log(stringScore);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const result5 = findScore.sort((a, b) => a - b).join();
console.log(result5);
