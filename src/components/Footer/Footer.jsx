import "./Footer.scss";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import newicon from "../../assets/icons/new.svg";
import tabs from "../../assets/icons/tabs.svg";
import more from "../../assets/icons/more.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={back} alt="back button"></img>
        <img src={forward} alt="forward button"></img>
        <img src={newicon} alt="new icon"></img>
        <img src={tabs} alt="open tabs"></img>
        <img src={more} alt="more options"></img>
      </div>
    </div>
  );
}
