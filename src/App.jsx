import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./pages/UserProfile";
import { http } from "./utils";

import "./App.css";

function App() {
  const { loginWithPopup, logout } = useAuth0();
  const [res, setRes] = useState(null);
  const [token, setToken] = useState(null);

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

  async function handleClickPublic() {
    const res = await http.get("/public");
    setRes(res.data);
  }

  async function handleClickPrivate() {
    let data;
    try {
      const res = await http.get("/private");
      data = res.data;
    } catch (error) {
      // data = error.response.data;
      data = {
        code: error.response.status,
        message: error.response.statusText,
      };
    }

    setRes(data);
  }

  async function handleGetToken() {
    try {
      const options = {
        method: "POST",
        url: "https://dev-c076dpbpqwgr208x.jp.auth0.com/oauth/token",
        headers: { "content-type": "application/json" },
        body: '{"client_id":"GFJ1LlDKTtFCIAyPqYTG8JrsdVHfhPOA","client_secret":"ldN67PLb6p-3JicwRwD0O0UXkbT0tt0xtrh0aP6i1ZXRdk_p14JLvyfkDTPcrW3Z","audience":"private-api-endpoint-guardians","grant_type":"client_credentials"}',
      };
      const res = await http(options);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleCleanToken() {}

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

      <button
        className="p-1 border bg-slate-400 rounded mr-2 text-white"
        onClick={handleClickPublic}
      >
        请求公共api
      </button>
      <button
        className="p-1 border bg-slate-400 rounded mr-2 text-white"
        onClick={handleClickPrivate}
      >
        请求私有api
      </button>
      <button
        className="p-1 border bg-slate-400 rounded mr-2 text-white"
        onClick={handleGetToken}
      >
        获取token，然后再请求私有api
      </button>
      <button
        className="p-1 border bg-slate-400 rounded mr-2 text-white"
        onClick={handleCleanToken}
      >
        清除token
      </button>

      <div className="w-96 border p-2 text-gray-600 text-sm">
        {res ? JSON.stringify(res, null, 2) : "/"}
      </div>

      <UserProfile />
    </main>
  );
}

export default App;
