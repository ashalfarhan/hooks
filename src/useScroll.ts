import * as React from 'react';

/**
 *
 * Detect scroll event from user
 *
 * @returns {boolean} scrolling - Detect user scrolling to bottom
 * @returns {boolean} scrollTop - Detect user scrolling to bottom
 * @returns {boolean} scrollBottom  - Detect user scrolling to top
 * @see https://github.com/ashalfarhan/hooks#-usescroll
 *
 */
const useScroll = () => {
  const [scrollTop, setScrollTop] = React.useState(false);
  const [scrollBottom, setScrollBottom] = React.useState(false);
  const prevScrollPos = React.useRef(0);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const bodyOffset = document.body.getBoundingClientRect();
        if (prevScrollPos.current > bodyOffset.top) {
          setScrollTop(false);
          setScrollBottom(true);
        } else {
          setScrollTop(true);
          setScrollBottom(false);
        }
        prevScrollPos.current = bodyOffset.top;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return;
  }, []);
  return { scrolling: scrollBottom, scrollTop, scrollBottom };
};

export default useScroll;
