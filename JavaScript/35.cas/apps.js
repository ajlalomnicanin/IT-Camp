// Jos jedan nacin dobijanja najveceg odnosno najmanjeg elementa iz niza.

// Math.max()
// Math.min()
// null je object

minimum = Math.min(1, 4, 7);
minimum1 = Math.min.apply(null, [76, 1, 3, 5]);
console.log(minimum);
console.log(minimum1);

maximum2 = Math.max.apply(null, [1, 3, 5]);
console.log(maximum2);

// nije u potpunosti interpretiran jezik, mozemo i kompajlerski za JS

const brojevi = [1, 3, 5, 7, -2];
brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);
const najmanji = brojevi[0];
const najveci = brojevi[brojevi.length - 1];
console.log(najmanji);
console.log(najveci);

//

const fruits = ["strawberry", "pear", "apple", "mango"];

// indexOf() metoda trazi u nizu odredjeni argument i vraca poziciju istog,
// ili -1 ukoliko ne postoji.
// Ako se neki argument nalazi vise puta u nizu, dobijamo index prvog pojavljivanja.

fruits.indexOf("banana"); // -1
fruits.indexOf("apple"); // 2

// fruits.indexOf("orange") === -1 ? console.log("Nema orange.")

// / LastIndexOf() metoda trazi u nizu odredjeni argument i vraca poziciju  poslednjeg pojavljivanja
//elementa, ili -1 ukoliko ne postoji.

// includes() vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

fruits.includes("banana"); // false
fruits.includes("apple"); // true

// Array.from() vraca niz od poslatog argumenta (argument moze biti bilo koji objekat sa length svojstvom.)
const arr = Array.from("ABCDEFG");
console.log(arr);
// kao da smo primenili split metodu na string i poslali joj prazan string

// 1. Write a JavaScript program which accept a number as input and insert dashes (-) between each two
// even numbers. For example if you accept 025468 the output should be 0-254-6-8

function first(num) {
  let noviBroj = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i - 1] % 2 === 0) {
      noviBroj += "-" + num[i];
    } else {
      noviBroj += num[i];
    }
  }
  return noviBroj;
}
console.log(first("025468"));

// ili
const dashes = (num) => {
  let newNum = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      newNum += num[i] + "-";
    } else {
      newNum += num[i];
    }
  }
  return newNum;
};
console.log(dashes("025468"));

// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na
//  parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// 5. Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju.

// 6. Write a simple JavaScript program to join all elements of the following array into a string where
//  is * between elements.
