import { useState, useCallback, useEffect } from 'react';

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);
  const [sectionTwoOffset, setSectionTwoOffset] = useState(2);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      //when it's small
      setTargetReached(true);
    } else {
      //when it's big
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

//  const isBreakpoint = useMediaQuery(768)
