// import './style.css';

const app = () => {

  const DEFAULT_COLOR = '#ff0000';
  const clear = document.querySelector('#clear');
  const size = document.querySelector('#size');
  const color = document.querySelector('#color');
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  color.value = DEFAULT_COLOR;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function setBackgroundApp() {
    document.querySelector('.wrapper').style.background = color.value;
  }
  
  function setSizeColorForMenu() {
    let el = document.querySelector('.show-size');
    const suffix = el.dataset.sizing;
    el.style.background = color.value;
    el.style.width = size.value + suffix;
    el.style.height = size.value + suffix;
  }

  setSizeColorForMenu();  

  size.addEventListener('input', setSizeColorForMenu);
  color.addEventListener('input', setSizeColorForMenu);


  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = size.value;
    ctx.strokeStyle = color.value;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    setBackgroundApp();
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, false); 

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  });

}

app();
