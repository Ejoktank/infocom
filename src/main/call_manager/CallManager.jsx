import "./call_manager.less";
import NoCode from "../../img/no_code.png";
import Mobile from "../../img/mobile.png";
import GameDev from "../../img/game_dev.png";
import ChatBot from "../../img/chat_bots.png";
import Web from "../../img/web.png";

import { FormCheckbox } from "./Checkbox/FormCheckbox";
import { useState } from "react";

const formFields = [
  {
    name: "email",
    type: "email",
    id: "form-email",
    placeholder: "Email*",
  },
  {
    name: "name",
    type: "text",
    id: "form-name",
    placeholder: "Имя*",
  },
  {
    name: "last_name",
    type: "text",
    id: "form-last_name",
    placeholder: "Фамилия*",
  },
  {
    name: "company",
    type: "text",
    id: "form-company",
    placeholder: "Название компании*",
  },
  {
    name: "position",
    type: "text",
    id: "form-position",
    placeholder: "Должность*",
  },
  {
    name: "phone",
    type: "tel",
    id: "form-phone",
    placeholder: "Телефон для связи",
  },
  {
    name: "country",
    type: "text",
    id: "form-country",
    placeholder: "Страна*",
  },
];

const products = [
  { name: "No-code", bgc: "#7027F0", image: NoCode },
  { name: "Мобильная разработка", bgc: "#BC7AFE", image: Mobile },
  { name: "Гейм дев", bgc: "#F953FD", image: GameDev },
  { name: "Внедрение чат-ботов", bgc: "#000000", image: ChatBot },
  { name: "Сайты и web приложения", bgc: "#04001A", image: Web },
];

const services = [
  "Аудит и консалтинг",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];

export function CallManager() {
  function makeFormField(formField) {
    return (
      <input
        type={formField.type}
        name={formField.name}
        id={formField.id}
        key={formField.id}
        placeholder={formField.placeholder}
        className="form-item"
      />
    );
  }

  function MakeProductCard(product, i) {
    return (
      <label
        className={`small_card`}
        style={{ backgroundColor: product.bgc }}
        key={`small-card-${i}`}
      >
        <input
          type="radio"
          name="call_manager-radio"
          id={`product-check-${i}`}
        />
        <div className="card-outline">
          <div className="small_card-img-container">
            <img src={product.image} alt="product illustration" />
          </div>
          <p className="small_card-text">{product.name}</p>
        </div>
      </label>
    );
  }

  function MakeServiceCard(service, i) {
    return (
      <label className="service-card" key={`service-card-${i}`}>
        <span className="service-label">{service}</span>
        <input
          type="radio"
          name="call_manager-radio"
          id={`service-check-${i}`}
        />
        <svg
          className={`checkbox`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={"#fff"} />
        </svg>
      </label>
    );
  }

  return (
    <section className="section-call_manager">
      <div className="container call_manager-container">
        <h1 className="section-header product-header">
          Связь <br />с менеджером
        </h1>
      </div>
      <div className="p-24">
        <div className="call_manager-hero">
          <h2 className="call_manager-subheader">
            Укажите интересующий продукт
          </h2>
          <div className="call_manager-products_and_services">
            <div className="call_manager-products-container--wrapper">
              <div className="call_manager-products-container">
                {products.map(MakeProductCard)}
              </div>
            </div>
            <h2 className="call_manager-subheader">или сервис</h2>
            <div className="call_manager-services-container">
              {services.map(MakeServiceCard)}
            </div>
          </div>
          <h2 className="call_manager-subheader">Заполните форму</h2>
          <form className="call_manager-form" action="#" method="post">
            <div className="call_manager-form-container">
              {makeFormField(formFields[0])}
              <div className="empty_brick"></div>
              {formFields.map((formField) => {
                if (formField.name !== "email") return makeFormField(formField);
              })}
              <textarea
                name="textarea"
                id="form-textarea"
                className="form-item"
                placeholder="Подробности о вашем проекте"
              ></textarea>
            </div>
            <div className="form-checkboxes">
              <FormCheckbox />
              <FormCheckbox />
            </div>
            <div className="submit-btn-container">
              <button className="form-submit" type="submit">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
