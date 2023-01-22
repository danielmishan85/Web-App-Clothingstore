import React from "react";
import ReactDOM from "react-dom";

import { StateProvider } from "./context/stateProvider";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./context/reducer";


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />{" "}
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
