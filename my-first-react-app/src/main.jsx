import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Router from "./Router.jsx";

const onRender = (
  id, // Profiler ID
  phase, // "mount" (for the initial render) or "update" (for re-renders)
  actualDuration, // Time spent rendering the committed update
  baseDuration, // Estimated time to render the entire subtree without memoization
  startTime, // When React began rendering this update
  commitTime // When React committed this update
) => {
  console.log(
    `[Profiler] id: ${id}, ${phase} phase: ${actualDuration}ms, baseDuration: ${baseDuration}ms, startTime: ${startTime}, commitTime: ${commitTime}.`
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Profiler id="App" onRender={onRender}> */}
    <Router />
    {/* </Profiler> */}
  </React.StrictMode>
);
