import { Link } from 'react-router-dom';
import './main_page.less';

export function Hero() {
    return (
        <section className='section-hero'>
            <div className="container">
                <h1 className='hero-header'>Разработка IT решений <br/> для бизнеса</h1>
                <ul className='hero_links-list'>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">Гейм дев</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">Мобильная разработка</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">No-code разработка</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">Внедрение чат-ботов</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">Заказная разработка сайтов и web-приложений</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">Аудит и консалтинг</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">FinTech</Link></li>
                    <li className="hero_links_list-item"><Link href="#" className="hero_link">EdTech</Link></li>
                </ul>
            </div>
        </section>
    )
}