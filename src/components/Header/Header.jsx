import "./Header.scss";
import menu from "../../assets/icons/menu.svg";
import compose from "../../assets/icons/compose_button.svg";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

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
        </div>
      </div>
      <div className="header__seconddiv">
        <div className="header__seconddiv__container">
          <img className="header__seconddiv__container--send" src={menu} />
          <FormControl display="flex" ml={40} mb={4} alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              AI toggle
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <img className="header__seconddiv__container--close" src={compose} />
        </div>
      </div>
    </header>
  );
}
