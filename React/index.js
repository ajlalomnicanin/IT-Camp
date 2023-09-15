/* 
primitives
complex types
conditionals
loops
object
arrays
arrays methods
callbacks

promies u knjizi js
async await - asihrono cekanje u knjizi js
closure - zatvaranje
classes
DOM
DOM manipulation
events
es6 js
loops
*/

// var a = "";
// console.log(typeof a);

// function sum(a, b) {
// return a + b;
// }

// sum(1, 2);
// sum({}, []); //object rezultat zbog +

// console.log(sum(1, 2));
// console.log(sum({}, []));

// console.log(1 + 2 + "1", "prvi");
// console.log("22" + 2 + "1", "drugi");
// console.log(true + 2 + "1", "treci"); // true bude 1
// console.log(false + 2 + "1", "cetvrti"); //21
// console.log(true + true + "1", "peti"); //21

// var c = ""; u global scope
// const a = ""; u block scope
// let b = ""; u block scope

// procuderalnii staticki
// dinamicki javascript
// scope cemu varijabla ima pristup
// block scope, global scope

// var a = "string";
// console.log(window.a);
//  dom , bom

// na window dodajemo nove properti je global scope]

// console.log(document, window);

// var a = "smajb";
// kada ponovo definisem a sa var , onda se moja defin a prelazi u ovo "smajb", i zato se koeiste global scope odnosno const i let

// trazi false vrednost
// console.log("" || false || true); true
// console.log("yes" || 0 || true); yes

// trazi truty vrednost
// console.log("a" && null && "b"); /nul truty vrednost
// console.log("a" && "c" && "b"); b

// if ("a" && null && "b") {
// } else {
// }

// const o = {};
// const n = [];
// o.property1 = "";

/* 
ako se na objektu nalazi property vratite vrednost
ako se ne nalazi vratite -1
*/
// const obj = { size: "12", width: "22" };
// function getProperty(obj, property) {

//   return typeof obj[property] == "undefined" ? obj[property] : -1;

// return obj[property] ? obj[property] : -1;
//   //   obj.hasOwnProperty("property1");
// }

// getProperty(obj, "size");

// console.log(getProperty(obj, "size"));

// const n = [
//   [1, 2],
//   [2, 3],
// ];
// n[0][1];

const n = [1, 2, 3, 4];
n.forEach((element, index, array) => {});
n.filter();
n.map();
n.reduce();

// undefined, null
