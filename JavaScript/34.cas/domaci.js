// 1. Napraviti funkciju koja vraca najveci element nekog niza.

function najveciElement(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(najveciElement([2, 3, 7, 5, 1, 4]));

// ili
function najBroj(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1];
}
console.log(najBroj([56, 3, 7, 55, 1, 40]));

// 2. Napraviti funkciju koja vraca najmanji element nekog niza.

function najmanjiElement(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(najmanjiElement([2, 3, 7, 5, 1, 4]));

// ili

function najmanjiBroj(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}
console.log(najmanjiBroj([56, 3, 7, 55, 1, 40]));

// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i
//  Tarik ne smeju naci.

const grupa = [
  "Tarik", //

  "Selver",
  "Nedim",
  "Merjem",

  "Melida", //
  "Marija", //
  " Dzevdet", //

  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];

grupa.splice(4, 3);
grupa.splice(0, 1);
console.log(grupa);

let muskarci = grupa.splice(0, 2);
console.log(muskarci);

let devojke = grupa.slice(0);
console.log(devojke);

// 4. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na
// neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

function neparniElement(arr) {
  const neparniNiz = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      //   neparniNiz += arr[i];
      neparniNiz.push(arr[i]);
    }
  }
  return neparniNiz;
}
console.log(neparniElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
