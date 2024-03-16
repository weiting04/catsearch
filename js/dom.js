import {
  createCard,
  createBreedOptions,
  CreateTemperament,
  setDrawerstates,
} from "./createElement.js";
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
    card.addEventListener("click", (e) => {
      setDrawerContent(item);
      openDrawer();
    });
    columns[col].appendChild(card);
  }
}
export function openDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.add("open");
}
export function setDrawerContent(item) {
  const drawerimg = document.getElementById("drawer-img");
  drawerimg.src = item.url;
  const breedname = document.getElementById("drawer-breed-name");
  breedname.innerHTML = item.breeds[0].name;
  const origin = document.getElementById("drawer-origin");
  origin.innerHTML = item.breeds[0].origin;
  const lifespan = document.getElementById("lifespan");
  lifespan.innerHTML = item.breeds[0].life_span;
  const weight = document.getElementById("weight");
  weight.innerHTML = item.breeds[0].weight.metric;
  const temperament = document.getElementById("temperament");
  temperament.innerHTML = "";
  const temperamentlist = item.breeds[0].temperament;
  CreateTemperament(temperamentlist);

  const scoreListings = [
    {
      key: "intelligence",
      displayName: "智力",
    },
    {
      key: "affection_level",
      displayName: "親密度",
    },
    {
      key: "energy_level",
      displayName: "活力",
    },
    {
      key: "child_friendly",
      displayName: "兒童友善",
    },
    {
      key: "dog_friendly",
      displayName: "親近狗狗",
    },
    {
      key: "indoor",
      displayName: "喜歡在家",
    },
    {
      key: "health_issues",
      displayName: "遺傳疾病",
    },
    {
      key: "shedding_level",
      displayName: "掉毛量",
    },
    {
      key: "social_needs",
      displayName: "社交需求",
    },
    {
      key: "stranger_friendly",
      displayName: "陌生人友善",
    },
    {
      key: "rare",
      displayName: "稀有度",
    },
  ];
  const drawerStates = document.getElementById("drawer-stats");
  drawerStates.innerHTML = "";
  for (const { key, displayName } of scoreListings) {
    const setitem = setDrawerstates(displayName, item.breeds[0][key]);
    drawerStates.appendChild(setitem);
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
export function loadmorepicbtn(handler) {
  const loadmore_btn = document.getElementById("load-more");
  loadmore_btn.addEventListener("click", handler);
}
export function disableloadmore_btn() {
  const loadmore_btn = document.getElementById("load-more");
  loadmore_btn.disabled = true;
}
export function enableloadmore_btn() {
  const loadmore_btn = document.getElementById("load-more");
  loadmore_btn.disabled = false;
}
export function closedrawer() {
  document.addEventListener("click", (e) => {
    const drawer = document.getElementById("drawer");
    const isclickcard = e.target.closest(".card");
    const isclickdrawer = drawer.contains(e.target);
    if (!isclickcard && !isclickdrawer) {
      drawer.classList.remove("open");
      // console.log("close");
    }
  });
}
