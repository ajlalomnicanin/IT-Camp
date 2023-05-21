// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu.
// Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer."
// funkcija treba da vrati broj 3.

function funkcija1(string) {
  let recenica = string.split(" ");
  return recenica.length;
}

let recenica = "Ovo je primer";
console.log(funkcija1(recenica));

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu.
//  Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

function funkcija2(string) {
  let rec = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rec += string[i];
  }
  return rec;
}
console.log(funkcija2("Hello"));

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.
// Napiši funkciju koja prima jedan string kao argument i vraća broj cifara u tom stringu.

function funkcija3(string) {
  let brojac = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " " && !isNaN(string[i])) {
      brojac++;
    }
  }
  return brojac;
}
let recenica1 = "Brojac1235 67je";
console.log(funkcija3(recenica1));

//pomocu replace metode
function funkcija4(string) {
  let brojac = 0;
  let bezRazmaka = string.replace(/\s/g, "a");
  for (let i = 0; i < bezRazmaka.length; i++) {
    if (!isNaN(bezRazmaka[i])) {
      brojac++;
    }
  }
  return brojac;
}
let recenica2 = " ajlu ajalu 1234";
console.log(funkcija4(recenica2));
