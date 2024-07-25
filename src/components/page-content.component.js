import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";
import { formCreatePostModal } from "../index.js";

export class PageContent extends Component {
  constructor(id, pageAuthorization) {
    super(id);
    this.pageAuthorization = pageAuthorization;
  }
  init() {
    this.logoutBtn = document.getElementById("header-btn");
    this.logoutBtn.addEventListener("click", onLogoutHandler.bind(this));
    this.createBtn = document.getElementById("create-btn");
    this.createBtn.addEventListener(
      "click",
      onShowFormCreatePostHandler.bind(this)
    );
    this.welcome = document.getElementById("welcome");
  }
  onShow() {
    this.welcome.innerText = Storage.getUserData().name;
  }
}

// Обработчик события для кнопки "Logout".
function onLogoutHandler() {
  console.log(this);
  this.hide();
  localStorage.setItem("selectedUserId", null); //Удаляет данные о текущем пользователе из localStorage
  console.log(localStorage.setItem("selectedUserId", null));
  this.pageAuthorization.show(); //Отображает компонент pageAuthorization
}
//Обработчик события для кнопки "Create"
function onShowFormCreatePostHandler() {
  formCreatePostModal.show(); //Отображает модальное окно
}
