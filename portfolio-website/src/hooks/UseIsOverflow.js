import { useLayoutEffect, useState } from "react";

// check when an element overflows
// credit: https://www.robinwieruch.de/react-custom-hook-check-if-overflow/

export const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = useState(undefined);

  useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
        if ('ResizeObserver' in window) {
            new ResizeObserver(trigger).observe(current);
        }

      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};