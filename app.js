const urlCategories =
  "https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/categories";
const urlAnimals = "https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/animals";

const select = document.querySelector("select");
const fetchAnimals = async () => {
  const request = await fetch(urlAnimals);
  const response = await request.json();
  return response;
}
const section = document.querySelector("section");
const createCards = async (url, name, age) => {
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  div.className = "item";
  div2.className = "text-card";
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  img.src = url;
  h3.innerText = name;
  span.innerText = age;
  div.appendChild(img);
    div2.appendChild(h3);
    div2.appendChild(span);
    div.appendChild(div2);
    section.appendChild(div);
}
 const displayAnimals = async (results) => {
  results.map(({img, name, age}) => {
    createCards(img, name, age);
  })
 }

const fetchAPI = async () => {
  const request = await fetch(urlCategories);
  const response = await request.json();

  response.slice(0, 4).map((categorie) => {
    const option = document.createElement("option");
    option.innerText = categorie.name;
    select.appendChild(option);
  });
};

fetchAPI();

select.addEventListener("change", async ({target}) => {
  const results = await fetchAnimals();
 if(target.value === "todos"){
  section.innerHTML = "";
  return displayAnimals(results);
 } else if(target.value === "American Curl"){
  section.innerHTML = "";
  return displayAnimals(results.slice(0,3));
 } else if(target.value === "Siberian"){
  section.innerHTML = "";
  return displayAnimals(results.slice(3,6));
 } else if(target.value === "Tonkinese"){
  section.innerHTML = "";
  return displayAnimals(results.slice(6,9));
 } else if(target.value === "Pixiebob"){
  section.innerHTML = "";
  return displayAnimals(results.slice(9,12));
 }
})


// 1 pegar a opção selecionada
// 2 atraves da opção selecionada faz uma
// função getCategories para pegar a categoria selecionada
// 3 resultado dessa função será atribuída a um elemento html
