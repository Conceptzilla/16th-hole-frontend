import localFont from "next/font/local";
import FooterSection from "@/components/16th-hole/FooterSection";
import MembershipSection from "@/components/16th-hole/MembershipSection";
import MosaicSection from "@/components/16th-hole/MosaicSection";
import PaceSection from "@/components/16th-hole/PaceSection";
import PeopleSection from "@/components/16th-hole/PeopleSection";
import RitualsSection from "@/components/16th-hole/RitualsSection";
import SettingCopy from "@/components/16th-hole/SettingCopy";
import { gallery } from "@/components/16th-hole/content";

const display = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/BigDailyShort-Regular-Trial.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/BigDailyShort-Italic-Trial.otf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-sixteenth-display",
});

const sans = localFont({
  display: "swap",
  src: "./fonts/InterTight-Variable-Latin.woff2",
  variable: "--font-sixteenth-sans",
  weight: "400 800",
});

export default function HomePage() {
  return (
    <main className={`${display.variable} ${sans.variable} sixteenth-page`}>
      <header aria-label="Main navigation" className="sixteenth-header">
        <nav aria-label="Club sections" className="sixteenth-nav">
          <a className="sixteenth-text-link" href="#entrance">
            Entrance
          </a>
          <a className="sixteenth-text-link" href="#society">
            The society
          </a>
          <a className="sixteenth-text-link" href="#membership">
            Membership
          </a>
        </nav>

        <a aria-label="16th Hole home" className="sixteenth-mark" href="#entrance">
          <span className="sixteenth-mark-number">
            16<span>th</span>
          </span>
          <span className="sixteenth-mark-word">Hole</span>
        </a>

        <a
          aria-label="Go to membership"
          className="sixteenth-menu"
          href="#membership"
        >
          <img alt="" src="/assets/16th-hole/menu-icon.svg" />
        </a>
      </header>

      <section className="sixteenth-hero" id="entrance">
        <p className="sixteenth-eyebrow">Private members club</p>
        <h1>
          Private, <em>not distant</em>.
          <br />
          The calm side of belonging.
        </h1>
        <a className="sixteenth-cta" href="#society">
          <span>Approach the club</span>
        </a>
      </section>

      <section aria-label="Life at 16th Hole" className="sixteenth-gallery">
        {gallery.map((image) => (
          <figure
            className={`sixteenth-card sixteenth-card--${image.position}`}
            key={image.position}
          >
            <img alt={image.alt} src={image.src} />
          </figure>
        ))}
      </section>

      <section
        aria-labelledby="setting-label"
        className="sixteenth-setting"
        id="society"
      >
        <SettingCopy />
      </section>

      <div className="sixteenth-after-setting">
        <MosaicSection />
        <PaceSection />
        <MembershipSection />
        <PeopleSection />
        <RitualsSection />
        <FooterSection />
      </div>
    </main>
  );
}
