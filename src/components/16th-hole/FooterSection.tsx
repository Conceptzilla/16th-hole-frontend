"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterSection() {
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
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={rootRef} className={`sixteenth-footer${isVisible ? " is-visible" : ""}`}>
      <h2>A quieter way to belong.</h2>

      <div className="sixteenth-footer-clubs-shadow" aria-hidden="true">
        <img src="/assets/16th-hole/footer-clubs.png" alt="" />
      </div>
      <div className="sixteenth-footer-clubs" aria-hidden="true">
        <img src="/assets/16th-hole/footer-clubs.png" alt="" />
      </div>

      <nav className="sixteenth-footer-nav" aria-label="Footer navigation">
        <a href="#entrance">Entrance</a>
        <a href="#society">The society</a>
        <a href="#membership">Membership</a>
      </nav>

      <div className="sixteenth-footer-contact">
        <p>For considered matters:</p>
        <a href="mailto:hello@16thhole.club">hello@16thhole.club</a>
      </div>

      <div className="sixteenth-footer-meta">
        <p>© 16th hole Society</p>
        <p>Discretion &amp; Privacy</p>
      </div>
    </footer>
  );
}
