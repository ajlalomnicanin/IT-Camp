// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

function RazlikaUdanima(datumPrvi, datumDrugi) {
  let datum1 = new Date(datumPrvi);
  let datum2 = new Date(datumDrugi);
  let razlika = Math.abs(datum1 - datum2);
  return razlika / 1000 / 60 / 60 / 24;
}
console.log(RazlikaUdanima("1999-05-24", "2004-09-15"));
