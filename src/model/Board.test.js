import { Board } from "./Board";

describe("when created 5x5 board", () => {
    let board;

    beforeEach(() => {
        board = Board.create(5, 5);
    });

    it("asking for symbol at valid position should return null", () => {
        expect(Board.getSymbolAt(board, 0, 0)).toEqual(null);
        expect(Board.getSymbolAt(board, 1, 4)).toEqual(null);
        expect(Board.getSymbolAt(board, 4, 4)).toEqual(null);
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
        board = Board.placeSymbol(board, 1, 1, "O");
        board = Board.clear(board);
        expect(Board.getSymbolAt(board, 1, 1)).toEqual(null);
    });

    it("should correctly indentify straight lines of given length passing through given point", () => {
        board = Board.placeSymbol(board, 1, 1, "O");
        board = Board.placeSymbol(board, 2, 2, "O");
        board = Board.placeSymbol(board, 3, 3, "O");
        board = Board.placeSymbol(board, 4, 4, "X");

        const expectedLine = [{ x: 3, y: 3 }, { x: 2, y: 2 }, { x: 1, y: 1 }];

        expect(Board.findStraightLine({ board, x: 1, y: 1, requiredLength: 3 })).toEqual(
            expectedLine
        );
        expect(Board.findStraightLine({ board, x: 2, y: 2, requiredLength: 3 })).toEqual(
            expectedLine
        );
        expect(Board.findStraightLine({ board, x: 3, y: 3, requiredLength: 3 })).toEqual(
            expectedLine
        );
        expect(Board.findStraightLine({ board, x: 1, y: 1, requiredLength: 4 })).toBe(undefined);
        expect(Board.findStraightLine({ board, x: 2, y: 1, requiredLength: 1 })).toBe(undefined);
    });
});
