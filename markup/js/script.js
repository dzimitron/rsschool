document.addEventListener('scroll', onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll('main > section');
  const links = document.querySelectorAll('.menu a');

  sections.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  })
}


const slide = document.querySelector('.slide');
const next = document.querySelector('.next');
const early = document.querySelector('.early');

next.addEventListener('click', () => {
  slide.classList.toggle('show');
})

early.addEventListener('click', () => {
  slide.classList.toggle('show');
})

