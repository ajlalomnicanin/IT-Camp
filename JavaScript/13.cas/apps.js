// Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime
// npr duzina korisnickog imena mora biti najmanje 6 karaktera

let username = "";
while (username.length < 6) {
  username = prompt("Unesite vase ime");
  //   console.log(username, username.length); //provera
}

//FUNKCIJE
// funkcije predstavljaju deo koda koji ce se izvrsavati samo u slucaju njihovog pozivanja. Koristimo ih da
// bi nas kod bio reusable (isti kod resava vise problema slicnog tipa)

// funkciju mozemo napraviti na dva nacina:
// 1.preko function keyword
// 2.arrow function
//DRY

//1.
function myFunction() {
  //kod unutar funkcije
}

// 2.
const myFunction2 = () => {
  //kod unutar funkcije
};

// Primer
// prilikom definisanja funkcije mozemo joj proslediti parametre koji su neophodni za izvrsavanje kod
//date funkcije  // PARAMETRI//
// dok prilikom pozivanja funkcije to sto saljemo fukciji se zovu argumenti // ARGUMENTI //

// parametar funkcije-prilikom samog definisanja u zagradi
// prilikom pozivanja fukcije yovu se argumenti

function greeting() {
  console.log("Zdravo");
}
greeting();

function greeting2(ime) {
  console.log("Zdravo " + ime);
}
greeting2("Ajla");

// napravi funkciju koja nam vraca zbir 3 i 5
function zbir() {
  x = 3;
  y = 4;
  //kada se izvrsava sela logika funkcije, krajnji rezultat treba vratiti u return keyword (rezervisanoj reci)
  return x + y;
  //   console.log("nesto") kod koji se nadje nakon return fukncije scope se nece primeniti
}

// napraviti funkciju koja vraca zbir dva broja
function zbir(x, y) {
  return x + y;
}

console.log(zbir(10, 5));

// za dodeljivanje difaultne vrednosti moze se izvrsiti na dva nacina

// 1.nacin
function zbir1(x, y) {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}
console.log(zbir1(10));

// 2.nacin

function zbir2(x, y = 0) {
  return x + y;
}

console.log(zbir2(15));
