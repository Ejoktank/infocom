import "./App.less";
import logo from "./img/logo.svg";

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
          <span className="logo-text">infocom.</span>
        </a>
        <ul className="menuList">
          <li className="menuListItem"><a href="#">Продукты</a></li>
          <li className="menuListItem"><a href="#">Сервисы</a></li>
          <li className="menuListItem"><a href="#">Связаться с менеджером</a></li>
          <li><button className="loginBtn">Войти</button></li>
        </ul>
      </div>
    </header>
  );
}
