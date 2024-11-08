import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import LoginLogout from "./loginLogoutbutton";
import { AuthProvider } from "react-oidc-context";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
});

const oidcConfig = {
  authority: "https://auth.snowse-ts.duckdns.org/realms/advanced-frontend",
  client_id: "kalin-final",
  redirect_uri: "http://localhost:5173",
  // ...

  onSigninCallback: (user) => {
    console.log("on Signin Callback");
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    console.log(user?.access_token);

    //logout remove cookie
    //remove cookie after time
    //document.cookie = `access_token=${user?.access_token}`;
  },
};
function App() {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider {...oidcConfig}>
          <LoginLogout />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
