import { Board } from "./Board";

describe("when created 5x5 board", () => {
    let board;

    beforeEach(() => {
        board = Board.create(5, 5);
    });

    it("asking for symbol at valid position should return space", () => {
        expect(Board.getSymbolAt(board, 0, 0)).toEqual(" ");
        expect(Board.getSymbolAt(board, 1, 4)).toEqual(" ");
        expect(Board.getSymbolAt(board, 4, 4)).toEqual(" ");
    });

    it("asking for symbol at invalid position should throw error", () => {
        expectInvalidCoords(-1, 0);
        expectInvalidCoords(0, -1);
        expectInvalidCoords(5, 0);
        expectInvalidCoords(0, 5);

        function expectInvalidCoords(x, y) {
            expect(() => Board.getSymbolAt(board, x, y)).toThrowError("invalid cell");
        }
    });

    it("should remember placed symbols", () => {
        board = Board.placeSymbol(board, 1, 1, "O");
        board = Board.placeSymbol(board, 1, 2, "X");

        expect(Board.getSymbolAt(board, 1, 1)).toEqual("O");
        expect(Board.getSymbolAt(board, 1, 2)).toEqual("X");
    });

    it("should not allow to overwrite symbols", () => {
        board = Board.placeSymbol(board, 1, 1, "O");
        expect(() => Board.placeSymbol(board, 1, 1, "X")).toThrowError('already contains "O"');
    });

    it("should not allow placing symbols outside the board", () => {
        expect(() => Board.placeSymbol(board, 5, 1, "X")).toThrowError("invalid cell");
        expect(() => Board.placeSymbol(board, 1, 5, "X")).toThrowError("invalid cell");
    });

    it("should allow to clear board", () => {
        Board.placeSymbol(board, 1, 1, "O");
        Board.clear(board);
        expect(Board.getSymbolAt(board, 1, 1)).toEqual(" ");
    });
});
