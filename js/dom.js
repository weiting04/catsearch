import { createCard, createBreedOptions } from "./createElement.js";
export function rendercats(catlist) {
  const columns = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3"),
  ];
  for (let i = 0; i < catlist.length; i++) {
    const col = i % columns.length;
    const item = catlist[i];
    const card = createCard(item);
    columns[col].appendChild(card);
  }
}
export function addCloseDropdownListener() {
  document.addEventListener("click", (e) => {
    const dropdownbtn = document.getElementById("dropdown-btn");
    const options = document.getElementById("options");
    const isClickOptions = options.contains(e.target);
    const isClickDropdownbtn = dropdownbtn.contains(e.target);
    if (!isClickOptions && !isClickDropdownbtn) options.classList.add("hidden");
  });
}
export function addDropdownListener() {
  const dropdownbtn = document.getElementById("dropdown-btn");
  const options = document.getElementById("options");

  dropdownbtn.addEventListener("click", () => {
    options.classList.toggle("hidden");
  });
}
export function renderOptions(breeds, handleBreedOptionChange) {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  breeds.forEach((breed) => {
    const option = createBreedOptions(breed, handleBreedOptionChange);
    optionsContainer.appendChild(option);
  });
}
export function clearimage() {
  //console.log(1);
  const columns = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3"),
  ];
  columns.forEach((col) => {
    col.innerHTML = "";
  });
}
export function addSelectOrderListener(handler) {
  const orderselect = document.getElementById("order-select");
  orderselect.addEventListener("change", handler);
}
