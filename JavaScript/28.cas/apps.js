// Math methods //

// Sintaksa za bilo koju matematicku metodu je sledeca:
// Math.method(number)

// Number to Integer //

// Postoje cetiri metode za dobijanje celog broja sa decimalnim zapisom.
// Metode su:

// 1.Math.round(x) - vraca blizi ceo broj broju x
console.log(Math.round(3.1235326589)); // 3

// 2. Math.ceil(x) - vraca sledeci ceo broj tog broja x
console.log(Math.ceil(3.1235326589)); // 4
console.log(Math.ceil(-3.1235326589)); // -3

// 3.Math.floor(x) - vraca prethodni ceo broj tog broja x
console.log(Math.floor(3.5235326589)); // 3
console.log(Math.floor(-3.1235326589)); // -4

// 4.Math.trunc(x) - vraca ceo broj odstranjujuci ostata.
console.log(Math.trunc(3.52376543)); // 3
console.log(Math.trunc(-3.52376543)); // -3

// Math.sing(x) - metoda vraca:
//  1 ako je broj x prozitivan
//  0 ako je broj x nula
//  -1 ako je broj x negativan

console.log(Math.sign(34)); //1
console.log(Math.sign(-34)); //-1
console.log(Math.sign(0)); //0

// Math.pow(x,y) - vraca broj x stepenovan brojem y
console.log(Math.pow(2, 3)); // 2*2*2
console.log(Math.pow(6, 2)); //6*6

// Math.sqrt(x) - vraca kvadratni koren.
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(25)); //5

// Math.abs(x) - vraca apsolutnu vrednost broja x
console.log(Math.abs(-6)); //6
console.log(Math.abs(6)); //6

// Math.sin() - vraca sinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima)

console.log(Math.sin(Math.PI / 2)); //

// Math.cos() - vraca cosinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima)
console.log(Math.cos(Math.PI)); //



