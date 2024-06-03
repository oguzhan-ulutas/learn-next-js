import { memo } from "react";

const ChildMemo = ({ counter }) => {
  console.log("Child is rendering!!!");
  return (
    <div style={{ margin: "20px", border: "1px solid blue", padding: "20px" }}>
      ChildMemo {counter}
    </div>
  );
};

export const ChildMemoMemorized = memo(ChildMemo);
