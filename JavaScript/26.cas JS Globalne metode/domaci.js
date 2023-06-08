// Napraviti funkciju koja:
// Domaci:
// b) pretvara m u km
// c) pretvara inch u cm

const mToKm = (m) => {
  return m / 1000;
};
console.log(mToKm(1));

const inchToCm = (inch) => {
  return inch * 2.54;
};
console.log(inchToCm(15));

// 2. Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.

const recenica = (broj1) => {
  let broj = broj1.toString();
  let palindrom = "";
  for (let i = broj.length - 1; i >= 0; i--) {
    palindrom += broj[i];
  }
  return palindrom === broj;
};
console.log(recenica(101));
console.log(recenica(102));

// ili
const palindrom1 = (broj1) => {
  let broj = broj1.toString();
  let palindrom = broj.split(" ").reverse().join(" ");
  let noviBroj = +palindrom;
  return broj1 === noviBroj;
};
console.log(recenica(1010));
console.log(recenica(10201));

// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

const funkcija1 = (broj) => {
  let broj1 = broj.toString();
  let brojprvi = broj1.charAt(0);
  let zadnjibroj = broj1.charAt(broj1.length - 1);
  let dvocifrenbroj = brojprvi + zadnjibroj;
  return +dvocifrenbroj;
};
console.log(funkcija1(267));
let rezultat = funkcija1(267);
console.log(typeof rezultat);

// ili
function first(broj) {
  if (!isNaN(broj) && broj >= 100 && broj <= 999) {
    const stotine = Math.floor(broj / 100);
    const jedinice = broj % 10;
    const noviBroj = Number(`${stotine}+${jedinice}`);
    return noviBroj;
  } else {
    return "Argument nije trazeni broj";
  }
}

console.log(funkcija1(667));