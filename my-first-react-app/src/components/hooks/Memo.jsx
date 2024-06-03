import { useCallback, useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import { ChildMemoMemorized } from "./ChildMemo";

function Memo() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const updateCounter = useCallback(() => setCounter(counter + 1), [counter]);

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

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <ChildMemoMemorized counter={counter} updateCounter={updateCounter} />

      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default Memo;
