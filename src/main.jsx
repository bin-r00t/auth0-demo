import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* clientId="JJgOeuG5O25flKZE5oUWsrnwMrmBwnTN" */}
    {/* clientId="GFJ1LlDKTtFCIAyPqYTG8JrsdVHfhPOA" */}
    <Auth0Provider
      domain="dev-c076dpbpqwgr208x.jp.auth0.com"
      clientId="JJgOeuG5O25flKZE5oUWsrnwMrmBwnTN"
      authorizationParams={{
        redirect_uri: window.location.origin, //==> http://localhost:5371
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
