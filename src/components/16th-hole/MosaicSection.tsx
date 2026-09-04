"use client";

import { useEffect, useRef, useState } from "react";

const mosaicImages = [
  { className: "swing", src: "/assets/16th-hole/mosaic-swing.png", alt: "A golfer completing a full swing on the course" },
  { className: "green-read", src: "/assets/16th-hole/mosaic-green-read.png", alt: "A golfer reading the green before a putt" },
  { className: "portrait-a", src: "/assets/16th-hole/mosaic-portrait-a.png", alt: "A golfer standing with a club on the fairway" },
  { className: "course-group", src: "/assets/16th-hole/mosaic-course-group.png", alt: "A small group of golfers gathered beside their bags" },
  { className: "lakeside", src: "/assets/16th-hole/mosaic-lakeside.png", alt: "Two golfers celebrating beside a lake" },
  { className: "drinks", src: "/assets/16th-hole/mosaic-drinks.png", alt: "Drinks and golf accessories arranged on the green" },
  { className: "putting", src: "/assets/16th-hole/mosaic-putting.png", alt: "Two golfers lining up a putt together" },
] as const;

function assignRandomDelays(cards: HTMLElement[]) {
  const order = cards.map((_, index) => index);

  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }

  order.forEach((cardIndex, rank) => {
    const jitter = Math.round(Math.random() * 110);
    cards[cardIndex].style.setProperty("--mosaic-delay", `${430 + rank * 92 + jitter}ms`);
  });
}

export default function MosaicSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;

    if (!node) return;

    assignRandomDelays(Array.from(node.querySelectorAll<HTMLElement>("[data-mosaic-card]")));

    if (!Reflect.has(window, "IntersectionObserver")) {
      const revealFrame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(revealFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className={`sixteenth-mosaic${isVisible ? " is-visible" : ""}`}
      aria-labelledby="mosaic-title"
    >
      <div className="sixteenth-mosaic-copy">
        <p className="sixteenth-mosaic-eyebrow">Not everything needs knowing</p>
        <h2 id="mosaic-title">
          Some parts are visible.
          <br />
          <em>Most are not.</em>
        </h2>
        <p className="sixteenth-mosaic-description">
          What defines the society is not access, but alignment — in mindset, conduct, and respect
          for the game and for others within it. Not everything needs to be known to be understood.
        </p>
      </div>

      <figure className="sixteenth-mosaic-card sixteenth-mosaic-card--hero" data-mosaic-card>
        <img src="/assets/16th-hole/mosaic-hero.png" alt="Golfers sharing a playful moment on the course" />
      </figure>

      <div className="sixteenth-mosaic-cluster" aria-label="Scenes from the society">
        {mosaicImages.map((image) => (
          <figure
            className={`sixteenth-mosaic-card sixteenth-mosaic-card--${image.className}`}
            data-mosaic-card
            key={image.className}
          >
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
}
