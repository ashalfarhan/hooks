import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import WithUseFetch from '../../example/components/WithUseFetch';
import { useFetch } from '../../dist';

jest.mock('../../dist', () => ({
  useFetch: jest.fn(),
}));

describe('useFetch usage', () => {
  afterEach(cleanup);

  beforeEach(() => {
    // @ts-ignore
    useFetch.mockImplementation(() => ({}));
  });

  it('should be called properly', () => {
    // @ts-ignore
    useFetch.mockImplementation(() => ({}));
    render(<WithUseFetch />);
    expect(useFetch).toHaveBeenCalled();
  });

  it('renders without crashing', async () => {
    const { findByTestId } = render(<WithUseFetch />);
    const heading = await findByTestId('hooks-heading');
    expect(heading.textContent).toBe('useFetch');
  });

  it('should loading when first', () => {
    // @ts-ignore
    useFetch.mockImplementation(() => ({
      loading: true,
    }));
    const { queryByTestId } = render(<WithUseFetch />);
    const loading = queryByTestId('loading-text');
    const error = queryByTestId('error-text');
    expect(loading).toBeTruthy();
    expect(error).toBeFalsy();
  });

  it('should give an error message', () => {
    // @ts-ignore
    useFetch.mockImplementation(() => ({
      loading: false,
      error: Error('Something went wrong'),
    }));
    const { queryByTestId } = render(<WithUseFetch />);
    const error = queryByTestId('error-text');
    const loading = queryByTestId('loading-text');
    expect(error).toBeTruthy();
    expect(loading).toBeFalsy();
  });

  it('Success fetching', () => {
    // @ts-ignore
    useFetch.mockImplementation(() => ({
      loading: false,
      error: null,
      success: true,
      result: [
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
        { title: 'Something' },
      ],
    }));
    const { queryAllByTestId } = render(<WithUseFetch />);
    const nodes = queryAllByTestId('result-nodes');
    expect(nodes.length).toBe(10);
  });
});
