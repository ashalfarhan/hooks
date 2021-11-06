import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../src';

afterEach(cleanup);

describe('useToggle hook', () => {
  describe('open value', () => {
    it('given the default value', () => {
      const { result } = renderHook(useToggle);
      expect(result.current.open).toBe(false);
      expect(typeof result.current.open).toBe('boolean');
    });

    it('should given the custom value', () => {
      const { result } = renderHook(useToggle, { initialProps: true });
      expect(result.current.open).toBe(true);
      expect(typeof result.current.open).toBe('boolean');
    });
  });

  describe('onToggle functionality', () => {
    it('should be true if toggle once', () => {
      const { result } = renderHook(useToggle);
      act(result.current.onToggle);
      expect(result.current.open).toBe(true);
    });

    it('should be false if toggle twice', () => {
      const { result } = renderHook(useToggle);
      act(() => {
        result.current.onToggle();
        result.current.onToggle();
      });
      expect(result.current.open).toBe(false);
    });

    it('should be false if initial is true', () => {
      const { result } = renderHook(useToggle, { initialProps: true });
      act(result.current.onToggle);
      expect(result.current.open).toBe(false);
    });

    it('should be true if toggle more then twice', () => {
      const { result } = renderHook(useToggle);
      act(() => {
        result.current.onToggle();
        result.current.onToggle();
        result.current.onToggle();
      });
      expect(result.current.open).toBe(true);
    });
  });

  describe('onOpen functionality', () => {
    it('should be true if initial is default', () => {
      const { result } = renderHook(useToggle);
      act(result.current.onOpen);
      expect(result.current.open).toBe(true);
    });

    it('should be still if called more than once', () => {
      const { result } = renderHook(useToggle);
      act(() => {
        result.current.onOpen();
        result.current.onOpen();
      });
      expect(result.current.open).toBe(true);

      act(() => {
        result.current.onOpen();
        result.current.onOpen();
        result.current.onOpen();
        result.current.onOpen();
        result.current.onOpen();
      });
      expect(result.current.open).toBe(true);
    });
  });

  describe('onClose functionality', () => {
    it('should be still if called more than once and use default value', () => {
      const { result } = renderHook(useToggle);
      act(result.current.onClose);
      expect(result.current.open).toBe(false);
      act(() => {
        result.current.onClose();
        result.current.onClose();
        result.current.onClose();
        result.current.onClose();
      });
      expect(result.current.open).toBe(false);
    });
    it('should be false if called when initial value is true', () => {
      const { result } = renderHook(useToggle, { initialProps: true });
      act(result.current.onClose);
      expect(result.current.open).toBe(false);
      act(() => {
        result.current.onClose();
        result.current.onClose();
        result.current.onClose();
        result.current.onClose();
      });
      expect(result.current.open).toBe(false);
    });
  });

  describe('onSwitch functionality', () => {
    it('should return the given value with default initial value', () => {
      const { result } = renderHook(useToggle);
      act(() => {
        result.current.onSwitch(true);
      });
      expect(result.current.open).toBe(true);
    });

    it('should return the given value with custom initial value', () => {
      const { result } = renderHook(useToggle, { initialProps: true });
      act(() => {
        result.current.onSwitch(false);
      });
      expect(result.current.open).toBe(false);
    });
  });
});
