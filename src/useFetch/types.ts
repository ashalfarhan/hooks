type FetchStatus = 'loading' | 'error' | 'success' | 'idle';

export interface UseFetchState<D> {
  status: FetchStatus;
  loading: boolean;
  error: Error | any | null;
  success: boolean;
  result: D | null;
}

export interface UseFetchReturn<
  IResult,
  ISuccess extends boolean = boolean,
  IStatus extends FetchStatus = FetchStatus
> {
  status: IStatus;
  loading: boolean;
  error: Error | any | null;
  success: ISuccess;
  result: ISuccess extends true
    ? IResult
    : IStatus extends 'success'
    ? IResult
    : null;
}

interface FetchSuccess<D> {
  status: FetchStatus;
  loading: boolean;
  error: null;
  success: boolean;
  result: D;
}

interface FetchFailed {
  status: FetchStatus;
  loading: boolean;
  error: Error | any;
  success: boolean;
  result: null;
}

export type UseFetchOptions = Omit<RequestInit, 'method'>;

export type UseFetchSuccess<D> = UseFetchState<D>['success'] extends true
  ? FetchSuccess<D>
  : FetchFailed;
