import * as React from 'react';
import { useScroll } from '../../dist';

export default function WithUseScroll() {
  const { scrollBottom, scrollTop, scrolling } = useScroll();
  return (
    <div style={{ minHeight: '800px', flex: '1 1 40%' }}>
      <h1 data-testid="use-scroll-hooks-heading">useScroll</h1>
      <h2 style={{ marginTop: '200px' }} data-testid="state-scrolling">
        Is Scrolling: {scrolling.toString()}
      </h2>
      <h2 data-testid="state-scrollBottom">
        Is Scrolling to bottom: {scrollBottom.toString()}
      </h2>
      <h2 data-testid="state-scrollTop">
        Is Scrolling to top: {scrollTop.toString()}
      </h2>
      <span data-testid="bottom-stopper" style={{marginTop: "40px"}}/>
    </div>
  );
}
