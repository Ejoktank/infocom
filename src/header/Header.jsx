import "./Header.less";
import { Link } from 'react-router-dom';
import { createRef } from 'react';
import logo from "../img/logo.svg";

const headerNavLinks = [
  {href: "/products", name: "Продукты"},
  {href: "/services", name: "Сервисы"},
  {href: "/call-manager", name: "Связаться с менеджером"},
  {href: "/", name: "Войти"},
]

export function Header() {

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
        onClick={() => {
          document.getElementsByClassName("burger")[0].classList.remove("burger--active");
          document.getElementsByClassName("burger-menu")[0].classList.remove("bugrer--appear");
          document.getElementById("body").classList.remove("overflowY-hidden");
        }}>
        <Link to={`${link.href}`} className="burger-link">{link.name}</Link>
      </li>
    );
  }

  const stork = createRef();
  function toggleBurger(e) {
    stork.current.classList.toggle('bugrer--appear');
    e.nativeEvent.path.map((element) => {
      if (element.id === "burger-open") {
        element.classList.toggle("burger--active")
      }
      if (element.constructor === HTMLBodyElement) {
        element.classList.toggle("overflowY-hidden");
      }
    });
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to='/' className="logo">
          <img className="logo-pic" src={logo} alt="logo" />
          <span className="logo-text">infocom.</span>
        </Link>
        <ul className="menuList">
          {headerNavLinks.map(makeHeaderLink)}
        </ul>
        <button onClick={toggleBurger} className="burger" id="burger-open">
          <span className='burger-lines'></span>
        </button>
        <div ref={stork} onClick={(e) => {
              e.nativeEvent.target.classList.remove("bugrer--appear");
              document.getElementsByClassName("burger")[0].classList.remove("burger--active");
              document.getElementById("body").classList.remove("overflowY-hidden");
            }} 
            className="container burger-menu">
          <ul className="burger_menu-list">
            {headerNavLinks.map(makeBurgerLink)}
          </ul>
        </div>
      </div>
    </header>
  );
}