import "./App.css";
import logo from './img/logo.svg'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img className="logo-pic" src={ logo } alt="logo" />
          <span className="logo-text">infocom.</span>
        </a>
        <ul className="menuList">
          <li className="menuListItem">Продукты</li>
          <li className="menuListItem">Сервисы</li>
          <li className="menuListItem">Связаться с менеджером</li>
        </ul>
      </div>
      <button className="loginBtn">Войти</button>
    </header>
  );
}
