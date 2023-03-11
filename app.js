//INIT PAGE & HEADER

const initPage = document.getElementById("init-page");
const spanTexts = document.getElementsByTagName("span");
const enterBtn = document.getElementById("enter-btn");
const backAudio = document.getElementById("backAudio");

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

window.onload = function () {
  for (anSpan of spanTexts) {
    anSpan.classList.add("active");
  }
};

enterBtn.addEventListener("click", () => {
  initPage.classList.add("hidden");
  backAudio.muted = true;
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
});

const spinnerLoading = document.getElementById("spinner");

const hideSpinner = () => spinnerLoading.classList.add("hidden");
const showSpinner = () => spinnerLoading.classList.remove("hidden");

const comicsResults = document.getElementById("results-section");
const comicsPerPage = 25;
let currentPage = 0;
let allResults = 0;

//PAGINATION
const firstPage = document.querySelector("#btn-first");
const lastPage = document.querySelector("#btn-last");
const nextPage = document.querySelector("#btn-next");
const prevPage = document.querySelector("#btn-prev");

//SEARCH
const inputSearch = document.getElementById("search-input");
const buttonSearch = document.getElementById("search-button");
const filterTypeBy = document.querySelector("#filter-type-by");
const sortComics = document.querySelector("#sort-comics");
const sortCharacters = document.querySelector("#sort-characters");

//RESULTS
const resultsNum = document.querySelector(".results-number");
const comicsResultsTitle = document.querySelector(".results-title");

//SORTS

filterTypeBy.addEventListener("click", (e) => {
  if (e.target.value === "comics") {
    sortComics.classList.remove("hidden");
    sortCharacters.classList.add("hidden");
  } else if (e.target.value === "characters") {
    sortComics.classList.add("hidden");
    sortCharacters.classList.remove("hidden");
  }
});
