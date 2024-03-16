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
export function createBreedOptions(breed, handleBreedOptionChange) {
  const option = document.createElement("div");
  option.classList.add("multi-select-dropdown-options-option");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = breed.id;
  checkbox.addEventListener("click", handleBreedOptionChange);

  const label = document.createElement("label");
  label.classList.add("multi-select-dropdown-label");
  label.innerHTML = breed.name;

  const br = document.createElement("br");
  option.appendChild(checkbox);
  option.appendChild(label);
  option.appendChild(br);

  return option;
}
export function CreateTemperament(list) {
  const temperament = list.split(", ");
  const temperament_container = document.getElementById("temperament");
  temperament.forEach((item) => {
    const span = document.createElement("span");
    span.className = "drawer-personality-tags-tag";
    span.innerHTML = item;
    temperament_container.appendChild(span);
  });
}
export function setDrawerstates(displayName, score) {
  const drawer_state = document.createElement("div");
  drawer_state.className = "drawer-stats-item";
  const state_name = document.createElement("p");
  state_name.className = "drawer-stats-item-title";
  state_name.innerHTML = `${displayName}:`;
  const drawer_state_bar = document.createElement("div");
  drawer_state_bar.className = "drawer-stats-item-bar";
  const drawer_state_bar_fill = document.createElement("div");
  drawer_state_bar_fill.className = "drawer-stats-item-bar-fill";
  drawer_state_bar_fill.style.width = `${score * 20}%`;
  drawer_state_bar.appendChild(drawer_state_bar_fill);
  drawer_state.appendChild(state_name);
  drawer_state.appendChild(drawer_state_bar);
  return drawer_state;
}
