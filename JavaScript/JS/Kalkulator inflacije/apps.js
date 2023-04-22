function inflationCalculator() {
  let inflationRate = document.getElementById("inflationRate");
  let money = document.querySelector("#money");
  let years = document.querySelector("#years").value;
  //document.querySelector("#inflationRate") za sve elemente i u zagradi # zbog id

  //uvek su string
  // console.log(typeof inflationRate.value);
  // pretvorimo ga u number pomocu parsInt, int predstavlja ceo broj umesto parseInt napisemoo parseFloat,
  //sluzi za pretvaranje stringa u broj sa decimalom

  inflationRate = parseFloat(inflationRate.value);
  money = parseFloat(money.value);
  years = parseFloat(years);

  let worth = money + money * (inflationRate / 100);
  console.log(`${money} `);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
    console.log(`Ovo je ukupna inflacija. ${worth}`);
  }
  worth = worth.toFixed(2);

  let newElement = document.createElement("div");
  newElement.className = "new-value";
  newElement.innerText = ` Danasnjih ${money} eura vrijedi isto kao ${worth} eura za ${years} godina.`;
  document.querySelector(".container").appendChild(newElement);
}
