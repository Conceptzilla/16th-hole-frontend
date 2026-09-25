import localFont from "next/font/local";
import DemoNotice from "@/components/common/DemoNotice";
import FooterSection from "@/components/16th-hole/FooterSection";
import MembershipSection from "@/components/16th-hole/MembershipSection";
import MosaicSection from "@/components/16th-hole/MosaicSection";
import PaceSection from "@/components/16th-hole/PaceSection";
import PeopleSection from "@/components/16th-hole/PeopleSection";
import RitualsSection from "@/components/16th-hole/RitualsSection";
import SettingCopy from "@/components/16th-hole/SettingCopy";
import { gallery } from "@/components/16th-hole/content";
import { ActionLink, SiteHeader } from "@/components/16th-hole/ui";

const display = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/Newsreader-Variable.ttf",
      style: "normal",
      weight: "200 800",
    },
    {
      path: "./fonts/Newsreader-Italic-Variable.ttf",
      style: "italic",
      weight: "200 800",
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
      <DemoNotice />
      <SiteHeader />

      <section className="sixteenth-hero" id="entrance">
        <p className="sixteenth-eyebrow">Private members club</p>
        <h1>
          Private, <em>not distant</em>.
          <br />
          The calm side of belonging.
        </h1>
        <ActionLink href="#society">Approach the club</ActionLink>
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
