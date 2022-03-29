class Person {
  //constructor 생성자->나중에 object를 만들때 필요한 데이터를 전달함
  constructor(name, age) {
    //fields
    //전달 된 데이터를 바로 할당해줌.
    this.name = name;
    this.age = age;
  }
  //method
  speak(message) {
    console.log(`${this.name}: ${message}`);
  }
}

//new는 새로운 object를 만들때 쓰는 키워드
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
//Person 안에는 speak이라는 function이 있기 때문에 new Person에서 만든 ellie라는 이름으로 speak를 실행 시킬 수 있음.
ellie.speak("hello!");

//new 뒤에는 class의 이름 Person이 와야한다.
const zoe = new Person("zoe", 23);
console.log(zoe.name);
console.log(zoe.age);
zoe.speak("hi");

//두 person의 speak내용 다르게 하려면 매개변수 쓰기.
