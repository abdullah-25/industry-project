import "./ModalStory.scss";
import sparkle from "../../assets/icons/bard.svg";
import { Link } from "react-router-dom";

export default function ModalStory() {
  return (
    <div className="cta-top">
      <img className="cta-icon" src={sparkle} alt="sparkle icon" />
      <Link to="/support">
        <button className="cta-btn">Let AI help you</button>
      </Link>
    </div>
  );
}
