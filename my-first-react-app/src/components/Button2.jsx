import React, { useState, memo } from "react";

const Button2 = memo(({ children, onClick }) => {
  console.log("rendered");
  let i = 0;

  const ITERATION_COUNT = 10000;

  while (i < ITERATION_COUNT) {
    i += 1;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

export default Button2;
