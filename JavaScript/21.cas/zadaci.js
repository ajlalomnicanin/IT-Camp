var a = 7;
let b = 4;
const c = 3;

// cesto u literaturi cemo naici na tvrdnju da je js interpreterski jezik, ali to nije bas tako. u pozadini
// postoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsavanja koda.
// stoga nije pogresno reci da je JS kompajliran jezik.

// Pojam hoisting u JS predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla).

d = 11;
console.log(d);

// Kasnije deklariranje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

var d;
// let d
// const d

//	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu 
// spripadaju isključivo engleskoj abecedi.

function fun1(tekst) {
  let brojac1 = 0;
  let brojac2 = 0;
  for (let i = 0; i < tekst.length; i++) {
    let tekst1 = tekst.charAt(i);
    if (tekst1 >= "A" && tekst1 <= "Z") {
      brojac1++;
    } else if (tekst1 >= "a" && tekst1 <= "z") {
      brojac2++;
    }
  }
  if (brojac1 > brojac2) {
    return `U datoj recenici ima vise velikih slova.Ima ih ${brojac1}, dok malih slova ima ${brojac2}`;
  } else if (brojac2 > brojac1) {
    return `U datoj recenici ima vise malih slova.Ima ih ${brojac2}, dok velikih slova ima ${brojac1}`;
  } else {
    return `Dati string ima jednak broj i malih i velikih slova, ${brojac2}`;
  }
}
console.log(fun1("Treba imati vise malih SLOVA."));
console.log(fun1("TREBA IMATI VISE VELIKIH slova"));
console.log(fun1("mala i VELIKA s"));
