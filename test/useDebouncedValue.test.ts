import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useDebouncedValue } from '../src';

afterEach(cleanup);

describe('useDebouncedValue', () => {
  it('should given initial value', () => {
    const { result } = renderHook(useDebouncedValue, {
      initialProps: '',
    });
    expect(result.current).toBe('');
  });

  it('should working properly', async () => {
    const { rerender, result, waitForNextUpdate } = renderHook(
      useDebouncedValue,
      { initialProps: '' },
    );
    const expected = 'something';

    rerender(expected);
    // Initial
    expect(result.current).toBe('');

    // Wait for the timeout ends
    await waitForNextUpdate();
    expect(result.current).toBe(expected);
  });

  it("shouldn't change the value before timeout", async () => {
    jest.useFakeTimers();
    const { rerender, result } = renderHook(
      (v: string) => {
        return useDebouncedValue(v, 500);
      },
      { initialProps: '' },
    );
    const expected = 'something';

    rerender(expected);
    // Initial
    expect(result.current).toBe('');

    // When reach 200, should not changed
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('');

    // Then reach the timeout
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(result.current).toBe(expected);
  });
});
