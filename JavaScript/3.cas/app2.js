







// 4.Operatori poredjenja:

// == proverava da li su jednake vrednosti dve strane:

console.log(5 == 5);
console.log(5 == "5"); //imaju istu vrednost, ali im je tip razlicit
console.log("leva" == "desna");

// === Proverava jednakost tipa i vrednosti dve strane.

console.log(5 === "5");
console.log(10 === 10);

//  != proverava razlicitost leve i desne strane.

console.log(5 != "5");
console.log(5 != 6);

// !== Proverava razlicitost tipa ili vrednosti leve i desne strane.

console.log(5 !== "5")
console.log("sreda" !== "Sreda")

// > vece

console.log(4 > 6);

// < manje

console.log(4 < 6);

//  >= vece ili jednako

console.log(5 >= 5)

// <= manje ili jednako

console.log(7 <= 19);

// ? Ternary operator

const isSunny = false
const doINeedSunGlasses = isSunny ? "Da" : "Ne";
console.log(doINeedSunGlasses)

// 5. Logicki operatori:

// && Logicko i (ili)- Kada moraju biti zadovoljeni svi poduslovi
console.log(5 === "5" && 4 <=6) //false
console.log(5 == "5" && 4 <=6) //false

// ||  Logicko ili - Kada je dovoljno da bar jedan uslov bude zadovoljan
console.log(5 === "5" || "sreda" === "Sreda"); //false
console.log(5 == "5" || "sreda" === "Sreda"); //true

// ! Logicko not - Vraca boolean. Koji ce da bude suprotne vrednosti od promenljive.
console.log(!isSunny)

//  6. Tipovni operatori:

// typeof - za ispitivanje tipa promenljive.
console.log(typeof 123);

// instanceof - Operator za ispitivanje da li neka promenljiva pripada odredjenom tipu.

console.log(123 instanceof Object);

console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array)