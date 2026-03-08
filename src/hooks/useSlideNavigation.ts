import { useState, useEffect, useCallback, useRef } from "react";

interface UseSlideNavigationOptions {
  totalSlides: number;
}

export const useSlideNavigation = ({ totalSlides }: UseSlideNavigationOptions) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      if (clamped === current) return;
      setDirection(clamped > current ? "next" : "prev");
      setCurrent(clamped);
    },
    [current, totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        goTo(0);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goTo]);

  // Touch/swipe (horizontal only)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      // Only navigate if horizontal swipe is dominant
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

      if (dx < 0) next();
      else prev();
    },
    [next, prev]
  );

  return { current, direction, goTo, next, prev, onTouchStart, onTouchEnd };
};
