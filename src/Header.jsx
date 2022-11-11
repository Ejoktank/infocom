import "./App.less";
import logo from "./img/logo.svg";
import burger from "./img/burger.svg"

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
        <button className="burger" id="burger-open"><img src={burger} alt="burger" /></button>
        <div className="burger-menu">
          <ul className="burger_menu-list">
            <li className="burger_menu_list-item"><a href="#" className="burger-link">Продукты</a></li>
            <li className="burger_menu_list-item"><a href="" className="burger-link">Сервисы</a></li>
            <li className="burger_menu_list-item"><a href="" className="burger-link">Связаться с менеджером</a></li>
            <li className="burger_menu_list-item"><a href="" className="burger-link">Войти</a></li>
          </ul>
          <button className="burger-close" id="burger-close"><img src={burger} alt="burger" /></button>
        </div>
      </div>
    </header>
  );
}