// Script to draw graphics in HTML canvas components.
// Based on video from Tsoding: https://www.youtube.com/watch?v=qjWkNZ0SXfo
// Following Justin Skycak's (justinmath.com) philosophy, I will not use any
// external dependencies and try to implement everything myself.

class Point {
    constructor(x, y, z = 1.0) {
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

function orthographicProjection(point) {
    return new Point(point.x, point.y);
}

class CoordSystem {
    constructor(rangeX, rangeY, projection = orthographicProjection) {
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.projection = projection;
    }

    toCanvasCoords(canvas, point) {
        // Point's input coordinates are relative to rangeX and rangeY.
        var point = this.projection(point);
        const fracX = (point.x - this.rangeX.min) / this.rangeX.diff;
        const canvasX = fracX * canvas.width;
        const fracY = 1 - (point.y - this.rangeY.min) / this.rangeY.diff;
        const canvasY = fracY * canvas.height;

        return new Point(canvasX, canvasY);
    }
}

class DrawToScreen {
    constructor(canvas, coord, background = "white") {
        this.canvas = canvas;
        this.coord = coord;
        this.points = [];
        this.colours = [];
        this.edges = [];
        this.background = background;
        this.ctx = canvas.getContext("2d");
    }

    addPoint(point, colour = "black") {
        this.points.push(point);
        this.colours.push(colour);
    }

    addEdge(p1Idx, p2Idx) {
        this.edges.push([p1Idx, p2Idx]);
    }

    clearCanvas() {
        this.ctx.fillStyle = this.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    printPoints(size = 10) {
        for (var i = 0; i < this.points.length; i++) {
            this.ctx.fillStyle = this.colours[i];
            const {x: new_x, y: new_y} = this.coord.toCanvasCoords(this.canvas, this.points[i]);
            this.ctx.fillRect(new_x-size/2, new_y-size/2, size, size);
        }
    }

    printEdges(width = 1) {
        this.ctx.strokeStyle = "green"; // This must be updated    
        this.ctx.lineWidth = width;
        for (var i = 0; i < this.edges.length; i++) {
            var p1 = this.points[this.edges[i][0]];
            p1 = this.coord.toCanvasCoords(this.canvas, p1);
            var p2 = this.points[this.edges[i][1]];
            p2 = this.coord.toCanvasCoords(this.canvas, p2);
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
        }
    }

    updatePositions(updateFunc) {
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = updateFunc(this.points[i]);
        }
    }
}
