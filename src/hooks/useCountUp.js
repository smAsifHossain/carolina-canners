import { useEffect, useState } from 'react';

export default function useCountUp(target, enabled, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, enabled, target]);

  return count;
}
