// 'use strict';

// let a = 'out a';

// function test() {
//   let a = 'in a';
//   console.log(this.a);
// }

// test();
// console.log(this);
// var funcThis = null;

// function Func() {
//   // if (funcThis === global) {
//   funcThis = this;
//   // }
// }

// var o1 = Func();
// if (funcThis === global) {
//   console.log('global'); // global
// }

// var o2 = new Func();
// if (funcThis === o2) {
//   console.log('o2'); // o2
// }

a = {
  name: 'yong',
  func: () => {
    console.log(this);
  },
};

a.func();
