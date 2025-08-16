import handsomepeople from "./handsome-people.jpg";
import logo from "./handsomelogo.svg";

let generateHomePage = (function () {
  function createElements() {
    let imageBackground = document.createElement("img");
    imageBackground.src = handsomepeople;
    imageBackground.alt = "Handsome Burger Location";

    let heading = document.createElement("h1");
    heading.textContent = "At, Handsome Burger";

    let handsomeLogo = document.createElement("img");
    handsomeLogo.src = logo;
    handsomeLogo.alt = "handsome logo";

    let divDescription = document.createElement("div");
    divDescription.textContent =
      "We truly, are the best burgers in town and we wish to provide you with the best quality service and the best quality ingredients with exceptional taste and flavour everytime!!";

    divDescription.classList.add("description");
    heading.classList.add("heading");
    imageBackground.classList.add("imageBackground");
    handsomeLogo.classList.add("logo");

    let containerElement = document.createElement("div");
    containerElement.classList.add("container");
    containerElement.appendChild(handsomeLogo);
    containerElement.appendChild(heading);
    containerElement.appendChild(divDescription);

    return { imageBackground, containerElement };
  }
  function addDOMElementsToDOMHome() {
    let main = document.querySelector("#content");
    main.innerHTML = "";
    let elements = createElements();
    main.appendChild(elements.imageBackground);
    main.appendChild(elements.containerElement);

    return;
  }
  return { addDOMElementsToDOMHome };
})();

export default generateHomePage;
