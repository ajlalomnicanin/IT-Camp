// 1. Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
let recenicaa = "Ovo je neka recenica koju zelimo promeniti";
let novaRecenica = " "; //Sadrzace izmenjeni string

for (let i = 0; i < recenicaa.length; i++) {
  //let trenutniKarakter = recenicaa[i];
  //let prethodniKarakter = recenicaa[i - 1]
  if (i === 0 || recenicaa[i - 1] === " ") {
    novaRecenica += recenicaa[i].toUpperCase();
  } else {
    novaRecenica += recenicaa[i].toLowerCase();
  }
}

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

let rec11 = "Mama ima momu";
let duz1 = rec11.length;
brojac = 0;
for (i = 0; i <= duz1; i++) {
  console.log(rec11[i]);
  if (rec11[i] === "M" && rec11[i] === "m") {
    brojac++;
  }
}
console.log(brojac);

// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
