import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export const sectionLinks = [
  { href: "#entrance", label: "Entrance" },
  { href: "#society", label: "The society" },
  { href: "#membership", label: "Membership" },
] as const;

/** Figma: Button / CTA. Interaction states are native CSS pseudo-classes. */
export function ActionLink({ className = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={`sixteenth-cta ${className}`} data-component="action-link"><span>{children}</span></a>;
}

/** Figma: Navigation / Link. Footer typography is a contextual variant. */
export function NavLink({ variant = "header", className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "header" | "footer" }) {
  return <a {...props} className={`${variant === "header" ? "sixteenth-text-link" : "sixteenth-footer-link"} ${className}`} data-component="nav-link" />;
}

/** Figma: Navigation / Header, Viewport=Desktop|Mobile. */
export function SiteHeader() {
  return (
    <header className="sixteenth-header" aria-label="Main navigation">
      <nav className="sixteenth-nav" aria-label="Club sections">
        {sectionLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
      </nav>
      <a className="sixteenth-mark" href="#entrance" aria-label="16th Hole home">
        <img src="/assets/16th-hole/wordmark.svg" alt="" width={45.113} height={43.864} />
      </a>
      <span className="sixteenth-menu" aria-hidden="true">
        <img src="/assets/16th-hole/menu-glyph.svg" alt="" width={44} height={44} />
      </span>
    </header>
  );
}

/** Figma: Navigation / People link, Selected=False|True. */
export function PeopleLink({ selected, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return <button {...props} type="button" className={selected ? "is-active" : ""} aria-pressed={selected} data-component="people-link">{children}</button>;
}

export type RitualStatus = "pending" | "active" | "complete";

/** Figma: Content / Ritual card, Status=Pending|Active|Complete. */
export function RitualCard({ status, title, description, schedule, progressKey, onClick }: {
  status: RitualStatus;
  title: string;
  description: ReactNode;
  schedule: string;
  progressKey: string;
  onClick: () => void;
}) {
  return (
    <button className="sixteenth-ritual-stage" data-status={status} data-component="ritual-card" type="button" aria-pressed={status === "active"} onClick={onClick}>
      <span className="sixteenth-ritual-stage-track" aria-hidden="true"><span key={progressKey} /></span>
      <span className="sixteenth-ritual-stage-content">
        <strong>{title}</strong><span>{description}</span><small>{schedule}</small>
      </span>
    </button>
  );
}
