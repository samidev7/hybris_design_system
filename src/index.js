import React from "react";
import ReactDOM from "react-dom/client";

// Libraries
import { generateApiClient, ApiProvider } from "@hybris-software/use-query";
import { AuthProvider } from "@hybris-software/use-auth";
import { ThemeProvider } from "@hybris-software/ui-kit";

// Data
import config from "./data/config";
import theme from "./data/theme";

import "./assets/css/index.css";
import App from "./App";

const apiClient = generateApiClient({
  baseUrl: config.API_BASE_URL,
  authorizationHeader: "Authorization",
  authorizationPrefix: "Token ",
  acceptLanguage: localStorage.getItem("language") || "EN",
});

if (config.DEBUG_MODE) {
  console.log(
    `\n%c DEBUG MODE ENABLED \n%cCopyright © 2023 JourneyBridge. All rights reserved`,
    "color: red; font-size: 40px; background-color: black; font-weight: bold;",
    "color: white; font-size: 13.5px;"
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider apiClient={apiClient}>
    <AuthProvider apiClient={apiClient} authUrl={"status/"}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </ApiProvider>
);