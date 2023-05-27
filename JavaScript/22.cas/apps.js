// / 9.	Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reči (odvojenih razmakom)
//  unetog stringa. Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'.
// Podrazumeva se da uneti string nema vodeće ili prateće razmake.

function funkcija1(string) {
  let split = string.split(" ");
  let prvaRec = split[0];
  let zadnjaRec = split[split.length - 1];
  //   return prvaRec.concat(" ", zadnjaRec);
  return `${prvaRec} ${zadnjaRec}`;
}
console.log(funkcija1("Svuda podji, kuci dodji"));

// ili

const firstAndLastWord = (A) => {
  const arr = A.split(" ");
  const firstWord = arr[0];
  const lastWord = arr[arr.length - 1];
  const B = `${firstWord} ${lastWord}`;
  // return firstWord + " " + lastWord
  // return firstWord.concat(" ", lastWord)
  return B;
};
console.log(firstAndLastWord("Svuda pođi, kući dođi"));

//// 10.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera
// ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

function funkcija2(sentence, N) {
  if (sentence.lenght < N) {
    return sentence;
  } else {
    return sentence.substr(0, N);
  }
}
console.log(funkcija2("Pera ima devojku", 7));

//// 12.	Za uneti string A, treba izdvojiti podstring B,
//  koji počinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N=6 i M=7,
// dobija se B='ma devo'.

function funkcija3(A, N, M) {
  let B = A.substr(N, M);
  return B;
}
console.log(funkcija3("Pera ima devojku", 6, 7));

// ili

const substr2 = (sentence, N, M) => {
  return sentence.substring(N, N + M);
};
console.log(substr2("Pera ima devojku", 6, 7));

/// 13.	Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako što se iz unetog stringa
//  izbacuje svaka pojava znaka Z. Npr. za unet string "Madagaskar" i
//  znak "a", dobijamo rezultat "Mdgskr"

const rec = "Madagaskar";
console.log(rec.replace(/a/g, ""));

//preko for petlje

const newString = (A, Z) => {
  let novaRec = "";
  for (let i = 0; i < A.lenght; i++) {
    if (A[i] !== Z) {
      novaRec += A[i];
    }
  }
  return novaRec;
};
console.log(newString("Madagaskar", "a"));

// preko while petlje

const newsString = (A, Z) => {
  let noviString = "";
  let i = 0;
  while (i < A.length) {
    if (A[i] !== Z) {
      noviString += A[i];
    }
    i++;
  }
  return noviString;
};
console.log(newsString("Madagaskar", "a"));
