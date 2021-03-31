
/* const bodyElem = document.querySelector("html");
const contactElem = document.querySelector(".footer");

document.getElementById('scroll').addEventListener('click', () => {
  contactElem.scrollIntoView(true)
}); */

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navbar__links');
const navLinksA = document.querySelectorAll('.navbar__links a');

const toggle = () => {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active')
    burger.classList.toggle('toggle')

    navLinksA.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    })
  })
}

toggle();


const sectionOneImg = document.querySelector('.section__1');

const parralax = () => {
  window.addEventListener('scroll', () => {
    sectionOneImg.style.backgroundPositionY = `${window.scrollY / 10}px`;
  })
}

parralax()