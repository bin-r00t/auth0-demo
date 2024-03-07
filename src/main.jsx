import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.jsx";
import "./index.css";

console.log("window.location.origin", window.location.origin);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Auth0Provider
      domain="dev-c076dpbpqwgr208x.jp.auth0.com"
      clientId="JJgOeuG5O25flKZE5oUWsrnwMrmBwnTN"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider> */}
  </React.StrictMode>
);
