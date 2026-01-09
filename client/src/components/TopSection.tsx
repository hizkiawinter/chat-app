import Tagline from "./Tagline";
import RetroGrid from "./retro-grid";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import "./TopSection.css";

export default function TopSection() {
  const navigate = useNavigate();
  return (
    <section className="area">
      <div className="tagline">
        <Tagline />
        <div className="button">
          <Button />
        </div>
      </div>

      <div className="retro-grid">
        <RetroGrid />
      </div>
    </section>
  );
}
