function solution(arr) {
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  /*
  아이디어
  : 평균 -> 
  1. arr의 요소를 모두 더한다
  1.1. 반복문 (시작값: 0, 조건: 렝스, i++)
  1.2. 더한 값을 변수에 저장
  2. arr 길이로 나눈다
  */
  return sum / arr.length;
}
