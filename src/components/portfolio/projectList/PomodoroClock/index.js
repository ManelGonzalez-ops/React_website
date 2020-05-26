import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import InfoHoverable from "../../../../utils/infoHoverable/infoHoverable";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <InfoHoverable/>
  </React.StrictMode>,
  rootElement
);
