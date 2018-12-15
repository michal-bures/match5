import React from "react";
import "./AppHeader.css";

const AppHeader = ({ matchHowMany, onNewGameClicked }) => {
    return (
        <header className="AppHeader navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">Match {matchHowMany}!</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="btn btn-primary" onClick={onNewGameClicked}>
                        NEW GAME
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default AppHeader;
