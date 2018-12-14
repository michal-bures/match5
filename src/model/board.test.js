import Board from "./board";

describe("when created 5x5 board", () => {
    let board;

    beforeEach(() => {
        board = new Board(5, 5);
    });

    it("asking for symbol at valid position should return space", () => {
        expect(board.getSymbolAt(0, 0)).toEqual(" ");
        expect(board.getSymbolAt(1, 4)).toEqual(" ");
        expect(board.getSymbolAt(4, 4)).toEqual(" ");
    });

    it("asking for symbol at invalid position should throw error", () => {
        expectInvalidCoords(-1, 0);
        expectInvalidCoords(0, -1);
        expectInvalidCoords(5, 0);
        expectInvalidCoords(0, 5);

        function expectInvalidCoords(x, y) {
            expect(() => board.getSymbolAt(x, y)).toThrowError("invalid cell");
        }
    });

    it("should remember placed symbols", () => {
        board.placeSymbol(1, 1, "O");
        board.placeSymbol(1, 2, "X");

        expect(board.getSymbolAt(1, 1)).toEqual("O");
        expect(board.getSymbolAt(1, 2)).toEqual("X");
    });

    it("should not allow to overwrite symbols", () => {
        board.placeSymbol(1, 1, "O");
        expect(() => board.placeSymbol(1, 1, "X")).toThrowError('already contains "O"');
    });

    it("should not allow placing symbols outside the board", () => {
        expect(() => board.placeSymbol(5, 1, "X")).toThrowError("invalid cell");
        expect(() => board.placeSymbol(1, 5, "X")).toThrowError("invalid cell");
    });

    it("should allow to clear board", () => {
        board.placeSymbol(1, 1, "O");
        board.clear();
        expect(board.getSymbolAt(1, 1)).toEqual(" ");
    });
});
