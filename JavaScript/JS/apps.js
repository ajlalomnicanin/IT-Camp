console.log("Pozdrav iz konzole!");
console.error("Pozdrav iz konzole!");
// bude crveno x i tekst
console.warn("Pozdrav iz konzole");
// upozorenje

document.write("Pozdrav sa stranice");

// window.alert("pozdrav iz popup-a");
window.open();
// otvara novi prozor
// moze samo .open
// .alert ali vazi samo za window ovakav nacin pisanja

document.getElementById("poruka").innerHTML = "Ovo je pomocu id-a";

// postoje dve vrste komentara.
/*ovo je komentar
iz vise redova */

// VARIJABLE

// let a;
// a = "ovo je moj kanal";

let a = "ovo je moj kanal";
console.log(a);

console.log("------------");

let godine = 5;
let mjesec = "3";
let rezultat = godine + mjesec;
console.log(rezultat);
console.log(typeof rezultat);

console.log("------------");

let godinee = 5.1; //float number znaci da ima tacku
let mjesecc = 3;
let rezultatt = godinee + mjesecc;
console.log(rezultatt);
console.log(typeof rezultatt);

console.log("------------");

let nekiBroj = 65;
let drugiBroj = "6";
console.log(typeof drugiBroj);
// Da bi string pretvorii u broj radimo sledece za celi broj
//PARSEINT- da string pretvori u number
drugiBroj = parseInt(drugiBroj);
console.log(typeof drugiBroj);

console.log("------------");

// programski da zamenimo mesta
let prvi_broj = 5;
let drugi_broj = 10;
let treci_broj;

console.log(prvi_broj);
console.log(drugi_broj);

treci_broj = prvi_broj;
prvi_broj = drugi_broj;
drugi_broj = treci_broj;

console.log("Prvi broj:" + prvi_broj);
console.log("Drugi broj:" + drugi_broj);

// donja crta, dolar,slovo
// brojeve donja crta dolar sredina

let ime = "ajla";
let prezime = "ajla";
let godina = "20";

let recenica = "Moje ime je " + ime + "a prezime " + prezime + " " + godina;
console.log(recenica);

// godina = godina + 1;
godina++;
console.log(godina);

//godina = godina - 1;
godina--;
console.log(godina);

// da dodamo dve godine
godina += 2;
console.log(godina);
// da oduzmemo dve godine
godina -= 2;
console.log(godina);

let recenice = `Ja sam ${ime} imam ${godina} godina `;
console.log(recenice);

console.log("-----------");
// logicki operatori

let neki_broj = 10;
let nekibroj = 20;

let trecibroj = 60;
let cetvrtibroj = 70;

console.log(neki_broj < nekibroj);
console.log(trecibroj > cetvrtibroj);

console.log((   )())
