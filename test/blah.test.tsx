import * as React from 'react';
import App from '../example/App';
import { render } from '@testing-library/react';

describe('Dummy Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
