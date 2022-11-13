import { NavLink, Switch, Route } from 'react-router-dom';
import "./App.less";
import logo from "./img/logo.svg";
import burger from "./img/burger.svg"

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to='/' className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
          <span className="logo-text">infocom.</span>
        </NavLink>
        <ul className="menuList">
          <li className="menuListItem"><NavLink to='/products'>Продукты</NavLink></li>
          <li className="menuListItem"><NavLink to='/services'>Сервисы</NavLink></li>
          <li className="menuListItem"><NavLink to='/call-manager'>Связаться с менеджером</NavLink></li>
          <li><button className="loginBtn">Войти</button></li>
        </ul>
        <button className="burger" id="burger-open"><img src={burger} alt="burger" /></button>
        <div className="burger-menu">
          <ul className="burger_menu-list">
            <li className="burger_menu_list-item"><NavLink to='/products' className="burger-link">Продукты</NavLink></li>
            <li className="burger_menu_list-item"><NavLink to='/services' className="burger-link">Сервисы</NavLink></li>
            <li className="burger_menu_list-item"><NavLink to='/call-manager' className="burger-link">Связаться с менеджером</NavLink></li>
            <li className="burger_menu_list-item"><NavLink to='/' className="burger-link">Войти</NavLink></li>
          </ul>
          <button className="burger-close" id="burger-close"><img src={burger} alt="burger" /></button>
        </div>
      </div>
    </header>
  );
}