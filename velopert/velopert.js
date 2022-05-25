//객체
const bride = {
  name: 'monica',
  gender: 'women',
  age: 26,
  job: 'chef',
};

const groom = {
  name: 'chandler',
  gender: 'men',
  age: 28,
  job: 'transponter',
};

function introduce(person) {
  if (person.gender === 'women') {
    person.gender = 'she';
  } else {
    person.gender = 'he';
  }
  const say = `${person.name} is ${person.age}years-old and ${person.gender} is ${person.job}`;
  console.log(say);
}
introduce(bride); //monica is 26years-old and she is chef
introduce(groom); //chandler is 28years-old and he is transponter

//객체 비구조화 할당
function introduce(person) {
  const { name, age, job } = person;
  let { gender } = person;
  if (gender === 'women') {
    gender = 'she';
  } else {
    gender = 'he';
  }
  const say = `${name} is ${age}years-old and ${gender} is ${job}`;
  console.log(say);
}
introduce(bride); //위와 동일
introduce(groom); //위와 동일

//gender은 어디에 넣는 거지
function introduce({ gender, name, age, job }) {
  if (gender === 'women') {
    gender = 'she';
  } else {
    gender = 'he';
  }
  const say = `${name} is ${age}years-old and ${gender} is ${job}`;
  console.log(say);
}
introduce(bride); //위와 동일
introduce(groom); //위와 동일

//this
const dog = {
  name: 'pet',
  sound: 'bow-wow',
  bark: function () {
    console.log(this.sound);
  },
};

dog.bark(); //bow-wow
//이 함수에서 this는 자신이 속한 객체를 가리키는데, 화살표 함수는 그렇지 않음.

const anotherDog = {
  name: 'pet',
  sound: 'bow-wow',
  bark: () => {
    console.log(this.sound);
  },
};

anotherDog.bark(); //undefined

//
