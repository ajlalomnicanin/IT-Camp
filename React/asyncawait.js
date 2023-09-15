const posts = [
  { title: "one post", body: "this is a post one" },
  { title: "two post", body: "this is a post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "post there", body: "this is post there" }, getPosts);

// Asihrono cekanje ili async await odnosi se na proces u kojem program ceka na izvrsavanje odredjene 
// operacije ili dogadjaja bez blokiranja izvodjenja drugih operacija u medjuvremenu.
// To je posebno vazno u programiranju jer omogucuje programu da nastavi izvrsavati druge zadatke 
// dok ceka na zavrsetak asihronih operacija  

// u JS await funkcija je kljucna rec koja se koristi unutar asynce funkcije kako bi se sacekalo
// da se izvrsi asinhrona operacija i da se rezultat te operacije dobije pre nego sto se nastavi 
//  sa izvrsavanjem kkoda.
// Kada se koristi await unutar async funkcije, ta funkcija se zaustavlja dok se Promise ne razresi,
// a zatim se vraca rezultat Promise