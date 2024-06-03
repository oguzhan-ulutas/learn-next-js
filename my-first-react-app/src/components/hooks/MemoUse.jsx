import React, { useEffect, useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 2000000000; i++) {}
  return num * 2;
}

const MemoUse = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <div style={{ ...themeStyles }}>{doubleNumber}</div>
    </>
  );
};

export default MemoUse;
