import { faqSection, heroCarouselSection } from "./sections/index.js";
import { heroSectionData } from './sectionData.js'
import { wideCarouselFunctionality } from "../helpers.js";

export default (state) => {
    const main = document.querySelector("main");

    const elementArray = [
        heroCarouselSection(heroSectionData),
        faqSection(state.faq)
    ];

    elementArray.forEach((element) =>
        main.insertAdjacentHTML("beforeend", element)
    );

    wideCarouselFunctionality(heroSectionData.images.length)
}