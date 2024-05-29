import { useState } from "react";
import Button2 from "./Button2";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button2 onClick={handleClick}>Click me!</Button2>
    </div>
  );
}

export default Counter;
