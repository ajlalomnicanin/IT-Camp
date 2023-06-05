// METODE BROJEVA

// toString() metoda vraca string (broj tipa string).
// Ova metoda metoda se moze primeniti na bilo koji tip podatka.

let x = 144;
let y = x.toString();

console.log(y);
console.log(typeof y);

console.log(y + 5);

// toFixed() metoda vraca broj zaokruyen na onoliko decimala koliki je argument poslat metodi.
// Dobijena vrednost je tipa string.
//
z = 122.34532;
console.log(z);
let broj = z.toFixed(2);
console.log(broj);
console.log(typeof +broj);
//posto bude string zbog toFixed, stavimo + ispred i vrati nam broj

// toPrecision() metoda vraca broj sa ukupnim brojem cifara koliki je argument poslat metodi.
// Dobijena metoda je tipa string

let broj2 = z.toPrecision(4);
console.log(broj2);
console.log(typeof broj2);

// Bolji u dve discipline
// Takmicari su radili testove iz matematike i programiranja.Za svaki predmet dobili su odredjeni broj
// poena(ceo broj od 0 do 50). Takmicari se rangiraju po ukupnom broju poena iz oba predmeta. Ako dva takmicara
// imaju isti broj poena, pobednik je onaj koji ima vise poena iz programiranja. Potrebno je napisati
// program koji odredjuje pobednika takmicenja.
function funkcija1(mat1, pro1, mat2, pro2) {
  let takmicar1 = mat1 + pro1;
  let takmicar2 = mat2 + pro2;
  if (takmicar1 === takmicar2 && pro1 > pro2) {
    return `Pobedio je prvi takmicar`;
  } else if (takmicar1 === takmicar2 && pro1 < pro2) {
    return `Pobedio je drugi takmicar`;
  } else if (takmicar1 === takmicar2) {
    return `Pobedio je prvi takmicar`;
  } else if (takmicar1 > takmicar2) {
    return `Pobedio je prvi takmicar`;
  } else {
    return `Pobedio je drugi takmicar`;
  }
}
console.log(funkcija1(30, 20, 20, 30));
console.log(funkcija1(20, 30, 30, 20));
console.log(funkcija1(50, 50, 50, 50));

console.log("drugi primer");

function funkcija2(mat1, pro1, mat2, pro2) {
  let takmicar1 = mat1 + pro1;
  let takmicar2 = mat2 + pro2;
  if (takmicar1 < takmicar2) {
    return `Pobedio je drugi takmicar`;
  } else if (takmicar1 === takmicar2) {
    if (pro2 < pro2) {
      return `Pobedio je drugi takmicar`;
    } else {
      return `Pobedio je prvi takmicar`;
    }
  } else {
    return `Pobedio je prvi takmicar`;
  }
}
console.log(funkcija2(34, 40, 45, 45));
console.log(funkcija2(50, 50, 45, 45));
console.log(funkcija1(50, 50, 50, 50));
console.log(funkcija1(23, 32, 32, 23));

// Domaci zadaci:
// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))

// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

// 1 sat ima 60 minuta
// 1 sat ima 60*60 = 3600 sekundi
// 1 minut ima 60 sekundi

// 123
