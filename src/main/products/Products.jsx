import "./products.less";
import p1 from "../../img/tag-1.png";
import p2 from "../../img/tag-2.png";
import p3 from "../../img/tag-3.png";
import p4 from "../../img/tag-4.png";
import p5 from "../../img/tag-5.png";

const tags = [
  { name: "Первый тег", pic: p1 },
  { name: "Второй длинный тег", pic: p2 },
  { name: "Третий тег", pic: p3 },
  { name: "Четвёртый тег", pic: p4 },
  { name: "Пятый тег", pic: p5 },
];

export function Products() {
  function makeTag(tag, i) {
    return (
      <div className="tag" key={`tag-${i}`}>
        <img src={tag.pic} alt="" />
        <span>{tag.name}</span>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="section-header product-header">Название продукта</h1>
      <p className="product-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et
        delectus id veniam doloribus minima ex autem, aspernatur voluptates odio
        omnis possimus dicta, asperiores explicabo iste, debitis architecto
        pariatur quis!
      </p>
      <div className="product-tags_container">{tags.map(makeTag)}</div>
    </div>
  );
}
