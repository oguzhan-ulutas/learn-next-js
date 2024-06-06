import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerUse = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decriment = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default ReducerUse;
