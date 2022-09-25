import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./lib/i18n/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);