import PropTypes from "prop-types";

export const PlayerType = PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
});

export const CellType = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
});

export const GameConfigType = PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    players: PropTypes.arrayOf(PlayerType.isRequired).isRequired,
    winCondition: PropTypes.number
});
