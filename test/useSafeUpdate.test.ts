import { act, renderHook } from '@testing-library/react-hooks';
import { useSafeUpdate } from '../src';

describe('useSafeUpdate', () => {
  it('should working properly', () => {
    const callback = jest.fn();
    const { result } = renderHook(useSafeUpdate, { initialProps: callback });

    act(() => {
      result.current();
    });

    expect(callback).toHaveBeenCalled();
  });

  it("shouldn't be called when accidently component unmounted", () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(useSafeUpdate, {
      initialProps: callback,
    });

    unmount();

    act(() => {
      result.current();
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
