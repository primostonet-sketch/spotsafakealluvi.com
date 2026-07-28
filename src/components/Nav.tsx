import { SITE } from "../site";
import "../styles/components/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-pill">
        <a href={SITE.officialDomain} className="nav-brand" target="_blank" rel="noopener noreferrer">
          ALLUVI
        </a>
        <span className="nav-divider" aria-hidden="true" />
        <a href={SITE.shopUrl} className="nav-link">
          Shop
        </a>
        <a href={SITE.trackUrl} className="nav-link">
          Track
        </a>
        <a href={SITE.wholesaleUrl} className="nav-link">
          Wholesale
        </a>
      </div>
    </nav>
  );
}
