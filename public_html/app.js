import LoginPage from "./views/Login.js";
import RegisterPage from "./views/Register.js";
import HomePage from "./views/Home.js";
import AddPage from "./views/Add.js";

const app = document.getElementById("app");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.hash = "#home";

    addEventListener("hashchange", (e) => {
      switch (location.hash.slice(1).toLowerCase()) {
        case "home":
          HomePage(app);
          break;
        case "add":
          AddPage(app);
          break;
      }
    });
  } else {
    location.hash = "#login";

    addEventListener("hashchange", (e) => {
      switch (location.hash.slice(1).toLowerCase()) {
        case "login":
          LoginPage(app);
          break;
        case "register":
          RegisterPage(app);
          break;
        default:
          LoginPage(app);
      }
    });
  }
});
