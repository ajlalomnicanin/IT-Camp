// includes() metoda vraca boolean (true ili false) u zavisnosti od toga da li se argument nalazi u stringu
// na kojem se primenjuje metoda ili ne
// Opciono!!! Drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu.

const recenica = "Dobar dan!";
console.log(recenica.includes("dan"));
console.log(recenica.includes("dan", 2));
console.log(recenica.includes("vece"));

//match() metoda nam  vraca niz. U zavisnosti od toga u kom obliku smo poslali argument,
// dobijamo razlicite nizove.

const recenica2 = "Na koliko ste casova bili danas u skoli?";
console.log(recenica2.match("a")); //niz sa informacijama vezano za argument i
// string na koji smo primenili metodu
console.log(recenica2.match(/a/g)); // niz sa elementima iste vrednosti (ima ih onoliko koliko se
// argument pojavljuje puta u stringu)
console.log(recenica2.match(/agde/g)); // ako posaljemo argument koji se ne nalazi u stringu dobijamo null.


