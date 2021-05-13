const app = () => {

  const size = document.querySelector('#width');
  const color = document.querySelector('#color');
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  for (let i = 1; i <= 50; i++) {
    let options = document.createElement('option');
    options.innerHTML = `${i}`;
    size.append(options);
  }

  size.value = 10;
  color.value = '#00FFFF';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = size.value;
    ctx.strokeStyle = color.value;
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
}

app();
