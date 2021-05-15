const app = () => {

  const DEFAULT_WIDTH = 10;
  const DEFAULT_COLOR = '#00FFFF';
  const clear = document.querySelector('#clear');
  const size = document.querySelector('#width');
  const color = document.querySelector('#color');
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  for (let i = 1; i <= 50; i++) {
    let options = document.createElement('option');
    options.innerHTML = `${i}`;
    size.append(options);
  }

  // size.value = DEFAULT_WIDTH;
  color.value = DEFAULT_COLOR;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  });

}

app();
