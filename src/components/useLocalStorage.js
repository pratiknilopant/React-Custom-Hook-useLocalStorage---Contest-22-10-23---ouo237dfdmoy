import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const storedValue = localStorage.getItem(stateVar);

  const [finalvalue, setFinalvalue] = useState(storedValue ? JSON.parse(storedValue) : value);

  useEffect(() => {
    localStorage.setItem(stateVar, JSON.stringify(finalvalue));
  }, [stateVar, finalvalue]);

  return [finalvalue, setFinalvalue];
};

export default useLocalStorage;
