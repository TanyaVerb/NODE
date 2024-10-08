import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.componenents.js";
import { ConfirmActionModal } from "./components/modals/confirm-action.component.js";
import { FormEditPostModal } from "./components/modals/edit-form.component.js";

console.log(Validator.isEmailValid("tE@"));
console.log(Validator.isPasswordValid("so me1   !tE  "));
export const originUrl = window.location.href;
console.log(originUrl);

const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");
export const postInfoModal = new PostInfoModal("info");
export const confirmActionModal = new ConfirmActionModal("confirm");
export const formEditPostModal = new FormEditPostModal("edit");

console.log(postInfoModal);
console.log(pageContent);

export const notification = new Notification("notification");

console.log(pageContent);

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
  loginPage.hide();
  pageContent.show();
}

window.addEventListener("popstate", function (e) {
  const userId = JSON.parse(this.localStorage.getItem("selectedUserId"));
  console.log(e);
  if (e.state && userId) {
    postInfoModal.show(e.state);
  }
});
//====================================================
// const wareStore = {
//   jackets: "empty",
//   hats: "empty",
//   socks: "empty",
//   pants: 15,
//   parer: true,
//   mixers: 14,
//   date: new Date(),
//   cookers: "empty",
// };

// function printReport(obj) {
//   const result = Object.entries(obj)
//     .filter(([key, value]) => {
//       return value === "empty";
//     })
//     .reduce((acc, [key, value]) => {
//       return `${acc} ${key},`;
//     }, "");
//   return result.trim().length
//     ? `We need this item: ${result.slice(0, -1)}!`
//     : " Everything fine";
// }

// if (result.trim().length) {
//   return `We need this item: ${result.slice(0, -1)}!`;
// } else {
//   return " Everything fine";
// }

// // const newWareStore = Object.entries(wareStore);
// // let emptyArr = newWareStore. filter(elem =>{
// //   if (elem. ===)
// // });

// console.log(printReport(wareStore));

// const arr1 = ["login", "email", "gender"];
// const arr2 = ["user", "myEmail@mail.ru", "male or female"];

// function foo(arr1, arr2) {
//   // const obj= {}
//   // for (item of arr1){
//   //   obj
//   // }

//   const arr = arr1.map((el, index) => {
//     return [el, arr2[index]];
//   });
//   // return {}
//   console.log(arr);
//   let arrNew = Object.fromEntries(arr);
//   console.log(arrNew);
// }

// foo(arr1, arr2);
// function foo(kyesArray, valueArray) {
//   return kyesArray.reduce((acc, item, index) => {
//     acc[item] = valueArray[index];
//     return acc;
//   }, {});
// }
// function foo2(kyesArray, valueArray) {
//   const result = {};
//   kyesArray.forEach((element, index, arr) => {
//     result[el] = valueArray[index];
//   });
//   return result;
// }
// function foo3(kyesArray, valueArray) {
//   const obj = {};
//   obj[kyesArray];

//   return obj;
// }

// console.log(foo2(arr1, arr2));

// const forTestArr = [
//   { role: "admin", status: "online" },
//   { role: "user", status: "online" },
//   { role: "user", status: "online" },
//   { role: "admin", status: "online" },
//   { name: "Vlad", age: "32" },
//   { name: "BMV", age: "32" },
// ];

// function filterByKey(key, arr) {
//   const arrNew = arr.filter(function (obj) {
//     if (obj.hasOwnProperty(key)) {
//       return true;
//     } else {
//       return null;
//     }
//   });

//   return arrNew.length ? arrNew : null;
// }
// // filterByKey("key", arr);
// console.log(filterByKey("nffame", forTestArr));

// function filterByRole(role, arr) {
//   return arr.filter((el) => el.role === role);
// }

// // filterByRole("user", arr);

// function filterByStatus(status, arr) {
//   const arrNew = arr.filter((obj) => {
//     if (obj) {
//     }
//   });
// }

// console.log(filterByStatus("online", forTestArr));
// //------------------------------------

// const arr1 = ["opel", "bmw", "audi", "mazda", "nissan", "mercedes"];
// const str = "bmw";

// const arr2 = ["bmw", "mercedes"];

// function foo(arr1, str) {
//   const arrNew = arr1.filter((el) => {
//     if (el !== str) {
//       return true;
//     }
//   });
//   return arrNew;
// }

// console.log(foo(arr1, str));
// //=================================

// function fooTemp1(arr1, arr2) {
//   return arr1.filter((el) => {
//     return !arr2.find((item) => item === el);
//   });
// }

// console.log(fooTemp1(arr1, arr2));

// const forTestArr2 = [
//   { role: "admin", status: "online" },
//   { role: "user", status: "online" },
//   { role: "user", status: "online" },
//   { role: "admin", status: "online" },
//   { name: "Vlad", age: "32" },
//   { name: "Sveta", age: "32" },
//   { name: "Anna", age: "32" },
//   { name: "BMV", age: "32" },
// ];

// function fooTemp(arr, value) {
//   return arr.find((el) => el.name == value);
// }

// console.log(fooTemp(forTestArr2, "Vlad"));

//нужно создать функцию sum

// const arr = [2, "dwa", {}, null, false, 5, 1];

// function sum(arr) {
//   let res = arr.reduce(function (sum, elem) {
//     if (typeof elem == "number") {
//       return sum + elem;
//     }
//     return sum;
//   }, 0);
//   return res;
// }
// const sum = (arr) =>
//   arr.reduce((sum, elem) => (typeof elem == "number" ? sum + elem : sum), 0);

// console.log(sum(arr));

// function sum2(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     if (typeof elem == "number") {
//       sum += item;
//     }
//   });
//   return sum;
// }

// console.log(sum2(arr));
//========================================================================

// const obj = {
//   name: "Vlad",
//   age: 32,
//   sayHi() {
//     console.log("Hello", this.name);
//   },
//   empty: undefined,
//   car: undefined,
// };

// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// function transformData(obj) {
//   const arrNew = Object.entries(obj);
//   let result = arrNew.map((item) => {

//   });
//   return result;
// }

// console.log(transformData(obj));

// function transformData(obj) {
//   const result = {};
//   for (let key in obj) {
//     if (obj[key] === undefined) {
//       result[key] = "пусто";
//     } else {
//       result[key] = obj[key];
//     }
//     return result;
//   }
// }
// console.log(transformData(obj));

// function transformData2(obj) {
//   const result = Object.keys(obj).reduce((acc, key) => {
//     if (obj[key] === undefined) {
//       acc[key] = "пусто";
//       return acc;
//     } else {
//       acc[key] = obj[key];
//       return acc;
//     }
//   }, {});
//   return result;
// }
// console.log(transformData2(obj));

// function transformData3(obj) {
//   const result = Object.entries(obj).map(([key, value]) => {
//     if (value === undefined) {
//       return [key, "пусто"];
//     } else {
//       return [key, value];
//     }
//   });
//   return Object.fromEntries(result);
// }

// console.log(transformData3(obj));
