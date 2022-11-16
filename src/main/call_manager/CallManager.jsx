import "./call_manager.less";
import NoCode from "../../img/no_code.png";
import Mobile from "../../img/mobile.png";
import GameDev from "../../img/game_dev.png";
import ChatBot from "../../img/chat_bots.png";
import Web from "../../img/web.png";

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
  {name: "No-code", bgc: "#7027F0", image: NoCode},
  {name: "Мобильная разработка", bgc: "#BC7AFE", image: Mobile},
  {name: "Гейм дев", bgc: "#F953FD", image: GameDev},
  {name: "Внедрение чат-ботов", bgc: "#000000", image: ChatBot},
  {name: "Сайты и web приложения", bgc: "#04001A", image: Web},
];

const services = [
  "Аудит и консалтинг",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
]

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

  function makeProductCard(product, i) {
    return (
      <div className="small_card" style={{backgroundColor: product.bgc}} key={`small-card-${i}`}>
        <div className="small_card-img-container">
          <img src={product.image} alt="product illustration" />
        </div>
        <p className="small_card-text">{product.name}</p>
      </div>
    )
  }

  function makeServiceCard(service, i) {
    return (
      <div className="service-card" key={`service-card-${i}`}>
        <label htmlFor="service-check" className="service-label">{service}</label>
        <input type="checkbox" name="service-check" id={`service-check-${i}`} />
      </div>
    )
  }

  return (
    <div className="container call_manager-container">
      <h1 className="call_manager-header">Связь <br/>с менеджером</h1>
      <div className="call_manager-hero">
        <h2 className="call_manager-subheader">Укажите интересующий продукт</h2>
        <div className="call_manager-products_and_services">
          <div className="call_manager-products-container">
            {products.map(makeProductCard)}
          </div>
        <h2 className="call_manager-subheader">или сервис</h2>
          <div className="call_manager-services-container">
            {services.map(makeServiceCard)}
          </div>
        </div>
        <h2 className="call_manager-subheader">Заполните форму</h2>
        <form className="call_manager-form" action="#" method="post">
          <div className="call_manager-form-container">
            {makeFormField(formFields[0])}
            <div className="empty_blick"></div>
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
            <div className="form_checkboxes-container check_container-left">
              <input type="checkbox" name="check-left" id="check-left" />
              <label htmlFor="check-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</label>
            </div>
            <div className="form_checkboxes-container check_container-right">
              <input type="checkbox" name="check-right" id="check-right" />
              <label htmlFor="check-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</label>
            </div>
          </div>
          <div className="submit-btn-container">
            <button className="form-submit" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
