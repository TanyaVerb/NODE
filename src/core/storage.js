import { notification } from "../index.js";
export class Storage {
  static createNewUser(userData) {
    // const user = {
    //   id: 1,
    //   name: "Vlad",
    //   email: "vlad@.ru",
    //   password: "1Q",
    // };
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([userData]));
    } else {
      //проверяем существует ли такой пользователь
      if (checkUserExist(userData)) {
        //если пользователя нету - выходим из функции и ничего нес оздаем
        //вызов уведомления о том что такой пользователь уже существует
        notification.show("This user already exist");

        return;
      }
      const existUsers = JSON.parse(localStorage.getItem("users"));
      localStorage.setItem("users", JSON.stringify([...existUsers, userData]));
    }

    const value = JSON.parse(localStorage.getItem("users"));

    //вызов уведомления о создании пользователя
    notification.show("Account is created");
  }
}

function checkUserExist(userData) {
  let isUser = false;
  //получаем уже существующих пользователей - массив поль-ей
  const existUsers = JSON.parse(localStorage.getItem("users"));

  //в массиве делаем проверку на  соотвествие значений username и email
  //деструктуризация
  existUsers.forEach(({ name, email }) => {
    if (name === userData.name && email === userData.email) {
      //если результат if будет true - значит такой пользователь есть
      //поэтому меняем значение isUser на true
      isUser = true;
    }
  });

  return isUser;
}
