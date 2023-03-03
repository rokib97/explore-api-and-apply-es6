// console.log("touring");

// const getALLData = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => showData(data));
// };

const loadAllData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  showData(data);
};

const showData = (data) => {
  const container = document.getElementById("country-info");

  data.slice(50, 71).forEach((country) => {
    // console.log(country.currencies);
    // console.log(Object.keys(country.currencies)[0]);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full shadow-2xl">
    <figure><img class="w-full h-40" src="${
      country.flags.png
    }" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        ${country.name.common}
        <div class="badge badge-secondary">${country.cca2}</div>
      </h2>
      <p>Capital: ${country?.capital ? country?.capital[0] : "Not Found"} </p>
      <p>Population: ${country.population}</p>
      <p>Currency: ${
        country.currencies ? Object.keys(country.currencies)[0] : "Not Found"
      }</p>
      <div class="card-actions justify-end">
      <label onClick="getDetailsData('${
        country.cca2
      }')" for="my-modal" class="btn">Details</label>
    </div>
    </div>
  </div>
    
    `;
    container.appendChild(div);
  });
};

const getDetailsData = (id) => {
  //   console.log("called", id);
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleData(data[0]));
};

const container = document.getElementById("modal-info");
const showSingleData = (singleCountryData) => {
  console.log(singleCountryData);
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("modal-box");
  div.innerHTML = `
  <img src="${singleCountryData.flags.png}"/>
  <h3 class="font-bold text-lg">
 ${singleCountryData.name.common}
  </h3>
  <p class="py-4">
    ${singleCountryData.population}
  </p>
  <p>Currency: ${
    singleCountryData.currencies
      ? Object.keys(singleCountryData.currencies)[0]
      : "Not Found"
  }</p>
  <div class="modal-action">
    <label for="my-modal" class="btn">Yay!</label>
  </div>
  
  `;
  container.appendChild(div);
};
// getALLData();
loadAllData();
