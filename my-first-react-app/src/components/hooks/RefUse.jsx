import { useState, useRef, useEffect } from "react";

const RefUse = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times.</div>
    </div>
  );
};

export default RefUse;
