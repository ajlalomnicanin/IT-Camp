// Math.min(x,y,z....,n) - vraca najmanji broj od prosledjenih

console.log(Math.min(2, 4, 1, -9, 6, 98, 56)); // - 9

// Math.max(x,y,z....,n) - vraca najveci broj od prosledjenih

console.log(Math.max(2, 4, 1, -9, 6, 98, 56)); // 98

// Nacin da dobijemo najmanji (najveci) element NIZA je da na vec postojecu metodu Math.min()
//  (Math.max() dodajemo jos apply (null, [1,2,3]))

console.log(Math.min.apply(null, [2, 4, 1, -9, 6, 98, 56]));

const niz = [2, 4, 1, -9, 6, 98, 56];

// Zadatak
function getMax(arr) {
  let najveci = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > najveci) {
      najveci = arr[i];
    }
  }
  return najveci;
}
console.log(getMax(niz));

// Math.random() metoda vraca random, broj izmedju 0(ukljucujuci) i 1(ne ukljucujuci).

// Broj izmedju 0 i 1 (realan broj)
console.log(Math.random());
// 0 ili 1
console.log(Math.round(Math.random()));
// broj izmedju 0 i 20
console.log(Math.round(Math.random() * 20));

// broj izmedju 50 i 100
console.log(Math.round(Math.random() * 50) + 50);

// Math.log(x) - vraca logaritam broja x za osnovu e

console.log(Math.log(10));
// Math.log2(x) - vraca logaritam broja x za osnovu 2
console.log(Math.log2(10));
// Math.log10(x) - vraca logaritam broja x za osnovu 10
console.log(Math.log10(10));

// Zadatak
// Napraviti funkciju koja izacuna obim kruga, na osnovu poluprecnika (parametra). O= 2 * r * PI

function obimKruga(r) {
  return 2 * r * Math.PI;
}
console.log(obimKruga(2));

// ili
const obim = (r) => +(2 * r * Math.PI).toFixed(2);
console.log(obim(4));

// Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate kordinate krajnjih tacaka.

function rastojanje(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(rastojanje(2, -3, 5, 4));
