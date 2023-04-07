console.log("-----1------");
// 1- Ispisati prirodne brojeve od 1 do 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("-----2------");
//  2- Ispisati prirodne brojeve od 4 do 8.
for (let i = 4; i <= 8; i++) {
  console.log(i);
}

console.log("-----3------");
//   3- Ispisati prirodne brojeve od 8 do 16.
for (let i = 8; i <= 16; i++) {
  console.log(i);
}

console.log("-----4------");
//  4- Ispisati prirodne brojeve od 15 do 20
for (let i = 15; i <= 20; i++) {
  console.log(i);
}

console.log("-----5------");
//   5- Ispisati prirodne brojeve od 1 do n.
n = 15;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

console.log("-----6------");
// 6- Ispisati prirodne brojeve od k do n.
k = 3;
n = 7;
for (let i = k; i <= n; i++) {
  console.log(i);
}

console.log("-----7------");
//  7- Ispisati prirodne brojeve od a do b.
a = 7;
b = 9;
for (let i = a; i <= b; i++) {
  console.log(i);
}

console.log("-----8------");
// 8- Ispisati prirodne brojeve od c do d.
let c = 5;
let d = 7;
for (let i = c; i <= d; i++) {
  console.log(i);
}

console.log("-----9------");
// 9- Ispisati prirodne brojeve od 9 do 5 unazad.
for (let i = 9; i >= 5; i--) {
  console.log(i);
}

console.log("-----10------");
// 10- Ispisati prirodne brojeve od 10 do 6 unazad.
for (let i = 10; i >= 6; i--) {
  console.log(i);
}

console.log("-----11------");
//  11- Ispisati dvostruku vrijednost prirodnih brojeva od 1 do 5.
for (let i = 1; i <= 5; i++) {
  console.log(2 * i);
}

console.log("-----12------");
//  12- Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
for (let i = 6; i <= 14; i++) {
  console.log(i * 2);
}

console.log("-----13------");
//  13- Ispisati dvostruku vrijednost prirodnih brojeva od 8 do 16.
for (let i = 8; i <= 16; i++) {
  console.log(2 * i);
}

console.log("-----14------");
// 14- Ispisati trostruku vrijednosti prirodnih brojeva od 15 do 27.
for (let i = 15; i <= 27; i++) {
  console.log(i * i);
}

console.log("-----15------");
// 15- Ispisati trostruku vrijednosti prirodnih brojeva od k do n.
k = 4;
n = 6;
for (let i = k; i <= n; i++) {
  let trostrukaVrednost = i ** 3;
  console.log(i);
}

console.log("-----16------");
//  16- Ispisati trostruku vrijednosti prirodnih brojeva od a do b.

console.log("-----17------");
// 17- Ispisati dvostruku vrijednost prirodnih brojeva od 8 do 16 unazad.
for (let i = 16; i >= 8; i--) {
  console.log(i * 2);
}

console.log("-----18------");
// 18- Ispisati dvostruku vrijednost prirodnih brojeva od 10 do 6 unazad.
for (let i = 10; i >= 6; i--) {
  console.log(i * 2);
}

console.log("-----19------");
//  19- Suma prvih 5 prirodnih brojeva.
suma = 0;
for (let i = 1; i <= 5; i++) {
  console.log(i);
  suma += i;
}

console.log("-----20------");
// 20- Suma dvostruke vrijednosti prvih 5 prirodnih brojeva.
suma = 0;
for (let i = 1; i <= 5; i++) {
  console.log(i * 2);
  suma += i;
}

console.log("-----21------");
//  21- Suma prvih n prirodnih brojeva.
// n = 10; ne slusa i kad je definisano n
n = prompt("Unesite prirodan broj");
suma = 0;
for (let i = n; i <= n; i++) {
  console.log(i);
  suma += i;
}

console.log("-----22------");
//  22- Suma dvostruke vrijednosti od 1 do 2*n.
/*n = 5;
suma = 0;
for (let i = 1; i <= 2 * n; i++) {
  suma += 2 * i;
}
console.log(i); */

console.log("-----23------");
// 23- Suma prirodnih brojeva od k do n.
k = prompt("Unesite prvi broj");
n = prompt("Unesite drugi broj");
suma = 0;
for (let i = k; i <= n; i++) {
  console.log(i);
  suma += i;
}
console.log("-----24------");
// 24- Suma parnih prirodnih brojeva od 1 do 5.
suma = 0;
for (let i = 2; i <= 5; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----23------");
//  25- Suma neparnih prirodnih brojeva od 1 do 5.
suma = 0;
for (let i = 1; i <= 5; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----26------");
//  26- Suma parnih prirodnih brojeva od 1 do 20.
suma = 0;
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----27------");
//27- Suma neparnih prirodnih brojeva od 1 do 20.
suma = 0;
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----28------");
// 28- Suma parnih prirodnih brojeva od 10 do 20.
suma = 0;
for (let i = 10; i <= 20; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----29------");
// 29- Suma neparnih prirodnih brojeva od 10 do 20.
suma = 0;
for (let i = 11; i <= 20; i += 2) {
  console.log(i);
  suma += i;
}

console.log("-----30------");
//  30- Suma parnih prirodnih brojeva od 1 do n.
n = prompt("Unesite parni prirodni broj");
suma = 0;
for (let i = 2; i <= n; i += 2) {
  console.log(i);
  suma += i;
}

console.log("-----31------");
// 31- Suma neparnih prirodnih brojeva od 1 do n.
n = prompt("Unesite neparni prirodni broj");
suma = 0;
for (let i = 1; i <= n; i += 2) {
  console.log(i);
  suma += i;
}

console.log("-----32------");
//32- Suma parnih prirodnih brojeva od k do n.
suma = 0;
k = 2;
n = 17;
for (let i = k; i <= n; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----33------");
//33- Suma neparnih prirodnih brojeva od k do n.
suma = 0;
k = 1;
n = 17;
for (let i = k; i <= n; i += 2) {
  console.log(i);
  suma += i;
}
console.log("-----34------");
// 34- Proizvod prvih 5 prirodnih brojeva.
let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
  console.log(i);
}

console.log("-----33------");
// 35- Proizvod prirodnih brojeva od 3 do 8.
product = 2;
for (let i = 3; i <= 8; i++) {
  console.log(i);
  product = product * i;
}

//  36- Proizvod trostruke vrijednosti prirodnih od 3 do 8 brojeva.
//  37- Proizvod prirodnih od 1 do n.
//  38- Proizvod dvostrukih vrijednosti prirodnih od 1 do 2*n.
//  39- Proizvod trostukih vrijednosti prirodnih od 1 do 3*n.
//  40- Proizvod parnih 1 do 5.
//  41- Proizvod neparnih 1 do 5.
//  42- Proizvod parnih 10 do 20.
//  43- Proizvod parnih 1 do n.
// 4 / 3 -# 44- Proizvod neparnih 1 do n.
// 4 / 3 -# 45- Proizvod parnih k do n.
// 4 / 3 -# 46- Proizvod neparnih od k do n.
// 4 / 3 -# 47- Proizvod djeljivih sa 3 u intervalu od 1 do k.
// 4 / 3 -# 48- Proizvod djeljivih sa 7 u intervalu od 1 do z.
// 4 / 4 -# 49- Prebrojati prirodne od 1 do 5.
// 4 / 4 -# 50- Prebrojati prirodne od 1 do n.
// 4 / 4 -# 51- Prebrojati parne u intervalu od 20 do n.
// 4 / 4 -# 52- Prebrojati prirodne od k do n.
// 4 / 4 -# 53- Prebrojati parnih 1 do 5.
// 4 / 4 -# 54- Prebrojati neparnih 1 do 5.
// 4 / 4 -# 55- Prebrojati brojeve djeljive sa 3 u intervalu od 1 do 9.
// 4 / 4 -# 56- Prebrojati parne od 1 do n.
// 4 / 4 -# 57- Prebrojati neparne od 1 do n.
// 4 / 4 -# 58- Prebrojati parne od k do n.
// 4 / 4 -# 59- Prebrojati djeljive sa 3 u intervalu od 1 do k.
// 4 / 4 -# 60- Prebrojati neparne od k do n.
// 4 / 4 -# 61- Prebrojati brojeve djeljive sa 5 u intervalu od 1 do n.
// 4 / 5 -# 62- Izračunati aritmetičku sredinu prirodnih brojeva od 1 do 5.
// 4 / 5 -# 63- Izračunati aritmetičku sredinu prirodnih brojeva od 1 do n.
// 4 / 5 -# 64- Izračunati aritmetičku sredinu prirodnih brojeva od k do n.
// 4 / 5 -# 65- Izračunati aritmetičku sredinu parnih od 1 do 5.
// 4 / 5 -# 66- Izračunati aritmetičku sredinu neparnih od 1 do 5.
// 4 / 5 -# 67- Izračunati aritmetičku sredinu parnih od 1 do n.
// 4 / 5 -# 68- Izračunati aritmetičku sredinu neparnih od 1 do n.
// 4 / 5 -# 69- Izračunati aritmetičku sredinu parnih od k do n.
// 4 / 5 -# 70- Izračunati aritmetičku sredinu neparnih od k do n.
// 4 / 5 -# 71- Izračunati aritmetičku sredinu brojeva djeljivih sa 7 u intervalu od 1 do n.
// 4 / 5 -# 72- Izračunati aritmetičku sredinu brojeva koji nisu djeljivi sa 3 u intervalu od 1 do n.
// 4 / 5 -# 73- Izračunati aritmetičku sredinu brojeva djeljivih sa 3 u intervalu od k do n.
// 74- Izračunati aritmetičku sredinu brojeva koji nisu djeljivi sa 3 u intervalu od k do n.

// 22
// 14
// 34
// 35
