import { LineFinder } from "./LineFinder";

function clear(board) {
    return create(board.width, board.height);
}

function create(width, height) {
    return {
        width,
        height,
        cells: new Array(width * height).fill(null)
    };
}

function placeSymbol(board, x, y, symbol) {
    if (!isCellEmpty(board, x, y)) {
        throw new Error(
            `Cannot place "${symbol}" into cell (${x},${y}), ` +
                `it already contains "${this.getSymbolAt(board, x, y)}"`
        );
    }
    const newBoard = { ...board };
    newBoard.cells = [...newBoard.cells];
    newBoard.cells[x * board.width + y] = symbol;
    return newBoard;
}

function getSymbolAt(board, x, y) {
    if (!isCellValid(board, x, y)) {
        throwInvalidCoordinatesError(board, x, y);
    }
    return board.cells[x * board.width + y];
}

function isCellValid(board, x, y) {
    return x < board.width && x >= 0 && y < board.height && y >= 0;
}

function isCellEmpty(board, x, y) {
    return getSymbolAt(board, x, y) === null;
}

function throwInvalidCoordinatesError(board, x, y) {
    throw new Error(
        `tried to access invalid cell (${x},${y}); expected coordinates from (0,0) ` +
            `to (${board.width}, ${board.height})`
    );
}

function findStraightLine({ board, x, y, requiredLength }) {
    return LineFinder.findStraightLine({ board, x, y, requiredLength });
}

export const Board = {
    clear,
    create,
    placeSymbol,
    getSymbolAt,
    isCellValid,
    isCellEmpty,
    findStraightLine
};
