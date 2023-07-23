// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

// const student = {
//   ime: "Dženan",
//   prezime: "Škaljić",
//   brojIndeksa: 12345,
//   ocene: [6, 7, 8, 9, 10],
//   prosekOcena: function () {
//     let sum = 0;
//     for (let i = 0; i < this.ocene.length; i++) {
//       sum += this.ocene[i];
//     }
//     return sum / this.ocene.length;
//   },
// };

// console.log(student.prosekOcena());

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

function Student(ime, prezime, broj_indeksa, ocena) {
  this.ime = ime;
  this.prezime = prezime;
  this.broj_indeksa = broj_indeksa;
  this.ocena = ocena;
  this.prosekOcena = function () {
    let suma = 0;
    for (let i = 0; i < this.ocena.length; i++) {
      suma += this.ocena[i];
    }
    return suma / this.ocena.length;
  };
}
const student1 = new Student("Ajla", "Lomnicanin", "1234", [1, 2, 3, 4, 5]);
console.log(student1);
console.log(student1.prosekOcena());
