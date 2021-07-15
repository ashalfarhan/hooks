import * as React from 'react';

interface OpenButtonProps {
  onClick(): void;
}

const OpenButton = ({ onClick }: OpenButtonProps) => {
  return (
    <button onClick={onClick} data-testid="open-button">
      Open
    </button>
  );
};

export default OpenButton;
