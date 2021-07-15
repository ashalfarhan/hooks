import { useCallback, useState } from 'react';

/**
 *
 * Toggle Hooks
 *
 * @param {boolean} initial - Initial value of toggle internal state
 * @returns {boolean} open - Internal state
 * @returns {() => void} onToggle - Function to toggle internal state
 * @returns {() => void} onOpen - Set toggle internal state to true
 * @returns {() => void} onClose - Set toggle internal state to false
 * @returns {Function} onSwitch - Set toggle internal state with payload
 * @see https://github.com/ashalfarhan/hooks#readme
 *
 */
const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const onToggle = useCallback(() => {
    setState(prev => !prev);
  }, [setState]);

  const onOpen = useCallback(() => {
    setState(true);
  }, [setState]);

  const onClose = useCallback(() => {
    setState(false);
  }, [setState]);

  const onSwitch = useCallback(
    (payload: boolean) => {
      if (typeof payload !== 'boolean') {
        throw new Error('onSwitch should be called with boolean parameter');
      }
      setState(payload);
    },
    [setState],
  );

  return {
    open: state,
    onToggle,
    onOpen,
    onClose,
    onSwitch,
  };
};

export default useToggle;
