
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


const sectionImg = document.querySelector('.section');

const parralax = () => {
  window.addEventListener('scroll', () => {
    sectionImg.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  })
}

parralax()


const footer = document.querySelector('.section__contact');
const footerContact = document.querySelector('#scroll');

const showContact = () => {
  footerContact.addEventListener('click', () => {
    if (!footer.style.clipPath) {
      footer.style.clipPath = 'circle(75% at 50% 50%)'
    } else {
      footer.style.clipPath = ''
    }
  })
}

showContact()