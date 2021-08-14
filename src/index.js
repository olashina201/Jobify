import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH0_DOMAIN;
const clientID = process.env.AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
      domanin={domain}
      cliendID={clientID}
      redirectUrl={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  document.getElementById("root")
);
