"use client";

import { useEffect, useState } from "react";

const peopleImages = [
  {
    label: "Meet the circle",
    src: "/assets/16th-hole/people-coastal-course.png",
    alt: "Members crossing a coastal golf course",
  },
  {
    label: "Shared stories",
    src: "/assets/16th-hole/membership-fairway-group.png",
    alt: "Members sharing a round on the fairway",
  },
  {
    label: "Inside the community",
    src: "/assets/16th-hole/membership-cart.png",
    alt: "Members together in a golf cart",
  },
  {
    label: "Voices of the course",
    src: "/assets/16th-hole/membership-walking.png",
    alt: "Two members walking and talking on the course",
  },
] as const;

export default function PeopleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % peopleImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="sixteenth-people" id="people" aria-labelledby="people-title">
      <div className="sixteenth-people-heading">
        <p>The People</p>
        <h2 id="people-title">
          Familiar faces,
          <br />
          <em>different stories.</em>
        </h2>
      </div>

      <div className="sixteenth-people-copy">
        <article>
          <h3>Shared pace</h3>
          <p>
            They come from different paths, but move through the game in the same way. No one here
            plays to impress. Presence matters more than performance, and attention matters more
            than speed.
          </p>
        </article>
        <article>
          <h3>Conversation</h3>
          <p>
            What begins on the fairway continues long after the round. Stories replace scores.
            Listening becomes part of the ritual, and every voice finds its place without effort.
          </p>
        </article>
      </div>

      <div className="sixteenth-people-slider" aria-live="off">
        {peopleImages.map((image, index) => (
          <img
            className={index === activeIndex ? "is-active" : ""}
            src={image.src}
            alt={image.alt}
            key={image.label}
          />
        ))}
      </div>

      <div className="sixteenth-people-tabs" aria-label="People gallery">
        {peopleImages.map((image, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            key={image.label}
          >
            {image.label}
          </button>
        ))}
      </div>

      <div className="sixteenth-people-closing">
        <p>This is not a gathering of strangers.</p>
        <p>It is a circle that grows slowly, shaped by familiarity and trust rather than by numbers.</p>
      </div>
    </section>
  );
}
