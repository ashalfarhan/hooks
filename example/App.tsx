import * as React from 'react';
import { useDebouncedValue } from '../dist';
import WithUseToggle from './components/WithUseToggle';

const App = () => {
  const [count, setCount] = React.useState(0);
  const debouncedCount = useDebouncedValue(count,1000);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <WithUseToggle />
      </div>

      <h1>Count: {debouncedCount}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Inc</button>
    </div>
  );
};

export default App;
