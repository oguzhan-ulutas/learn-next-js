import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";

function CallbackUse() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <List getItems={getItems} />

      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default CallbackUse;
