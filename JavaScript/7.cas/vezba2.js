// switch naredba

// 1.izrada programa za ocenjivanje.
// program treba omoguciti korisnkiku da unese ocenu (1-5),i ispisati odg poruke na temelju unosa

let ocena = +prompt("Unesite ocenu (1-5)");

switch (ocena) {
  case 1:
    console.log("Losa ocena");
    break;
  case 2:
    console.log("Dovoljna ocena");
    break;
  case 3:
    console.log("Zadovoljavajuca ocena");
    break;
  case 4:
    console.log("Dobra ocena");
    break;
  case 5:
    console.log("odlicna ocena");
    break;
  default:
    console.log("Nevazeca ocena");
}

// 2.izrada jednostavne aplikacije za pretvaranje jedinica.Program treba omoguciti korisniku
// da unese iznos u jednoj jedinici (npr incima), i pretvoriti ga u drugu jedinicu (npr cm)
//

console.log("+-------");
// provera dana u nedelji

let dan = new Date().getDay;
switch (5) {
  case 0:
    console.log("Ponedeljak");
    break;
  case 1:
    console.log("Utorak");
    break;
  case 2:
    console.log("sreda");
    break;
  case 3:
    console.log("cetvrtak");
    break;
  case 4:
    console.log("petak");
    break;
  case 5:
    console.log("subota");
    break;
  case 6:
    console.log("nedelja");
    break;
  default:
    console.log("niste uneli dan");
}

console.log("-------");
// unos broja meseci, da ispise na broj tri april
let meseci = +prompt("Unesite neki broj od 1-12,da bi se prikazao  mesec:");

switch (meseci) {
  case 1:
    console.log("Januar");
    break;
  case 2:
    console.log("Februar");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Maj");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Avgust");
    break;
  case 9:
    console.log("Septembar");
    break;
  case 10:
    console.log("Oktobar");
    break;
  case 11:
    console.log("Novembar");
    break;
  case 12:
    console.log("Decembar");
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

console.log("Unesite neki broj");
// Napisi program koji ce omoguciti korisniku da unese jedan broj od sledecih 1,2,3,4
// nakon unosa program bi trebao da napise odg poruku
// Odabrali ste broj 1...

let broj = +prompt("Unesite neki broj:");

switch (broj) {
  case 1:
    console.log("Uneli ste broj 1 " + broj);
    break;
  case 2:
    console.log("Uneli ste broj 2 " + broj);
    break;
  case 3:
    console.log("Uneli ste broj 3 " + broj);
    break;
  case 4:
    console.log("Uneli ste broj 4 " + broj);
    break;
  default:
    console.log("Uneli ste pogresan broj " + broj);
    break;
}


