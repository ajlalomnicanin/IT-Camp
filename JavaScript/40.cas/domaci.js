// 1. Preko funkcije napraviti niz koji se sastoji od parnih brojeva manjih ili jednakih 50 postojeceg
// niza.
function array(arr) {
  const arr2 = arr.filter((el) => el <= 50 && el % 2 === 0);
  return arr2;
}

console.log(array([1, 2, 3, 4, 18, 5, 20, 50, 52, 68, 80, 90]));

// 2. Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.

function array1(arr) {
  const arr2 = arr.reduce((prev, curr) => prev + curr, 0);
  let rezultat = arr2 / arr.length;
  return rezultat;
}
console.log(array1([1, 2, 3, 4, 5, 6]));
// 3. Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva dvocifrena
// broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
