import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}

export default SmoothScrollWrapper;
