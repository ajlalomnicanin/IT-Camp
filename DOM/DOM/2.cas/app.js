// Traversing the DOM //
// Traversing the DOM omogućava JavaScript ili drugim jezicima koji podržavaju DOM pristup da:

// Pristupe elementima: Na primer, možete pronaći određeni element prema njegovom id, klasi ili tagu.
// Kreću se gore ili dole kroz hijerarhiju: Možete pristupiti roditeljima, decom ili susednim
// elementima.
// Manipulišu elementima: Promenite sadržaj, atribute, stilove ili strukturu dokumenta.
// Pretraže dokument: Tražite određene elemente koji ispunjavaju određene uslove ili filtere.

let liste = document.querySelector("#liste");
console.log(liste);

// parentNode
console.log(liste.parentNode); // nasao mi je parent tj glavni div
liste.parentNode.style.backgroundColor = "#f9f5f1";
// roditelju roditelja zelimo da pristupimo
console.log(liste.parentNode.parentNode); //bude body

// parentElement
console.log(liste.parentElement); // nasao mi je parent tj glavni div
// liste.parentElement.style.backgroundColor = "red";
// roditelju roditelja zelimo da pristupimo
console.log(liste.parentElement.parentElement); //bude body

// parentElement i parendNode daju iste rezultate

// -----------------------------------------------------------

// deca
// childNodes
console.log(liste.childNodes);
// ne preporucuje se njegovo koriscenje pored listi racuna i prelome redova i to racunati

console.log(liste.children);
// ovde budu samo liste

console.log(liste.children[1]);
// pristupanje nekom broju pomocu indeksa
liste.children[1].style.color = "blue";

// FirstChild
console.log(liste.firstChild); //daje beskorisno

// firstElementChild
console.log(liste.firstElementChild); // daje prvo dete
liste.firstElementChild.textContent = "hello 1";

// lastChild
console.log(liste.lastChild); //daje beskorisno text

// firstElementChild
console.log(liste.lastElementChild); // daje zadnjedete
liste.lastElementChild.textContent = "hello 3";

// Do sada roditelji i deca od sada braca i sestre

// nextSibling - sledeci brat i sestra
console.log(liste.nextSibling); //beskorisno textualni cvor

// nextElementSibling
console.log(liste.nextElementSibling);

// previousSibling - prethodni brat i sestra
console.log(liste.previousSibling); //beskorisno daje textualni cvor

// previousElementSibling
console.log(liste.previousElementSibling); // prosli element odnosno p
liste.previousElementSibling.style.color = "coral";

// ------------------------------------------------------------------

// createElement - metod

// Create a div
let newDiv = document.createElement("div");

// dodati klasu new Div
newDiv.className = "new-div";

// dodati id na new div
newDiv.id = "hello1";

// dodati attribut
newDiv.setAttribute("title", "Hello div");

// kreirati textualni cvor
let newDivText = document.createTextNode("Hello word");

// dodati text u div
newDiv.appendChild(newDivText);

console.log(newDiv);

// insertBefore- dodajemo div na stranicu
let container = document.querySelector("body #my-id");
let h1 = document.querySelector("body h1");
container.insertBefore(newDiv, h1); // prvo stavi null da bi ubacio ispred svakog drugog elemenata

newDiv.style.fontSize = "30px";
