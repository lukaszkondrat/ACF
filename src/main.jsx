import React from "react";
import ReactDOM from "react-dom/client";

import { PlacesContextProvider } from "./store/places-context.jsx";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlacesContextProvider>
      <App />
    </PlacesContextProvider>
  </React.StrictMode>
);
