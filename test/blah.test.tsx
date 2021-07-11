import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../example/App';

describe('it', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    const wrapper = root.children[0];
    expect(wrapper.children[0].innerHTML).toContain('false');
  });
});
