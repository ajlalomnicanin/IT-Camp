// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.
const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const niz2 = niz.filter((num) => num <= 6);
console.log(niz2);
// 2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".

const niz3 = ["String", 23, true, [1, 2, 3], false];
const niz4 = niz3.filter((el) => typeof el === "boolean");
console.log(niz4);

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

function first(arr) {
  const arr2 = arr.map((value) => {
    if (value > 2) {
      return value * 7;
    }
    return value;
  });

  const arr3 = arr2.map((value) => {
    if (value > 2 && value < 8) {
      return (value * 4) / 2;
    }
    return value;
  });

  const arr4 = arr3.filter((value) => value < 10);

  return arr2, arr3, arr4;
}

console.log(first([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
//  zadatak traži da napišete funkciju koja koristi map metod da konvertuje vrednosti iz milja u
// kilometre, a zatim koristi reduce metod da sabere sve kilometre i vrati ukupnu udaljenost u kilometrima.

function milesToKilometres(nizMilja) {
  const faktorKonverzije = 1.60934;
  const nizKm = nizMilja.map((milje) => milje * faktorKonverzije);
  const ukupnaUdaljenostUkm = nizKm.reduce((a, b) => a + b);
  return +ukupnaUdaljenostUkm.toFixed(2);
}
console.log(milesToKilometres([10, 20, 30]));
// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const result = array2.map((value, index) => value + (array1[index] || 0));
console.log(result);

// const suma = 0;
// const maxLength = Math.max(array1.length, array2.length);

// for (let i = 0; i < maxLength; i++) {
//   const sum = (array1[i] || 0) + (array2[i] || 0);
//   result.push(sum);
// }
// console.log(result);
