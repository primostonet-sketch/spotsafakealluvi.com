import FeatureCard from "./FeatureCard";
import Connector from "./Connector";
import packagingReference from "../assets/packaging-reference.svg";
import inspectionSeal from "../assets/inspection-seal.svg";
import { SITE } from "../site";
import "../styles/components/Showcase.css";

export default function Showcase() {
  return (
    <section className="showcase" id="features" aria-label="Packaging and security update">
      <div className="showcase-head container">
        <h2>
          Packaging &amp; <span className="accent">Security</span> update
        </h2>
        <p>
          A few quick checks to confirm you have a genuine Alluvi product. If any item fails,
          stop and contact us before use.
        </p>
      </div>

      <div className="showcase-grid container">
        <div className="showcase-col showcase-col-left">
          <FeatureCard
            num="01"
            title="No More Shrink Wrap"
            body="Genuine Alluvi boxes no longer ship with plastic shrink wrap. If your package arrives shrink-wrapped, it is not from us."
            mobileOrder={2}
            delay="0s"
          />
          <FeatureCard
            num="02"
            title="Branded Web URLs"
            body={`Official Alluvi products have ${SITE.brandedUrlInPackaging} link on them which points to the official website of Alluvi. Any other domain claiming to be Alluvi is a scam site.`}
            mobileOrder={3}
            delay="-2.4s"
          />
          <FeatureCard
            num="03"
            title="Authenticity Strip Seal"
            body="Every box is now closed with an authenticity strip seal. Check the strip to see whether it has been peeled or opened before it reached you."
            mobileOrder={4}
            delay="-4.8s"
          />
        </div>

        <div className="showcase-col showcase-col-center" style={{ order: 1 }}>
          <div className="showcase-frame" data-connector="source">
            <span className="frame-corner frame-corner-tl" aria-hidden="true" />
            <span className="frame-corner frame-corner-tr" aria-hidden="true" />
            <span className="frame-corner frame-corner-bl" aria-hidden="true" />
            <span className="frame-corner frame-corner-br" aria-hidden="true" />
            <img
              src={packagingReference}
              alt="Alluvi Retatrutide box, pen and needle with authenticity callouts"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={inspectionSeal}
            alt="Alluvi inspection seal stamp"
            className="showcase-stamp"
            loading="lazy"
            decoding="async"
          />
          <Connector />
        </div>

        <div className="showcase-col showcase-col-right">
          <FeatureCard
            num="04"
            title="New Authenticity Update"
            body="Every box now carries an updated authenticity mark and tamper-evident detailing. Check the mark against the reference below."
            mobileOrder={5}
            delay="-1.2s"
          />
          <FeatureCard
            num="05"
            title="Alluvi Authenticity Hologram"
            body="A unique numbered hologram seal is applied after final QC. Enter its code on this website to confirm authenticity. A missing, damaged, or re-stuck seal is a red flag."
            mobileOrder={6}
            delay="-3.6s"
          />
        </div>
      </div>
    </section>
  );
}
