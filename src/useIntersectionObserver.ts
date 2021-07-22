import { useCallback, useEffect, useState } from 'react';

interface UseIntersectionObserverParams {
  target: Element | null;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({
  target,
  options,
}: UseIntersectionObserverParams) => {
  const [state, setState] = useState<Partial<IntersectionObserverEntry>>({});
  const handleObserve = useCallback(() => {
    if (target) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setState(entry);
        });
      }, options);
      observer.observe(target);
    }
  }, [target]);
  useEffect(() => {
    handleObserve();
  }, [handleObserve]);
  return state;
};

export default useIntersectionObserver;
