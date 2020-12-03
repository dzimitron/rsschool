// Header menu

document.addEventListener('scroll', onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const links = document.querySelectorAll('.navigation a');
  const anchor = document.querySelectorAll('.anchor');

  anchor.forEach((el) => {
    if (el.parentElement.offsetTop - 95 <= curPos && (el.parentElement.offsetTop -95 + (el.parentElement.offsetHeight)) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  })
};


//Hamburger menu

const BURGER = document.querySelector('.hamburger');
const MENU = document.querySelector('.header__navigation');
const BODYLOCK = document.querySelector('body');
const LINKS = document.querySelector('.navigation');
const LOGO = document.querySelector('.logo');

BURGER.addEventListener('click', () => {
  BURGER.classList.toggle('burger');
  MENU.classList.toggle('menu_active');
  BODYLOCK.classList.toggle('lock');
  LOGO.classList.toggle('logo_active');
});

LINKS.addEventListener('click', () => {
  BURGER.classList.remove('burger');
  MENU.classList.remove('menu_active');
  BODYLOCK.classList.remove('lock');
  LOGO.classList.remove('logo_active');
});


//Slider

const EARLY = document.querySelector('.early');
const NEXT = document.querySelector('.next');
const BACKGROUND = document.querySelector('.slider');
const SLIDERS = document.querySelector('.sliders');
const SLIDE_2 = document.querySelector('.slider__item_2');
const SLIDE_1 = document.querySelector('.slider__item_1');

EARLY.addEventListener('click', () => {

  BACKGROUND.classList.toggle('slide_blue');
   
  SLIDE_1.classList.toggle('show');
  SLIDE_2.classList.toggle('show');
  SLIDE_1.classList.toggle('hidden');
  SLIDE_2.classList.toggle('hidden');

});


//Portfolio tabs

const TAGS = document.getElementById('tags');
// const TAG = document.querySelectorAll('.tag');

TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
  event.target.classList.add('tag_selected');
});

// TAGS.addEventListener('click', (event) => {
//   function shuffle(array) {
    
//   }
// }

// document.addEventListener('click', ontags);

// function ontags(event) {

  
// }

