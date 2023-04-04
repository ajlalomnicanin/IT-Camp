// Za komunikaciju sa korisnikom koristimo prompt metodu:

const ime = prompt("Unesite vase ime:");
console.log(ime);

const Brojgodina = prompt("Unesite broj godina:");
console.log(Brojgodina);
console.log(typeof Brojgodina);

// Posto je vrednost dobijena preko prompt metode uvek je string, i zato imamo potrebu da pretvorimo string u number tip podataka.
// Pomenucemo 2. nacina za prevodjenje stringa u broj:

//1. Number (string prebacujemo u number)
const Brojgodina2 = Number(Brojgodina);
console.log(Brojgodina2);
console.log(typeof Brojgodina2);

console.log("-----------");
// 2. na string dodajemo +
// +string => number
const Brojgodina3 = +Brojgodina;
console.log(Brojgodina3);
console.log(typeof Brojgodina3);

console.log("-----------");

// Unesitte vasu visinu
const visina = prompt("Unesite vasu visinu:");
console.log(visina);
console.log(typeof visina); //string

// Da ga prebacim u number, sada je string
const visina1 = Number(visina);
console.log(visina1);
console.log(typeof visina1); //number

const visina2 = +visina;
console.log(visina2);
console.log(typeof visina2); //number

console.log("-----------+");

// isNaN ispituje da li je vrednost nekog broja NaN. Da li je broj korektan ili nekorektan (ispravan).
console.log(isNaN("56")); //false
console.log(isNaN("5678tfb")); //true

console.log("---------");

const Brojgodina4 = +prompt("Unesite broj vasih godina:");
if (isNaN(Brojgodina4)) {
  console.log("Niste uneli broj godina");
} else if (Brojgodina4 > 0 && Brojgodina4 < 12) {
  console.log("Vi ste decijeg doba");
} else if (Brojgodina4 >= 12 && Brojgodina4 < 18) {
  console.log("Vi ste maloletni");
} else if (Brojgodina4 >= 18 && Brojgodina4 > 40) {
  console.log("Vi ste punoletna osoba");
} else if (Brojgodina4 >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("Broj godina ne moze biti negativan ili nula!!");
}

console.log(5 + "4");
console.log(5 - "4")

//Prazan string => numer=0
console.log(Number(""))
