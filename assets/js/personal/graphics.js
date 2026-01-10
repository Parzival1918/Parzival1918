// Script to draw graphics in HTML canvas components.
// Based on video from Tsoding: https://www.youtube.com/watch?v=qjWkNZ0SXfo
// Following Justin Skycak's (justinmath.com) philosophy, I will not use any
// external dependencies and try to implement everything myself.

class Point {
    constructor(x, y, z = 0.0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    get diff() {
        return this.max - this.min;
    }
}

class CoordSystem {
    constructor(rangeX, rangeY, projection) {
        this.rangeX = rangeX;
        this.rangeY = rangeY;
    }

    toCanvasCoords(canvas, point) {
        // Point's input coordinates are relative to rangeX and rangeY.
        const fracX = (point.x - this.rangeX.min) / this.rangeX.diff;
        const canvasX = fracX * canvas.width;
        const fracY = 1 - (point.y - this.rangeY.min) / this.rangeY.diff;
        const canvasY = fracY * canvas.height;

        return new Point(canvasX, canvasY);
    }
}

class DrawingTool {
    constructor(canvas, origin = "center", colour = "black") {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.colour = colour;

        if (typeof origin === "object") {
            this.origin = {x: origin.x, y: origin.y};
        } else {
            switch (origin) {
                case "center":
                    this.origin = {x: canvas.width / 2, y: canvas.height / 2};
                    break;
                default:
                    this.origin = {x: canvas.width / 2, y: canvas.height / 2};
            }
        }
    }

    drawPoint(x, y, size = 10.0) {
        const new_x = this.origin.x + x;
        const new_y = this.origin.y + y;
        this.ctx.fillStyle = this.colour;
        this.ctx.fillRect(new_x-size/2, new_y-size/2, size, size);
    }
}

class Draw3DProjection extends DrawingTool {
    constructor(canvas) {
        super(canvas, "center", "green");
    }

    drawPoint(x, y, size = 10.0) {
        const new_x = this.origin.x + x*this.origin.x;
        const new_y = this.origin.y - y*this.origin.y;
        this.ctx.fillStyle = this.colour;
        this.ctx.fillRect(new_x-size/2, new_y-size/2, size, size);
    }
}
