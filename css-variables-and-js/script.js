const app = () => {

  const dayNightSwitch = document.querySelector('.logo span');
  const inputs = document.querySelectorAll('.controls input');
  const root = document.querySelector(':root');

  const dayTheme = {
    background: '#e0caca',
    base: '#969595',
    shadow: '#444044',
  };

  function setValueColor() {
    for (let key in dayTheme) {
      root.style.setProperty(`--${key}`, `${dayTheme[key]}`);
    }
  }

  dayNightSwitch.addEventListener('click', function() {
    dayNightSwitch.classList.toggle('switch');
    if (dayNightSwitch.classList.contains('switch')) {
      setValueColor();
    } else document.location.reload();
  });

  function setValueProperty() {
    const el = this;
    const suffix = el.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${el.name}`, el.value + suffix);
  }

  inputs.forEach(e => {
    e.addEventListener('input', setValueProperty);
  });
  
}

app();
