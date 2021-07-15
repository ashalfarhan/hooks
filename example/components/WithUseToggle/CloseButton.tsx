import * as React from 'react';

interface CloseButtonProps {
  onClick(): void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button onClick={onClick} data-testid="close-button">
      Close
    </button>
  );
};

export default CloseButton;
