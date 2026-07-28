import SerialCheck from "./SerialCheck";
import inspectionSeal from "../assets/inspection-seal.svg";
import { SITE } from "../site";
import "../styles/components/Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-inner container">
        <h1 className="hero-title">
          Is your <span className="accent">Alluvi</span> fake?
        </h1>
        <p className="hero-sub">
          A quick guide to verifying genuine Alluvi packaging and security details.
        </p>
        <p className="hero-meta">Packaging &amp; Security Update &mdash; our current authenticity standard.</p>

        <a href={SITE.officialDomain} target="_blank" rel="noopener noreferrer" className="btn btn-ghost hero-cta">
          Visit alluvi.bz
        </a>

        <SerialCheck />

        <img
          src={inspectionSeal}
          alt="Alluvi inspection seal stamp"
          className="hero-stamp"
          data-connector="target-fallback"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
