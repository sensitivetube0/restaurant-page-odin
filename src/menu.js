import burger1 from "./burger1.jpeg";
import burger2 from "./burger2.jpeg";
import burger3 from "./burger3.jpeg";

let generateMenuPage = (function () {
  let main = document.querySelector("#content");
  main.innerHTML = "";
  function createElements() {
    let image1 = document.createElement("img");
    image1.src = burger1;
    image1.alt = "delicous burger";
    let divImage1 = document.createElement("div");
    divImage1.appendChild(image1);

    let image2 = document.createElement("img");
    image2.src = burger2;
    image2.alt = "delicous burger";
    let divImage2 = document.createElement("div");
    divImage2.appendChild(image2);

    let image3 = document.createElement("img");
    image3.src = burger3;
    image3.alt = "delicous burger";
    let divImage3 = document.createElement("div");
    divImage3.appendChild(image3);

    let heading = document.createElement("div");
    heading.textContent = "Our Delicous Juicy and Fresh Burgers";

    heading.classList.add("headingM");
    divImage1.classList.add("burger1");
    divImage2.classList.add("burger2");
    divImage3.classList.add("burger3");
    let container = document.createElement("div");
    container.classList.add("containerM");
    container.appendChild(divImage1);
    container.appendChild(divImage2);
    container.appendChild(divImage3);
    return { container, heading };
  }

  function addDOMElementsToDOMMenu() {
    let main = document.querySelector("#content");
    main.innerHTML = "";
    const elements = createElements();
    main.appendChild(elements.heading);
    main.appendChild(elements.container);
    return;
  }
  return { addDOMElementsToDOMMenu };
})();
export default generateMenuPage;
