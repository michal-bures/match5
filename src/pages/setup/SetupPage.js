import React, { Component } from "react";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom";

class SetupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>SetupPage</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.onSetupConfirmed(this.state)}
                >
                    Start
                </button>
            </div>
        );
    }
}

export default SetupPage;
