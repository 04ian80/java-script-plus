class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`5의 배수 (${num})`);
}
function alertNum(num) {
  alert(`5의 배수 (${num})`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

/*
class minus {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get age() {
    return this.calcAge();
  }
  calcAge() {
    return this.a - this.b;
  }
}
const sum = new minus(23, 2);
console.log(sum.age);
*/
