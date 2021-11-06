import * as React from 'react';

/**
 * Lazily update the state
 *
 * @param value any value
 * @param delay how much the delay that will be passed to `setTimeout` (in ms) default to 200
 * @returns debounced value
 */
export function useDebouncedValue<T>(value: T, delay = 200) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(setDebouncedValue, delay, value);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return debouncedValue;
}
