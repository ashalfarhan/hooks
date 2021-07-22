import { useCallback, useEffect, useState } from 'react';

interface UseGeoLocationState {
  isAllowed: boolean;
  isError: boolean;
  isLoading: boolean;
  error: GeolocationPositionError | null;
  location: GeolocationPosition | null;
}

interface UseGeolocationOptions {
  hookOptions?: {
    immediate?: boolean;
  };
  geoOptions?: PositionOptions;
}
/**
 *
 * Get geolocation access safely
 *
 * @param hookOptions - Optios for immediate ask on mounted.
 * @param geoOptions - Additional options to be passed in `getCurrentPosition`
 *
 * Return an array with the first element is the state `result`,
 * and the second element is a `function` to ask permission
 *
 * @example
 * ```tsx
 * const [{ isLoading }, askPermission] = useGeoLocation({ immediate: false });
 *
 * return (
 *  <button onClick={askPermission}>{isLoading ? "Loading ..." : "Enable Location"}</button>
 * )
 * ```
 */
const useGeoLocation = (options?: UseGeolocationOptions) => {
  const [state, setState] = useState<UseGeoLocationState>({
    isAllowed: false,
    isError: false,
    isLoading: false,
    error: null,
    location: null,
  });

  const askLocation = useCallback(() => {
    setState(prev => ({ ...prev, isLoading: true }));
    navigator.geolocation.getCurrentPosition(
      location => {
        console.log('Success get location');
        setState(prev => ({
          ...prev,
          location,
          isAllowed: true,
          isError: false,
          error: null,
          isLoading: false,
        }));
      },
      error => {
        setState(prev => ({
          ...prev,
          error,
          isError: true,
          isLoading: false,
          location: null,
        }));
        if (error.PERMISSION_DENIED === error.code) {
          console.log('Please allow this site to know your location');
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          console.log(
            "This browser doesn't support geolocation, use another browser",
          );
        } else if (error.code === error.TIMEOUT) {
          console.log('Timeout, please try again');
        }
      },
      options?.geoOptions,
    );
  }, [options?.geoOptions]);

  useEffect(() => {
    if (options?.hookOptions?.immediate) {
      askLocation();
    }
  }, [askLocation, options?.hookOptions]);

  return [state, askLocation] as const;
};

export default useGeoLocation;
