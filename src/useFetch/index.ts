import * as React from 'react';
import { UseFetchReturn, UseFetchOptions, UseFetchState } from './types';

/**
 *
 * Fetch a resource immediately after component mounted
 *
 * @param {string} url - Url to be fetch
 * @param {RequestInit} options - Fetch options | RequestInit type
 * @returns {boolean} loading - True if fetching
 * @returns {boolean} success - True if fetch success
 * @returns {boolean} error - Null if the fetch success
 * @returns {boolean} status - Fetch Status
 * @returns {any} result - Fetch Result
 * @see https://github.com/ashalfarhan/hooks#-usefetch
 *
 */

function useFetch<IFetchResult = any>(
  url: string,
  options?: UseFetchOptions,
): UseFetchReturn<IFetchResult> {
  const [state, setState] = React.useState<UseFetchState<IFetchResult>>({
    status: 'idle',
    loading: false,
    error: null,
    success: false,
    result: null,
  });
  const execute = React.useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, status: 'loading' }));
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const json: IFetchResult = await response.json();
        setState(prev => ({
          ...prev,
          status: 'success',
          success: true,
          loading: false,
          result: json,
          error: null,
        }));
        return;
      }
      throw new Error(
        `Bad Request: ${response.status} in ${response.url}, Reason: ${response.statusText}`,
      );
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: 'error',
        error,
        loading: false,
        success: false,
        result: null,
      }));
    }
  }, [url, options]);
  React.useEffect(() => {
    execute();
  }, [execute, options]);
  return {
    ...state,
  };
}

export default useFetch;
