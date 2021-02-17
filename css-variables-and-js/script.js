const app = () => {

  const dayNightSwitch = document.querySelector('.logo span');
  const inputs = document.querySelectorAll('.controls input');
  const root = document.querySelector(':root');

  const dayTheme = {
    background: '#e0caca',
    base: '#969595',
    shadow: '#444044',
  };

  console.log(Object.keys(dayTheme));

  dayNightSwitch.addEventListener('click', function() {
    dayNightSwitch.classList.toggle('switch');
    if (dayNightSwitch.classList.contains('switch')) {
      root.style.setProperty('--background', '#e0caca');
      root.style.setProperty('--base', '#969595');
      root.style.setProperty('--shadow-color', '#444044');
    } else document.location.reload();
  });

  ['change', 'mousemove'].forEach(function(event) {
    inputs.forEach(el => el.addEventListener(event, () => {
      const suffix = el.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${el.name}`, el.value + suffix);
    }));
  });

}

app();
