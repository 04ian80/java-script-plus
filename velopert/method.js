//for문
const char = ['monica', 'rachel', 'pheobe', 'ross', 'chandler', 'joey'];

for (let i = 0; i < char.length; i++) {
  console.log(char[i]);
}

//forEach문
char.forEach((item) => console.log(item));

//map으로 이름 대문자로 바꾸기
const upperCase = char.map((item) => item.toUpperCase()); //[ 'MONICA', 'RACHEL', 'PHEOBE', 'ROSS', 'CHANDLER', 'JOEY' ]
const printEach = upperCase.forEach((each) => console.log(each));
console.log(printEach);
/*
MONICA
RACHEL
PHEOBE
ROSS
CHANDLER
JOEY
*/

//indexOf : Array.indexOf()
console.log(char.indexOf('ross')); //3

//findIndexOf : (배열안의 값이 객체나 배열일 때) id가 2인 객체의 인덱스 반환
const todo = [
  {
    id: 1,
    text: '쓰레기버리기',
    done: true,
  },
  {
    id: 2,
    text: '청소하기',
    done: false,
  },
  {
    id: 3,
    text: '여름옷 꺼내기',
    done: true,
  },
];

const index = todo.findIndex((obj) => obj.id === 2);
console.log(index); //1(인덱스)

//find : id가 2인 객체를 찾아냄
const obj = todo.find((obj) => obj.id === 2);
console.log(obj); //{ id: 2, text: '청소하기', done: false }

//filter : 조건에 맞는 값들을 뽑아 배열로 만듬
const isTrue = todo.filter((obj) => obj.done === true);
console.log(isTrue);
/*
[
  { id: 1, text: '쓰레기버리기', done: true },
  { id: 3, text: '여름옷 꺼내기', done: true }
]
*/

//splice(eraseWhat, howMany, putIn);
const splice = char.splice(0, 2);
console.log(splice); //[ 'monica', 'rachel']
console.log(char); //[ 'pheobe', 'ross', 'chandler', 'joey' ]

//slice(from, to) : splice와 다르게 원래 배열은 수정되지 않음.
const slice = char.slice(0, 1);
console.log(slice); //[ 'pheobe' ]
console.log(char); //[ 'pheobe', 'ross', 'chandler', 'joey' ]

//concat
const rain = ['빨', '주', '노'];
const bow = ['초', '파', '남', '보'];
const concated = rain.concat(bow);
console.log(concated); //['빨', '주', '노', '초', '파', '남', '보'];

//join
const number = [1, 2, 3, 4, 5, 6];
const joined = number.join();
console.log(joined); //1,2,3,4,5,6
console.log(joined[1]); //,
const joined2 = number.join('');
console.log(joined2); //123456
console.log(joined2[1]); //2
const joined3 = number.join(' ');
console.log(joined3); //1 2 3 4 5 6
console.log(joined3[1]); //공백
const joined4 = number.join(', ');
console.log(joined4); //1, 2, 3, 4, 5, 6
console.log(joined4[1]); //,

//reduce
const score = [100, 99, 29, 49, 100];
const sum = score.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); //377
