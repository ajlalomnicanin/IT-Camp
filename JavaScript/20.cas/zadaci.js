// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja,
// ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti
//  poruku:
// "Nismo pronasli dati string."

// Ponasanje match metode:
console.log("ko osvaja je rec koju trazimo.".match(/ko osvaja/g));
console.log(
  "ko osvaja je rec koju trazimo. Dakle ko osvaja".match(/ko osvaja/g)
);
console.log("Dobro vece".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string.";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `Pozicija prvog pojavljivanja: ${recenica.indexOf(
      "ko osvaja"
    )}; \n Pozicija poslednjeg pojavljivanja: ${recenica.lastIndexOf(
      "ko osvaja"
    )}.`;
  }
};
console.log(zadatak("ko osvaja ligu sampiona?"));
console.log(zadatak("Ko osvaja ligu sampiona?"));
console.log(zadatak("ko osvaja ligu sampiona? ko osvaja? ko osvaja?"));

console.log("domaci");
// Domaci zadaci:
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

function funkcija1(recenica) {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    let recenica1 = recenica.match(/kuca/g);
    return recenica1;
  } else {
    return recenica.length;
  }
}

console.log(funkcija1("danas ja skola lepa."));
console.log(funkcija1("automobil je brz."));
console.log(funkcija1("kuca je cista.kuca je cista."));
console.log(funkcija1("duzina recenice je "));

// 3.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu
// pripadaju isključivo engleskoj abecedi.

function malaSlova(string) {
  let brojac = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string.charAt(i) >= "a" && string.charAt(i) <= "z") {
      brojac++;
    }
  }
  return brojac;
}
console.log(malaSlova("gevhgwASDF"));

function malaSlova1(string) {
  let brojac = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
      brojac++;
    }
  }
  return brojac;
}
console.log(malaSlova1("ajlajlaASDF"));

function string1(string) {
  let brojac = 0;
  for (let i = 0; i < string.length; i++) {
    let toUp = string.toUpperCase();
    let toLower = string.toLowerCase();
    if (!toUp || toLower) {
      brojac++;
    }
  }
  return brojac;
}

console.log(string1("DANAS"));
