const app = () => {

  const auto = document.querySelector('.auto'),
    keys = document.querySelector('.keys'),
    TIMEOUT_DURATION = 250,
    PLAY_KICK_IN_BITS = 3,
    PLAY_SNARE_IN_BITS = 1,
    BITS_IN_TIME = 8,
    INTERVAL_BETWEEN_SOUNDS = 4,
    KICK = 68,
    SNARE = 74,
    HIHAT = 83;
  let tact = 1;  

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`.key[data-key="${e}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  keys.childNodes.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', e => playSound(e.keyCode));
  
  keys.addEventListener('click', function({target}) {
    const key = target.closest('[data-key]');
    if (!key) return;
    const atr = key.getAttribute('data-key');
    playSound(atr);
  });

  function autoPlayDrum() {
    tact < BITS_IN_TIME ? tact++ : tact = 1;
    if (tact % PLAY_KICK_IN_BITS === 0 || tact === PLAY_KICK_IN_BITS + INTERVAL_BETWEEN_SOUNDS) {
      playSound(KICK);
    } if (tact === PLAY_SNARE_IN_BITS || tact === PLAY_SNARE_IN_BITS + INTERVAL_BETWEEN_SOUNDS) {
      playSound(SNARE);
    }
    playSound(HIHAT);
    if (auto.classList.contains('active')) setTimeout(autoPlayDrum, TIMEOUT_DURATION);
  }

  auto.addEventListener('click', () => {
    auto.classList.toggle('active');
    if (auto.classList.contains('active')) autoPlayDrum();
  });

}

app();
