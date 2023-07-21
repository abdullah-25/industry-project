import "./Main.scss";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="container">
      <h1 className="container__heading">Bard Makes Email Easy</h1>
      <p className="container__p">
        Bard can help you write emails by brainstorming ideas, organizing your
        thoughts, choosing the right words, and crafting persuasive messages.
        Bard can also save you time and effort, freeing you up to focus on other
        tasks.
      </p>
      <div className="container__btn">
        <Link to="/">
          <button className="container__btn__no">No Thanks</button>
        </Link>
        <Link to="/support/tour">
          <button className="container__btn__start">Start Tour</button>
        </Link>
      </div>
    </div>
  );
}
