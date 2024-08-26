const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchBox = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
let cities = [];
async function fetchCities() {
  const res = await fetch(endpoint);
  cities = await res.json();
}

function filter() {
  const searchText = this.value.toLowerCase();
  const filteredList = cities.filter(
    (a) =>
      a.city.toLowerCase().includes(searchText) ||
      a.state.toLowerCase().includes(searchText)
  );

  const html = filteredList
    .map((li) => {
      const cityName = li.city
        .toLowerCase()
        .replace(searchText, `<span class="hl">${searchText}</span>`);
      const stateName = li.state
        .toLowerCase()
        .replace(searchText, `<span class="hl">${searchText}</span>`);
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${Intl.NumberFormat("en-US").format(
        li.population
      )}</span>
    </li>
  `;
    })
    .join("");

  suggestions.innerHTML = html;
}

searchBox.addEventListener("keyup", filter);

fetchCities();
