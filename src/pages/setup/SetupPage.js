import React, { Component } from "react";
import { ROUTES } from "../../routes";
import { AppContext } from "../../model/AppContext";
import { IntegerInput } from "./IntegerInput";

class SetupPage extends Component {
    static contextType = AppContext;

    state = {
        ...this.context.config
    };

    render() {
        return (
            <div className="GameStateMessage card">
                <div className="card-body">{this.renderForm()}</div>
            </div>
        );
    }

    renderForm() {
        return (
            <form ref={form => (this.formElement = form)}>
                <h4 className="mb-3">Rules</h4>
                <div className="form-group">
                    <IntegerInput
                        id="width"
                        label="width"
                        value={this.state.width}
                        min="1"
                        max="50"
                        onChange={newValue => this.updateField("width", newValue)}
                    />
                    <IntegerInput
                        id="height"
                        label="height"
                        min="1"
                        max="50"
                        value={this.state.height}
                        onChange={newValue => this.updateField("height", newValue)}
                    />
                    <IntegerInput
                        id="winCondition"
                        label="match"
                        min="1"
                        max="10"
                        value={this.state.winCondition}
                        onChange={newValue => this.updateField("winCondition", newValue)}
                    />
                </div>

                <button type="submit" onClick={this.submit} className="btn btn-primary">
                    Start Game
                </button>
            </form>
        );
    }

    submit = () => {
        if (this.formElement.checkValidity()) {
            this.context.setConfig(this.getNewConfigFromState());
            this.props.history.push(ROUTES.PLAY);
        }
    };

    updateField = (fieldName, newValue) => {
        this.setState({ [fieldName]: newValue });
    };

    getNewConfigFromState() {
        return {
            ...this.state,
            width: parseInt(this.state.width),
            height: parseInt(this.state.height)
        };
    }
}

export default SetupPage;
