import * as React from 'react';

/**
 * Get previous value of state change
 *
 * @param value any value
 * @returns previous value of `value` and possibly `undefined` at fist render
 */
export function usePreviousValue<T>(value: T) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
