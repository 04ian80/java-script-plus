function printTimeTable(a) {
  for (i = 1; i < 10; i++) {
    console.log(a + "*" + i + "=" + a * i);
  }
}

for (a = 1; a < 10; a++) {
  printTimeTable(a);
}
