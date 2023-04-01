// Operatori u JS

/* Postoji  6 vrsta operatora:
1. Aritmeticki operatori;
2.Operatori dodele vrednosti;
3.String operatori;
4.Operatori poredjenja;
5.Logicki operatori;
6.Tipovni operatori.
*/

// 1. Aritmeticki operatori://

// Sabiranje +
console.log(10 + 15);

// Oduzimanje -
console.log(10 - 15);

// Mnozenje *
console.log(10 * 15);

//Deljenje /
console.log(8 / 2);

//Stepenovanje **
console.log(2 ** 3);

//Modul % (Ostat pri deljenju)
console.log(12 % 5);

// Parni brojevi: x % 2 = 0
// Neparni brojevi x % 2 !=0

// Increment ++ (povecanje vrednosti za 1 broj)
x = 5;
x++; // x = x + 1
console.log(x);

// Decrement -- (smanjenje vrednosti za 1 broj)
y = 10;
y--;
console.log(y);

//2.Operatori dodele vrednosti;//

// = Dodeljivanje vrednosti nekoj promenljivoj
a = 5;

// += Dodavanje nove vrednosti na postojecu;

a += 5; // a=a+5
console.log(a);

// -= Smanjenje vrednosti postojece promenljive;
a -= 7;
console.log(a);

// *= Mnozenje postojece vrednosti sa odredjenim brojem;
a *= 3;
console.log(a);

// /= Deljenje postojece vrednosti sa odredjenim brojem;
a /= 3;
console.log(a);

// %= Ostatak pri deljenju trenutne vrednosti sa nekim brojem;
a = 3;
a %= 2; //a = a % 2
console.log(a);

// **= Stepenovanje postojece vrednosti nekim brojem;
a = 5;
a **= 2; //a = a ** 2
console.log(a);

// 3.String operatori;//

//Pored osnovne namene za sabiranje brojeva , + operator sluzi za spajanje stringova

console.log(4 + 4);
console.log("dobar " + "dan");

// Sabiranje broja i stringa daje nam string (spaja sve zajedno 5 + "25" = 525)
console.log(5 + "25");
console.log(typeof (5 + "25"));
console.log(4 + " nedelja");
// OVO
console.log(25 - "15");
console.log(5 * "15");
console.log("10" / 2);

// Dobijamo NaN (Not a Number)
console.log(25 - "string");
console.log(5 * "string");
console.log(typeof (5 * "string"));
// NaN je broj cija vrednost nije korektna.
// Tip NaN je number

// 4.Operatori poredjenja:

// == proverava da li su jednake vrednosti dve strane:

console.log(5 == 5);
console.log(5 == "5"); //imaju istu vrednost, ali im je tip razlicit
console.log("leva" == "desna");

// === Proverava jednakost tipa i vrednosti dve strane.
console.log("----------------");
console.log(5 === "5");
console.log(10 === 10);

//  != proverava razlicitost leve i desne strane.

console.log(5 != "5");
console.log(5 != 6);

// !== Proverava razlicitost tipa ili vrednosti leve i desne strane.

console.log(5 !== "5");
console.log("sreda" !== "Sreda");

// > vece

console.log(4 > 6);

// < manje

console.log(4 < 6);

//  >= vece ili jednako

console.log(5 >= 5);

// <= manje ili jednako

console.log(7 <= 19);

// ? Ternary operator
// prvo proverava uslov (condition), ako je uslov ispunjen, izraz 1 (expression1) se izvrsava, ako nije onda se izvrsava izraz2
// (condition) ? (expression1): (expression2)

let c= 10;
let f = c > 5 ? "c je veci od 5" : "c je manje od 5";
console.log(f);

const isSunny = false;
const doINeedSunGlasses = isSunny ? "Da" : "Ne";
console.log(doINeedSunGlasses);

// 5. Logicki operatori:

// && Logicko i (ili)- Kada moraju biti zadovoljeni svi poduslovi
console.log(5 === "5" && 4 <= 6); //false
console.log(5 == "5" && 4 <= 6); //false

// ||  Logicko ili - Kada je dovoljno da bar jedan uslov bude zadovoljan
console.log(5 === "5" || "sreda" === "Sreda"); //false
console.log(5 == "5" || "sreda" === "Sreda"); //true

// ! Logicko not - Vraca boolean. Koji ce da bude suprotne vrednosti od promenljive.
console.log(!isSunny);


//  6. Tipovni operatori:

// typeof - za ispitivanje tipa promenljive.
console.log(typeof 123);

// instanceof - Operator za ispitivanje da li neka promenljiva pripada odredjenom tipu.

console.log(123 instanceof Object);

console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
