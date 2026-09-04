"use client";

import { useEffect, useRef, useState } from "react";

const membershipImages = [
  { className: "fairway-group", src: "/assets/16th-hole/membership-fairway-group.png", alt: "Members walking together across the fairway" },
  { className: "lakeside", src: "/assets/16th-hole/membership-lakeside.png", alt: "Two members together beside the lake" },
  { className: "walking", src: "/assets/16th-hole/membership-walking.png", alt: "Two members walking together after a round" },
  { className: "cart", src: "/assets/16th-hole/membership-cart.png", alt: "Members sharing a golf cart" },
  { className: "putting", src: "/assets/16th-hole/membership-putting.png", alt: "A golfer lining up a putt" },
] as const;

function assignRandomDelays(cards: HTMLElement[]) {
  const order = cards.map((_, index) => index);

  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }

  order.forEach((cardIndex, rank) => {
    const jitter = Math.round(Math.random() * 130);
    cards[cardIndex].style.setProperty("--membership-delay", `${560 + rank * 105 + jitter}ms`);
  });
}

export default function MembershipSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;

    if (!node) return;

    assignRandomDelays(Array.from(node.querySelectorAll<HTMLElement>("[data-membership-card]")));

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
      className={`sixteenth-membership${isVisible ? " is-visible" : ""}`}
      id="membership"
      aria-labelledby="membership-title"
    >
      <div className="sixteenth-membership-stage">
        <div className="sixteenth-membership-copy">
          <p className="sixteenth-membership-eyebrow">Membership</p>
          <h2 id="membership-title">
            Membership in the 16th hole is not transactional. <em>It is considered over time.</em>
          </h2>
          <p className="sixteenth-membership-description">
            We do not seek volume, visibility, or growth for its own sake. Each member is admitted
            for compatibility — not status.
          </p>
          <a className="sixteenth-membership-cta" href="#people">
            <span>Apply</span>
          </a>
        </div>

        {membershipImages.map((image) => (
          <figure
            className={`sixteenth-membership-card sixteenth-membership-card--${image.className}`}
            data-membership-card
            key={image.className}
          >
            <div className="sixteenth-membership-card-tilt">
              <div className="sixteenth-membership-card-frame">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
