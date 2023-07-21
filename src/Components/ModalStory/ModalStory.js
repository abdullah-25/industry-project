import "./modalStory.scss";
import sparkle from "../../assets/icons/bard_sparkle.gif";

export default function ModalStory() {
  return (
    <div className="cta-top">
      <img className="cta-icon" src={sparkle} alt="sparkle icon" />
      <div className="cta-btn">Let AI help you</div>
    </div>
  );
}
