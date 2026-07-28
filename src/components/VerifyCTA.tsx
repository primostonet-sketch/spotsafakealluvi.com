import { SITE } from "../site";
import "../styles/components/VerifyCTA.css";

export default function VerifyCTA() {
  return (
    <section className="verify-cta container" aria-label="Contact us to verify">
      <div className="verify-cta-panel">
        <h2>
          Still not sure? <span className="accent">Verify with us.</span>
        </h2>
        <p>
          Send us a photo of your packaging and the inspection seal number. Our team will
          confirm whether the product is authentic Alluvi.
        </p>
        <a href={`mailto:${SITE.contactEmail}`} className="btn btn-solid">
          Contact Alluvi
        </a>
      </div>
    </section>
  );
}
