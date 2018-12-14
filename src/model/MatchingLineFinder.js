import { Board } from "./Board";

const directions = [[0, 1], [1, 1], [1, 0], [-1, 1]];

export class MatchingLineFinder {
    static findMatchingLine({ board, x, y, requiredLength }) {
        if (Board.isCellEmpty(board, x, y)) return undefined;
        const symbol = Board.getSymbolAt(board, x, y);

        const lines = directions.map(direction => {
            const start = getLineStart({ board, x, y, symbol, direction });
            return getLongestLineFrom({
                board,
                x: start.x,
                y: start.y,
                symbol,
                direction: opposite(direction)
            });
        });

        return lines.find(line => line.length >= requiredLength);

        function opposite(direction) {
            return [-direction[0], -direction[1]];
        }

        function getLineStart({ board, x, y, symbol, direction }) {
            const nextCell = { x: x + direction[0], y: y + direction[1] };
            if (
                !Board.isCellValid(board, nextCell.x, nextCell.y) ||
                Board.getSymbolAt(board, nextCell.x, nextCell.y) !== symbol
            )
                return { x, y };
            return getLineStart({ board, x: nextCell.x, y: nextCell.y, symbol, direction });
        }

        function getLongestLineFrom({ board, x, y, symbol, direction }) {
            if (!Board.isCellValid(board, x, y) || !isCorrectSymbol()) return [];

            return [{ x, y }].concat(
                getLongestLineFrom({
                    board,
                    x: x + direction[0],
                    y: y + direction[1],
                    symbol,
                    direction
                })
            );

            function isCorrectSymbol() {
                return Board.getSymbolAt(board, x, y) === symbol;
            }
        }
    }
}
