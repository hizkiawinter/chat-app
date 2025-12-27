import Tagline from "./Tagline";
import RetroGrid from "./retro-grid";
import Button from "./Button";
import "./TopSection.css";

export default function TopSection() {
  return (
    <section className="area">
      <div className="tagline">
        <Tagline />
        <div className="button">
          <Button />
          <Button />
        </div>
      </div>

      <div className="retro-grid">
        <RetroGrid />
      </div>
    </section>
  );
}
