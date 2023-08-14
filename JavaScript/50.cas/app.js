// Promise (obecanje) predstavlja JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsenje
// asinhrone operacije.

const obecanje = new Promise((resolve, reject) => {
  const response = 200;
  if (response === 200) {
    resolve();
  } else {
    reject();
  }
});

obecanje
  .then(() => {
    console.log("uspešno dobijeni podaci");
  })
  // asinhrona radnja
  // then metoda predstavlja mesto za izvrsavanje funkcije u slucaju resolve()
  .catch(() => {
    console.log("neuspesno dobijeni rezultati");
  });
// .finally(() => {
//   console.log("izvrsava se u svakom slucaju");
// });

// catch metoda predstavlja mesto za izvrsavanje funkcije u slucaju reject()

// Napraviti promise koji proverava da li je neki objekat ispunio uslov da li je neki property godine veco od 17 ili nije.
// U slucaju da je osoba punoletna then(), funkcija vraca poruku "Vi ste punoletni"
// U slucaju da  osoba nije  punoletna chatch(), funkcija vraca broj godina osobe

const isAdult = new Promise((resolve, reject) => {
  const person = {
    firstname: "Ajla",
    lastname: "Lomnicanin",
    age: 12,
  };
  if (person.age > 17) {
    resolve();
  } else {
    reject(person.age);
  }
});

isAdult
  .then(() => {
    console.log("Punoletni ste, Ajla");
  })
  .catch((years) => {
    console.log(years);
  });

const chain = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
  if (arr.every((number) => typeof number === "number")) {
    resolve(arr);
  } else {
    const errorMessage = "Dobijeni niz ima vrednosti koji nisu brojevi";
    reject(errorMessage);
  }
});

chain
  .then((dobijeniNiz) => {
    console.log(`Dobijeni niz je ${dobijeniNiz}`);
    return dobijeniNiz;
  })
  .then((niz) => {
    const parni = niz.filter((num) => num % 2 === 0);
    console.log(`Niz parnih brojeva je ${parni}`);
  })
  .catch((poruka) => {
    console.log(poruka);
  });

// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je izvrsena".

function samoglasnici(string){
  return new Promise((resolve,reject)=>{
    const samog="aeiouAEIOUU"
    let brojSamog=0
    for()

  })
}