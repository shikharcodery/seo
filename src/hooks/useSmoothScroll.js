import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || coarsePointer) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = null;
    let lastWheelAt = 0;
    let isAnimating = false;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const animate = () => {
      isAnimating = true;
      current += (target - current) * 0.085;

      if (Math.abs(target - current) < 0.35) {
        current = target;
        isAnimating = false;
        frame = null;
      } else {
        frame = requestAnimationFrame(animate);
      }

      window.scrollTo(0, current);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(animate);
    };

    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey) return;

      event.preventDefault();
      const multiplier = event.deltaMode === 1 ? 18 : 1;
      target = clamp(target + event.deltaY * multiplier, 0, maxScroll());
      lastWheelAt = performance.now();
      start();
    };

    const onKeyDown = (event) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;

      const moves = {
        ArrowDown: 90,
        ArrowUp: -90,
        PageDown: window.innerHeight * 0.85,
        PageUp: -window.innerHeight * 0.85,
        Home: -maxScroll(),
        End: maxScroll(),
        Space: event.shiftKey ? -window.innerHeight * 0.85 : window.innerHeight * 0.85,
      };

      if (!(event.key in moves)) return;
      event.preventDefault();
      target = clamp(target + moves[event.key], 0, maxScroll());
      start();
    };

    const syncScrollPosition = () => {
      if (isAnimating || performance.now() - lastWheelAt < 240) return;
      current = window.scrollY;
      target = window.scrollY;
    };

    const onSmoothScrollTo = (event) => {
      const top = Number(event.detail?.top ?? 0);
      target = clamp(top, 0, maxScroll());
      current = window.scrollY;
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", syncScrollPosition, { passive: true });
    window.addEventListener("resize", syncScrollPosition);
    window.addEventListener("northstar:smooth-scroll-to", onSmoothScrollTo);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", syncScrollPosition);
      window.removeEventListener("resize", syncScrollPosition);
      window.removeEventListener("northstar:smooth-scroll-to", onSmoothScrollTo);
    };
  }, []);
}
