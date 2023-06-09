// JavaScript Math Object //

// JavaScript Math Object nam dozvoljava da izvrsavamo razlicite zadatke sa brojevima.

// Math Properties (Svojstva-Konstante)

// Bilo kojoj matematickoj konstantni mozemo pristupiti:
// Math.property_name

// JS nam obezbedjuje 8 razlicitih matematickih konstanti kojim
// jedino mozemo pristupiti preko Math objecta.
Math.E;
Math.PI;
Math.SQRT2;
Math.SQRT1_2;
Math.LN2;
Math.LN10;
Math.LOG2E;
Math.LOG10E;

// Write a JavaScript program to find the largest of three given integers.

function funkcija1(broj1, broj2, broj3) {
  if (isNaN(broj1) || isNaN(broj2) || isNaN(broj3)) {
    return `Niste uneli broj`;
  } else if (broj1 >= broj2 && broj1 >= broj3) {
    return broj1;
  } else if (broj2 >= broj1 && broj2 >= broj3) {
    return broj2;
  } else {
    return broj3;
  }
}
console.log(funkcija1("Dobar dan"));
console.log(funkcija1(1, 2, 3));
console.log(funkcija1(4, 2, 3));
console.log(funkcija1(1, 2, 5));

console.log("ili");

function max(num1, num2, num3) {
  let maxNumber = num1;
  if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
  } else if (num3 >= num1 && num3 >= num2) {
    maxNumber = num3;
  }
  return maxNumber;
}
console.log(max(2, 4, 6));
console.log(max(4, 8, 6));
console.log(max(10, 8, 6));

// / Napraviti funkciju koja trazi od korisnika unos 7 vrednosti (svaka se odnosi na maksimalnu
//  dnevnu temperaturu dana u nedelji). Funkcija treba da vrati temperatutu najtoplijeg dana u nedelji.