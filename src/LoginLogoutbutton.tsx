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
      <div className="text-primary-800">
        <button className="text-primary-800 p-4 border border-primary-800 rounded-md"
          onClick={() => {
            void auth.removeUser();
          }}
        >
          Log out
        </button>
      </div>
    );
  }

  return <button className="text-primary-800 p-4 border border-primary-800 rounded-md" onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default LoginLogout;
