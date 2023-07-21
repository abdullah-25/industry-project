import "../../components/Main/Main.scss";
import { Link } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
export default function MainThird() {
  return (
    <div className="container">
      <h1 className="container__heading">Bard is Open Source</h1>
      <p className="container__p">
        Bard, as an open-source language model, is forthcoming about its
        training data and acknowledges its potential limitations. Users can
        delve into its code to comprehend its inner workings, promoting
        transparency and understanding.
      </p>

      <div className="container__btn">
        <Link to="/support/tour">
          <div className="container__btn--outer">
            <img className="container__btn__start--imgback" src={back}></img>
            <button className="container__btn__no">Back</button>
          </div>
        </Link>
        <Link to="/">
          <div className="container__btn--outer">
            <button className="container__btn__start">Done</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
