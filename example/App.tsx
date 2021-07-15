import * as React from 'react';
import WithUseFetch from './components/WithUseFetch';
import WithUseScroll from './components/WithUseScroll';
import WithUseToggle from './components/WithUseToggle';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <WithUseScroll />
        <WithUseToggle />
      </div>
      <WithUseFetch />
    </div>
  );
};

export default App;
