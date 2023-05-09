//Napraviti funkciju koja izracunava zbir dva broja
console.log("---1-zadatak---");

function zbir(a, b) {
  let c = a + b;
  return c;
}

console.log(zbir(10, 5));

//ili

function zbir1(a, b) {
  console.log(a + b);
}

zbir1(6, 6);

//Napravi fukciju koja proverava da li je broj paran
console.log("---2-zadatak---");

function paran_broj(broj) {
  if (broj % 2 === 0) {
    console.log(`Broj ${broj} je paran!`);
  } else {
    console.log(`Broj ${broj} je neparan!`);
  }
}
paran_broj(5);
paran_broj(8);

//pomocu return
function isParan(broj) {
  return broj % 2 === 0;
}
console.log(isParan(6));
console.log(isParan(3));

//Napisi funkciju koja pronalazi najveci od tri broja
console.log("---3-zadatak---");

function najveciBroj(a, b, c) {
  let najveci;
  if (a > b && a > c) {
    najveci = a;
  } else if (b > a && b > c) {
    najveci = b;
  } else {
    najveci = c;
  }
  return najveci;
}
// let a = 4;
// let b = 6;
// let c = 9;
// let rezultat = najveciBroj(a, b, c);
// console.log(rezultat);
console.log(najveciBroj(4, 6, 9));

//ber return

function najveciBr(a, b, c) {
  let najveci;
  if (a > b && a > c) {
    najveci = a;
  } else if (b > a && b > c) {
    najveci = b;
  } else {
    najveci = c;
  }
  console.log(najveci);
}
najveciBr(6, 2, 5);

// Napisi funkciju koja ispisuje sve brojeve od 1 do n
console.log("---4-zadatak---");
function brojj(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
// brojj(5); evo pomocu prompt
let korisnik = +prompt("Unesite neki broj");
brojj(korisnik);

// Napisi funkciju koja izracunava sumu brojeva u nizu
console.log("---5-zadatak---");

function func(niz) {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  //   console.log(suma);
  return suma;
}
let niz = [1, 2, 3];
// niz1(niz) samo do ovde bez return
// let rezult = func(niz);
// console.log(rezult);
console.log(func(niz));

//napisi fuknciju koja prima broj n koristi while petlju da izracuna sumu brojeva od 1 do n
console.log("---6-zadatak---");

function izracunavaSumu(n) {
  let i = 1;
  let suma = 0;
  while (i <= n) {
    suma += i;
    i++;
  }
  return suma;
}
console.log(izracunavaSumu(5));

//Napisite funkciju koja prima broj n i koristi for petlju da ispise sve brojeve od 1 do n
console.log("---7-zadatak---");

function brojevi(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
brojevi(6);

//if uslov.-Napisi funkciju koja proverrava da li je broj paran. ako jeste napisi broj je paran,inace ispisi
//broj je neparan
console.log("---8-zadatak---");

function paran(broj) {
  if (broj % 2 === 0) {
    console.log(`${broj} je paran`);
  } else {
    console.log(`${broj} je neparan`);
  }
}
// broj = 5;
broj = +prompt("Unesite neki broj");
paran(broj);
