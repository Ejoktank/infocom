import "./App.less";

const cardsContent = [
  { subheader: 'Lorem ipsum', header: 'dolor sit amet, consectetur adipiscing elit', bgImg: './img/Rect.png', bgColor: '#7027F0'},
  { subheader: 'Lorem ipsum', header: 'dolor sit amet, consectetur adipiscing elit', bgImg: './img/Ellipse.png', bgColor: '#BC7AFE'},
  { subheader: 'Lorem ipsum', header: 'dolor sit amet, consectetur adipiscing elit', bgImg: './img/Polygon.png', bgColor: '#F953FD'},
];

export function MainPageCards() {

  function createCard(cardContent, i) {
    return (
      <div className="card" style={{backgroundImage: `url(${cardContent.bgImg})`, backgroundColor: cardContent.bgColor}} key={i}>
        <div className="card_subheader">{cardContent.subheader}</div>
        <div className="card_header">{cardContent.header}</div>
      </div>
    )
  }

  return (
    <section className="main_page-cards">
      <div className="container">
        <div className="cards-container">
          {cardsContent.map(createCard)}
        </div>
      </div>
    </section>
  );
}
