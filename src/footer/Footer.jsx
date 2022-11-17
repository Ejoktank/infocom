import { Link } from "react-router-dom";
import "./Footer.less";

const footerLinks = [
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
  function makeLink(link) {
    return (
      <li>
        <Link href={`${link.href}`}>{link.linkName}</Link>
      </li>
    );
  }

  function makeLinksColumn(linksColumn) {
    return (
      <div className="footer-column">
        <h3 className="footer-subheader">{linksColumn.colName}</h3>
        <ul className="footer_column-list">
          {linksColumn.linksList.map(makeLink)}
        </ul>
      </div>
    );
  }

  return (
    <footer className="footer">
      <div className="container footer-container">
        {footerLinks.map(makeLinksColumn)}
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
