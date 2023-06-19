// Write a JavaScript program to calculate age.
// Napisi program koji racuna godine

function age(year, month, day) {
  let date = new Date();
  let date1 = new Date(year, month, day);

  let years = date.getFullYear() - date1.getFullYear();

  if (date.getMonth() < date1.getMonth()) {
    years--;
  } else if (date.getMonth() === date1.getMonth()) {
    if (date.getDay() < date1.getDay()) {
      years--;
    }
  }
  return years;
}
console.log(age(2001, 3, 7));

// ili

function countMyAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();
  const birthMilliseconds = Date.parse(birthDate);
  const currentTimeMilliseconds = Date.parse(currentDate);

  const sub = currentTimeMilliseconds - birthMilliseconds;
  const year = new Date(sub).getFullYear() - 1970;

  return year;
}

console.log(countMyAge("1996-06-24"));
