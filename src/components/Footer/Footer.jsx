import "./Footer.scss";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import newicon from "../../assets/icons/new.svg";
import tabs from "../../assets/icons/tabs.svg";
import more from "../../assets/icons/more.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Link to="/">
          <img src={back}></img>
        </Link>
        <img src={forward}></img>
        <img src={newicon}></img>
        <img src={tabs}></img>
        <img src={more}></img>
      </div>
    </div>
  );
}
