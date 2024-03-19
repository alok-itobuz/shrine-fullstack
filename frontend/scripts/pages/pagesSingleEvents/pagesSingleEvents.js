import { carouselSection, commentSection, eventSection, heroSection } from "./sections/index.js";

export default (state) => {
    const main = document.querySelector("main");
    const elementArray = [
        heroSection(),
        eventSection(),
        carouselSection(),
        commentSection()
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}