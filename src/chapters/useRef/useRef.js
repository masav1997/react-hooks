import { useEffect, useRef, useCallback } from "react";
import { useCounter } from "../CustomHooks/CustomHooks";

function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback]);
}

export function Example() {
  const [value, increment] = useCounter();

  useEffect(() => {
    console.log("mounted");
  }, []);

  console.log(`render, value: ${value}`);

  const callback = useCallback(() => {
    console.log(`  value updated: ${value}`);
  }, [value]);

  useUpdateEffect(callback);

  return <button onClick={increment}>RENDERED</button>;
}
