import PropTypes from "prop-types";

export const PlayerType = PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
});

export const CellType = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
});

export const GameStateType = PropTypes.shape({
    board: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cells: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    players: PropTypes.arrayOf(PlayerType.isRequired).isRequired,
    currentPlayerIndex: PropTypes.number.isRequired,
    winner: PlayerType,
    winningLine: PropTypes.arrayOf(CellType.isRequired),
    winCondition: PropTypes.number
});
