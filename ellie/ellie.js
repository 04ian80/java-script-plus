class calcAge {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get age() {
    return this.minus();
  }
  minus() {
    return this.a - this.b;
  }
}
const sum = new calcAge(23, 2);
console.log(sum.age);
