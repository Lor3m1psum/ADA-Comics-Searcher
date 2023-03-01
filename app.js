let spanTexts = document.getElementsByTagName("span");
window.onload = function () {
  for (anSpan of spanTexts) {
    anSpan.classList.add("active");
  }
};
