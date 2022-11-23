import { Link } from "react-router-dom";
import "./Footer.less";
import {Products} from "../main/products/Products";

const footerLinks = [
  {
    colName: "Компания",
    linksList: [
      { linkName: "Об Инфоком-НН", href: "#" },
      { linkName: "Команда", href: Products },
      { linkName: "Стать партнёром", href: "https://codepen.io/alvarotrigo/pen/bGvmJoN?editors=1100" },
      { linkName: "Карьера", href: "../main/products/Products" },
      { linkName: "Социальная ответственность", href: "/products" },
      { linkName: "Контакты", href: "#" },
    ],
  },
  {
    colName: "Продукты",
    linksList: [
      { linkName: "Гейм дев", href: "#" },
      { linkName: "Мобильная разработка", href: "#" },
      { linkName: "No-code", href: "#" },
      { linkName: "Внедрение чат-ботов", href: "#" },
      { linkName: "Заказная разработка сайтов и web-приложений", href: "#" },
    ],
  },
  {
    colName: "Ресурсы",
    linksList: [
      { linkName: "Отзывы клиентов", href: "#" },
      { linkName: "Блог", href: "#" },
      { linkName: "Открытые вопросы", href: "#" },
    ],
  },
  {
    colName: "Компания",
    linksList: [
      { linkName: "Об Инфоком-НН", href: "#" },
      { linkName: "Команда", href: "#" },
      { linkName: "Стать партнёром", href: "#" },
      { linkName: "Карьера", href: "#" },
      { linkName: "Социальная ответственность", href: "#" },
      { linkName: "Контакты", href: "#" },
    ],
  },
  {
    colName: "Продукты",
    linksList: [
      { linkName: "Гейм дев", href: "#" },
      { linkName: "Мобильная разработка", href: "#" },
      { linkName: "No-code", href: "#" },
      { linkName: "Внедрение чат-ботов", href: "#" },
      { linkName: "Заказная разработка сайтов и web-приложений", href: "#" },
    ],
  },
  {
    colName: "Ресурсы",
    linksList: [
      { linkName: "Отзывы клиентов", href: "#" },
      { linkName: "Блог", href: "#" },
      { linkName: "Открытые вопросы", href: "#" },
    ],
  },
];

export function Footer() {
  function makeLink(link, i) {
    return (
      <li key={`link-${i}`}>
        <Link href={`${link.href}`} className="footer_column-link">
          {link.linkName}
        </Link>
      </li>
    );
  }

  function makeLinksColumn(linksColumn, i) {
    return (
      <div className="footer-column" key={`linksColumn-${i}`}>
        <h3 className="footer-subheader">{linksColumn.colName}</h3>
        <ul className="footer_column-list">
          {linksColumn.linksList.map(makeLink)}
        </ul>
      </div>
    );
  }

  function makeLinksDropdown(linksBlock, i) {

    function toggleDropdown(event) {
      event.nativeEvent.path.map((elem) => {
        if (elem.className === "dropdown-column") {
          elem
            .getElementsByClassName("dropdown-links_list")[0]
            .classList.toggle("d-block");
          elem
            .getElementsByClassName("dropdown-column_name")[0]
            .classList.toggle("dropdown-open");
        }
      });
    }
    return (
      <div 
        onClick={toggleDropdown}
        className="dropdown-column"
        key={`linksDropdown-${i}`}
      >
        <h3 className="dropdown-column_name">{linksBlock.colName}</h3>
        <ul className="dropdown-links_list">
          {linksBlock.linksList.map(makeLink)}
        </ul>
      </div>
    );
  }

  return (
    <footer className="footer">
      <div className="container footer-container">
        {footerLinks.map(makeLinksColumn)}
      </div>
      <div className="container m_footer-container">
        {footerLinks.map(makeLinksDropdown)}
      </div>
      <div className="container footer_text-container">
        <div className="footer-text">
          <p className="copyright">© 2022 Инфоком-НН</p>
          <p className="coockie">
            Используем cookies для корректной работы сайта, персонализации
            пользователей и других целей, предусмотренных политикой обработки
            персональных данных.
          </p>
        </div>
        <div className="search_block">Поиск по сайту</div>
      </div>
    </footer>
  );
}
