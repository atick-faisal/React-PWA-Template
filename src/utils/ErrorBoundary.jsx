import React from "react";
import ReactGA from "react-ga4";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Boundary caught an error", error, errorInfo);

        // https://developers.google.com/tag-platform/gtagjs/reference/events#exception
        ReactGA.event("exception", {
            description: `${error.toString()} | ${JSON.stringify(errorInfo)}`,
            fatal: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
