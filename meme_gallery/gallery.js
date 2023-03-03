// console.log("meme js loading");
// load data fro mAPI
const loadMeme = () => {
  const URL = "https://meme-api.com/gimme/25";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes));
};

// show data in UI
const showMeme = (memes) => {
  memes.slice(0, 10).forEach((meme) => {
    console.log(meme.url);
    const memeConatainer = document.getElementById("section");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full glass shadow-2xl">
  <figure><img class="w-full h-64" src="${meme.url}" alt="car!"/></figure>
  
    </div>
    `;
    memeConatainer.appendChild(div);
  });
};

loadMeme();
