// console.log("yeah  its working");

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((err) => {
      console.log(err);
    });
};

const showData = (data) => {
  // console.log(data.slice(0, 5));
  for (let singleData of data.slice(0, 5)) {
    // console.log(singleData.title);
    const container = document.getElementById("post-info");
    const div = document.createElement("div");
    div.innerHTML = `
     <h1 class="text-3xl text-center">${singleData.title}</h1>
    `;
    container.appendChild(div);
  }
};

loadData();
