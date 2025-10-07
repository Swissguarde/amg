import { useEffect, RefObject } from "react";

interface UseHorizontalScrollProps {
  wrapperRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
}

export const useHorizontalScroll = ({
  wrapperRef,
  trackRef,
}: UseHorizontalScrollProps) => {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    let raf = 0;

    const setHeights = () => {
      const vw = window.innerWidth;
      const totalWidth = track.scrollWidth;
      const maxX = Math.max(0, totalWidth - vw);

      const required = window.innerHeight + maxX;
      wrapper.style.height = `${required}px`;
    };

    const update = () => {
      const vw = window.innerWidth;
      const totalWidth = track.scrollWidth;
      const maxX = Math.max(0, totalWidth - vw);

      const start = wrapper.offsetTop;
      const end = start + wrapper.offsetHeight - window.innerHeight;
      const y = window.scrollY;
      const p = Math.min(
        Math.max((y - start) / Math.max(1, end - start), 0),
        1,
      );
      const x = p * maxX;

      track.style.transform = `translateX(-${x}px)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    const onResize = () => {
      setHeights();
      update();
    };

    setHeights();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [wrapperRef, trackRef]);
};
