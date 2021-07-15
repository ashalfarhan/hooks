import * as React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import WithUseToggle from '../../example/components/WithUseToggle';
import { useToggle } from '../../dist';
import OpenButton from '../../example/components/WithUseToggle/OpenButton';
import CloseButton from '../../example/components/WithUseToggle/CloseButton';
import ToggleButton from '../../example/components/WithUseToggle/ToggleButton';

jest.mock('../../example/components/WithUseToggle/OpenButton', () => jest.fn());
jest.mock('../../example/components/WithUseToggle/CloseButton', () =>
  jest.fn(),
);
jest.mock('../../example/components/WithUseToggle/ToggleButton', () =>
  jest.fn(),
);

jest.mock('../../dist', () => ({
  useToggle: jest.fn(),
}));

describe('useToggle usage', () => {
  afterEach(cleanup);

  beforeEach(() => {
    // @ts-ignore
    useToggle.mockImplementation(() => ({}));
    // @ts-ignore
    OpenButton.mockImplementation(() => null);
    // @ts-ignore
    CloseButton.mockImplementation(() => null);
    // @ts-ignore
    ToggleButton.mockImplementation(() => null);
  });

  describe('Default initial value', () => {
    it('should called properly', () => {
      render(<WithUseToggle />);
      expect(useToggle).toHaveBeenCalled();
    });

    it('should renders without crashing', () => {
      const { queryByTestId } = render(<WithUseToggle />);
      const heading = queryByTestId('hooks-heading');
      expect(heading?.textContent).toBe('useToggle');
    });

    it('should be false initial value', () => {
      const { queryByTestId } = render(<WithUseToggle />);
      const tester = queryByTestId('toggle-element');
      expect(tester).toBeFalsy();
    });

    it('Click Toggle', async () => {
      const { queryByTestId } = render(<WithUseToggle />);
      const tester = queryByTestId('toggle-element');
      const toggleButton = queryByTestId('toggle-button');
      if (toggleButton) {
        fireEvent.click(toggleButton);
        waitFor(() => {
          expect(tester).toBeInTheDocument();
        });
        fireEvent.click(toggleButton);
        waitFor(() => {
          expect(tester).not.toBeInTheDocument();
        });
      }
    });
  });

  describe('open, close and toggle functionality', () => {
    let onOpen: jest.Mock;
    let onToggle: jest.Mock;
    let onClose: jest.Mock;
    beforeEach(() => {
      onOpen = jest.fn();
      onClose = jest.fn();
      onToggle = jest.fn();
    });

    it('onOpen should be called', () => {
      // @ts-ignore
      useToggle.mockImplementation(() => ({
        onOpen,
      }));
      // @ts-ignore
      OpenButton.mockImplementation(({ onClick }) => (
        <button onClick={onClick} data-testid="open-button">
          Open
        </button>
      ));
      const { getByTestId } = render(<WithUseToggle />);
      fireEvent.click(getByTestId('open-button'));
      expect(onOpen).toHaveBeenCalled();
    });

    it('onClose should be called', () => {
      // @ts-ignore
      useToggle.mockImplementation(() => ({
        onClose,
      }));
      // @ts-ignore
      CloseButton.mockImplementation(({ onClick }) => (
        <button onClick={onClick} data-testid="close-button">
          Close
        </button>
      ));
      const { getByTestId } = render(<WithUseToggle />);
      fireEvent.click(getByTestId('close-button'));
      expect(onClose).toHaveBeenCalled();
    });

    it('onToggle should be called', () => {
      // @ts-ignore
      useToggle.mockImplementation(() => ({
        onToggle,
      }));
      // @ts-ignore
      ToggleButton.mockImplementation(({ onClick }) => (
        <button onClick={onClick} data-testid="toggle-button">
          Toggle
        </button>
      ));
      const { getByTestId } = render(<WithUseToggle />);
      fireEvent.click(getByTestId('toggle-button'));
      expect(onToggle).toHaveBeenCalled();
    });
  });

  it('should be appear because initial is true', () => {
    const open = true;
    // @ts-ignore
    useToggle.mockImplementation(() => ({
      open: open,
    }));
    const { queryByTestId } = render(<WithUseToggle initial={open} />);
    const tester = queryByTestId('toggle-element');
    expect(tester).toBeTruthy();
  });
});
