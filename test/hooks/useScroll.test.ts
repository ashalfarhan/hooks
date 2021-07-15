import { renderHook } from '@testing-library/react-hooks';
import { useScroll } from '../../dist';

describe('useScroll hook', () => {
  it('initial value', () => {
    const { result } = renderHook(() => useScroll());
    const expected = {
      scrolling: false,
      scrollTop: false,
      scrollBottom: false,
    };
    expect(result.current).toMatchObject(expected);
  });
});
