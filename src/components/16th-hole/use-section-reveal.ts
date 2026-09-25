"use client";

import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  threshold?: number;
  replay?: boolean;
  staggerSelector?: string;
  delayProperty?: string;
  startDelay?: number;
  stepDelay?: number;
  jitter?: number;
};

/** Shared section entry behavior; motion timing stays local to each composition. */
export function useSectionReveal({
  threshold = 0.14,
  replay = false,
  staggerSelector,
  delayProperty,
  startDelay = 0,
  stepDelay = 0,
  jitter = 0,
}: RevealOptions = {}) {
  const rootRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (staggerSelector && delayProperty) {
      const cards = Array.from(node.querySelectorAll<HTMLElement>(staggerSelector));
      for (let index = cards.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [cards[index], cards[swap]] = [cards[swap], cards[index]];
      }
      cards.forEach((card, rank) => card.style.setProperty(
        delayProperty,
        `${startDelay + rank * stepDelay + Math.round(Math.random() * jitter)}ms`,
      ));
    }

    if (!Reflect.has(window, "IntersectionObserver")) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || replay) setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !replay) observer.disconnect();
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, replay, staggerSelector, delayProperty, startDelay, stepDelay, jitter]);

  return { rootRef, isVisible };
}
