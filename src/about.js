import goals from "./goals.jpg";

let generateAboutPage = (function () {
  function createElement() {
    let goal = document.createElement("img");
    goal.src = goals;
    goal.alt = "goals";
    let goalDiv = document.createElement("div");
    goalDiv.appendChild(goal);

    let description = document.createElement("div");
    let crip = document.createElement("div");
    crip.textContent =
      "We are dedicated to bringing you the freshest best tasting burgers this is our GUARANTEE! We have locations in Galway and Dublin where you can stop by any time";
    description.appendChild(crip);
    let headingA = document.createElement("h1");
    headingA.textContent = "About Us";

    headingA.classList.add("headingA");
    description.classList.add("descri");
    goalDiv.classList.add("goals");
    return { headingA, description, goalDiv };
  }
  function addDOMElementsToDOMAbout() {
    let main = document.querySelector("#content");
    main.innerHTML = "";
    let elements = createElement();
    main.appendChild(elements.headingA);
    main.appendChild(elements.description);
    main.appendChild(elements.goalDiv);
    return;
  }
  return { addDOMElementsToDOMAbout };
})();
export default generateAboutPage;
