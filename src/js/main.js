
const bodyElem = document.querySelector("html");
const contactElem = document.getElementsByClassName("footer-container")

document.getElementById('scroll').addEventListener('click', function () {
  bodyElem.scrollIntoView(false);
  // contactElem.classList.add("visible");
});

