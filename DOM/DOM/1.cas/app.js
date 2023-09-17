// Ispitivanje dokument object //
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123; // menjam naslov stranice samo
console.log((document.title = 123)); // menjam u consoli i na stranici
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[2]); //meta tagu drugi po redu

// console.log((document.all[5].textContent = "Hello"));
// // textContent - tekstualni sadrzaj,
// // ovaj gore naccin promene nije dobar zato kad bi dodali neki span onda se sve pomera

console.log(document.forms); // prikazuje forme- polja za unos podataka
console.log(document.forms[0]);
console.log(document.links); // prazan niz, zato sto nemam linkove
console.log(document.images);

// GetElementById - selektor//
console.log(document.getElementById("naslov")); //1.nacin naslov se pojavljuje u consoli sa svim html elementima
let header = document.getElementById("naslov"); //2.nacin
console.log(header);
// da promenim tekst, i textContent i innerText menjaju sadrzaj //
header.textContent = "Promenjeni sadrzaj"; // metoda
header.innerText = "goodbye"; //metoda

// razlika izmedju textContent i innerText jeste u tome
// ako imamo neki span i kada prikazemo text preko content
// i onda na spanu dodamo style gde izbrisemo sazdrzaj kod contenta u konzoli ce i dalje da bude sadrzaj spana,
// dok kod innera se brise kako treba sve, obraca paznju na style

console.log(header.innerText);
console.log((header.innerHTML = "AJLAAAA")); //metoda
header.innerHTML = "<h1>ademmmm</h1>"; // ovako  dodajem na stranicu ademm ali u h5 formatu
// header.innerText = "<h5>ademm</h5>"; // ne koristi html elemente nego prikazuje ceo tekst na straniicu

// menjamo neki stil, dodajemo //
header.style.borderBottom = "solid 3px yellow";
// camilCase stil mora

// ------------------------------------------------------

// getElementByClassName
//dobijanje elementa po imenu klase - selektor //
var items = document.getElementsByClassName("list");
console.log(items);
console.log(items[1]);
items[1].textContent = "promenila sam listu 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
console.log(items[1]); //promenjen sadrzaj

// items.style.backgroundColor = "red"; // gives error nece htet zato sto treba da prodje kroy niz

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "red";
}
// -----------------------------------------------

// byElementByTagName //

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "promenila sam listu 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";
console.log(items[1]); //promenjen sadrzaj

for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "red";
}
// --------------------------------------------------------

//  QuerySelector //

// querySelector je JavaScript metoda koja se koristi za pronalaženje prvog elementa
// u dokumentu koji odgovara određenom CSS selektoru. Ova metoda omogućava programerima
//  da dinamički pristupe i manipulišu elementima na web stranici koristeći JavaScript

var headerr = document.querySelector("#naslov"); //id u pitanju
headerr.style.color = "blue";

var input = document.querySelector("input"); //input elemenat
input.value = "hello word";

var submit = document.querySelector('input[type = "submit"]');
submit.value = "Send|";

var item = document.querySelector(".list");
item.style.color = " green";

var lasttItem = document.querySelector(".list:last-child");
lasttItem.style.color = "blue"; // ako zadnji element nema klasu onda nece ovaj kod

var secondItem = document.querySelector(".list:nth-child(2)");
secondItem.style.color = "pink";

// --------------------------------------------------------------

// querySelectorAll
// querySelectorAll je JavaScript metoda koja se koristi za pronalaženje svih elemenata
// u dokumentu koji odgovaraju određenom CSS selektoru. Ova metoda vraća NodeList objekat
//  koji sadrži sve pronađene elemente. NodeList je sličan nizu, ali nije pravi JavaScript Array.

let inpu = document.querySelectorAll('input[type = "submit"]');
inpu[0].value = "poslato sve";
inpu.forEach((el) => (el.value = "clickk me"));

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i <= odd.length; i++) {
  odd[i].style.background = "yellow";
  even[i].style.background = "red";
}
