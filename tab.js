const aboutBtn = document.getElementById("aboutButton");
const visitBtn = document.getElementById("timeToVisitButton");
const attractionBtn = document.getElementById("attractionsButton");
const aboutTab = document.getElementById("aboutTab");
const visitTab = document.getElementById("timeToVisitTab");
const attractionTab = document.getElementById("attractionsTab");

function function1() {
    aboutBtn.classList.add("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionBtn.classList.remove("selected-button");
    aboutTab.classList.remove("d-none");
    visitTab.classList.add("d-none");
    attractionTab.classList.add("d-none");
}

function function2() {
    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.add("selected-button");
    attractionBtn.classList.remove("selected-button");
    aboutTab.classList.add("d-none");
    visitTab.classList.remove("d-none");
    attractionTab.classList.add("d-none");
}

function function3() {
    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionBtn.classList.add("selected-button");
    aboutTab.classList.add("d-none");
    visitTab.classList.add("d-none");
    attractionTab.classList.remove("d-none");
}