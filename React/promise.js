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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

createPost({ title: "post there", body: "this is post there" })
  .then(getPosts)
  .catch((err) => console.log(err));

//   Promise je koncept u JS koji se koristi za bolje upravanje asinhronim operacijama.
// stanje promise moze biti u jednom od tri
// 1. peding (ceka se)
// 2. resolved (razreseno)
// 3. reject (odbijeno)

// metode promise :
// .then () za rukovanje uspesnim rezultatom
// .catch () za rukovanje greskama
// .finally () za kod koji se izvrsava bez obzira na ishod

// lancanje : mozemo lancati vise .then() poziva jedan za drugim da bi se izvrsile
// operacije u odredjenom redosledu

// ulazne i izlazne vrednosti. svako .then() ili .catch ()poziv vraca noovo obecanje, sto omogucava kreiranje
// lanca obecanja

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const succes = true;
    if (succes) {
      resolve();
    } else {
      reject;
    }
  }, 2000);
});

myPromise
  .then(() => console.log("Operacija je uspesno izvrsena"))
  .catch(() => console.log("Operacija nije uspesno izvrsena"));
