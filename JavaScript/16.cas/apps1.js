// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu
// u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet.

function funkcija() {
  let recenica = prompt("Unesite neki tekst:");

  let recenicaVelika = recenica.toUpperCase();
  console.log(recenicaVelika);

  let recenicaMala = recenica.toLowerCase();
  console.log(recenicaMala);

  let sredinaRecenice = recenica.length / 2;
  let polovina1 = recenica.substring(0, sredinaRecenice).toUpperCase();
  let polovina2 = recenica.substring(sredinaRecenice).toLowerCase();
  let polaRecenice = polovina1.concat(polovina2);
  console.log(polaRecenice);

  let zamenjenaRecenica = recenica.replace(/skola/gi, "fakultet");
  console.log(zamenjenaRecenica);
}
funkcija();

// treca recenica preko for petlje
// const duzinaRecenice = recenica.length;
// let recenica3 = "";
// for (let i = 0; i < duzinaRecenice; i++) {
//   if (i <= duzinaRecenice / 2) {
//     recenica3 += recenica[i].toUpperCase;
//   } else recenica3 += recenica[i].toLowerCase;
// }
// // posle preko return na kraju svih ovih recenica
// return `${recenicaVelika} \n
// ${recenicaMala} \n
// ${recenica3} \n
// ${zamenjenaRecenica} \n`;

// 2.Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati
//  rezultujući string. Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da
//  vrati "Danas je # dan.".

const druga = (recenica, rec) => recenica.replace(rec, "#");
console.log(druga("Danas je lep dan", "lep"));
//3. Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu.
//  Ignoriši prazne prostore. Na primer, za ulazni string "Hello, World!", funkcija treba 0

function funkcija3(string) {
  let brojac = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}

// let recenica = "Hello, World!";
// let recenica1 = funkcija3(recenica);
// console.log(recenica1);
console.log(funkcija3("Hello, World!"));
