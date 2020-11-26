document.addEventListener('scroll', onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.navigation a');

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
