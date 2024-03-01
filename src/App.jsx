import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./pages/UserProfile";

import "./App.css";

function App() {
  const { loginWithPopup, logout } = useAuth0();

  function handleToLogin() {
    /** to auth0 login, and then redirect */
    loginWithPopup();
  }

  function handleLogout() {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }
  return (
    <main id="app">
      <h1 className="m-5 p-5 bg-black text-white font-serif text-lg w-96">
        This is the index page, which is public.......
      </h1>

      <button
        onClick={handleToLogin}
        className="m-5 p-2 px-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 cursor-pointer"
      >
        login
      </button>

      <button
        onClick={handleLogout}
        className="m-5 p-2 px-6 text-white bg-red-600 rounded-lg hover:bg-indigo-500 cursor-pointer"
      >
        logout
      </button>

      <UserProfile />
    </main>
  );
}

export default App;
