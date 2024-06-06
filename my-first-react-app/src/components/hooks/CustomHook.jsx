import { useState } from "react";
import useLocalStorage from "../useLocalStorage";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <input type="text" value={name} onClick={(e) => setName(e.target.name)} />
    </div>
  );
};

export default CustomHook;
