const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "Povrsina kkvadrata iznosi " + a * b;
  } else {
    return "povrsina ptavougaonika iznosi " + a * b;
  }
};
// referentnog tipa-neprimitivnog tipa

// Arrow function
const kvadratBroja = (a) => {
  return a ** 2;
};
console.log(kvadratBroja(5));

// ako arrow function ima samo jedan parametar, nije neophodno stavljati ga u zagradama.
// ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda), mozemo izostaviti viticaste
// zagrade i return kod
const kvadratBroja2 = (a) => a ** 2;
console.log(kvadratBroja2(8));

//Napravi arrow

const korisnik = () => {
    broj = +prompt("Unesite neki broj ");
  if (broj > 0) {
    return "Unet je pozitivan broj " + broj;
  } else if (broj < 0) {
    return "Unet je negativni broj " + broj;
  } else if (broj === 0) {
    return "Uneta je nula " + broj;
  } else {
    return "Uneta vrednost nije broj";
  }
};



console.log("----------");
const korisnik1 = (broj) => {
  if (broj > 0) {
    console.log("Unet je pozitivan broj " + broj);
  } else if (broj < 0) {
    console.log("Unet je negativni broj " + broj);
  } else if (broj === 0) {
    console.log("Uneta je nula");
  } else {
    console.log("Uneta vrednost nije broj");
  }
};
broj = +prompt("Unesite neki broj ");
korisnik1(broj);

// 2.
function organizacija(sat, minut) {
  if (sat >= 9 && sat < 17 && minut >= 0 && minut < 60) {
    return "da";
  } else {
    return "ne";
  }
}
//   let sat = 10;
//   let minut = 5;
console.log(organizacija(18, 5));

// 3. 
function korisnik ()