import { fetchcats } from "./api.js";
import { rendercats } from "./dom.js";
const catlist = [];
let page = 1;
let selectedoptions = [];
let order = "DESC";

async function loadcat(limit, page, order, breedIds = []) {
  const list = await fetchcats(limit, page, order, breedIds);
  console.log(list);
  catlist.push(...list);
  rendercats(catlist);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadcat(12, page, order, selectedoptions);
});
