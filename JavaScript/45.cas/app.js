// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. addLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

let person = {
  firstName: "Asija",
  lastName: "Sijaric",
  language: ["Serbian", "English"],
};

person.addlenguage = function (lang) {
  this.language.push(lang);
};

person.addlenguage("German");

person.removelanguage = function (lang) {
  // 1.nacin
  const newArr = this.language.filter((language) => language !== lang);
  this.language = newArr;
  // ili
  // 2.nacin
  //   const position = this.language.indexOf(lang);
  //   if (position !== -1) {
  //     this.language.splice(position, 1);
  //   }
};

person.removelanguage("English");

person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2).toLowerCase();
  let drugi = this.lastName.slice(0, 2).toLowerCase();
  let nickname = prvi + drugi;
  return nickname[0].toUpperCase() + nickname.slice(1);
};

console.log(person.setNickname());

console.log(person);

// 2.
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return (
        // ili radnik.fullName() umesto radnik.firstName i radnik.lasttName
        radnik.firstName +
        " " +
        radnik.lastName +
        " " +
        "zivi u ulici" +
        " " +
        this.ulica +
        " " +
        this.broj +
        " " +
        " u " +
        " " +
        this.grad
      );
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

// Napravi novi niz (punoletni) koji ce sadrzati one elemente(objekte) cija je starost veca od 17
const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];
const punoletni = godine.filter((coek) => coek.starost >= 18);
console.log(punoletni);

const punoletni2 = punoletni.map((coek) => coek.starost );
console.log(punoletni2);

// ... (spread) operator
// spread operator nam sluzi za kloniranje niza ili objekta
const punoletni3 = [20, ...punoletni2, 30];
console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Tarik",
  lastName: "Hambelic",
};
console.log(radnik2);
