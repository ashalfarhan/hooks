import { useState } from 'react';

/**
 * Toggle Hooks
 *
 * @param initial - Initial value of toggle internal state
 * @returns open - Internal state
 * @returns onToggle - Function to toggle internal state
 * @returns onOpen - Set toggle internal state to true
 * @returns onClose - Set toggle internal state to false
 * @returns onSwitch - Set toggle internal state with payload
 * @see https://github.com/ashalfarhan/hooks#-usetoggle
 *
 */
export function useToggle(initial = false) {
  const [state, setState] = useState(initial);

  const onToggle = () => {
    setState((prev) => !prev);
  };

  const onOpen = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  return {
    open: state,
    onToggle,
    onOpen,
    onClose,
    onSwitch: setState,
  };
}
