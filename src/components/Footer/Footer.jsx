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
        <img src={back}></img>
        <img src={forward}></img>
        <img src={newicon}></img>
        <img src={tabs}></img>
        <img src={more}></img>
      </div>
    </div>
  );
}
