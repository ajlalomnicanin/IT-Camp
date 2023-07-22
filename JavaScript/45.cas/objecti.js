// object literal, pocine velikim  objec

const Osoba = {
  first_name: "Ajla",
  last_name: "Lomnicanin",
  phone: "06345678", //properties - osobine
  getNameAndPhone: function () {
    // radnje - metode
    console.log(`${this.first_name} - ${this.phone}`);
  },
};

const Osoba2 = {
  first_name: "Amina",
  last_name: "muric",
  phone: "0626789876", //properties - osobine
  getNameAndPhone: function () {
    // radnje - metode
    console.log(`${this.first_name} - ${this.phone}`);
  },
};

Osoba.getNameAndPhone(); //
Osoba2.getNameAndPhone(); //
// Problem kod object literal jeste kada zelimo novu osobu da dodamo npr moramo sve da kopiramo odnosno
// ceo novi objekat da pravimo

// Object konstruktor, nije potrebno velikim slovima, ali je preporucljivo

function Osoba3(first_name, last_name, phone) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.phone = phone;
  this.getNameAndPhone = function () {
    console.log(`${this.first_name} - ${this.phone}`);
  };
}
let osoba4 = new Osoba3("Ajsa", "Tutic", "987456787");
let osoba5 = new Osoba3("Adem", "Tutic", "8757787");
console.log(osoba4);
console.log(osoba5);
osoba4.getNameAndPhone();
osoba5.getNameAndPhone();

//
const Osobaa = {
  first_name: "AJSA",
  getNameAndPhone: function () {
    console.log(`${this.first_name}-${this.phone}`);
  },
};

let AJla = Object.create(Osobaa); // na prvi pogled je prazna ali kada se stisne sve se prikaze
console.log(AJla);

// Osobaa.phone = "`236784323456"; // sada sam dodala phone
// console.log(Osobaa);
// Osobaa.getNameAndPhone(); //AJSA-underfined,

// pomocu klasa
class OOsoba {
  constructor(first_name, last_name, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }
  getNameAndPhone() {
    console.log(`${this.first_name}-${this.phone}`);
  }
}
let lice1 = new OOsoba("Marko", "Markovic", "34567");
let lice2 = new OOsoba("Mina", "Muric", "3456sdffdf7");
console.log(lice1);
console.log(lice2);

console.log(lice1.phone);
console.log(lice2.phone);
lice1.getNameAndPhone();
lice2.getNameAndPhone();
