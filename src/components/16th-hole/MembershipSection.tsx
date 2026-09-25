"use client";

import { useSectionReveal } from "./use-section-reveal";
import { ActionLink } from "./ui";

const membershipImages = [
  { className: "fairway-group", src: "/assets/16th-hole/membership-fairway-group.png", alt: "Members walking together across the fairway" },
  { className: "lakeside", src: "/assets/16th-hole/membership-lakeside.png", alt: "Two members together beside the lake" },
  { className: "walking", src: "/assets/16th-hole/membership-walking.png", alt: "Two members walking together after a round" },
  { className: "cart", src: "/assets/16th-hole/membership-cart.png", alt: "Members sharing a golf cart" },
  { className: "putting", src: "/assets/16th-hole/membership-putting.png", alt: "A golfer lining up a putt" },
] as const;

export default function MembershipSection() {
  const { rootRef, isVisible } = useSectionReveal({ staggerSelector: "[data-membership-card]", delayProperty: "--membership-delay", startDelay: 560, stepDelay: 105, jitter: 130 });

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
            <span className="membership-line">Membership in </span>
            <span className="membership-line">the 16th hole is </span>
            <span className="membership-line">not transactional. </span>
            <em><span className="membership-line">It is considered </span><span className="membership-line">over time.</span></em>
          </h2>
          <p className="sixteenth-membership-description">
            We do not seek volume, visibility, or growth for its own sake. Each member is admitted
            for compatibility — not status.
          </p>
          <ActionLink className="sixteenth-membership-cta" href="#people">Apply</ActionLink>
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
