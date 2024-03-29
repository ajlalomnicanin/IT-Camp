// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: ["0622222", "02033322"],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar["maksimalnaBrzina"] = 260;

myCar.povecanjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina + vrednost <= this.maksimalnaBrzina) {
    this.trenutnaBrzina += vrednost;
    return "Ubrzanje je povecano.";
  } else {
    return "Ne brze od zivota!";
  }
};

myCar.smanjenjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina - vrednost >= 0) {
    this.trenutnaBrzina -= vrednost;
    return "Brzina je umanjena.";
  } else {
    return "Nije moguce smanjiti brzinu.";
  }
};
myCar.koci = function () {
  this.trenutnaBrzina = 0;
  return "Ukocili ste";
};

console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(80);
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(100);
console.log(myCar.trenutnaBrzina);
console.log(myCar.povecanjeBrzine(100));
console.log(myCar.trenutnaBrzina);

myCar.smanjenjeBrzine(90);
console.log(myCar.trenutnaBrzina);
console.log(myCar.smanjenjeBrzine(100));
console.log(myCar.trenutnaBrzina);
console.log(myCar.smanjenjeBrzine(20));
console.log(myCar.trenutnaBrzina);

// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

class Osoba {
  constructor(firstName, lastName, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
  }
  setLanguage(language) {
    return (this.language = language);
  }
  setNickName() {
    let ime = this.firstName.slice(0, 2);
    let prezime = this.lastName.slice(0, 2);
    return ime + prezime;
  }
}
const osoba1 = new Osoba("Ana", "Nikolic", "eng");
console.log(osoba1);
console.log(osoba1.setLanguage("srp"));
// console.log(osoba1.language);
console.log(osoba1.setNickName());

// ili
