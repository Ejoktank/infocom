import { Link } from 'react-router-dom';
import './App.less';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h3 className="footer-subheader">Компания</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">О Инфоком-НН</Link></li>
                        <li><Link href='#' className="footer_column-link">Команда</Link></li>
                        <li><Link href='#' className="footer_column-link">Стать партнёром</Link></li>
                        <li><Link href='#' className="footer_column-link">Карьера</Link></li>
                        <li><Link href='#' className="footer_column-link">Социальная ответственность</Link></li>
                        <li><Link href='#' className="footer_column-link">Контакты</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-subheader">Продукты</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">Гейм дев</Link></li>
                        <li><Link href='#' className="footer_column-link">Мобильная разработка</Link></li>
                        <li><Link href='#' className="footer_column-link">No-code</Link></li>
                        <li><Link href='#' className="footer_column-link">Внедрение чат-ботов</Link></li>
                        <li><Link href='#' className="footer_column-link">Заказная разработка сайтов и web-приложений</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-subheader">Ресурсы</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">Отзывы клиентов</Link></li>
                        <li><Link href='#' className="footer_column-link">Блог</Link></li>
                        <li><Link href='#' className="footer_column-link">Открытые вопросы</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-subheader">Компания</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">О Инфоком-НН</Link></li>
                        <li><Link href='#' className="footer_column-link">Команда</Link></li>
                        <li><Link href='#' className="footer_column-link">Стать партнёром</Link></li>
                        <li><Link href='#' className="footer_column-link">Карьера</Link></li>
                        <li><Link href='#' className="footer_column-link">Социальная ответственность</Link></li>
                        <li><Link href='#' className="footer_column-link">Контакты</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-subheader">Продукты</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">Гейм дев</Link></li>
                        <li><Link href='#' className="footer_column-link">Мобильная разработка</Link></li>
                        <li><Link href='#' className="footer_column-link">No-code</Link></li>
                        <li><Link href='#' className="footer_column-link">Внедрение чат-ботов</Link></li>
                        <li><Link href='#' className="footer_column-link">Заказная разработка сайтов и web-приложений</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-subheader">Ресурсы</h3>
                    <ul className="footer_column-list">
                        <li><Link href='#' className="footer_column-link">Отзывы клиентов</Link></li>
                        <li><Link href='#' className="footer_column-link">Блог</Link></li>
                        <li><Link href='#' className="footer_column-link">Открытые вопросы</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container footer_text-container">
                <div className="footer-text">
                    <p className="copyright">© 2022 Инфоком-НН</p>
                    <p className="coockie">Используем cookies для корректной работы сайта, персонализации пользователей 
                    и других целей, предусмотренных политикой обработки персональных данных.</p>
                </div>
                <div className="search_block">Поиск по сайту</div>
            </div>
        </footer>
    )
}