import "./MainPage.less";
import Im1 from "../../img/Rect.svg";
import Im2 from "../../img/Ellipse.svg";
import Im3 from "../../img/Polygon.svg";

const cardsContent = [
  {
    subheader: "Lorem ipsum",
    header: "dolor sit amet, consectetur adipiscing elit",
    bgImg: Im1,
    bgColor: "#7027F0",
  },
  {
    subheader: "Lorem ipsum",
    header: "dolor sit amet, consectetur adipiscing elit",
    bgImg: Im2,
    bgColor: "#BC7AFE",
  },
  {
    subheader: "Lorem ipsum",
    header: "dolor sit amet, consectetur adipiscing elit",
    bgImg: Im3,
    bgColor: "#F953FD",
  },
];

export function MainPageCards() {
  function createCard(cardContent, i) {
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(${cardContent.bgImg})`,
          backgroundColor: cardContent.bgColor,
        }}
        id={`hero_card-${i}`}
        key={`hero_card-${i}`}
      >
        <h4 className="card_subheader">{cardContent.subheader}</h4>
        <p className="card_header">{cardContent.header}</p>
      </div>
    );
  }

  return (
    <section className="main_page-cards">
      <div className="container cards-container">
        {cardsContent.map(createCard)}
      </div>
    </section>
  );
}
