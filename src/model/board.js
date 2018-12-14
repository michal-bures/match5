export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = new Array(width * height).fill(" ");
    }

    clear() {
        this.board.fill(" ");
    }

    placeSymbol(x, y, symbol) {
        if (!this.isCellEmpty(x, y)) {
            throw new Error(
                `Cannot place "${symbol}" into cell (${x},${y}), ` +
                    `it already contains "${this.getSymbolAt(x, y)}"`
            );
        }
        this.board[x * this.width + y] = symbol;
    }

    getSymbolAt(x, y) {
        this.assertCellValid(x, y);
        return this.board[x * this.width + y];
    }

    getState() {
        return [...this.board];
    }

    assertCellValid(x, y) {
        if (x >= this.width || x < 0) this.throwInvalidCoordinatesError(x, y);
        if (y >= this.height || y < 0) this.throwInvalidCoordinatesError(x, y);
    }

    isCellEmpty(x, y) {
        return this.getSymbolAt(x, y) === " ";
    }

    throwInvalidCoordinatesError(x, y) {
        throw new Error(
            `tried to access invalid cell (${x},${y}); expected coordinates from (0,0) ` +
                `to (${this.width}, ${this.height})`
        );
    }
}
