// 2번문제) 핸드폰 번호 가리기

function solution(phone_number) {
  let arr = phone_number.split("");
  for (let i = 0; i < arr.length - 4; i++) {
    arr.splice(i, 1, "*");
  }
  return arr.join("");
}
