import { Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import CandyDispenser from "./components/CandyDispenser";
import { Link } from "react-router-dom";

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

function App() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/memo-use">
        <button>useMemo</button>
      </Link>

      <Link to="/callback-use">
        <button>useCallback</button>
      </Link>

      <Link to="/memo">
        <button>memo</button>
      </Link>
    </>
  );
}

export default App;
