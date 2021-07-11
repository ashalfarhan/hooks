import * as React from 'react';
import useScroll from '../dist';

const App = () => {
  const { scrollBottom, scrollTop, scrolling } = useScroll();
  return (
    <div
      style={{
        minHeight: '800000px',
      }}
    >
      <h2 style={{ marginTop: '200px' }}>
        Is Scrolling: {scrolling.toString()}
      </h2>
      <h2>Is Scrolling to bottom: {scrollBottom.toString()}</h2>
      <h2>Is Scrolling to top: {scrollTop.toString()}</h2>
    </div>
  );
};

export default App;
