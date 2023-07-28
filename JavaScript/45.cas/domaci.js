// Domaci:
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (od, doo) {
      const datumOd = new Date(od);
      const datumDo = new Date(doo);
      const razlikaUms = datumDo - datumOd;
      const brojDana = razlikaUms / (1000 * 60 * 60 * 24);
      console.log(brojDana);
      return brojDana * this.dnevnaKarta; //dnevna karta
    },
    platiZaSatnu: function (od, doo) {},
  },
};
console.log(automobil.garaza.platiZa("2023-07-20", "2023-08-10"));

//  2. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
// 1. nacin
// library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(library);

// 2. nacin
const sortByTitle = (arr) => {
  const titleArr = arr.map((el) => el.title);
  titleArr.sort();

  const library2 = [];
  titleArr.forEach((title) => {
    const element = arr.find((obj) => obj.title === title);
    library2.push(element);
  });
  return library2;
};

console.log(sortByTitle(library));

// sortiraj po datumu
const library2 = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
];
