import { Switch, Route, Link } from 'react-router-dom';
import "./App.less";
import logo from "./img/logo.svg";
import burger from "./img/burger.svg"
import { useEffect, createRef } from 'react';

export function Header() {

  const stork = createRef();
  function openBurger() {
    console.log(stork.current.classList.add('left-0'));
  }
  function closeBurger() {
    console.log(stork.current.classList.remove('left-0'));
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to='/' className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
          <span className="logo-text">infocom.</span>
        </Link>
        <ul className="menuList">
          <li className="menuListItem"><Link to='/products'>Продукты</Link></li>
          <li className="menuListItem"><Link to='/services'>Сервисы</Link></li>
          <li className="menuListItem"><Link to='/call-manager'>Связаться с менеджером</Link></li>
          <li><button className="loginBtn">Войти</button></li>
        </ul>
        <button onClick={openBurger} className="burger" id="burger-open"><img src={burger} alt="burger" /></button>
        <div ref={stork} className="burger-menu">
          <ul className="burger_menu-list">
            <li className="burger_menu_list-item"><Link to='/products' className="burger-link">Продукты</Link></li>
            <li className="burger_menu_list-item"><Link to='/services' className="burger-link">Сервисы</Link></li>
            <li className="burger_menu_list-item"><Link to='/call-manager' className="burger-link">Связаться с менеджером</Link></li>
            <li className="burger_menu_list-item"><Link to='/' className="burger-link">Войти</Link></li>
          </ul>
          <button onClick={closeBurger} className="burger-close" id="burger-close"><img src={burger} alt="burger" /></button>
        </div>
      </div>
    </header>
  );
}