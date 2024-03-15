const api_key =
  "live_dWhY2mI0DMd5CXZj47p1u3fyZfse4GfLvsiJ6IaYnIwhII91R5itRR2Ynwieki8P";
//const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}`;

export function fetchcats(limit, page, order, breedIds = []) {
  const url = new URL("https://api.thecatapi.com/v1/images/search");
  url.searchParams.append("limit", limit);
  url.searchParams.append("has_breeds", 1);
  url.searchParams.append("order", order);
  url.searchParams.append("page", page);
  url.searchParams.append("api_key", api_key);

  if (breedIds.length > 0) {
    url.searchParams.append("breed_ids", breedIds.join(","));
  }
  //console.log(breedIds.length);

  return fetch(url).then((r) => r.json());
}

export function fetchBreed() {
  return fetch("https://api.thecatapi.com/v1/breeds").then((r) => r.json());
}
