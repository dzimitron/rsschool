import { Canvas } from './Canvas';
import { Menu } from './Menu';

import './style.css';

const DEFAULT_COLOR = '#ff0000';
const LINE_STYLE = 'round';

const DEFAULT_SIZE = 30;

const app = (rootElement, width, height) => {
  const canvas = new Canvas({
    lineStyle: LINE_STYLE,
    width,
    height,
    color: DEFAULT_COLOR,
    size: DEFAULT_SIZE,
    x: 0,
    y: 0,
    onDraw: setBackgroundApp,
  });

  const menu = new Menu({
    color: DEFAULT_COLOR,
    size: DEFAULT_SIZE,
    onSizeUpdate: (size) => canvas.setSize(size),
    onColorUpdate: (color) => canvas.setColor(color),
    onClear: () => canvas.clear(),
  });
 
  rootElement.prepend(menu.root);
  
  function setBackgroundApp() {
    rootElement.style.background = menu.getColor();
  }

  const paneContainer = rootElement.querySelector('.draw-panel');
  paneContainer.append(canvas.drawpane);
}

app(document.querySelector('.wrapper'), window.innerWidth, window.innerWidth);
