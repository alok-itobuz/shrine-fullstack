import { heroSection, videoSection } from "./sections/index.js";

export default (state) => {
    const main = document.querySelector("main");
    const elementArray = [
        heroSection(),
        videoSection()
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );
}