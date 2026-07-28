import { SITE } from "../site";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        ALLUVI<span className="accent">.</span>
      </div>
      <p className="footer-text">
        Alluvi Labs develops and evaluates premium peptides and supplements. All products are
        produced exclusively for controlled research and development purposes, guided by
        science. Not for human or veterinary consumption.
      </p>
      <a href={SITE.officialDomain} target="_blank" rel="noopener noreferrer" className="footer-link">
        alluvi.bz
      </a>
    </footer>
  );
}
