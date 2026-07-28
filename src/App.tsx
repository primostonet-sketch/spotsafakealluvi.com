import WarningBar from "./components/WarningBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import VerifyCTA from "./components/VerifyCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <WarningBar />
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Showcase />
        <VerifyCTA />
      </main>
      <Footer />
    </>
  );
}
