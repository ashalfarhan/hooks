import { renderHook, suppressErrorOutput } from '@testing-library/react-hooks';
import { useFetch } from '../../dist';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('useFetch hook', () => {
  suppressErrorOutput();
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe('default usage', () => {
    it('should success with default usage', async () => {
      const response = [{ title: 'A Title' }];
      fetchMock.mockOnce(() => Promise.resolve(JSON.stringify(response)));
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch('https://jsonplaceholder.typicode.com/posts'),
      );
      await waitForNextUpdate();
      const expected = {
        success: true,
        error: null,
        loading: false,
        result: response,
        status: 'success',
      };
      expect(result.current).toMatchObject(expected);
    });

    it('should error with default usage', async () => {
      const response = 'Resource not found';
      fetchMock.mockReject(() => Promise.reject(response));
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetch('https://unknown.resource.213k1l32k.com/blob'),
      );
      await waitForNextUpdate();
      const expected = {
        success: false,
        error: response,
        loading: false,
        result: null,
        status: 'error',
      };
      expect(result.current).toMatchObject(expected);
    });

    it('should loading if it is with default usage', async () => {
      const response = [{ title: 'A Title' }];
      fetchMock.mockOnce(
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(JSON.stringify(response));
            }, 5000);
          }),
      );
      const { result, waitFor } = renderHook(() =>
        useFetch('https://lazy.resource.213k1l32k.com/blob'),
      );
      await waitFor(
        () => {
          const expected = {
            success: false,
            error: null,
            loading: true,
            result: null,
            status: 'loading',
          };
          expect(result.current).toMatchObject(expected);
        },
        { timeout: 2 },
      );
    });
  });
});
