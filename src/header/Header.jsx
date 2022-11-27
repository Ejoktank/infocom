import "./Header.less";
import { Link } from 'react-router-dom';
import { createRef } from 'react';
import logo from "../img/Logo.jpg";

const headerNavLinks = [
  {href: "/products", name: "Продукты"},
  {href: "/services", name: "Сервисы"},
  {href: "/call-manager", name: "Связаться с менеджером"},
  {href: "/", name: "Войти"},
]

export function Header() {

  const stork = createRef();

  function toggleBurger(meth) {

    return function () {
      stork.current.classList[meth]('bugrer--appear');
      document.getElementById("burger-open").classList[meth]("burger--active");
      document.body.classList[meth]("overflowY-hidden");
    }
  }

  function makeHeaderLink(link, i) {
    if (link.name !== "Войти") {
      return (
        <li className="menuListItem" key={`headerLink-${i}`}>
          <Link to={`${link.href}`}>{link.name}</Link>
        </li>
      );
    } else {
      return (
        <li className="menuListItem loginBtn" key={`headerLink-${i}`}>
          <Link to={`${link.href}`}>{link.name}</Link>
        </li>
      );
    }
  }

  function makeBurgerLink(link, i) {
    return (
      <li className="burger_menu_list-item" key={`burgerLink-${i}`} 
        onClick={toggleBurger("remove")}>
        <Link to={`${link.href}`} className="burger-link">{link.name}</Link>
      </li>
    );
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to='/' className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
        </Link>
        <ul className="menuList">
          {headerNavLinks.map(makeHeaderLink)}
        </ul>
        <button onClick={toggleBurger("toggle")} className="burger" id="burger-open">
          <span className='burger-lines'></span>
        </button>
        <div ref={stork} onClick={toggleBurger("remove")} 
            className="container burger-menu">
          <ul className="burger_menu-list">
            {headerNavLinks.map(makeBurgerLink)}
          </ul>
        </div>
      </div>
    </header>
  );
}