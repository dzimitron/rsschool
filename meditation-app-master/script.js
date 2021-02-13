const app = () => {
  const song = document.querySelector('.song'),
    play = document.querySelector('.play'),
    outline = document.querySelector('.moving-outline circle'),
    video = document.querySelector('.vid-container video'),
  // Sounds
    soundPicker = document.querySelector('.sound-picker'),
  // Time Display
    timeDisplay = document.querySelector('.time-display'),
  // Time Select
    timeSelect = document.querySelector('.time-select'),
  // Get the length of the outline
    outlineLength = outline.getTotalLength();
  // Duration
    let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Pick different sound
  soundPicker.addEventListener('click', function({ target }) {
    const elem = target.closest('[data-sound]');
    if (!elem) return;
    song.src = elem.getAttribute('data-sound');
    video.src = elem.getAttribute('data-video');
    checkPlaying();
  });

  // play sound
  play.addEventListener('click', checkPlaying);

  // Select sound
  timeSelect.addEventListener('click', function({ target }) {
    const elem = target.closest('[data-time]');
    if (!elem) return;
    fakeDuration = elem.getAttribute('data-time');
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${addZero(Math.floor(
      fakeDuration % 60
    ))}`;
  });

  // Add Zeros
  function addZero(n) {
    return String(n).padStart(2, '0');
  }

  // Pause sound
  function pause() {
    song.pause();
    video.pause();
    play.src = './svg/play.svg';
  }

  // Create a function specific to stop and play the sounds
  function checkPlaying() {
    if(song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      pause();
    }
  };

  // Animated the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Animate the text
    timeDisplay.textContent = `${minutes}:${addZero(seconds)}`;

    if (currentTime >= fakeDuration) {
      song.currentTime = 0;
      pause();
    }
  }
};

app();
