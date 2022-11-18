import { heroLinksList } from "./HeroLinks";
import { Link } from "react-router-dom";
import "./Hero.less";

export function HeroLinksMobile() {
  function makeHeroLinkMobile(link, i) {
    return (
      <li key={`m_hero-link-${i}`}>
        <Link className="m_hero_links_list-item" href={link.href}>
          <span className="m_hero_link">{link.name}</span>
        </Link>
      </li>
    );
  }

  return (
    <div className="container hero_links_list-container">
      <ul className="m_hero_links-list">
        {heroLinksList.mobile.firtsPart.map(makeHeroLinkMobile)}
      </ul>
      <ul className="m_hero_links-list">
        {heroLinksList.mobile.secondPart.map(makeHeroLinkMobile)}
      </ul>
    </div>
  );
}
