console.log("Prvi cas javascripta");
console.log("Nova poruka");

tekst = document.getElementById("paragraf");
console.log(tekst);

tekst.innerHTML = "<em>Da li se vidi paragaraf.<em>";

// Tipovi podataka //

// Postoje //
// 1.Primitivni - vrednosni tipovi podataka//
// 2.Neprimitivni- referentni tipovi podataka//

// Za proveru tipova odredjene promenljive - varijable se koristi typeof operator.//

//TYPEOF

// PRIMITIVNE VREDNOSNI TIPOVI PODATAKA//

// 1.STRING-promenljiva koja je zapisana unutar navodnika, obicnih ili duplih;
console.log("neki string");
console.log(typeof "neki string");

//2. NUMBER- brojevi mogu biti zapisani sa ili bez decimalnog zareza (.)
console.log(56);
console.log(typeof 56);

console.log(56.56);
console.log(typeof 56.56);

// 3. BigInt- brojevi koji su iznad ogranicenja za number tip podataka.
console.log(BigInt(23443234323));
console.log(typeof BigInt(23443234323));

// 4. boolean- Logicli entitet koji ima dve vrednosti:
// true
// false
console.log(true);
console.log(typeof true);
console.log("-----")

// 5. undefined- Promenljiva koja je definisana u memoriji ali joj nije dodeljena vrednost  ima:
// tip: underfined i
// vrednost: undefined.

var a;

console.log(a);
console.log(typeof a);
console.log("-----")

// 6. null- Nepostojeca ili nekoretna promenljiva ima vrednost null.
// Tip promenljive cija je vrednost null u JS je object.
b = null;

console.log(b);
console.log(typeof b);

// 7. Symbol- Koristi se za promnljive koje su anonimne ili jedinstvene.
c = Symbol("IT Camp");

console.log(c);
console.log(typeof c);

// Svi tipovi podataka koji nisu primitivni su tipa object.
// Promenljive koje mogu sadrzati vise  (od jedne) vrednisti su referentnog -neprimitivnog tipa.

// 1. Arrayn (niz) - Struktura podataka za skladistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa)
niz = ["Emir", 21, true];
console.log(niz);
console.log(typeof niz);

// 2.Object (objekat) - Struktura podataka za skladistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa)
// Te vrednosti su prikazane u key:value (name:value) paru.
obj = {
  ime: "Emir",
  prezime: "Marukic",
  punoletan: "true",
};
console.log(obj);
