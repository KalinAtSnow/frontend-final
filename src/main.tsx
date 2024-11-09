import { ErrorInfo, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";

const logError = (error: Error, info: ErrorInfo) => {
  console.log(error, info.componentStack);
  <div>{error.message}</div>;
};

const oidcConfig = {
  authority: "https://auth.snowse-ts.duckdns.org/realms/advanced-frontend-ts",
  client_id: "kalin-final",
  redirect_uri: "http://localhost:5173/",
  // ...

  onSigninCallback: (user) => {
    console.log("on Signin Callback");
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    console.log(user?.access_token);

    //logout remove cookie
    //remove cookie after time
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={<div>Something Went Wrong, Please Wait And Try Again</div>}
      onError={logError}
    >
      <AuthProvider {...oidcConfig}>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
