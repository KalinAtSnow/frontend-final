import { ErrorInfo, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

const logError = (error: Error, info: ErrorInfo) => {
  console.log(error, info.componentStack);
  <div>{error.message}</div>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={<div>Something Went Wrong, Please Wait And Try Again</div>}
      onError={logError}
    >
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </StrictMode>
);
