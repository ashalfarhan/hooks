import { useEffect, useRef } from "react";

/**
 * Track Previous Value
 * 
 * @param prevVal Any value to save the previous options
 * @returns The `previous` value or `undefined` in initial render
 */
const usePrev = <T>(prevVal: T) => {
  const value = useRef<T>();
  useEffect(() => {
    value.current = prevVal;
  }, [prevVal]);
  return value.current;
};

export default usePrev;
