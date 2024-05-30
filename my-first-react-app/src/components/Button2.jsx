import React, { useState, memo } from "react";

const Button2 = memo(({ children, onClick }) => {
  console.log("rendered");
  let i = 0;

  const ITERATION_COUNT = 5;

  while (i < ITERATION_COUNT) {
    i += 1;
    console.log(i);
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

export default Button2;
