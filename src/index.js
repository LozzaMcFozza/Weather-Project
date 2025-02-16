function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}

let searchFunctionElement = document.querySelector("#search-function");
searchFunctionElement.addEventListener("submit", handleSearchSubmit);
