import './menu.css';

export class Menu {
    constructor({
        color,
        size,
        onSizeUpdate,
        onColorUpdate,
        onClear,
    }) {
        this.color = color;
        this.size = size;
        this.onSizeUpdate = onSizeUpdate;
        this.onColorUpdate = onColorUpdate;
        this.onClear = onClear;

        this.onSizeChange = this.onSizeChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);

        this.showSizeElement = null;
        this.colorInput = null;
        this.clearButton = null;
        this.sizeInput = null;
        this.root = this.render();

        this.sizeInput.addEventListener('input', this.onSizeChange);
        this.colorInput.addEventListener('input', this.onColorChange);
        this.clearButton.addEventListener('click', this.onClear);
    }

    render() {
        const rootElement = document.createElement('div');
        rootElement.classList.add('menu');

        const menuMarker = document.createElement('div');
        menuMarker.classList.add('menu-marker');

        const markerContainer = document.createElement('div');
        markerContainer.classList.add('menu-marker__container');

        const marker = document.createElement('span');

        markerContainer.append(marker);
        menuMarker.append(markerContainer);

        const size = document.createElement('div');

        const showSize = document.createElement('div');
        showSize.classList.add('show-size');

        this.showSizeElement = showSize;

        const sizeInput = document.createElement('input');
        sizeInput.setAttribute('type', 'range');
        sizeInput.value = this.size;
        sizeInput.min = 1;
        sizeInput.max = 100;

        this.sizeInput = sizeInput;

        size.append(showSize, sizeInput);

        const colorContainer = document.createElement('div');
        colorContainer.classList.add('color_wrap');

        const colorInput = document.createElement('input');
        colorInput.setAttribute('type', 'color');
        colorInput.classList.add('color');
        colorInput.value = this.color;

        this.colorInput = colorInput;

        colorContainer.append(colorInput);

        const clearButton = document.createElement('button');
        clearButton.classList.add('clear');
        clearButton.innerText = 'Clear canvas';

        this.clearButton = clearButton;

        rootElement.append(menuMarker, size, colorContainer, clearButton);

        return rootElement;
    }

    onSizeChange({ target: { value } }) {
        const newSize = this.toPx(value);
        const style = this.getShowSizeElementStyle();
        style.width = newSize;
        style.height = newSize;

        this.size = value;

        this.onSizeUpdate(Number(this.size));
    }

    onColorChange({ target: { value } }) {
        const style = this.getShowSizeElementStyle();
        style.background = value;

        this.color = value;

        this.onColorUpdate(this.color);
    }

    getShowSizeElementStyle() {
        return this.showSizeElement.style;
    }

    toPx(value) {
        return `${value}px`;
    }

    getColor() {
        return this.color;
    }
}