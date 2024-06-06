import { useState } from "react";

const getValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getValue(key, initialValue);
  });

  return [value, setValue];
}
