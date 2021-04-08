
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
        contact.style.clipPath = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    })
  })
}

toggle();


const container = document.querySelector('.container');

const parralax = () => {
  window.addEventListener('scroll', () => {
    container.style.backgroundPositionY = `${window.scrollY * 0.1}px`;
  })
}

parralax()


const contact = document.querySelector('.section__contact');
const contactNavlink = document.querySelector('#scroll');
const contactBurger = document.querySelector('.contact__burger')

const showContact = () => {
  contactNavlink.addEventListener('click', () => {
    if (!contact.style.clipPath) {
      contact.style.clipPath = 'circle(75% at 50% 50%)'
    } else {
      contact.style.clipPath = ''
    }
  })
}

const closeContact = () => {
  contactBurger.addEventListener('click', () => {
    if (!contact.style.clipPath) {
      contact.style.clipPath = 'circle(75% at 50% 50%)'
    } else {
      contact.style.clipPath = ''
    }
  })
}

closeContact()
showContact()