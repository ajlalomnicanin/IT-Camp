// 1.Write a JS function to get the greatest common divisor (NZD) of two integers.

const NZD = (num1, num2) => {
  const manji = num1 > num2 ? num2 : num1;
  let NZD = 1;
  for (let i = manji; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      NZD = i;
      break;
    }
  }
  return NZD;
};
console.log(NZD(6, 4));
console.log(NZD(3, 4));
console.log(NZD(8, 12));

// 2.Write a JS function to get the least common multiple (NZD) of two number.

const NZS = (broj1, broj2) => {
  const veci = broj1 > broj2 ? broj1 : broj2;
  let NZS = veci;
  let i = veci;
  while (true) {
    if (i % broj1 === 0 && i % broj2 === 0) {
      NZS = i;
      break;
    }
    i++;
  }
  return NZS;
};
console.log(NZS(3, 4));
console.log(NZS(6, 8));
