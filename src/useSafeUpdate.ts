import * as React from 'react';
import { AnyFunction } from './types';

/**
 * Safely update the state
 *
 * @param updater any function
 * @returns function that is actually the same as `updater` but will be called safely
 */
export function useSafeUpdate<T extends AnyFunction>(updater: T) {
  const safe = React.useRef(false);

  React.useEffect(() => {
    safe.current = true;
    return () => {
      safe.current = false;
    };
  }, []);

  return React.useCallback(
    (...args: Parameters<T>) => (safe.current ? updater(...args) : void 0),
    [updater],
  );
}
