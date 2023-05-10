const isSunny = true;
if (!isSunny) {
  // ! - is not
  // === true
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano");
}

//Postoji 8 false vrednosti, to su:

// 1.false
// 2."" - string (ako bar ima razmak, zadovoljice uslov, i bice truthy, ako nema nista u stringu onda bice false)
// 3.0 - number
// 4.-0
// 5. 
// 8.null

//

//1. Napravi funkciju gde se trazi unos od strane korisnika i vraca poruku da li je uneta vrednost TRUTHY
// ili FALSY vrednost

function isTruthy() {
  const userInput = prompt("Unesite neku poruku");
  if (userInput) {
    return "Uneli ste TRUTHY vrednost.";
  } else {
    return "Uneli ste FALSE vrednost.";
  }
}
console.log(isTruthy());

// 2.Ako korisnik unosi broj

function isTruthyNumber() {
    const userInput = prompt("Unesite neku poruku");
    if (userInput) {
      return "Uneli ste TRUTHY vrednost.";
    } else {
      return "Uneli ste FALSE vrednost.";
    }
  }
  console.log(isTruthyNumber());

// Trazi se unos od korisnika sve dok ne unese bilo sta 
let recenica =""
while(!recenica) {
    recenica = prompt("Unesite neku recenicu");
}