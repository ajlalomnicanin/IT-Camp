// events-dogadjaji //
let button = document
  .getElementById("button")

  //   addEventListener je metoda u JavaScriptu koja se koristi za dodavanje "slušalaca događaja"
  // (event listeners) na HTML elemente. Ova metoda omogućava da se funkcija ili kod aktivira kada
  // određeni događaj, poput klika mišem, pritiska tastature, promene fokusa itd., desi na elementu.

  //   .addEventListener("click", function () {
  //     console.log(123);
  //     document.querySelector("#main").style.backgroundColor = "coral";
  //     document.getElementById("h1").textContent = "Hello Ljudi";
  //   });
  .addEventListener("click", buttonClick);
function buttonClick(e) {
  // e(event) predstavlja objekat sa podacima o događaju i da
  //  možete koristiti njegove osobine za pristup informacijama o tom događaju.
  console.log(e.target); //daje stvarni element na koji je kliknut
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList); //niz klasa
  let output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target.id + "</h3>";

  console.log(e.type);
  console.log(e.clientX); //pozicija misa
  //   console.log(e.offsetX)
  console.log(e.offsetY);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}

let btn1 = document.querySelector(".btn1");
// tipovi dogadjaja
btn1.addEventListener("click", runEvent);
btn1.addEventListener("dblclick", runEvent);
// dogadjaj sa najvecim brojem pada
btn1.addEventListener("mousedown", runEvent);
btn1.addEventListener("mouseup", runEvent);

function runEvent(e) {
  console.log("Event type:" + e.type);
}
// ------------------------
let box = document.getElementById("box");
box.addEventListener("mouseenter", boxEvent);
box.addEventListener("mouseleaver", boxEvent);

box.addEventListener("mouseover", boxEvent);
box.addEventListener("mouseout", boxEvent);

box.addEventListener("mousemove", boxEvent);

function boxEvent(e) {
  console.log("Event type:" + e.type);
  //   output.innerHTML =
  //     "<h3>MouseX" + e.offsetX + "</h3><h3>MouseY:" + e.offsetY + "</h3>";
  box.style.backgroundColor = "rgb(" + e.offsetY + "," + e.offsetX + ",40)";
  // document.body.style.backgroundColor =
  //   "rgb(" + e.offsetY + "," + e.offsetX + ",20)";
}

let itemInput = document.querySelector("input");
// console.log(itemInput);
let form = document.querySelector("form");
// console.log(form);
let select = document.querySelector("select");

itemInput.addEventListener("keydown", runnEvent);
itemInput.addEventListener("keyup", runnEvent);
itemInput.addEventListener("keypress", runnEvent);

itemInput.addEventListener("focus", runnEvent);
itemInput.addEventListener("blur", runnEvent);

itemInput.addEventListener("cut", runnEvent);
itemInput.addEventListener("paste", runnEvent);

itemInput.addEventListener("input", runnEvent);

select.addEventListener("change", runnEvent);
select.addEventListener("input", runnEvent);

form.addEventListener("submit", runnEvent);

function runnEvent(e) {
  e.preventDefault();
  console.log("Event type:" + e.type);
  console.log(e.target.value);
  document.getElementById("output").innerHTML =
    "<h3>" + e.target.value + "</h3>";
  // document.body.style.display="none"
}
