export class Canvas {
    constructor({
        width,
        height,
        lineStyle,
        size,
        color,
        onDraw,
        x,
        y,
    }) {
        this.lineStyle = lineStyle;
        this.size = size;
        this.color = color;
        this.onDraw = onDraw;
        this.x = x;
        this.y = y;

        this.drawpane = document.createElement('canvas');
        this.drawpane.width = width;
        this.drawpane.height = height;

        this.disable = this.disable.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.drawpane.addEventListener('mousedown', this.onMouseDown);
    }

    setColor(color) {
        this.color = color;
    }

    setSize(size) {
        this.size = size;
    }

    updatePosition({ x, y }) {
        this.x = x;
        this.y = y;
    }

    draw({ x, y }) {
        const ctx = this.getDrawingContext();
        ctx.lineWidth = this.size;
        ctx.lineJoin = this.lineStyle;
        ctx.lineCap = this.lineStyle;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        this.updatePosition({ x, y });
        this.onDraw();
    }

    clear() {
        const { width, height } = this.drawpane;
        this.getDrawingContext().clearRect(0, 0, width, height);
    }

    getDrawingContext() {
        return this.drawpane.getContext('2d');
    }

    onMouseDown(e) {
        this.drawpane.addEventListener('mousemove', this.onMouseMove);
        this.drawpane.addEventListener('mouseup', this.disable);
        this.drawpane.addEventListener('mouseout', this.disable);

        this.updatePosition(this.extractPositionFromEvent(e));
    }

    disable() {
        this.drawpane.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove(e) {
        this.draw(this.extractPositionFromEvent(e));
    }

    extractPositionFromEvent({ offsetX, offsetY }) {
        return { x: offsetX, y: offsetY };
    }
}