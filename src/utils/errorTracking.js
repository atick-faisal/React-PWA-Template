import ReactGA from "react-ga4";

ReactGA.initialize("G-P8SBZFLMRG");

export function initializeErrorTracking() {
    window.addEventListener("error", (event) => {
        ReactGA.event("exception", {
            description: `${event.message} at ${event.filename}:${event.lineno}:${event.colno}`,
            fatal: true,
        });
    });

    window.addEventListener("unhandledrejection", (event) => {
        ReactGA.event("exception", {
            description: `Unhandled promise rejection: ${event.reason}`,
            fatal: true,
        });
    });
}
