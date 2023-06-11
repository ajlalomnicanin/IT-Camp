// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range
// 40..60 or in the range 70..100 inclusive.

function numbers(num1, num2) {
  if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 >= 100)) {
    rezultat1 = `${num1} se nalazi u intervalu `;
  } else {
    rezultat1 = `${num1} se ne nalazi u intervalu `;
  }

  if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
    rezultat2 = `${num2} se nalazi u intervalu `;
  } else {
    rezultat2 = `${num2} se ne nalazi u intervalu `;
  }
  return `${rezultat1}${rezultat2}`;
}
console.log(numbers(40, 40));
console.log(numbers(20, 100));
console.log(numbers(10, 110));

console.log("ili");
function numbers1(num1, num2) {
  if (
    ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) &&
    ((num1 >= 70 && num1 >= 100) || (num2 >= 70 && num2 <= 100))
  ) {
    return `${num1} i ${num2}  se nalaze u intervalu izmedju 40 i 60 ili 70 i 100 `;
  } else {
    return `oba broja nisu u intervalu `;
  }
}
console.log(numbers1(40, 110));
console.log(numbers1(50, 80));

console.log("DRUGI ZADATAK");

// 2. Write a JavaScript program to find the larger number from the two given positive integers,
//  the two numbers are in the range 40..60 inclusive.

function largerNumber(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return `brojevi se ne nalaze u intervalu od 40 do 60`;
  }
}
console.log(largerNumber(30, 55));
console.log(largerNumber(45, 55));
