import * as React from 'react';

interface ToggleButtonProps {
  onClick(): void;
}

const ToggleButton = ({ onClick }: ToggleButtonProps) => {
  return (
    <button onClick={onClick} data-testid="toggle-button">
      Toggle
    </button>
  );
};

export default ToggleButton;
