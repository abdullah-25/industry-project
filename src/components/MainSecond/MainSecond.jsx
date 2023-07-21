import "../../components/Main/Main.scss";
import { Link } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
export default function MainSecond() {
  return (
    <div className="container">
      <h1 className="container__heading">AI Makes Gmail Better</h1>
      <p className="container__p">
        AI techniques like machine learning help make Gmail better. For spam
        prevention, Gmail uses AI-enhanced spam-filtering capabilities to block
        nearly 10 million spam emails every minute.
      </p>

      <div className="container__btn">
        <Link to="/support/tour">
          <div className="container__btn--outer">
            <img className="container__btn__start--imgback" src={back}></img>
            <button className="container__btn__no">Back</button>
          </div>
        </Link>
        <Link to="/support/tour/3">
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
