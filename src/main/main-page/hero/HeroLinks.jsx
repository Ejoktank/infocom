import { Link } from 'react-router-dom';
import "./Hero.less";

export const heroLinksList = {
    desktop: [
        {name: "Гейм дев", href: "#"},
        {name: "Мобильная разработка", href: "#"},
        {name: "No-code разработка", href: "#"},
        {name: "Внедрение чат-ботов", href: "#"},
        {name: "Заказная разработка сайтов и web-приложений", href: "#"},
        {name: "Аудит и консалтинг", href: "#"},
        {name: "FinTech", href: "#"},
        {name: "EdTech", href: "#"},
    ],
    mobile: {
        firtsPart: [
            {name: "Гейм дев", href: "#"},
            {name: "Мобильная разработка", href: "#"},
            {name: "No-code разработка", href: "#"},
        ],
        secondPart: [
            {name: "Внедрение чат-ботов", href: "#"},
            {name: "Разработка сайтов", href: "#"},
        ],
        thirdPart: [
            {name: "Аудит и консалтинг", href: "#"},
            {name: "FinTech", href: "#"},
            {name: "EdTech", href: "#"},
        ]
    }
}

export function HeroLinks() {
    function makeHeroLink(link, i) {
        return (
            <li className="hero_links_list-item" key={`hero-link-${i}`}>
                <Link className="hero_link" href={link.href}>{link.name}</Link>
            </li>
        )
    }

    return (
        <ul className='hero_links-list'>
            {heroLinksList.desktop.map(makeHeroLink)}
        </ul>
    )
}