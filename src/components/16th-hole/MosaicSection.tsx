"use client";

import { useSectionReveal } from "./use-section-reveal";

const mosaicImages = [
  { className: "swing", src: "/assets/16th-hole/mosaic-swing.png", alt: "A golfer completing a full swing on the course" },
  { className: "green-read", src: "/assets/16th-hole/mosaic-green-read.png", alt: "A golfer reading the green before a putt" },
  { className: "portrait-a", src: "/assets/16th-hole/mosaic-portrait-a.png", alt: "A golfer standing with a club on the fairway" },
  { className: "course-group", src: "/assets/16th-hole/mosaic-course-group.png", alt: "A small group of golfers gathered beside their bags" },
  { className: "lakeside", src: "/assets/16th-hole/mosaic-lakeside.png", alt: "Two golfers celebrating beside a lake" },
  { className: "drinks", src: "/assets/16th-hole/mosaic-drinks.png", alt: "Drinks and golf accessories arranged on the green" },
  { className: "putting", src: "/assets/16th-hole/mosaic-putting.png", alt: "Two golfers lining up a putt together" },
] as const;

export default function MosaicSection() {
  const { rootRef, isVisible } = useSectionReveal({ staggerSelector: "[data-mosaic-card]", delayProperty: "--mosaic-delay", startDelay: 430, stepDelay: 92, jitter: 110 });

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
