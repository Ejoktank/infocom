import { HeroLinks } from './HeroLinks';
import './Hero.less';


export function Hero() {
    return (
        <section className='section-hero'>
            <div className="container">
                <h1 className='section-header'>Разработка <br/>IT решений <br/> для бизнеса</h1>
                <HeroLinks />
            </div>
        </section>
    )
}