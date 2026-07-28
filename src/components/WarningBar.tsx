import { SITE } from "../site";
import "../styles/components/WarningBar.css";

export default function WarningBar() {
  return (
    <div className="warning-bar" role="alert">
      <span>
        <strong>SOCIAL MEDIA WARNING:</strong> Alluvi has never operated on any social media
        platforms. Do not make payments or fall victim to anything claiming to be Alluvi on
        social media.
      </span>
      <span className="warning-sep" aria-hidden="true">
        &bull;
      </span>
      <span>
        <strong>OFFICIAL SITE:</strong> Our official site is{" "}
        <a href={SITE.officialDomain} target="_blank" rel="noopener noreferrer">
          www.alluvi.bz
        </a>{" "}
        &mdash; we only handle orders through this site. Beware of other scam sites.
      </span>
    </div>
  );
}
