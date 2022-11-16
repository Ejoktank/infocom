import "./call_manager.css";

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

  return (
    <div className="container">
      <h1 className="call_manager-header">Связь с менеджером</h1>
      <div className="call_manager-hero">
        <div className="call_manager-products-container"></div>
        <div className="call_manager-services-container"></div>
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
