import { fetchcats, fetchBreed } from "./api.js";
import {
  rendercats,
  addCloseDropdownListener,
  addDropdownListener,
  renderOptions,
  clearimage,
  addSelectOrderListener,
  loadmorepicbtn,
  disableloadmore_btn,
  enableloadmore_btn,
  closedrawer,
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
  if (list.length < limit) {
    disableloadmore_btn();
    return false;
  }
  return true;
}
function addListeners() {
  closedrawer();
  addDropdownListener();
  addCloseDropdownListener();
  addSelectOrderListener(async (e) => {
    order = e.target.value;
    enableloadmore_btn();
    clearimage();
    page = 1;
    const nextpage = await loadcat(pagesize, page, order, selectedoptions);
    if (nextpage) page++;
  });
  loadmorepicbtn(async () => {
    const nextpage = await loadcat(pagesize, page, order, selectedoptions);
    if (nextpage) page++;
  });
}
async function handleBreedOptionChange(e) {
  const changeoption = e.target;
  if (changeoption.checked) {
    selectedoptions.push(changeoption.value);
  } else {
    selectedoptions = selectedoptions.filter(
      (item) => item !== changeoption.value
    );
  }
  enableloadmore_btn();
  clearimage();
  page = 1;
  const nextpage = await loadcat(pagesize, page, order, selectedoptions);
  if (nextpage) page++;
}
async function loadBreedOptions() {
  const breeds = await fetchBreed();
  renderOptions(breeds, handleBreedOptionChange);
}
document.addEventListener("DOMContentLoaded", async () => {
  loadBreedOptions();
  const nextpage = await loadcat(pagesize, page, order, selectedoptions);
  if (nextpage) page++;
  addListeners();
});
