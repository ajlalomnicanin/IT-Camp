// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa.
// Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function znak(string, N) {
  return string.slice(-N);
}
console.log(znak("Pera ima devojku", 5));

//drugi nacin

function znak1(string, N) {
  return string.substr(-1, N);
}
console.log(znak("Pera ima devojku", 5));
