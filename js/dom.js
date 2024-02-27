import { createCard } from "./createElement.js";
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
