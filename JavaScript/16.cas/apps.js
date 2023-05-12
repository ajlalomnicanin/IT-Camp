const prom1 = "Sta ako zelimo da se recenica ispise u \n dva odvojena reda";
console.log(prom1);

const prom2 =
  "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo, \
ali njen prikaz ce izgledati u jednom redu.\
asdfghjk";
console.log(prom2);

// const prom3 =
//   "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo,
// ali njen prikaz ce izgledati u jednom redu.
// asdfghjk";   nije ispravna sintaksa

let br1 = 7;
let br2 = 13;
let zbir = br1 + br2;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + zbir); //ili
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2));

// Resenje preko back-tiks
console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zpisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sitntaksu.
// Zapisivanje stringa u vise redova je ispravna sintaksa kroz backs-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'";
//Replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz drugi argument).
// To se postize pravljenjem novog stringa.
// console.log(recanica.replace("promenljivo", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica2);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos \
nekom mestu?";

let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

// Replace() metoda menja samo prvi pronadjeni argument u datom stringu.
// Medjutim, koriscenjem regular exspression mozemo zameniti dati argument gde god se nadje u stringu novi.

// Sintaksa:

// Regular Exspression g (global), menja sve reci u stringu nekom novom.
let recenica5 = recenica3.replace(/promenljivo/g, "lepse");
console.log(recenica5);

// Regular Exspression i (insensitive), menja  rec nekom drugom bez obzira na njen zapis \
// bilo da je ispisana velikim ili malim slovima
let recenica6 =
  "Zelimo zameniti rec 'PromenljivO' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos \
nekom mestu?";

let recenica7 = recenica6.replace(/promenljivo/gi, "lepse");
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethoodni zadatak
// ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana velikim slovima.".toUpperCase());

// toLowerCase() metoda pretvara ceo string u mala slova, bez obzira na to kako je prethoodni zadatak
// ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana velikim slovima.".toLowerCase());

// concat() metoda spaja dva ili vise stringova u jedan.
// Nismo ograniceni slanjem argumenata.
// Dodavanje se vrsi onim redosledom kako saljemo argumente.

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode vezane za stringove prave novi string, ne vrsi se modifikacija postojeceg.

// Zadaci:
// 1.Napravi funkciju koja kod stringa

function myFunction(recenica) {
  if (recenica.length > 9) {
    const recenica2 = recenica.replace(/a/g, "B");
    return "Ovo je novodobijena recenica: ".concat(recenica2);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje";
  }
}

console.log(myFunction("Recenica za modifikaciju."));
console.log(myFunction("Nije do."));
