"use client";

import { useSectionReveal } from "./use-section-reveal";
import { NavLink, sectionLinks } from "./ui";

export default function FooterSection() {
  const { rootRef, isVisible } = useSectionReveal({ threshold: 0.18 });

  return (
    <footer ref={rootRef} className={`sixteenth-footer${isVisible ? " is-visible" : ""}`}>
      <h2>A quieter way to belong.</h2>

      <div className="sixteenth-footer-clubs-shadow" aria-hidden="true">
        <img src="/assets/16th-hole/footer-clubs.png" alt="" />
      </div>
      <div className="sixteenth-footer-clubs" aria-hidden="true">
        <img src="/assets/16th-hole/footer-clubs.png" alt="" />
      </div>

      <div className="sixteenth-footer-details">
      <nav className="sixteenth-footer-nav" aria-label="Footer navigation">
        {sectionLinks.map(link => <NavLink key={link.href} variant="footer" href={link.href}>{link.label}</NavLink>)}
      </nav>

      <div className="sixteenth-footer-contact">
        <p>For considered matters:</p>
        <a href="mailto:hello@16thhole.club">hello@16thhole.club</a>
      </div>

      <div className="sixteenth-footer-meta">
        <p>© 16th hole Society</p>
        <p>Discretion &amp; Privacy</p>
      </div>
      </div>
    </footer>
  );
}
