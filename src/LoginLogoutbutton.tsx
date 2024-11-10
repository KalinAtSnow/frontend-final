import { useAuth } from "react-oidc-context";

function LoginLogout() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="text-primary-200 ml-auto p-4">
        Hello {auth.user?.profile.sub}{" "}
        <button className="text-primary-200 ml-auto p-4"
          onClick={() => {
            void auth.removeUser();
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return <button className="text-primary-200 ml-auto p-4" onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default LoginLogout;