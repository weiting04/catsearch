export function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = item.url;
  img.className = "card-img";
  const breeds = document.createElement("p");
  breeds.innerHTML = item.breeds.map((breed) => breed.name).join(", ");

  card.appendChild(img);
  card.appendChild(breeds);
  return card;
}
