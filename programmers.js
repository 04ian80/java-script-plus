function makeCounterFuction(initval) {
  let count = initval;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const counter1 = makeCounterFuction(0);
const counter2 = makeCounterFuction(10);

counter1();
counter1();
counter1();
counter1();
counter1();

counter2();
counter2();
counter2();
counter2();
counter2();
