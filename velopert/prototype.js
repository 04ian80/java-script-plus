//객체생성자 : 첫문자는 대문자
function Girl(name, age, habit) {
  this.name = name;
  this.age = age;
  this.habit = habit;
  this.say = function () {
    console.log(this.habit);
  };
}

const monica = new Girl('monica', 25, 'I Know!');
monica.say(); //I Know!

//prototype : 생성자 밖에서 prototype을 가운데에 넣고 쓸 수 있다.(객체.prototype.[key])
function Boy(name, age, habit) {
  this.name = name;
  this.age = age;
  this.habit = habit;
}

Boy.prototype.say = function () {
  console.log(this.habit);
};

Boy.prototype.hasSibling = false;

const boy = new Boy('chandler', 28, 'Could I be More Sarcastic?');
boy.say(); //Could I be More Sarcastic?
console.log(boy.hasSibling); //false

//class
class Women {
  constructor(name, age, habit) {
    this.name = name;
    this.age = age;
    this.habit = habit;
  }
  say() {
    console.log(this.habit);
  }
}

const rachel = new Women('rachel', 26, 'I love ross, I hate ross');
rachel.say(); //I love ross, I hate ross
