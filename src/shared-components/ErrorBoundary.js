import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    render() {
        if (this.state.hasError) {
            return <h1>Oops! It broke!</h1>;
        }
        return this.props.children;
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true });
    };
}

export default ErrorBoundary;
