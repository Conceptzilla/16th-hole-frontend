"use client";

import { useEffect, useState } from "react";
import { useSectionReveal } from "./use-section-reveal";
import { RitualCard } from "./ui";

const stageDuration = 5000;

const ritualStages = [
  {
    eyebrow: "Rituals",
    headline: "Not events. Not competitions.",
    emphasis: "Rituals practiced with intention.",
    title: "Dawn tee times",
    description:
      "The course at first light. No words spoken until the 9th hole. The fog is part of the ceremony.",
    schedule: "Year-round, weekly",
    image: "/assets/16th-hole/rituals-dawn.jpg",
  },
  {
    eyebrow: "The long turn",
    headline: "A slow round with a pause at the turn.",
    emphasis: "The second nine shifts.",
    title: "The long turn",
    description: "A slow round with a pause at the turn. Coffee, shared notes. The second nine shifts.",
    schedule: "Every game",
    image: "/assets/16th-hole/gallery-inner-right.jpg",
  },
  {
    eyebrow: "The closing round",
    headline: "Played at day’s edge.",
    emphasis: "Stories replace scores.",
    title: "The closing round",
    description: "Played at day’s edge. Stories replace scores. Drinks after the final putt.",
    schedule: "Every Sunday",
    image: "/assets/16th-hole/mosaic-hero.png",
  },
] as const;

export default function RitualsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { rootRef, isVisible } = useSectionReveal({ threshold: 0.28, replay: true });

  useEffect(() => {
    if (!isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % ritualStages.length);
    }, stageDuration);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isVisible]);

  const activeStage = ritualStages[activeIndex];

  return (
    <section
      ref={rootRef}
      className={`sixteenth-rituals${isVisible ? " is-visible" : ""}`}
      aria-labelledby="rituals-title"
    >
      <div className="sixteenth-rituals-backgrounds" aria-hidden="true">
        {ritualStages.map((stage, index) => (
          <img className={index === activeIndex ? "is-active" : ""} src={stage.image} alt="" key={stage.title} />
        ))}
      </div>
      <div className="sixteenth-rituals-shade" />

      <div className="sixteenth-rituals-copy" key={activeIndex} aria-live="polite">
        <p>{activeStage.eyebrow}</p>
        <h2 id="rituals-title">
          {activeStage.headline}
          <br />
          <em>{activeStage.emphasis}</em>
        </h2>
      </div>

      <div className="sixteenth-rituals-stages" aria-label="Ritual stages">
        {ritualStages.map((stage, index) => {
          const status = index < activeIndex ? "complete" : index === activeIndex ? "active" : "pending";

          return (
            <RitualCard
              status={status}
              title={stage.title}
              description={stage.description}
              schedule={stage.schedule}
              progressKey={`${activeIndex}-${index}`}
              onClick={() => setActiveIndex(index)}
              key={stage.title}
            />
          );
        })}
      </div>
    </section>
  );
}
