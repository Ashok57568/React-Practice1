import React from "react";
import ReactDOM from "react-dom";
import pi, { doublepi, tripplepi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>{tripplepi()}</li>
  </ul>,
  document.getElementById("root")
);
