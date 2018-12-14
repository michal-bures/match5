import React from "react";
import "./Cell.css";

const Cell = ({ symbol, onClick, clickable }) => {
    const className = clickable ? "clickable" : "not-clickable";

    return (
        <td className={className} onClick={onClick}>
            {symbol}
        </td>
    );
};

export default Cell;
