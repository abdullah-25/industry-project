import "../../components/Main/Main.scss";
import { Link } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
export default function MainFirst() {
  return (
    <div className="container">
      <h1 className="container__heading">Bard Does Not Rely on Gmail</h1>
      <p className="container__p1">
        Google's Bard AI was trained on a massive dataset of text and code from
        the web, not private Gmail data. The dataset includes text from
        Wikipedia, GitHub, and Stack Overflow.
      </p>
      <br />
      <br />

      <p className="container__p2">
        Google Bard protects your privacy by giving you control over your data,
        location privacy, transparency, and security.
      </p>
      <div className="container__btn">
        <Link to="/support">
          <div className="container__btn--outer">
            <img className="container__btn__start--imgback" src={back}></img>
            <button className="container__btn__no">Back</button>
          </div>
        </Link>
        <Link to="/support/tour/2">
          <div className="container__btn--outer">
            <button className="container__btn__start">Next</button>
            <img
              className="container__btn__start--imgforward"
              src={forward}
            ></img>
          </div>
        </Link>
      </div>
    </div>
  );
}
