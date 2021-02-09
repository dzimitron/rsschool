const app = () => {

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;  
    audio.play();
    key.classList.add('playing');
    console.log(e);
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  
  keys.forEach(el => el.addEventListener('click', (e) => {
    let atr = e.target.getAttribute('data-key');
    playSelectKey(atr);
  }));

  function playSelectKey(k) {
    const audio = document.querySelector(`audio[data-key="${k}"]`);
    const key = document.querySelector(`.key[data-key="${k}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  const auto = document.querySelector('.auto');
  auto.addEventListener('click', () => {

    let n = 0;
    function autoPlay() {
      n < 8 ? n++ : n = 1;
      if (n % 3 === 0 || n === 7) {
        playSelectKey(68);
      } if (n === 5 || n === 1) {
        playSelectKey(74);
      }
      playSelectKey(83);
      if (auto.classList.contains('active')){
        setTimeout(autoPlay, 250)
      }
    } 
    auto.classList.toggle('active');
    if (auto.classList.contains('active')) {
      autoPlay();
    }

  });

};
app();
