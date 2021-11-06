import { act, renderHook } from '@testing-library/react-hooks';
import { usePreviousValue } from '../src';

describe('usePreviousValue', () => {
  it('should be undefined at first', () => {
    const { result } = renderHook(usePreviousValue, { initialProps: '' });
    expect(result.current).toBeUndefined();
  });

  it('should be be working properly', async () => {
    const expected = 'should_be_this_value';
    const { result, rerender } = renderHook(usePreviousValue, {
      initialProps: '',
    });

    act(() => {
      rerender('not this');
    });

    act(() => {
      rerender(expected);
    });

    act(() => {
      rerender('also not this');
    });

    expect(result.current).toBe(expected);
  });
});
