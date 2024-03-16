import { fetchcats, fetchBreed } from "./api.js";
import {
  rendercats,
  addCloseDropdownListener,
  addDropdownListener,
  renderOptions,
  clearimage,
  addSelectOrderListener,
} from "./dom.js";
const catlist = [];
let page = 1;
let selectedoptions = [];
let order = "DESC";
const pagesize = 12;

async function loadcat(limit, page, order, breedIds = []) {
  const list = await fetchcats(limit, page, order, breedIds);
  console.log(list);
  catlist.push(...list);
  rendercats(list);
  console.log(catlist);
}
function addListeners() {
  addDropdownListener();
  addCloseDropdownListener();
  addSelectOrderListener((e) => {
    order = e.target.value;
    clearimage();
    loadcat(pagesize, page, order, selectedoptions);
  });
}
function handleBreedOptionChange(e) {
  const changeoption = e.target;
  if (changeoption.checked) {
    selectedoptions.push(changeoption.value);
  } else {
    selectedoptions = selectedoptions.filter(
      (item) => item !== changeoption.value
    );
  }
  console.log(selectedoptions);
  clearimage();
  loadcat(pagesize, page, order, selectedoptions);
}
async function loadBreedOptions() {
  const breeds = await fetchBreed();
  renderOptions(breeds, handleBreedOptionChange);
}
document.addEventListener("DOMContentLoaded", async () => {
  loadBreedOptions();
  await loadcat(pagesize, page, order, selectedoptions);
  addListeners();
});
