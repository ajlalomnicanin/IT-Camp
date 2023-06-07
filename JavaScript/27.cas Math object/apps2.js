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

// ili

