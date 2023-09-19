let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit event

form.addEventListener("submit", addItem);

// add Item
function addItem(e) {
  e.preventDefault();
  //   console.log(1);

  // get input value
  let newItem = document.getElementById("item").value;

  // create new li element
  let li = document.createElement("li");
  li.className = "list-group-item";
  console.log(li);

  //   add text node with input value
  li.apendChild(document.createTextNode(newItem));

//   create del button element
let button 
}
