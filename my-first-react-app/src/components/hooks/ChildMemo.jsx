import { memo } from "react";

const ChildMemo = ({ counter, updateCounter }) => {
  console.log("Child is rendering!!!");
  return (
    <div style={{ margin: "20px", border: "1px solid blue", padding: "20px" }}>
      <button onClick={updateCounter}>increment</button>
      ChildMemo {counter}
    </div>
  );
};

export const ChildMemoMemorized = memo(ChildMemo);
