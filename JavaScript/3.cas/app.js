// VAR
var x = 10;
console.log(x); //Pre nego sto je x definisano, u console cemo dobiti vrednost 10

x = 14;
console.log(x);

var x = 25;
console.log(x);

//Za sve promenljive definisane preko var keyword je moguce izvrsiti redeklaraciju
// (ponovo definisanje promenlljive) i reinicijalizaciju (dodeljivanje nove vrednosti).

// LET
let y = 30;
console.log(y);

y = 15;
console.log(y);
// let y; Nije moguca deklarizacija kada joj je jednom dodeljena vrednost. Dakle vrednost se moze promeniti
//ali se ne moze deklarisati.

// Za sve promenljive definisane preko let keyword je moguce izvrsiti reicinijalizaciju (dodeljivanje nove vrednosti),
//ali kada govorimo o istom prostoru (scope) nece biti moguce redeklaracija (novo obezbedjivanje prostora memorije)

// let i const keyword nam obezbedjuju block scope (dodatni prostor za definisanje promenljive).
// Promenljive definisanr preko let i const keyword su block scope promenljive.
console.log("------------");
{
  let y = 50;
  console.log(y);
}
console.log(y);

//dakle u nekom block scope je moguce izvrsiti i redeklaraciju i reinicijalizaciju

// CONST

const w = 18;
console.log(w);

// const w = 30;
// console.log(w) kada se jednom definise nije moguce ponovo definisati const

// za promenljive definisane preko const  (u istom prostoru) nije moguce izvrsiti redeklaraciju i inicijalizaciju.
{
  const w = 90;
  console.log(w);
}

// sve karakteristike koje vaze za promenljivu definisanu preko let,vaze i za promenljive definisane
//  preko const keyword, kada govorimo o block scope.

const niz = [12, 13, 15, 16];
// niz = ["bilo", "sta"]
console.log(niz);
// postoje metode koje nam dozvoljavaju izmenu naseg niza bez obzira sto se radi o promenljivoj definisanoj preko const keyword
