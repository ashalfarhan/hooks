import { useEffect, useState } from 'react';

interface ClientState {
  userAgent?: string;
  product?: string;
  vendor?: string;
  platform?: string;
  language?: string;
  languages: readonly string[];
  doNotTrack: null | string;
  cookieEnabled: boolean;
  onLine: boolean;
}
/**
 * Get the client's browser state
 *
 * Return some variables in the `navigator` object
 *
 * @example
 * ```tsx
 * const { onLine } = useClient();
 * // ...do something with `onLine`
 * ```
 */
const useClient = () => {
  const [state, setState] = useState<ClientState>({
    userAgent: undefined,
    product: undefined,
    vendor: undefined,
    platform: undefined,
    language: undefined,
    languages: [],
    doNotTrack: null,
    cookieEnabled: false,
    onLine: false,
  });
  useEffect(() => {
    setState(prev => {
      const {
        userAgent,
        product,
        language,
        languages,
        doNotTrack,
        cookieEnabled,
        platform,
        vendor,
        onLine,
      } = navigator;
      return {
        ...prev,
        userAgent,
        product,
        languages,
        language,
        doNotTrack,
        onLine,
        cookieEnabled,
        platform,
        vendor,
      };
    });
  }, []);
  return { ...state };
};

export default useClient;
