import React from "react";
import "./AppHeader.css";
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";

const AppHeader = (props, context) => {
    console.log("RENDER APPHEADER WITH PROPS", props, "AND CONTEXT", context);
    return (
        <header className="AppHeader navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">Match {5 /*context.config.winCondition*/}!</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={ROUTES.SETUP}>
                        <button className="btn btn-primary">NEW GAME</button>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default AppHeader;
