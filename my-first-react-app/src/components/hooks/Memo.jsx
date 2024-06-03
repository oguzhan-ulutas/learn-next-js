import { useCallback, useState, memo } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import { ChildMemoMemorized } from "./ChildMemo";

function Memo() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Hello from parent {counter}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
      <ChildMemoMemorized counter={counter} />

      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default Memo;
