import { useAuth0 } from "@auth0/auth0-react";

function TopHeader() {
  const { loginWithRedirect, isAuthenticated, user, isLoading, logout } =
    useAuth0();
  return (
    <header className="top-header p-8 shadow-b bg-white flex items-center justify-between">
      <div id="logo" />
      {/* <span className="logo text-lg font-bold uppercase">Header</span> */}
      <div className="top-right-area flex items-center gap-8">
        {isAuthenticated && <div className="user-info">{user.nickname}</div>}
        <div className="btns">
          {!isAuthenticated && (
            <button
              className="btn p-2 px-4 border border-black font-bold"
              disabled={isLoading}
              onClick={() =>
                loginWithRedirect({
                  authorizationParams: {
                    redirect_uri: window.location.origin,
                  },
                })
              }
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          )}
          {isAuthenticated && (
            <button
              className="btn p-2 px-4 border border-black font-bold"
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                })
              }
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
