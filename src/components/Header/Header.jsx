import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__search">
        <div className="header__search-container">
          <input
            name="search"
            type="search"
            className="header__search-container--search"
            value="mail.google.com"
          />
          {/* <img
            src={upload}
            alt="upload-pic"
            class="header__search-container--upload-pic"
          /> */}
        </div>
      </div>
      <div className="header__seconddiv">
        <div className="header__seconddiv__container">
          <button className="header__seconddiv__container--close">Close</button>
          <button className="header__seconddiv__container--send">Send</button>
        </div>
      </div>
    </header>
  );
}
