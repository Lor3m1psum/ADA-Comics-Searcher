const spanTexts = document.getElementsByTagName("span");
const btnHidden = document.getElementsByClassName("button-init");

window.onload = function () {
  for (anSpan of spanTexts) {
    anSpan.classList.add("active");
  }
};
