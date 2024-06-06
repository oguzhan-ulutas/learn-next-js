import { useEffect, useState } from "react";

const LayoutEffectUse = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
};

export default LayoutEffectUse;
