import { ThemeProvider } from "context/context";
import React from "react";

import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
