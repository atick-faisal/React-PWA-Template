import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { initializeErrorTracking } from "./utils/errorTracking.js";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";

import "./index.css";

initializeErrorTracking();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
);
