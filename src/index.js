import "./styles.css";
import generateHomePage from "./home.js";
import generateMenuPage from "./menu.js";
import generateAboutPage from "./about.js";

let generateContent = function () {
  generateHomePage.addDOMElementsToDOMHome();

  let homeButton = document.querySelector(".home");
  homeButton.addEventListener("click", () => {
    generateHomePage.addDOMElementsToDOMHome();
  });
  let menuButton = document.querySelector(".menu");
  menuButton.addEventListener("click", () =>
    generateMenuPage.addDOMElementsToDOMMenu(),
  );
  let aboutButton = document.querySelector(".about");
  aboutButton.addEventListener("click", () =>
    generateAboutPage.addDOMElementsToDOMAbout(),
  );
};
document.addEventListener("DOMContentLoaded", generateContent);
