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
x = 15;
for (let i = 1; i <= x; i++) {
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
  console.log(i * 3);
}

console.log("-----15------");
// 15- Ispisati trostruku vrijednosti prirodnih brojeva od k do n.
k = 4;
n = 6;
for (let i = k; i <= n; i++) {
  console.log(i * 3);
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
  suma += i;
}
console.log(suma);

console.log("-----20------");
// 20- Suma dvostruke vrijednosti prvih 5 prirodnih brojeva.
suma = 0;
for (let i = 1; i <= 5; i++) {
  suma += i * 2;
}
console.log(suma);

console.log("-----21------");
//  21- Suma prvih n prirodnih brojeva.
// n = 10; ne slusa i kad je definisano n
n = prompt("Unesite prirodan broj");
suma = 0;
for (let i = n; i <= n; i++) {
  suma += i;
}
console.log(suma);
// TRAZI ,I I KOD 22 ZADARKA DA DEFINISEM PROMPT
console.log("-----22------");
//  22- Suma dvostruke vrijednosti od 1 do 2*n.
n = 5;
suma = 0;
for (let i = 1; i <= 2 * n; i++) {
  suma += 2 * i;
}
console.log(suma);

console.log("-----23------");
// 23- Suma prirodnih brojeva od k do n.
k = prompt("Unesite prvi broj");
n = prompt("Unesite drugi broj");
suma = 0;
for (let i = k; i <= n; i++) {
  suma += i;
}
console.log(suma);
console.log("-----24------");
// 24- Suma parnih prirodnih brojeva od 1 do 5.
suma = 0;
for (let i = 2; i <= 5; i += 2) {
  suma += i;
}
console.log(suma);
console.log("-----23------");
//  25- Suma neparnih prirodnih brojeva od 1 do 5.
suma = 0;
for (let i = 1; i <= 5; i += 2) {
  suma += i;
}
console.log(suma);
console.log("-----26------");
//  26- Suma parnih prirodnih brojeva od 1 do 20.
suma = 0;
for (let i = 2; i <= 20; i += 2) {
  suma += i;
}
console.log(suma);
console.log("-----27------");
//27- Suma neparnih prirodnih brojeva od 1 do 20.
suma = 0;
for (let i = 1; i <= 20; i += 2) {
  suma += i;
}
console.log(suma);
console.log("-----28------");
// 28- Suma parnih prirodnih brojeva od 10 do 20.
suma = 0;
for (let i = 10; i <= 20; i += 2) {
  suma += i;
}
console.log(suma);
console.log("-----29------");
// 29- Suma neparnih prirodnih brojeva od 10 do 20.
suma = 0;
for (let i = 11; i <= 20; i += 2) {
  suma += i;
}
console.log(suma);

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
  suma += i;
}
console.log(suma);

console.log("-----34------");
// 34- Proizvod prvih 5 prirodnih brojeva.
let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);

console.log("-----35------");
// 35- Proizvod prirodnih brojeva od 3 do 8.
product = 1;
for (let i = 3; i <= 8; i++) {
  product *= i;
}
console.log(product);

console.log("-----36------");
//  36- Proizvod trostruke vrijednosti prirodnih od 3 do 8 brojeva.
product = 1;
for (let i = 3; i <= 8; i++) {
  product *= i * 3;
}
console.log("Proizvod trostruke vrijednosti je", product);

console.log("-----37------");
//  37- Proizvod prirodnih od 1 do n.
product = 1;
n = 10;
for (let i = 1; i <= n; i++) {
  product *= i;
}
console.log(product.toFixed(2));

console.log("-----38------");
//  38- Proizvod dvostrukih vrijednosti prirodnih od 1 do 2*n.
product = 1;
for (let i = 1; i <= 2 * n; i++) {
  product *= i * 2;
}
console.log(product.toFixed(2));

console.log("-----39------");
//  39- Proizvod trostukih vrijednosti prirodnih od 1 do 3*n.
product = 1;
for (let i = 1; i <= 3 * n; i++) {
  product *= i * 3;
}
console.log(product.toFixed(2));

console.log("-----40------");
//  40- Proizvod parnih 1 do 5.
product = 1;
for (let i = 2; i <= 5; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----41------");
//  41- Proizvod neparnih 1 do 5.
product = 1;
for (let i = 1; i <= 5; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----42------");
//  42- Proizvod parnih 10 do 20.
product = 1;
for (let i = 10; i <= 20; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----43------");
//  43- Proizvod parnih 1 do n.
n = 10;
product = 1;
for (let i = 2; i <= 10; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----44------");
// 4 / 3 -# 44- Proizvod neparnih 1 do n.
n = 10;
product = 1;
for (let i = 1; i <= 10; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----45------");
// 4 / 3 -# 45- Proizvod parnih k do n.
k = 10;
n = 20;
product = 1;
for (let i = k; i <= n; i += 2) {
  product *= i;
}
console.log(product);
console.log("-----46------");
// 4 / 3 -# 46- Proizvod neparnih od k do n.
k = 11;
n = 20;
product = 1;
for (let i = k; i <= n; i += 2) {
  product *= i;
}
console.log(product);

console.log("-----47------");
// 47- Proizvod djeljivih sa 3 u intervalu od 1 do k.
product = 1;
k = 10;
for (let i = 1; i <= k; i++) {
  if (i % 3 === 0) {
    product *= i;
  }
}
console.log(product);

console.log("-----48------");
// 4 / 3 -# 48- Proizvod djeljivih sa 7 u intervalu od 1 do z.
roduct = 1;
z = 10;
for (let i = 1; i <= k; i++) {
  if (i % 7 === 0) {
    product *= i;
  }
}
console.log(product);

console.log("-----49------");
// 4 / 4 -# 49- Prebrojati prirodne od 1 do 5.
brojac = 0;
for (let i = 1; i <= 5; i++) {
  brojac += 1;
}
console.log(brojac);

console.log("-----50------");
// 4 / 4 -# 50- Prebrojati prirodne od 1 do n.
n = prompt("Unesite neki n broj");
brojac = 0;
for (let i = 1; i <= n; i++) {
  brojac++;
}
console.log(brojac);

// DA LI MOZE DA SE STAVI BROJAC --
console.log("-----51------");
// 4 / 4 -# 51- Prebrojati parne u intervalu od 20 do n.
brojac = 0;
n = prompt("Unesite neki parni broj n,manji od 20,51");
for (let i = 20; i >= n; i--) {
  if (i % 2 === 0) {
    brojac++;
  }
}
console.log(brojac);

console.log("-----52------");
// 4 / 4 -# 52- Prebrojati prirodne od k do n.
brojac = 0;
k = 1;
n = 8;
for (let i = k; i <= n; i++) {
  brojac++;
}
console.log(brojac);

console.log("-----53------");
// 4 / 4 -# 53- Prebrojati parnih 1 do 5.
brojac = 0;
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    brojac++;
  }
}
console.log(brojac);

console.log("-----54------");
// 4 / 4 -# 54- Prebrojati neparnih 1 do 5.
brojac = 0;
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    brojac++;
  }
}
console.log(brojac);

console.log("-----55------");
// 4 / 4 -# 55- Prebrojati brojeve djeljive sa 3 u intervalu od 1 do 9.
brojac = 0;
for (let i = 1; i <= 9; i++) {
  if (i % 3 === 0) {
    brojac++;
  }
}
console.log(brojac);

console.log("-----56------");
// 4 / 4 -# 56- Prebrojati parne od 1 do n.
n = 15;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    brojac++;
  }
}
console.log(brojac);

console.log("-----57------");
// 4 / 4 -# 57- Prebrojati neparne od 1 do n.
n = 15;
count = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    count++;
  }
}
console.log(count);

console.log("-----58------");
// 4 / 4 -# 58- Prebrojati parne od k do n.
count = 0;
k = 2;
n = 10;
for (let i = k; i <= n; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count);

console.log("-----59------");
// 4 / 4 -# 59- Prebrojati djeljive sa 3 u intervalu od 1 do k.
k = 20;
count = 0;
for (let i = 1; i <= k; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log(count);

console.log("-----60------");
// 4 / 4 -# 60- Prebrojati neparne od k do n.
k = 20;
n = 50;
count = 0;
for (let i = k; i <= n; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(count);

console.log("-----61------");
// 4 / 4 -# 61- Prebrojati brojeve djeljive sa 5 u intervalu od 1 do n.
count = 0;
n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 5 === 0) {
    count++;
  }
}
console.log(count);

console.log("-----62------");
// 4 / 5 -# 62- Izračunati aritmetičku sredinu prirodnih brojeva od 1 do 5.
suma = 0;
brojac = 0;
for (let i = 1; i <= 5; i++) {
  suma += i;
  brojac++;
}
const average = suma / brojac;
console.log(average);

console.log("-----63------");
// 4 / 5 -# 63- Izračunati aritmetičku sredinu prirodnih brojeva od 1 do n.
n = 10;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  suma += i;
  brojac++;
}
let rezultat = suma / brojac;
console.log(rezultat);

console.log("-----64------");
// 4 / 5 -# 64- Izračunati aritmetičku sredinu prirodnih brojeva od k do n.
k = 15;
n = 30;
suma = 0;
brojac = 0;
for (let i = k; i <= n; i++) {
  suma += i;
  brojac++;
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----65------");
// 4 / 5 -# 65- Izračunati aritmetičku sredinu parnih od 1 do 5.
suma = 0;
brojac = 0;
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----66------");
// 4 / 5 -# 66- Izračunati aritmetičku sredinu neparnih od 1 do 5.
suma = 0;
brojac = 0;
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----67------");
// 4 / 5 -# 67- Izračunati aritmetičku sredinu parnih od 1 do n.
n = 18;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----68------");
// 4 / 5 -# 68- Izračunati aritmetičku sredinu neparnih od 1 do n.
n = 18;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----69------");
// 4 / 5 -# 69- Izračunati aritmetičku sredinu parnih od k do n.
n = 18;
k = 30;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----70------");
// 4 / 5 -# 70- Izračunati aritmetičku sredinu neparnih od k do n.
n = 18;
k = 30;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----71------");
// 4 / 5 -# 71- Izračunati aritmetičku sredinu brojeva djeljivih sa 7 u intervalu od 1 do n.
suma = 0;
brojac = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----72------");
// 4 / 5 -# 72- Izračunati aritmetičku sredinu brojeva koji nisu djeljivi sa 3 u intervalu od 1 do n.
n = 20;
suma = 0;
brojac = 0;
for (let i = 1; i <= n; i++) {
  if (i % 3 !== 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----73------");
// 4 / 5 -# 73- Izračunati aritmetičku sredinu brojeva djeljivih sa 3 u intervalu od k do n.
n = 15;
k = 50;
suma = 0;
brojac = 0;
for (let i = n; i <= k; i++) {
  if (i % 3 === 0) {
    suma += i;
    brojac++;
  }
}
rezultat = suma / brojac;
console.log(rezultat);

console.log("-----74------");
// 74- Izračunati aritmetičku sredinu brojeva koji nisu djeljivi sa 3 u intervalu od k do n.
n = 15;
k = 50;
suma = 0;
brojac = 0;
for (let i = n; i <= k; i++) {
  if (i % 3 !== 0) {
    suma += i;
    brojac++;
  }
} 
rezultat = suma / brojac;
console.log(rezultat);
// 22

// 34
// 35
// 36
//38 39 40 zasto nece brojevi da se zaokruye na dve decimale
//51
// 62
