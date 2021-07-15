import * as React from 'react';
import { useToggle } from '../../../dist';
import OpenButton from './OpenButton';
import CloseButton from './CloseButton';
import ToggleButton from './ToggleButton';

export default function WithUseToggle({ initial = true }) {
  const { open, onClose, onToggle, onOpen } = useToggle(initial);
  return (
    <div style={{ flex: '1 1 40%' }}>
      <h1 data-testid="hooks-heading">useToggle</h1>
      <div
        style={{
          minHeight: '40px',
          backgroundColor: 'darkcyan',
          color: 'white',
          padding: '2rem 4rem',
        }}
      >
        {open && <p data-testid="toggle-element">My Element</p>}
      </div>
      <ToggleButton onClick={onToggle} />
      <OpenButton onClick={onOpen} />
      <CloseButton onClick={onClose} />
    </div>
  );
}
