prva();
function prva() {
  console.log("prva");
}
// U prvom slucaju vazi hoisting. Deklarisanje funkcije na vrhu fajla.
// Stoga ih mozemo pozvati pre definisanja

// druga();
const druga = () => console.log("druga");
// za arrow funkcije ne vazi hoisting. Moramo je definisati pre koriscenja.
