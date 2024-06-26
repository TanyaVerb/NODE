import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";

export class SignInComponent extends Component {
  constructor(formId) {
    super(formId);
  }

  init() {
    this.component.addEventListener("submit", onChangeFormHandler.bind(this));
    this.form = new Form(this.component, {
      name: [Validator.required],
      password: [Validator.required],
    });
  }
}

//this - это форма

//вызывается при изменении значений в форме

function onChangeFormHandler(event) {
  event.preventDefault(); //Предотвращает стандартное поведение отправки формы
  console.log(this.form.value());
  console.log(this.form.isValid());
}
