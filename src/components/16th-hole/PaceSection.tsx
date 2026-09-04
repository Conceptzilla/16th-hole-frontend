"use client";

import { useEffect, useRef, useState } from "react";

const morningPath =
  "M1.00018 456C27.4998 315.5 229.161 97.3395 463.5 1.00026";
const afternoonPath =
  "M0.50009 610.5C26.9997 470 228.661 251.839 463 155.5C778 26 923.499 16.9584 1271.5 0.50001";

export default function PaceSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;

    if (!node) return;

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
      { threshold: 0.16 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className={`sixteenth-pace${isVisible ? " is-visible" : ""}`}
      aria-labelledby="pace-title"
    >
      <div className="sixteenth-pace-copy">
        <p className="sixteenth-pace-eyebrow">The Pace</p>
        <h2 id="pace-title">
          Nothing here is rushed.
          <br />
          <em>Including people.</em>
        </h2>
        <p className="sixteenth-pace-description">
          Every meeting is special.
          <br />
          Every participant is unique.
        </p>
      </div>

      <img
        className="sixteenth-pace-orbit sixteenth-pace-orbit--main"
        src="/assets/16th-hole/pace-orbit-main.svg"
        alt=""
      />
      <img
        className="sixteenth-pace-orbit sixteenth-pace-orbit--inner"
        src="/assets/16th-hole/pace-orbit-inner.svg"
        alt=""
      />

      <div className="sixteenth-pace-moment sixteenth-pace-moment--morning">
        <h3>Morning</h3>
        <p>The day opens slowly.</p>
      </div>
      <div className="sixteenth-pace-moment sixteenth-pace-moment--afternoon">
        <h3>Afternoon</h3>
        <p>Nothing is rushed.</p>
      </div>

      <figure className="sixteenth-pace-photo sixteenth-pace-photo--morning">
        <img src="/assets/16th-hole/pace-morning-photo.png" alt="Members walking together in morning light" />
      </figure>
      <figure className="sixteenth-pace-photo sixteenth-pace-photo--afternoon">
        <img src="/assets/16th-hole/pace-afternoon-photo.png" alt="Golfers crossing an afternoon green" />
      </figure>

      <img
        className="sixteenth-pace-sun-final sixteenth-pace-sun-final--morning"
        src="/assets/16th-hole/pace-sun-morning.svg"
        alt=""
      />
      <img
        className="sixteenth-pace-sun-final sixteenth-pace-sun-final--afternoon"
        src="/assets/16th-hole/pace-sun-afternoon.svg"
        alt=""
      />

      {isVisible ? (
        <>
          <svg
            className="sixteenth-pace-sun-motion sixteenth-pace-sun-motion--morning"
            viewBox="0 0 464.5 457"
            aria-hidden="true"
          >
            <g>
              <image href="/assets/16th-hole/pace-sun-morning.svg" x="-14" y="-14" width="28" height="28" />
              <animateMotion
                path={morningPath}
                dur="1.82s"
                keyPoints="0;0.71206"
                keyTimes="0;1"
                keySplines="0.22 1 0.36 1"
                calcMode="spline"
                fill="freeze"
              />
            </g>
          </svg>
          <svg
            className="sixteenth-pace-sun-motion sixteenth-pace-sun-motion--afternoon"
            viewBox="0 0 1272 611"
            aria-hidden="true"
          >
            <g opacity="0">
              <image href="/assets/16th-hole/pace-sun-afternoon.svg" x="-12" y="-12" width="24" height="24" />
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="0.16s"
                dur="0.01s"
                fill="freeze"
              />
              <animateMotion
                path={afternoonPath}
                begin="0.16s"
                dur="2.02s"
                keyPoints="0;0.70853"
                keyTimes="0;1"
                keySplines="0.22 1 0.36 1"
                calcMode="spline"
                fill="freeze"
              />
            </g>
          </svg>
        </>
      ) : null}
    </section>
  );
}
