import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./config/i18next-config";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
