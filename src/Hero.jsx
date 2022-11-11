import './App.less';

export function Hero() {
    return (
        <section className='section-hero'>
            <div className="container">
                <h1 className='hero-Header'>Разработка IT решений для бизнеса</h1>
                <ul className='hero_links-list'>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">Гейм дев</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">Мобильная разработка</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">No-code разработка</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">Внедрение чат-ботов</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">Заказная разработка сайтов и web-приложений</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">Аудит и консалтинг</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">FinTech</a></li>
                    <li className="hero_links_list-item"><a href="#" className="hero_link">EdTech</a></li>
                </ul>
            </div>
        </section>
    )
}